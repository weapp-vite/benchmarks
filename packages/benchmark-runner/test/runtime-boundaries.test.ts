import type { RuntimePage, RuntimeSample } from '../src/runtime/types'
import { createServer } from 'node:net'
import { expect, it, vi } from 'vitest'
import { summarizeRuntime } from '../src/dashboard/data/summarize'
import { observeConsistency } from '../src/runtime/consistency/observe'
import { parseConsolePayload } from '../src/runtime/metrics'
import { isVerifiedRuntimeSample } from '../src/runtime/observe/boundary'
import { assertMetrics, expectedMetrics } from '../src/runtime/observe/expected'
import { verifyFinalView } from '../src/runtime/observe/view'
import { Deadline } from '../src/runtime/session/deadline'
import { onceDispose } from '../src/runtime/session/ownership'

function metrics() {
  return expectedMetrics().map(metric => ({ ...metric, durationMs: 1 }))
}

it('validates all deterministic results and rejects incomplete, duplicate or nonfinite metrics', () => {
  expect(metrics().map(({ count, checksum }) => [count, checksum])).toEqual([
    [480, 9739246],
    [960, 10108853],
    [960, 10108726],
    [960, 10108726],
    [960, 10108726],
    [12, 49432],
    [140, 143028],
    [640, 65056103],
  ])
  expect(() => assertMetrics(metrics())).not.toThrow()
  expect(() => assertMetrics(metrics().slice(1))).toThrow('Incomplete')
  expect(() => assertMetrics([...metrics().slice(1), metrics()[1]!])).toThrow('duplicate')
  const corrupted = metrics()
  corrupted[0]!.checksum += 1
  expect(() => assertMetrics(corrupted)).toThrow('Incorrect')
  corrupted[0] = { ...metrics()[0]!, durationMs: Number.NaN }
  expect(() => assertMetrics(corrupted)).toThrow('Incorrect')
})

it('ignores old iteration logs even when they contain complete valid metrics', () => {
  const payload = ['BENCHMARK_RUNTIME', { token: 'previous', metrics: metrics() }]
  expect(parseConsolePayload(payload, 'current')).toEqual([])
  expect(parseConsolePayload(payload, 'previous')).toHaveLength(8)
})

it('does not treat a completed JS queue as completed host view', async () => {
  let committed = false
  const element = (text: string) => ({ text: async () => text, style: async () => 'rgb(37, 99, 235)', tap: async () => {} })
  const page: RuntimePage = {
    data: async () => ({ metrics: metrics() }),
    $: async () => element(committed ? '640/640' : '480/480'),
    $$: async selector => selector === '.row__title'
      ? Array.from({ length: committed ? 640 : 480 }, (_, index) => element(`Item ${101280 + index}`))
      : selector === '.metric' ? Array.from({ length: 8 }, () => element('metric')) : [],
  }
  let settled = false
  const observation = verifyFinalView(page, new Deadline(1000)).then((checks) => {
    settled = true
    return checks
  })
  await Promise.resolve() // framework-nextTick-equivalent barrier has ended
  expect(settled).toBe(false)
  committed = true
  expect(await observation).toContain('computed-color')
})

it('enforces one total deadline across operations including promises that never settle', async () => {
  const deadline = new Deadline(30)
  await expect(deadline.run('stalled RPC', () => new Promise(() => {}))).rejects.toThrow('deadline')
  expect(() => deadline.remaining('next RPC')).toThrow('deadline')
})

it('disposes only owned resources once while unrelated project listeners survive', async () => {
  const own = createServer()
  const unrelated = createServer()
  const listen = (server: ReturnType<typeof createServer>) => new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve))
  const close = (server: ReturnType<typeof createServer>) => new Promise<void>(resolve => server.close(() => resolve()))
  await Promise.all([listen(own), listen(unrelated)])
  const action = vi.fn(() => close(own))
  try {
    const dispose = onceDispose(action)
    await Promise.all([dispose(), dispose()])
    expect(action).toHaveBeenCalledTimes(1)
    expect(own.listening).toBe(false)
    expect(unrelated.listening).toBe(true)
  }
  finally {
    await close(unrelated)
  }
})

it('keeps internal tick timings out of cross-framework rankings and rejects unverifiable legacy success', () => {
  const sample: RuntimeSample = {
    project: 'wevu',
    label: 'Wevu',
    iteration: 1,
    page: 'index',
    ok: true,
    source: 'console-log',
    metrics: metrics(),
    completion: 'framework-next-tick',
  }
  expect(isVerifiedRuntimeSample(sample)).toBe(false)
  const report = { generatedAt: '', mode: 'ide-e2e' as const, iterations: 1, samples: [sample], notes: [] }
  expect(summarizeRuntime(report).projects[0]?.complete).toBe(false)
  sample.observation = { boundary: 'route-to-verified-view', durationMs: 100, metricsObservedMs: 10, viewObservedMs: 100, pollIntervalMs: 100, checks: ['summary', 'row-count', 'first-title', 'last-title', 'metric-count', 'groups-cleared', 'computed-color'] }
  expect(isVerifiedRuntimeSample(sample)).toBe(true)
  expect(summarizeRuntime(report).projects[0]?.values).toEqual({ totalMs: 100 })
  sample.observation.checks.pop()
  expect(isVerifiedRuntimeSample(sample)).toBe(false)
})

it('reacquires the current page after automatic compilation replaces an obsolete handle', async () => {
  let reads = 0
  const currentPage = async (): Promise<RuntimePage> => {
    reads += 1
    if (reads === 1) {
      throw new Error('Page instance replaced')
    }
    return {
      path: 'pages/index/index',
      data: async () => ({}),
      $$: async () => [],
      $: async selector => ({ text: async () => selector === '.probe-script' ? 'first:2' : 'initial', style: async () => 'rgb(17, 34, 51)', tap: async () => {} }),
    }
  }
  expect(await observeConsistency(currentPage, { script: 'first:2', template: 'initial', color: 'rgb(17, 34, 51)' }, new Deadline(2000))).toEqual({ script: 'first:2', template: 'initial', color: 'rgb(17, 34, 51)' })
  expect(reads).toBe(2)
})
