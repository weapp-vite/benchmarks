import type { HmrSample, HmrScenario } from './hmr/types'
import { readFile, rm, writeFile } from 'node:fs/promises'
import { performance } from 'node:perf_hooks'
import process from 'node:process'
import path from 'pathe'
import { defaultTimingIterations } from './constants'
import { ensureDir } from './fs'
import { snapshotArtifacts, waitForArtifactChange, waitForArtifacts } from './hmr/artifacts'
import { startDevProcess } from './hmr/dev'
import { readProfileSamples, waitForNextProfileSample } from './hmr/profile'
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

function createSampleFromProfile(options: {
  scenario: HmrScenario
  iteration: number
  wallMs: number
  profile: Awaited<ReturnType<typeof waitForNextProfileSample>>
}): HmrSample {
  const { scenario, iteration, wallMs, profile } = options
  const sample: HmrSample = {
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
  }
  const output = sample as unknown as Record<string, unknown>
  const assignNumber = (key: keyof HmrSample, value: number | undefined) => {
    if (typeof value === 'number') {
      output[key] = value
    }
  }
  const assignString = (key: keyof HmrSample, value: string | undefined) => {
    if (typeof value === 'string') {
      output[key] = value
    }
  }
  assignNumber('totalMs', profile.totalMs)
  assignNumber('buildCoreMs', profile.buildCoreMs)
  assignNumber('transformMs', profile.transformMs)
  assignNumber('writeMs', profile.writeMs)
  assignNumber('watchToDirtyMs', profile.watchToDirtyMs)
  assignNumber('emitMs', profile.emitMs)
  assignNumber('sharedChunkResolveMs', profile.sharedChunkResolveMs)
  assignNumber('dirtyCount', profile.dirtyCount)
  assignNumber('pendingCount', profile.pendingCount)
  assignNumber('emittedCount', profile.emittedCount)
  assignString('profileEvent', profile.event)
  assignString('sourceRootFile', profile.sourceRootFile)
  return sample
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
  profilePath: string
  timeoutMs: number
}) {
  const { scenario, filePath, originalSource, profilePath, timeoutMs } = options
  const currentSource = await readFile(filePath, 'utf8').catch(() => '')
  if (currentSource === originalSource) {
    return
  }
  const previousCount = scenario.collector === 'weapp-vite-profile'
    ? (await readProfileSamples(profilePath)).length
    : 0
  const outputFiles = scenario.collector === 'artifact' ? resolveOutputFiles(scenario) : []
  const beforeArtifacts = outputFiles.length ? await snapshotArtifacts(outputFiles) : []
  await writeFile(filePath, originalSource, 'utf8')
  if (scenario.collector === 'weapp-vite-profile') {
    await waitForNextProfileSample(profilePath, previousCount, timeoutMs).catch(() => undefined)
  }
  else if (beforeArtifacts.length) {
    await waitForArtifactChange(beforeArtifacts, timeoutMs).catch(() => undefined)
  }
}

async function runScenario(options: {
  scenario: HmrScenario
  iterations: number
  timeoutMs: number
  profilePath: string
}) {
  const { scenario, iterations, timeoutMs, profilePath } = options
  const sourcePath = path.join(repoRoot, scenario.appDir, scenario.sourceFile)
  const originalSource = await readFile(sourcePath, 'utf8')
  const samples: HmrSample[] = []
  const outputFiles = resolveOutputFiles(scenario)

  try {
    for (let iteration = 1; iteration <= iterations; iteration += 1) {
      process.stdout.write(`[hmr] ${scenario.label}: iteration ${iteration}\n`)
      const marker = `${scenario.id}-${iteration}-${Date.now().toString(36)}`
      const nextSource = scenario.applyMarker(originalSource, marker)
      const previousCount = (await readProfileSamples(profilePath)).length
      const beforeArtifacts = scenario.collector === 'artifact'
        ? await snapshotArtifacts(outputFiles)
        : []
      const started = performance.now()
      try {
        await writeFile(sourcePath, nextSource, 'utf8')
        if (scenario.collector === 'weapp-vite-profile') {
          const profile = await waitForNextProfileSample(profilePath, previousCount, timeoutMs)
          samples.push(createSampleFromProfile({
            scenario,
            iteration,
            wallMs: performance.now() - started,
            profile,
          }))
        }
        else {
          await waitForArtifactChange(beforeArtifacts, timeoutMs)
          samples.push(createSampleFromArtifact({
            scenario,
            iteration,
            wallMs: performance.now() - started,
          }))
        }
      }
      catch (error) {
        samples.push(createFailedSample({ scenario, iteration, error }))
      }
      await sleep(100)
    }
  }
  finally {
    await restoreSource({ scenario, filePath: sourcePath, originalSource, profilePath, timeoutMs })
  }

  return samples
}

async function runProjectScenarios(options: {
  scenarios: HmrScenario[]
  iterations: number
  timeoutMs: number
  reportDir: string
}) {
  const { scenarios, iterations, timeoutMs, reportDir } = options
  const project = scenarios[0]
  if (!project) {
    return []
  }

  const appDir = path.join(repoRoot, project.appDir)
  const profilePath = path.join(reportDir, 'profiles', `${project.project}.jsonl`)
  await rm(profilePath, { force: true })
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
      ...(project.collector === 'weapp-vite-profile'
        ? { WEAPP_VITE_HMR_PROFILE_JSON: profilePath }
        : {}),
    },
  })

  try {
    if (project.readyPattern) {
      await dev.waitForOutput(project.readyPattern, `${project.projectLabel} dev ready`, timeoutMs)
    }
    if (project.collector === 'artifact') {
      await dev.waitFor(waitForArtifacts(projectOutputFiles, timeoutMs), `${project.projectLabel} 初始产物`)
    }
    const samples: HmrSample[] = []
    for (const scenario of scenarios) {
      samples.push(...await dev.waitFor(
        runScenario({ scenario, iterations, timeoutMs, profilePath }),
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
  await ensureDir(path.join(reportDir, 'profiles'))

  const samples: HmrSample[] = []
  for (const scenarios of groupByProject(hmrScenarios)) {
    samples.push(...await runProjectScenarios({
      scenarios,
      iterations,
      timeoutMs,
      reportDir,
    }))
  }

  await writeHmrReport(reportDir, {
    generatedAt: new Date().toISOString(),
    iterations,
    samples,
    notes: [
      'weapp-vite 项目使用 dev 模式 JSONL profile 采集 HMR 内部阶段耗时。',
      '非 weapp-vite 项目使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时，内部阶段列没有框架可比的公开数据时显示为 -。',
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
