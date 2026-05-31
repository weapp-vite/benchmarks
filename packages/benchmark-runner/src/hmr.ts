import type { HmrSample, HmrScenario } from './hmr/types'
import { readFile, rm, writeFile } from 'node:fs/promises'
import { performance } from 'node:perf_hooks'
import process from 'node:process'
import path from 'pathe'
import { defaultTimingIterations } from './constants'
import { ensureDir } from './fs'
import { startDevProcess } from './hmr/dev'
import { readProfileSamples, waitForNextProfileSample } from './hmr/profile'
import { writeHmrReport } from './hmr/report'
import { hmrScenarios } from './hmr/scenarios'
import { repoRoot } from './projects'

const readyRe = /小程序初次构建完成[\s\S]*开发服务已就绪|开发服务已就绪/
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
    iteration,
    sourceFile: scenario.sourceFile,
    ok: false,
    error: normalizeError(error),
  }
}

async function restoreSource(filePath: string, originalSource: string, profilePath: string, timeoutMs: number) {
  const currentSource = await readFile(filePath, 'utf8').catch(() => '')
  if (currentSource === originalSource) {
    return
  }
  const previousCount = (await readProfileSamples(profilePath)).length
  await writeFile(filePath, originalSource, 'utf8')
  await waitForNextProfileSample(profilePath, previousCount, timeoutMs).catch(() => undefined)
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

  try {
    for (let iteration = 1; iteration <= iterations; iteration += 1) {
      process.stdout.write(`[hmr] ${scenario.label}: iteration ${iteration}\n`)
      const marker = `${scenario.id}-${iteration}-${Date.now().toString(36)}`
      const nextSource = scenario.applyMarker(originalSource, marker)
      const previousCount = (await readProfileSamples(profilePath)).length
      const started = performance.now()
      try {
        await writeFile(sourcePath, nextSource, 'utf8')
        const profile = await waitForNextProfileSample(profilePath, previousCount, timeoutMs)
        samples.push(createSampleFromProfile({
          scenario,
          iteration,
          wallMs: performance.now() - started,
          profile,
        }))
      }
      catch (error) {
        samples.push(createFailedSample({ scenario, iteration, error }))
      }
      await sleep(100)
    }
  }
  finally {
    await restoreSource(sourcePath, originalSource, profilePath, timeoutMs)
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

  process.stdout.write(`[hmr] ${project.projectLabel}: launch ${appDir}\n`)
  const dev = startDevProcess({
    command: 'pnpm',
    args: ['dev'],
    cwd: appDir,
    env: {
      ...process.env,
      CI: '1',
      FORCE_COLOR: '0',
      WEAPP_VITE_HMR_PROFILE_JSON: profilePath,
    },
  })

  try {
    await dev.waitForOutput(readyRe, `${project.projectLabel} dev ready`, timeoutMs)
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
      'HMR 数据来自 weapp-vite dev 模式的 JSONL profile。',
      '每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。',
      'Vue SFC 场景拆分 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件。',
      `HMR 等待超时默认是 ${defaultTimeoutMs}ms，可通过 BENCH_HMR_TIMEOUT 覆盖。`,
    ],
  })
}

runHmrBenchmark().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`)
  process.exitCode = 1
})
