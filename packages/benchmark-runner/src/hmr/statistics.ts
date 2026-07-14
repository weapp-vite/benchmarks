import type { HmrSample } from './types'

export interface DurationStatistics {
  meanMs: number | undefined
  medianMs: number | undefined
  p95Ms: number | undefined
  maxMs: number | undefined
}

function average(values: number[]) {
  return values.length
    ? values.reduce((total, value) => total + value, 0) / values.length
    : undefined
}

function median(sorted: number[]) {
  if (!sorted.length) {
    return undefined
  }
  const middle = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 0
    ? ((sorted[middle - 1] ?? 0) + (sorted[middle] ?? 0)) / 2
    : sorted[middle]
}

function percentile(sorted: number[], percentileValue: number) {
  if (!sorted.length) {
    return undefined
  }
  const index = Math.max(0, Math.ceil(sorted.length * percentileValue) - 1)
  return sorted[Math.min(index, sorted.length - 1)]
}

export function durationStatistics(values: number[]): DurationStatistics {
  const sorted = [...values].sort((left, right) => left - right)
  return {
    meanMs: average(sorted),
    medianMs: median(sorted),
    p95Ms: percentile(sorted, 0.95),
    maxMs: sorted.at(-1),
  }
}

export function sampleWasRetried(sample: HmrSample) {
  return (sample.attempts ?? 1) > 1
}

export function isHealthyHmrScenario(samples: HmrSample[], iterations: number) {
  return samples.length === iterations
    && samples.every(sample => sample.ok && !sampleWasRetried(sample))
}
