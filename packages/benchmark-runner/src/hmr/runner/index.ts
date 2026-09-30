import type { HmrDiagnostics } from '../diagnostics/types'
import type { HmrReport, HmrSample, HmrScenario } from '../types'
import process from 'node:process'
import path from 'pathe'
import { stageWorkspace } from '../../artifacts/workspace'
import { defaultTimingIterations } from '../../constants'
import { ensureDir } from '../../fs'
import { repoRoot } from '../../projects'
import { createMachineEnvironment } from '../../reports/environment'
import { startReportRun } from '../../reports/provenance/run'
import { defaultArtifactChangePollIntervalMs } from '../artifacts'
import { runDiagnosticProject } from '../diagnostics/project'
import { readReplay, replayProjects } from '../diagnostics/replay'
import { writeHmrReport } from '../report'
import { hmrScenarios } from '../scenarios/index'
import { sampleWasRetried } from '../statistics'
import { runProjectScenarios } from './project'

const defaultTimeoutMs = 90_000
const defaultIterationAttempts = 2

function groupByProject(scenarios: HmrScenario[]) {
  const groups = new Map<string, HmrScenario[]>()
  for (const scenario of scenarios) {
    const list = groups.get(scenario.project) ?? []
    list.push(scenario)
    groups.set(scenario.project, list)
  }
  return [...groups.values()]
}

function selectedScenarios() {
  const projectIds = process.env['BENCH_HMR_PROJECTS']
    ?.split(',')
    .map(value => value.trim())
    .filter(Boolean)
  if (!projectIds?.length) {
    return hmrScenarios
  }
  const selected = hmrScenarios.filter(scenario => projectIds.includes(scenario.project))
  if (!selected.length) {
    throw new Error(`BENCH_HMR_PROJECTS 未匹配任何项目：${projectIds.join(', ')}`)
  }
  return selected
}

