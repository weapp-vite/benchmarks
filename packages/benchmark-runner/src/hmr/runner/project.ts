import type { HmrSample, HmrScenario } from '../types'
import { createFailedSample } from './samples'
import { runScenario } from './scenario'
import { launchWatchProject } from './watch'

export async function runProjectScenarios(options: {
  root: string
  runId: string
  scenarios: HmrScenario[]
  iterations: number
  timeoutMs: number
  pollIntervalMs: number
  iterationAttempts: number
}) {
  const { root, runId, scenarios, iterations, timeoutMs, pollIntervalMs, iterationAttempts } = options
  const project = scenarios[0]
  if (!project) {
    return []
  }

  let dev: Awaited<ReturnType<typeof launchWatchProject>> | undefined
  try {
    dev = await launchWatchProject({ root, scenarios, timeoutMs, profile: false })
    const samples: HmrSample[] = []
    for (const scenario of scenarios) {
      samples.push(...await runScenario({ root, runId, scenario, iterations, timeoutMs, pollIntervalMs, iterationAttempts, waitFor: dev.waitFor, signal: dev.signal }))
    }
    return samples
  }
  catch (error) {
    return scenarios.flatMap(scenario => Array.from({ length: iterations }, (_, index) => createFailedSample({
      scenario,
      iteration: index + 1,
      attempts: 1,
      attemptDurationsMs: [],
      error,
    })))
  }
  finally {
    await dev?.stop()
  }
}
