import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import process from 'node:process'
import path from 'pathe'
import { expect, it } from 'vitest'
import { runHmrBenchmark } from '../src/hmr/runner/index'
import { hmrScenarios } from '../src/hmr/scenarios/index'

it('observes real watch edits and resources, then replays emitted evidence without touching original sources', async () => {
  const output = await mkdtemp(path.join(tmpdir(), 'benchmark-hmr-evidence-'))
  const scenarios = hmrScenarios.filter(scenario => scenario.project === 'weapp-vite-wevu')
  try {
    const report = await runHmrBenchmark({ reportDir: output, iterations: 1, scenarios, timeoutMs: 30_000, longWatchMs: 1500 })
    expect(report.provenance?.inputStable).toBe(true)
    expect(report.samples).toHaveLength(4)
    expect(report.samples.filter(sample => !sample.ok || !sample.restoration?.ok)).toEqual([])
    const diagnostics = report.diagnostics!
    expect(diagnostics.failures).toEqual([])
    expect(diagnostics.edits.filter(edit => !edit.ok)).toEqual([])
    expect(diagnostics.firstFailure).toBeUndefined()
    expect(new Set(diagnostics.edits.map(edit => edit.phase))).toEqual(new Set(['first', 'continuous', 'restore', 'long-watch', 'batch', 'batch-restore', 'failure', 'repair', 'rename', 'delete', 'recreate', 'burst']))
    expect(diagnostics.longWatch.completedEdits).toBeGreaterThan(0)
    expect(diagnostics.edits.filter(edit => edit.phase === 'long-watch').every(edit => edit.rssKiB || edit.resourceError)).toBe(true)
    expect(diagnostics.edits.some(edit => edit.profile.status === 'matched')).toBe(true)
    expect(diagnostics.edits.find(edit => edit.phase === 'batch')?.changedFiles).toEqual(expect.arrayContaining(['pages/index/index.js', 'pages/index/index.wxml', 'pages/index/index.wxss', 'pages/index/index.json']))
    const markdown = await readFile(path.join(output, 'latest.md'), 'utf8')
    expect(markdown).toContain('旁路诊断')
    const replay = await runHmrBenchmark({ reportDir: path.join(output, 'replay'), replayFile: path.join(output, 'latest.json'), scenarios, timeoutMs: 30_000 })
    expect(replay.provenance?.inputStable).toBe(true)
    expect(replay.samples).toEqual([])
    expect(replay.diagnostics?.replayOf).toBe(diagnostics.runId)
    expect(replay.diagnostics?.edits.map(edit => [edit.id, edit.marker, edit.phase, edit.ok])).toEqual(diagnostics.edits.map(edit => [edit.id, edit.marker, edit.phase, edit.ok]))
    const previousExitCode = process.exitCode
    try {
      const failure = await runHmrBenchmark({
        reportDir: path.join(output, 'failure'),
        iterations: 1,
        timeoutMs: 30_000,
        longWatchMs: 0,
        scenarios: [{ ...scenarios[0]!, applyMarker: source => source }],
      })
      expect(process.exitCode).toBe(1)
      expect(failure.diagnostics?.firstFailure).toBe(failure.diagnostics?.edits[0]?.id)
      expect(failure.diagnostics?.edits[0]?.ok).toBe(false)
      expect(failure.diagnostics?.edits[0]?.error).toContain('marker')
      expect(JSON.parse(await readFile(path.join(output, 'failure/latest.json'), 'utf8')).diagnostics.firstFailure).toBe(failure.diagnostics?.firstFailure)
    }
    finally {
      process.exitCode = previousExitCode
    }
  }
  finally {
    await rm(output, { recursive: true, force: true })
  }
}, 180_000)
