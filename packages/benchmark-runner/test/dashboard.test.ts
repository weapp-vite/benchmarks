import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'pathe'
import { afterEach, describe, expect, it } from 'vitest'
import {
  buildDashboardReport,
  loadDashboardReport,
  lowerIsBetterIndex,
  summarizeCompile,
} from '../src/dashboard/data'

const temporaryRoots: string[] = []

afterEach(async () => {
  await Promise.all(temporaryRoots.splice(0).map(root => rm(root, { recursive: true, force: true })))
})

function compileReport() {
  return {
    generatedAt: '2026-07-13T00:00:00.000Z',
    iterations: 2,
    samples: [
      { project: 'fast', label: 'Fast', durationMs: 100, ok: true, output: { bytes: 1000, jsBytes: 700, templateBytes: 200, styleBytes: 100 } },
      { project: 'fast', label: 'Fast', durationMs: 120, ok: true, output: { bytes: 1200, jsBytes: 800, templateBytes: 250, styleBytes: 150 } },
      { project: 'partial', label: 'Partial', durationMs: 200, ok: true, output: { bytes: 2000, jsBytes: 1400, templateBytes: 400, styleBytes: 200 } },
      { project: 'partial', label: 'Partial', durationMs: 0, ok: false, output: { bytes: 0, jsBytes: 0, templateBytes: 0, styleBytes: 0 } },
    ],
  }
}

describe('dashboard aggregation', () => {
  it('uses successful samples and preserves incomplete status', () => {
    const section = summarizeCompile(compileReport())
    expect(section.projects[0]).toMatchObject({
      id: 'fast',
      sampleCount: 2,
      complete: true,
      values: { buildMs: 110, outputBytes: 1100 },
    })
    expect(section.projects[1]).toMatchObject({
      id: 'partial',
      sampleCount: 1,
      complete: false,
      values: { buildMs: 200 },
    })
  })

  it('normalizes lower values to a best score of 100', () => {
    expect(lowerIsBetterIndex(50, 50)).toBe(100)
    expect(lowerIsBetterIndex(100, 50)).toBe(50)
    expect(lowerIsBetterIndex(undefined, 50)).toBeUndefined()
  })

  it('marks the dashboard partial when sections or samples are incomplete', () => {
    const report = buildDashboardReport({ compile: compileReport() })
    expect(report.status).toBe('partial')
    expect(report.compile?.projects.find(project => project.id === 'partial')?.complete).toBe(false)
  })

  it('reports malformed and missing source reports instead of inventing zero values', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'benchmark-dashboard-'))
    temporaryRoots.push(root)
    await mkdir(path.join(root, 'reports/compile'), { recursive: true })
    await writeFile(path.join(root, 'reports/compile/latest.json'), '{invalid', 'utf8')

    const report = await loadDashboardReport(root)

    expect(report.status).toBe('partial')
    expect(report.compile).toBeUndefined()
    expect(report.errors.some(error => error.includes('compile/latest.json'))).toBe(true)
    expect(report.errors.some(error => error.includes('runtime/latest.json'))).toBe(true)
  })

  it('skips newer archives with a different sample matrix when selecting history', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'benchmark-dashboard-'))
    temporaryRoots.push(root)
    const reportDir = path.join(root, 'reports/compile')
    const runsDir = path.join(reportDir, 'machines/test-machine/runs')
    await mkdir(runsDir, { recursive: true })
    const environment = {
      machineId: 'test-machine',
      machineLabel: 'Test machine',
      os: 'test',
      arch: 'test',
      cpu: 'test',
      cpuCores: 1,
      memoryGB: 1,
      node: 'test',
      pnpm: 'test',
    }
    const report = (generatedAt: string, iterations: number, durations: number[]) => ({
      generatedAt,
      iterations,
      environment,
      samples: durations.map(durationMs => ({
        project: 'app',
        label: 'App',
        durationMs,
        ok: true,
        output: { bytes: 1000, jsBytes: 700, templateBytes: 200, styleBytes: 100 },
      })),
    })
    await Promise.all([
      writeFile(path.join(reportDir, 'latest.json'), JSON.stringify(report('2026-07-13T02:00:00.000Z', 2, [100, 120])), 'utf8'),
      writeFile(path.join(runsDir, '2026-07-13T01-30-00-000Z.json'), JSON.stringify(report('2026-07-13T01:30:00.000Z', 1, [50])), 'utf8'),
      writeFile(path.join(runsDir, '2026-07-13T01-00-00-000Z.json'), JSON.stringify(report('2026-07-13T01:00:00.000Z', 2, [80, 100])), 'utf8'),
    ])

    const dashboard = await loadDashboardReport(root)

    expect(dashboard.compile?.projects[0]?.previousValues?.['buildMs']).toBe(90)
  })
})
