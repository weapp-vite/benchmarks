import type { HmrSample, HmrScenario } from './hmr/types'
import { readFile, rm, writeFile } from 'node:fs/promises'
import { performance } from 'node:perf_hooks'
import process from 'node:process'
import path from 'pathe'
import { defaultTimingIterations } from './constants'
import { ensureDir } from './fs'
import { snapshotArtifacts, waitForArtifactChange, waitForArtifacts } from './hmr/artifacts'
import { startDevProcess } from './hmr/dev'
import { writeHmrReport } from './hmr/report'
import { hmrScenarios } from './hmr/scenarios/index'
import { repoRoot } from './projects'

const defaultTimeoutMs = 90_000

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

function createFailedSample(options: {
  scenario: HmrScenario
  iteration: number
  error: unknown
}): HmrSample {
  const { scenario, iteration, error } = options
  return {
    scenario: scenario.id,
    label: scenario.label,
    group: scenario.group,
    project: scenario.project,
    projectLabel: scenario.projectLabel,
    collector: scenario.collector,
    iteration,
    sourceFile: scenario.sourceFile,
    ok: false,
    error: normalizeError(error),
  }
}

function createSampleFromArtifact(options: {
  scenario: HmrScenario
  iteration: number
  wallMs: number
}): HmrSample {
  const { scenario, iteration, wallMs } = options
  return {
    scenario: scenario.id,
    label: scenario.label,
    group: scenario.group,
    project: scenario.project,
    projectLabel: scenario.projectLabel,
    collector: scenario.collector,
    iteration,
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
}) {
  const { scenario, filePath, originalSource, timeoutMs } = options
  const currentSource = await readFile(filePath, 'utf8').catch(() => '')
  if (currentSource === originalSource) {
    return
  }
  const outputFiles = resolveOutputFiles(scenario)
  const beforeArtifacts = outputFiles.length ? await snapshotArtifacts(outputFiles) : []
  await writeFile(filePath, originalSource, 'utf8')
  if (beforeArtifacts.length) {
    await waitForArtifactChange(beforeArtifacts, timeoutMs).catch(() => undefined)
  }
}

async function runScenario(options: {
  scenario: HmrScenario
  iterations: number
  timeoutMs: number
}) {
  const { scenario, iterations, timeoutMs } = options
  const sourcePath = path.join(repoRoot, scenario.appDir, scenario.sourceFile)
  const originalSource = await readFile(sourcePath, 'utf8')
  const samples: HmrSample[] = []
  const outputFiles = resolveOutputFiles(scenario)

  try {
    for (let iteration = 1; iteration <= iterations; iteration += 1) {
      process.stdout.write(`[hmr] ${scenario.label}: iteration ${iteration}\n`)
      const marker = `${scenario.id}-${iteration}-${Date.now().toString(36)}`
      const nextSource = scenario.applyMarker(originalSource, marker)
      const beforeArtifacts = await snapshotArtifacts(outputFiles)
      const started = performance.now()
      try {
        await writeFile(sourcePath, nextSource, 'utf8')
        await waitForArtifactChange(beforeArtifacts, timeoutMs)
        samples.push(createSampleFromArtifact({
          scenario,
          iteration,
          wallMs: performance.now() - started,
        }))
      }
      catch (error) {
        samples.push(createFailedSample({ scenario, iteration, error }))
      }
      await sleep(100)
    }
  }
  finally {
    await restoreSource({ scenario, filePath: sourcePath, originalSource, timeoutMs })
  }

  return samples
}

async function runProjectScenarios(options: {
  scenarios: HmrScenario[]
  iterations: number
  timeoutMs: number
}) {
  const { scenarios, iterations, timeoutMs } = options
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
        runScenario({ scenario, iterations, timeoutMs }),
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
  const reportDir = path.join(repoRoot, 'reports/hmr')
  await ensureDir(reportDir)

  const samples: HmrSample[] = []
  for (const scenarios of groupByProject(hmrScenarios)) {
    samples.push(...await runProjectScenarios({
      scenarios,
      iterations,
      timeoutMs,
    }))
  }

  await writeHmrReport(reportDir, {
    generatedAt: new Date().toISOString(),
    iterations,
    samples,
    notes: [
      '所有项目统一使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时。',
      '本报告不使用 weapp-vite 内部 profile；阶段列没有统一可比数据时显示为 -。',
      '每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。',
      'Vue SFC 场景拆分 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件；Mpx 拆分 template、script、style 和页面配置。',
      '@vue-mini/core 是原生小程序运行时对比项，没有独立编译/watch 链路，因此不纳入 HMR 排名。',
      `HMR 等待超时默认是 ${defaultTimeoutMs}ms，可通过 BENCH_HMR_TIMEOUT 覆盖。`,
    ],
  })
}

runHmrBenchmark().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`)
  process.exitCode = 1
})