export async function runHmrBenchmark(options: { reportDir?: string, iterations?: number, scenarios?: HmrScenario[], timeoutMs?: number, longWatchMs?: number, diagnostics?: boolean, replayFile?: string } = {}) {
  const iterations = Number(options.iterations ?? process.env['BENCH_HMR_ITERATIONS'] ?? defaultTimingIterations)
  const timeoutMs = Number(options.timeoutMs ?? process.env['BENCH_HMR_TIMEOUT'] ?? defaultTimeoutMs)
  const pollIntervalMs = Number(
    process.env['BENCH_HMR_POLL_INTERVAL'] ?? defaultArtifactChangePollIntervalMs,
  )
  const iterationAttempts = Number(
    process.env['BENCH_HMR_ITERATION_ATTEMPTS'] ?? defaultIterationAttempts,
  )
  const replayFile = options.replayFile ?? process.env['BENCH_HMR_REPLAY']
  const reportDir = options.reportDir ?? process.env['BENCH_HMR_REPORT_DIR'] ?? path.join(repoRoot, replayFile ? 'reports/hmr/replays' : 'reports/hmr')
  const enabled = options.diagnostics ?? process.env['BENCH_HMR_DIAGNOSTICS'] !== '0'
  const longWatchMs = Number(options.longWatchMs ?? process.env['BENCH_HMR_LONG_WATCH_MS'] ?? 30_000)
  for (const [key, value] of Object.entries({ iterations, timeoutMs, pollIntervalMs, iterationAttempts, longWatchMs })) {
    if (!Number.isSafeInteger(value) || value < (key === 'longWatchMs' ? 0 : 1)) {
      throw new Error(`Invalid HMR option: ${key}`)
    }
  }
  if (longWatchMs > 3_600_000) {
    throw new Error('Long watch must be bounded to at most one hour')
  }
  await ensureDir(reportDir)

  const selected = options.scenarios ?? selectedScenarios()
  if (!selected.length) {
    throw new Error('HMR requires at least one scenario')
  }
  const run = await startReportRun('hmr', { methodVersion: 2, iterations, timeoutMs, pollIntervalMs, iterationAttempts, diagnostics: enabled, longWatchMs, replay: Boolean(replayFile), scenarios: selected.map(({ applyMarker: _applyMarker, readyPattern, ...scenario }) => ({ ...scenario, readyPattern: readyPattern?.source })) })
  const replay = replayFile ? await readReplay(replayFile, run.inputs, selected) : undefined
  const diagnostics: HmrDiagnostics = {
    schemaVersion: 1,
    runId: run.runId,
    inputFingerprint: run.inputs.fingerprint,
    enabled: enabled || Boolean(replay),
    edits: [],
    failures: [],
    longWatch: { requestedMs: replay ? 0 : longWatchMs, elapsedMs: 0, completedEdits: 0 },
    ...(replay ? { replayOf: replay.runId } : {}),
    notes: ['默认首个项目执行有界 watch；其余项目执行编辑与恢复探针。', '重放严格要求相同输入与 runner 指纹，按已保存编辑的顺序、ID 和 marker 执行；不承诺重现 OS 调度时延。'],
  }
  const samples: HmrSample[] = []
  let workspace = await stageWorkspace(repoRoot, run.inputs, 'hmr')
  try {
    for (const scenarios of replay ? [] : groupByProject(selected)) {
      samples.push(...await runProjectScenarios({
        root: workspace.root,
        runId: run.runId,
        scenarios,
        iterations,
        timeoutMs,
        pollIntervalMs,
        iterationAttempts,
      }))
    }
    if (diagnostics.enabled) {
      // A failed ranking restoration must not become the diagnostic baseline.
      await workspace.dispose()
      workspace = await stageWorkspace(repoRoot, run.inputs, 'hmr')
      const groups = replay
        ? replayProjects(replay.edits).map(project => selected.filter(scenario => scenario.project === project))
        : groupByProject(selected)
      for (const [index, scenarios] of groups.entries()) {
        const result = await runDiagnosticProject({
          root: workspace.root,
          runId: run.runId,
          scenarios,
          timeoutMs,
          pollIntervalMs,
          longWatchMs: index === 0 && !replay ? longWatchMs : 0,
          ...(replay ? { replay: replay.edits.filter(edit => edit.project === scenarios[0]!.project) } : {}),
        })
        diagnostics.edits.push(...result.edits)
        diagnostics.failures.push(...result.failures)
        if (index === 0) {
          diagnostics.longWatch = result.longWatch
        }
      }
      const failed = diagnostics.edits.find(edit => !edit.ok)
      if (failed) {
        diagnostics.firstFailure = failed.id
      }
    }
  }
  finally {
    await workspace.dispose()
  }

  const report: HmrReport = {
    provenance: await run.finish(),
    generatedAt: new Date().toISOString(),
    iterations,
    environment: await createMachineEnvironment(),
    samples,
    diagnostics,
    notes: [
      '所有项目统一使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时。',
      '排名不使用 weapp-vite 内部 profile；旁路诊断另启会话保存上游事件，阶段缺失时不推算。',
      '每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。',
      'Vue SFC 场景按 watch 链路实际支持情况覆盖 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件；Mpx 拆分 template、script、style 和页面配置。',
      'Taro watch 模式不会因页面 .config.ts 变化重新生成页面 JSON，因此该格按不支持处理并显示为 N/A。',
      '@vue-mini/core 是原生小程序运行时对比项，没有独立编译/watch 链路，因此不纳入 HMR 排名。',
      `HMR 等待超时默认是 ${defaultTimeoutMs}ms，可通过 BENCH_HMR_TIMEOUT 覆盖。`,
      `HMR 产物变化轮询间隔默认是 ${defaultArtifactChangePollIntervalMs}ms，可通过 BENCH_HMR_POLL_INTERVAL 覆盖。`,
      `HMR 单轮最多尝试 ${iterationAttempts} 次，重试会写入 attempts 字段；可通过 BENCH_HMR_ITERATION_ATTEMPTS 覆盖。`,
      '任何重试都会把场景标记为降级并移出正式排名，命令也会返回失败，避免隐藏超时污染性能结论。',
    ],
  }
  await writeHmrReport(reportDir, report)
  if (diagnostics.firstFailure || diagnostics.failures.length || samples.some(sample => !sample.ok || sampleWasRetried(sample) || sample.restoration?.ok === false)) {
    process.exitCode = 1
  }
  return report
}
