import type { ScheduledSample } from './schedule'
import { durationStatistics } from '../../hmr/statistics'

export interface MethodSample extends ScheduledSample {
  ok: boolean
  attempts: number
  durationMs?: number
  primingMs?: number
  error?: string
  sourceHash?: string
  outputHash?: string
  outputBytes?: number
}

export function summarizeMethods(schedule: ScheduledSample[], samples: MethodSample[], inputStable = true) {
  const key = (sample: ScheduledSample) => `${sample.framework}/${sample.scale}/${sample.cache}`
  return [...new Set(schedule.map(key))].map((id) => {
    const expected = schedule.filter(sample => key(sample) === id)
    const actual = samples.filter(sample => key(sample) === id)
    const eligible = actual.filter(sample => sample.ok && sample.attempts === 1 && Number.isFinite(sample.durationMs) && sample.durationMs! >= 0)
    const complete = inputStable && actual.length === expected.length && eligible.length === expected.length
      && expected.every(item => actual.filter(sample => sample.ordinal === item.ordinal && sample.batch === item.batch && sample.iteration === item.iteration).length === 1)
      && new Set(eligible.map(sample => sample.sourceHash)).size === 1
      && eligible.every(sample => sample.sourceHash && sample.outputHash)
    const values = eligible.map(sample => sample.durationMs!)
    const stats = durationStatistics(values)
    const deviationMs = values.length ? Math.sqrt(values.reduce((total, value) => total + (value - stats.meanMs!) ** 2, 0) / values.length) : undefined
    return { id, complete, expected: expected.length, accepted: eligible.length, ...stats, deviationMs, coefficientOfVariation: stats.meanMs ? deviationMs! / stats.meanMs : undefined }
  })
}
