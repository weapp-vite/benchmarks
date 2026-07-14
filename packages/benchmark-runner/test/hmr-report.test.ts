import type { HmrReport, HmrSample } from '../src/hmr/types'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'pathe'
import { afterEach, describe, expect, it } from 'vitest'
import { writeHmrReport } from '../src/hmr/report'
import { durationStatistics, isHealthyHmrScenario } from '../src/hmr/statistics'

const temporaryRoots: string[] = []

afterEach(async () => {
  await Promise.all(temporaryRoots.splice(0).map(root => rm(root, { recursive: true, force: true })))
})

function sample(iteration: number, totalMs: number, attempts = 1): HmrSample {
  const attemptDurationsMs = attempts === 1 ? [totalMs] : [90_000, totalMs]
  return {
    scenario: 'wevu-vue-template',
    label: 'weapp-vite + wevu / Vue SFC template 区块',
    group: 'vue-sfc',
    project: 'weapp-vite-wevu',
    projectLabel: 'weapp-vite + wevu',
    collector: 'artifact',
    iteration,
    attempts,
    attemptDurationsMs,
    attemptTotalMs: attemptDurationsMs.reduce((total, value) => total + value, 0),
    sourceFile: 'src/pages/index/index.vue',
    ok: true,
    wallMs: totalMs,
    totalMs,
  }
}

describe('HMR report statistics', () => {
  it('reports robust distribution metrics', () => {
    expect(durationStatistics([100, 200, 300, 10_000])).toEqual({
      meanMs: 2650,
      medianMs: 250,
      p95Ms: 10_000,
      maxMs: 10_000,
    })
  })

  it('treats retried samples as degraded and exposes their hidden wait', async () => {
    const samples = [sample(1, 100), sample(2, 120, 2)]
    expect(isHealthyHmrScenario(samples, 2)).toBe(false)

    const root = await mkdtemp(path.join(tmpdir(), 'benchmark-hmr-report-'))
    temporaryRoots.push(root)
    const report: HmrReport = {
      generatedAt: '2026-07-14T00:00:00.000Z',
      iterations: 2,
      samples,
      notes: [],
    }
    await writeHmrReport(root, report)

    const markdown = await readFile(path.join(root, 'latest.md'), 'utf8')
    expect(markdown).toContain('未纳入排名场景')
    expect(markdown).toContain('重试样本 1')
    expect(markdown).toContain('90120.0ms')
    expect(markdown).toContain('中位数')
    expect(markdown).toContain('P95')
  })
})
