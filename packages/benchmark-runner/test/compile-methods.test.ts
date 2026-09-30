import { expect, it } from 'vitest'
import { scaleSources } from '../src/compile/methods/fixture'
import { samplingSchedule } from '../src/compile/methods/schedule'
import { summarizeMethods } from '../src/compile/methods/statistics'

const settings = { seed: 20261001, batches: 2, iterations: 3, scales: ['small', 'medium', 'large'] as const, frameworks: ['native', 'wevu'] as const }
const schedule = () => samplingSchedule({ ...settings, scales: [...settings.scales], frameworks: [...settings.frameworks] })

it('replays the seeded full-cell order, balances each round and validates settings', () => {
  const ordered = schedule()
  expect(ordered).toEqual(schedule())
  expect(ordered).not.toEqual(samplingSchedule({ ...settings, seed: 2, scales: [...settings.scales], frameworks: [...settings.frameworks] }))
  expect(ordered).toHaveLength(72)
  for (let offset = 0; offset < ordered.length; offset += 12) {
    expect(new Set(ordered.slice(offset, offset + 12).map(row => `${row.framework}/${row.scale}/${row.cache}`)).size).toBe(12)
  }
  expect(() => samplingSchedule({ ...settings, seed: 0, scales: ['small'], frameworks: ['native'] })).toThrow('Invalid')
})

it('keeps missing, failed, retried and duplicate samples out of complete cells', () => {
  const ordered = schedule()
  const samples = ordered.map(row => ({ ...row, ok: true, attempts: 1, durationMs: 10, sourceHash: `${row.framework}/${row.scale}`, outputHash: 'output' }))
  expect(summarizeMethods(ordered, samples).every(row => row.complete)).toBe(true)
  for (const altered of [samples.slice(1), [...samples, samples[0]!], samples.map((row, i) => i === 0 ? { ...row, ok: false } : row), samples.map((row, i) => i === 0 ? { ...row, attempts: 2 } : row), samples.map((row, i) => i === 0 ? { ...row, durationMs: Number.NaN } : row), samples.map((row, i) => i === 0 ? { ...row, sourceHash: 'changed' } : row)]) {
    expect(summarizeMethods(ordered, altered).some(row => !row.complete)).toBe(true)
  }
  expect(summarizeMethods(ordered, samples, false).every(row => !row.complete)).toBe(true)
  const first = summarizeMethods(ordered, samples)[0]!
  expect(first).toMatchObject({ meanMs: 10, medianMs: 10, p95Ms: 10, maxMs: 10, deviationMs: 0 })
})

it('generates equivalent page/component dimensions and subpackages for both large fixtures', () => {
  const native = scaleSources('native', 'large')
  const wevu = scaleSources('wevu', 'large')
  expect(native.allPages).toEqual(wevu.allPages)
  expect(native.spec).toEqual({ pages: 80, components: 32, shared: 32 })
  expect(native.allPages.filter(page => page.startsWith('feature/'))).toHaveLength(40)
  expect(native.files['app.json']).toContain('subPackages')
  expect(wevu.files['app.vue']).toContain('subPackages')
  expect(Object.keys(native.files).filter(file => file.startsWith('components/') && file.endsWith('.js'))).toHaveLength(32)
  expect(Object.keys(wevu.files).filter(file => file.startsWith('components/') && file.endsWith('.vue'))).toHaveLength(32)
})
