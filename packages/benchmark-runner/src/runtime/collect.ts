import type { BenchmarkProject } from '../projects'
import type { RuntimeMetric } from '../scenario'
import type { MiniProgram, RuntimeSample } from './types'
import { spawn } from 'node:child_process'
import process from 'node:process'
import path from 'pathe'
import { repoRoot } from '../projects'
import { defaultLaunchTimeout, metricCount } from './constants'
import { parseConsolePayload, waitForConsoleMetrics, waitForMetrics } from './metrics'

async function buildProjectNpm(project: BenchmarkProject, cliPath: string, projectPath: string) {
  if (!project.runtimeNpmBuild) {
    return
  }
  process.stdout.write(`[runtime] ${project.label}: build npm\n`)
  const child = spawn(cliPath, ['build-npm', '--project', projectPath], {
    cwd: repoRoot,
    stdio: 'inherit',
  })
  const exitCode = await new Promise<number | null>((resolve) => {
    child.on('close', resolve)
  })
  if (exitCode !== 0) {
    throw new Error(`微信开发者工具 build-npm 失败：${exitCode ?? 'signal'}`)
  }
}

async function collectIteration(
  project: BenchmarkProject,
  iteration: number,
  miniProgram: MiniProgram,
  consoleMetrics: RuntimeMetric[][],
): Promise<RuntimeSample> {
  try {
    consoleMetrics.length = 0
    await miniProgram.reLaunch(`/${project.runtimePage}?benchIteration=${iteration}`)

    const fromConsole = await waitForConsoleMetrics(consoleMetrics)
    if (fromConsole.length >= metricCount) {
      return {
        project: project.id,
        label: project.label,
        iteration,
        page: project.runtimePage,
        ok: true,
        source: 'console-log',
        metrics: fromConsole,
      }
    }

    const page = await miniProgram.currentPage({ retries: 20, timeout: 1_000 })
    const metrics = await waitForMetrics(page)
    if (metrics.length >= metricCount) {
      return {
        project: project.id,
        label: project.label,
        iteration,
        page: project.runtimePage,
        ok: true,
        source: 'page-data',
        metrics,
      }
    }

    const sample: RuntimeSample = {
      project: project.id,
      label: project.label,
      iteration,
      page: project.runtimePage,
      ok: false,
      source: 'none',
      metrics: [],
    }
    sample.error = '未在页面数据或控制台日志中找到运行时指标'
    return sample
  }
  catch (error) {
    return {
      project: project.id,
      label: project.label,
      iteration,
      page: project.runtimePage,
      ok: false,
      source: 'none',
      metrics: [],
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

export async function collectProjectSamples(
  project: BenchmarkProject,
  iterations: number,
  cliPath: string,
  port: number,
): Promise<RuntimeSample[]> {
  const { Launcher } = await import('@weapp-vite/miniprogram-automator')
  const launcher = new Launcher()
  const projectPath = path.join(repoRoot, project.runtimeProjectDir)
  const consoleMetrics: RuntimeMetric[][] = []
  let miniProgram: MiniProgram | undefined

  process.stdout.write(`[runtime] ${project.label}: launch ${projectPath}\n`)

  try {
    await buildProjectNpm(project, cliPath, projectPath)

    const launched = await launcher.launch({
      platform: 'wechat',
      cliPath,
      projectPath,
      port,
      timeout: Number(process.env['BENCH_RUNTIME_TIMEOUT'] ?? defaultLaunchTimeout),
      headless: process.env['BENCH_RUNTIME_HEADLESS'] === '1',
      trustProject: true,
    })
    miniProgram = launched

    launched.on('console', (payload: unknown) => {
      const metrics = parseConsolePayload(payload)
      if (metrics.length) {
        consoleMetrics.push(metrics)
      }
    })

    const samples: RuntimeSample[] = []
    for (let iteration = 1; iteration <= iterations; iteration += 1) {
      process.stdout.write(`[runtime] ${project.label}: iteration ${iteration}\n`)
      samples.push(await collectIteration(project, iteration, launched, consoleMetrics))
    }
    return samples
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return Array.from({ length: iterations }, (_, index) => ({
      project: project.id,
      label: project.label,
      iteration: index + 1,
      page: project.runtimePage,
      ok: false,
      source: 'none' as const,
      metrics: [],
      error: message,
    }))
  }
  finally {
    await miniProgram?.close().catch(() => {})
  }
}
