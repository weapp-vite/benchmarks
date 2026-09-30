import type { HmrSample, HmrScenario } from '../types'

function normalizeError(error: unknown) {
  return error instanceof Error ? error.message : String(error)
}

export function createFailedSample(options: {
  scenario: HmrScenario
  iteration: number
  attempts: number
  attemptDurationsMs: number[]
  error: unknown
}): HmrSample {
  const { scenario, iteration, attempts, attemptDurationsMs, error } = options
  return {
    scenario: scenario.id,
    label: scenario.label,
    group: scenario.group,
    project: scenario.project,
    projectLabel: scenario.projectLabel,
    collector: scenario.collector,
    iteration,
    attempts,
    attemptDurationsMs,
    attemptTotalMs: attemptDurationsMs.reduce((total, value) => total + value, 0),
    sourceFile: scenario.sourceFile,
    ok: false,
    error: normalizeError(error),
  }
}

export function createSampleFromArtifact(options: {
  scenario: HmrScenario
  iteration: number
  attempts: number
  attemptDurationsMs: number[]
  wallMs: number
}): HmrSample {
  const { scenario, iteration, attempts, attemptDurationsMs, wallMs } = options
  return {
    scenario: scenario.id,
    label: scenario.label,
    group: scenario.group,
    project: scenario.project,
    projectLabel: scenario.projectLabel,
    collector: scenario.collector,
    iteration,
    attempts,
    attemptDurationsMs,
    attemptTotalMs: attemptDurationsMs.reduce((total, value) => total + value, 0),
    sourceFile: scenario.sourceFile,
    ok: true,
    wallMs,
    totalMs: wallMs,
  }
}
