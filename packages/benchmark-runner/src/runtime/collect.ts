import type { BenchmarkProject } from '../projects'
import type { RuntimeMetric } from '../scenario'
import type { Deadline } from './session/deadline'
import type { MiniProgram, RuntimeSample } from './types'
import { randomUUID } from 'node:crypto'
import process from 'node:process'
import path from 'pathe'
import { parseConsolePayload } from './metrics'
import { completionBoundary } from './observe/boundary'
import { assertMetrics } from './observe/expected'
import { verifyFinalView } from './observe/view'
import { DeadlineError } from './session/deadline'
import { openOwnedProject } from './session/owned'

function failed(project: BenchmarkProject, iteration: number, error: unknown, kind: RuntimeSample['failureKind']): RuntimeSample {
  return {
    project: project.id,
    label: project.label,
    iteration,
    page: project.runtimePage,
    ok: false,
    source: 'none',
    metrics: [],
    completion: completionBoundary(project.id),
    error: error instanceof Error ? error.message : String(error),
    ...(kind ? { failureKind: kind } : {}),
  }
}

async function collectIteration(project: BenchmarkProject, iteration: number, program: MiniProgram, queue: RuntimeMetric[][], setToken: (token: string) => void, deadline: Deadline): Promise<RuntimeSample> {
  queue.length = 0
  const token = randomUUID()
  setToken(token)
  const start = performance.now()
  await deadline.run('route', () => program.reLaunch(`/${project.runtimePage}?benchToken=${token}`))
  let metrics: RuntimeMetric[] = []
  while (!metrics.length) {
    metrics = queue.shift() ?? []
    if (!metrics.length) {
      await deadline.pause(100)
    }
  }
  const metricsObservedMs = performance.now() - start
  assertMetrics(metrics)
  const page = await deadline.run('current page', () => program.currentPage({ retries: 1, timeout: deadline.remaining('current page', 5000) }))
  if (page.path?.replace(/^\//, '') !== project.runtimePage) {
    throw new Error(`Unexpected runtime route: ${page.path ?? 'unknown'}`)
  }
  const checks = await verifyFinalView(page, deadline)
  const viewObservedMs = performance.now() - start
  return {
    project: project.id,
    label: project.label,
    iteration,
    page: project.runtimePage,
    ok: true,
    source: 'console-log',
    metrics,
    completion: completionBoundary(project.id),
    observation: {
      boundary: 'route-to-verified-view',
      durationMs: viewObservedMs,
      metricsObservedMs,
      viewObservedMs,
      pollIntervalMs: 100,
      checks,
    },
  }
}

export async function collectProjectSamples(project: BenchmarkProject, iterations: number, cliPath: string, stagedRoot: string, deadline: Deadline): Promise<RuntimeSample[]> {
  const queue: RuntimeMetric[][] = []
  let token = ''
  let session: Awaited<ReturnType<typeof openOwnedProject>> | undefined
  const samples: RuntimeSample[] = []
  try {
    session = await openOwnedProject(cliPath, path.join(stagedRoot, project.runtimeProjectDir), deadline)
    const host = session.host
    session.program.on('console', (payload: unknown) => {
      const metrics = parseConsolePayload(payload, token)
      if (metrics.length && queue.length < 2) {
        queue.push(metrics)
      }
    })
    for (let iteration = 1; iteration <= iterations; iteration += 1) {
      process.stdout.write(`[runtime] ${project.label}: verified-view iteration ${iteration}/${iterations}\n`)
      try {
        const setToken = (value: string) => {
          token = value
        }
        const sample = await collectIteration(project, iteration, session.program, queue, setToken, deadline)
        samples.push({ ...sample, host })
      }
      catch (error) {
        samples.push(failed(project, iteration, error, error instanceof DeadlineError ? 'deadline' : 'assertion'))
        // Do not turn a failed round into a successful replacement sample.
        if (error instanceof DeadlineError) {
          break
        }
      }
    }
  }
  catch (error) {
    samples.push(failed(project, 1, error, error instanceof DeadlineError ? 'deadline' : 'connection'))
  }
  finally {
    try {
      await session?.dispose()
    }
    catch (error) {
      // Cleanup errors are evidence failures, never swallowed after successful sampling.
      for (const sample of samples) {
        sample.ok = false
        sample.failureKind = 'cleanup'
        sample.error = `Cleanup: ${error instanceof Error ? error.message : String(error)}`
      }
    }
  }
  while (samples.length < iterations) {
    samples.push(failed(project, samples.length + 1, 'Not executed after project failure/deadline', 'not-executed'))
  }
  return samples
}
