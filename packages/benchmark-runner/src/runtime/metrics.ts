import type { RuntimeMetric } from '../scenario'
import process from 'node:process'
import { defaultMetricsTimeout, metricCount } from './constants'

function isRuntimeMetric(value: unknown): value is RuntimeMetric {
  if (!value || typeof value !== 'object') {
    return false
  }
  const metric = value as Partial<RuntimeMetric>
  return typeof metric.name === 'string'
    && typeof metric.durationMs === 'number'
    && typeof metric.count === 'number'
    && typeof metric.checksum === 'number'
}

function normalizeMetrics(value: unknown): RuntimeMetric[] {
  if (Array.isArray(value) && value.every(isRuntimeMetric)) {
    return value
  }
  return []
}

export async function waitForMetrics(page: { data: (path?: string) => Promise<unknown> }) {
  const started = Date.now()
  const timeout = Number(process.env['BENCH_RUNTIME_METRICS_TIMEOUT'] ?? defaultMetricsTimeout)
  while (Date.now() - started < timeout) {
    const direct = normalizeMetrics(await page.data('metrics'))
    if (direct.length >= metricCount) {
      return direct
    }

    const fullData = await page.data()
    if (fullData && typeof fullData === 'object') {
      const data = fullData as Record<string, unknown>
      const candidates = [
        data['metrics'],
        data['$metrics'],
        data['__metrics'],
      ]
      for (const candidate of candidates) {
        const metrics = normalizeMetrics(candidate)
        if (metrics.length >= metricCount) {
          return metrics
        }
      }
    }

    await new Promise(resolve => setTimeout(resolve, 250))
  }
  return []
}

export function parseConsolePayload(payload: unknown) {
  const text = JSON.stringify(payload)
  if (!text.includes('BENCHMARK_RUNTIME')) {
    return []
  }

  const queue: unknown[] = [payload]
  while (queue.length) {
    const current = queue.shift()
    if (!current || typeof current !== 'object') {
      continue
    }
    if ('metrics' in current) {
      const metrics = normalizeMetrics((current as { metrics?: unknown }).metrics)
      if (metrics.length >= metricCount) {
        return metrics
      }
    }
    if (Array.isArray(current)) {
      queue.push(...current)
      continue
    }
    queue.push(...Object.values(current))
  }

  return []
}
