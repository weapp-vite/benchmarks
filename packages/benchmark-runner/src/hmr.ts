import type { HmrSample, HmrScenario } from './hmr/types'
import { readFile, rm, writeFile } from 'node:fs/promises'
import { performance } from 'node:perf_hooks'
import process from 'node:process'
import path from 'pathe'
import { defaultTimingIterations } from './constants'
import { ensureDir } from './fs'
import {
  defaultArtifactChangePollIntervalMs,
  snapshotArtifacts,
  waitForArtifactChange,
  waitForArtifacts,
} from './hmr/artifacts'
import { startDevProcess } from './hmr/dev'
import { writeHmrReport } from './hmr/report'
import { hmrScenarios } from './hmr/scenarios/index'
import { repoRoot } from './projects'
import { createMachineEnvironment } from './reports/environment'

const defaultTimeoutMs = 90_000
const defaultIterationAttempts = 2

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function normalizeError(error: unknown) {
  return error instanceof Error ? error.message : String(error)
}

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

function createFailedSample(options: {
  scenario: HmrScenario
  iteration: number
  attempts: number
  error: unknown
}): HmrSample {
  const { scenario, iteration, attempts, error } = options
  return {
    scenario: scenario.id,
    label: scenario.label,
    group: scenario.group,
    project: scenario.project,
    projectLabel: scenario.projectLabel,
    collector: scenario.collector,
    iteration,
    attempts,
    sourceFile: scenario.sourceFile,
    ok: false,
    error: normalizeError(error),
  }
}

function createSampleFromArtifact(options: {
  scenario: HmrScenario
  iteration: number
  attempts: number
  wallMs: number
}): HmrSample {
  const { scenario, iteration, attempts, wallMs } = options
  return {
    scenario: scenario.id,
    label: scenario.label,
    group: scenario.group,
    project: scenario.project,
    projectLabel: scenario.projectLabel,
    collector: scenario.collector,
    iteration,
    attempts,
    sourceFile: scenario.sourceFile,
    ok: true,
    wallMs,
    totalMs: wallMs,
  }
}

function resolveOutputFiles(scenario: HmrScenario) {
  return (scenario.outputFiles ?? []).map(file => path.join(repoRoot, scenario.appDir, file))
}

async function restoreSource(options: {
  scenario: HmrScenario
  filePath: string
  originalSource: string
  timeoutMs: number
  pollIntervalMs: number
}) {
  const { scenario, filePath, originalSource, timeoutMs, pollIntervalMs } = options
  const currentSource = await readFile(filePath, 'utf8').catch(() => '')
  if (currentSource === originalSource) {
    return
  }
  const outputFiles = resolveOutputFiles(scenario)
  const beforeArtifacts = outputFiles.length ? await snapshotArtifacts(outputFiles) : []
  await writeFile(filePath, originalSource, 'utf8')
  if (beforeArtifacts.length) {
    await waitForArtifactChange(beforeArtifacts, timeoutMs, pollIntervalMs).catch(() => undefined)
  }
}

async function runScenario(options: {
  scenario: HmrScenario
  iterations: number
  timeoutMs: number
  pollIntervalMs: number
  iterationAttempts: number
}) {
  const { scenario, iterations, timeoutMs, pollIntervalMs, iterationAttempts } = options
  const sourcePath = path.join(repoRoot, scenario.appDir, scenario.sourceFile)
  const originalSource = await readFile(sourcePath, 'utf8')
  const samples: HmrSample[] = []
  const outputFiles = resolveOutputFiles(scenario)

  try {
    for (let iteration = 1; iteration <= iterations; iteration += 1) {
      process.stdout.write(`[hmr] ${scenario.label}: iteration ${iteration}\n`)
      let lastError: unknown
      for (let attempt = 1; attempt <= iterationAttempts; attempt += 1) {
        const marker = `${scenario.id}-${iteration}-${attempt}-${Date.now().toString(36)}`
        const nextSource = scenario.applyMarker(originalSource, marker)
        const beforeArtifacts = await snapshotArtifacts(outputFiles)
        const started = performance.now()
        try {
          await writeFile(sourcePath, nextSource, 'utf8')
          await waitForArtifactChange(beforeArtifacts, timeoutMs, pollIntervalMs, marker)
          samples.push(createSampleFromArtifact({
            scenario,
            iteration,
            attempts: attempt,
            wallMs: performance.now() - started,
          }))
          lastError = undefined
          break
        }
        catch (error) {
          lastError = error
          if (attempt < iterationAttempts) {
            process.stdout.write(`[hmr] ${scenario.label}: iteration ${iteration} retry ${attempt + 1}\n`)
          }
        }
      }
      if (lastError) {
        samples.push(createFailedSample({
          scenario,
          iteration,
          attempts: iterationAttempts,
          error: lastError,
        }))
      }
      await sleep(100)
    }
  }
  finally {
    await restoreSource({ scenario, filePath: sourcePath, originalSource, timeoutMs, pollIntervalMs })
  }

  return samples
}

