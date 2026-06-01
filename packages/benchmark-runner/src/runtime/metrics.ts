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

async function readPageMetrics(page: { data: (path?: string) => Promise<unknown> }) {
  const direct = normalizeMetrics(await page.data('metrics'))
  if (direct.length >= metricCount) {
    return direct
  }

  const fullData = await page.data()
  if (!fullData || typeof fullData !== 'object') {
    return []
  }

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

  return []
}

export async function waitForMetrics(page: { data: (path?: string) => Promise<unknown> }) {
  const started = Date.now()
  const timeout = Number(process.env['BENCH_RUNTIME_METRICS_TIMEOUT'] ?? defaultMetricsTimeout)
  while (Date.now() - started < timeout) {
    const metrics = await readPageMetrics(page)
    if (metrics.length >= metricCount) {
      return metrics
    }

    await new Promise(resolve => setTimeout(resolve, 250))
  }
  return []
}

export async function waitForConsoleMetrics(metricsQueue: RuntimeMetric[][]) {
  const started = Date.now()
  const timeout = Number(process.env['BENCH_RUNTIME_METRICS_TIMEOUT'] ?? defaultMetricsTimeout)
  while (Date.now() - started < timeout) {
    const metrics = metricsQueue.at(-1) ?? []
    if (metrics.length >= metricCount) {
      return metrics
    }
    await new Promise(resolve => setTimeout(resolve, 250))
  }
  return []
}

export async function waitForRuntimeMetrics(
  metricsQueue: RuntimeMetric[][],
  page: { data: (path?: string) => Promise<unknown> },
) {
  const started = Date.now()
  const timeout = Number(process.env['BENCH_RUNTIME_METRICS_TIMEOUT'] ?? defaultMetricsTimeout)
  while (Date.now() - started < timeout) {
    const fromConsole = metricsQueue.at(-1) ?? []
    if (fromConsole.length >= metricCount) {
      return {
        metrics: fromConsole,
        source: 'console-log' as const,
      }
    }

    const fromPage = await readPageMetrics(page)
    if (fromPage.length >= metricCount) {
      return {
        metrics: fromPage,
        source: 'page-data' as const,
      }
    }

    await new Promise(resolve => setTimeout(resolve, 250))
  }

  return {
    metrics: [],
    source: 'none' as const,
  }
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
