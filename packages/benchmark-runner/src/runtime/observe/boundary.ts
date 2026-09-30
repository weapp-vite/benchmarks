import type { RuntimeSample } from '../types'
import { assertMetrics } from './expected'

export function completionBoundary(project: string): NonNullable<RuntimeSample['completion']> {
  if (project === 'weapp-vite-native') {
    return 'setData-callback'
  }
  return project === 'mpx' ? 'mpx-setData-callback' : 'framework-next-tick'
}

export function isVerifiedRuntimeSample(sample: RuntimeSample) {
  const observation = sample.observation
  const checks = ['summary', 'row-count', 'first-title', 'last-title', 'metric-count', 'groups-cleared', 'computed-color']
  if (!sample.ok || observation?.boundary !== 'route-to-verified-view'
    || !Number.isFinite(observation.durationMs) || observation.durationMs < 0
    || !Number.isFinite(observation.metricsObservedMs) || observation.metricsObservedMs < 0
    || observation.viewObservedMs !== observation.durationMs || observation.viewObservedMs < observation.metricsObservedMs
    || checks.some(check => !observation.checks.includes(check))) {
    return false
  }
  try {
    assertMetrics(sample.metrics)
    return true
  }
  catch {
    return false
  }
}