async function runProjectScenarios(options: {
  scenarios: HmrScenario[]
  iterations: number
  timeoutMs: number
  pollIntervalMs: number
  iterationAttempts: number
}) {
  const { scenarios, iterations, timeoutMs, pollIntervalMs, iterationAttempts } = options
  const project = scenarios[0]
  if (!project) {
    return []
  }

  const appDir = path.join(repoRoot, project.appDir)
  await rm(path.join(appDir, 'dist'), { recursive: true, force: true })
  const projectOutputFiles = [...new Set(scenarios.flatMap(scenario => resolveOutputFiles(scenario)))]

  process.stdout.write(`[hmr] ${project.projectLabel}: launch ${appDir}\n`)
  const dev = startDevProcess({
    command: 'pnpm',
    args: ['dev'],
    cwd: appDir,
    env: {
      ...process.env,
      CI: '1',
      FORCE_COLOR: '0',
    },
  })

  try {
    if (project.readyPattern) {
      await dev.waitForOutput(project.readyPattern, `${project.projectLabel} dev ready`, timeoutMs)
    }
    await dev.waitFor(waitForArtifacts(projectOutputFiles, timeoutMs), `${project.projectLabel} 初始产物`)
    const samples: HmrSample[] = []
    for (const scenario of scenarios) {
      samples.push(...await dev.waitFor(
        runScenario({ scenario, iterations, timeoutMs, pollIntervalMs, iterationAttempts }),
        `${scenario.label} HMR`,
      ))
    }
    return samples
  }
  finally {
    await dev.stop()
  }
}

async function runHmrBenchmark() {
  const iterations = Number(process.env['BENCH_HMR_ITERATIONS'] ?? defaultTimingIterations)
  const timeoutMs = Number(process.env['BENCH_HMR_TIMEOUT'] ?? defaultTimeoutMs)
  const pollIntervalMs = Number(
    process.env['BENCH_HMR_POLL_INTERVAL'] ?? defaultArtifactChangePollIntervalMs,
  )
  const iterationAttempts = Number(
    process.env['BENCH_HMR_ITERATION_ATTEMPTS'] ?? defaultIterationAttempts,
  )
  const reportDir = path.join(repoRoot, 'reports/hmr')
  await ensureDir(reportDir)

  const samples: HmrSample[] = []
  for (const scenarios of groupByProject(selectedScenarios())) {
    samples.push(...await runProjectScenarios({
      scenarios,
      iterations,
      timeoutMs,
      pollIntervalMs,
      iterationAttempts,
    }))
  }

  await writeHmrReport(reportDir, {
    generatedAt: new Date().toISOString(),
    iterations,
    environment: await createMachineEnvironment(),
    samples,
    notes: [
      '所有项目统一使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时。',
      '本报告不使用 weapp-vite 内部 profile；阶段列没有统一可比数据时显示为 -。',
      '每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。',
      'Vue SFC 场景按 watch 链路实际支持情况覆盖 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件；Mpx 拆分 template、script、style 和页面配置。',
      'Taro watch 模式不会因页面 .config.ts 变化重新生成页面 JSON，因此该格按不支持处理并显示为 N/A。',
      '@vue-mini/core 是原生小程序运行时对比项，没有独立编译/watch 链路，因此不纳入 HMR 排名。',
      `HMR 等待超时默认是 ${defaultTimeoutMs}ms，可通过 BENCH_HMR_TIMEOUT 覆盖。`,
      `HMR 产物变化轮询间隔默认是 ${defaultArtifactChangePollIntervalMs}ms，可通过 BENCH_HMR_POLL_INTERVAL 覆盖。`,
      `HMR 单轮最多尝试 ${iterationAttempts} 次，重试会写入 attempts 字段；可通过 BENCH_HMR_ITERATION_ATTEMPTS 覆盖。`,
    ],
  })
  if (samples.some(sample => !sample.ok)) {
    process.exitCode = 1
  }
}

runHmrBenchmark().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`)
  process.exitCode = 1
})
