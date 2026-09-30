import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import process from 'node:process'
import path from 'pathe'
import { afterEach, describe, expect, it } from 'vitest'
import { waitForArtifacts } from '../src/hmr/artifacts'
import { startDevProcess } from '../src/hmr/dev'
import { settledOutput } from '../src/hmr/diagnostics/output'
import { correlateProfile } from '../src/hmr/diagnostics/profile'
import { validateReplay } from '../src/hmr/diagnostics/replay'
import { diagnosticLines } from '../src/hmr/diagnostics/report'
import { restoreSource } from '../src/hmr/runner/scenario'
import { isHealthyHmrScenario } from '../src/hmr/statistics'
import { evidence } from './fixtures/provenance'

const roots: string[] = []
afterEach(async () => {
  await Promise.all(roots.splice(0).map(root => rm(root, { recursive: true, force: true })))
})

describe('HMR evidence', () => {
  it('keeps a late previous profile separate and never invents phases for missing/ambiguous events', () => {
    const timestamp = '2026-09-01T00:00:00.000Z'
    const time = Date.parse(timestamp)
    const event = (ms: number, sequence: number) => JSON.stringify({
      eventId: `${ms.toString(36)}-${sequence}`,
      timestamp,
      relativeFile: 'src/page.vue',
      file: '/fixture/src/page.vue',
      totalMs: 12,
      transformMs: 4,
    })
    const old = event(time - 1000, 1)
    const fresh = event(time, 2)
    expect(correlateProfile([old], 'src/page.vue', timestamp, '/fixture').status).toBe('missing')
    const matched = correlateProfile([old, fresh], 'src/page.vue', timestamp, '/fixture')
    expect(matched.status).toBe('matched')
    expect(matched.events).toHaveLength(2)
    expect(JSON.stringify(matched)).not.toContain('/fixture')
    expect(correlateProfile([fresh, event(time, 3)], 'src/page.vue', timestamp, '/fixture').status).toBe('ambiguous')
    expect(correlateProfile(['malformed', 'null', '42', '[]'], 'src/page.vue', timestamp, '/fixture').reason).toContain('malformed')
  })

  it('reports a restoration timeout even when the source bytes were successfully restored', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'benchmark-hmr-restore-'))
    roots.push(root)
    await mkdir(path.join(root, 'dist'))
    await writeFile(path.join(root, 'source.js'), 'edited marker')
    await writeFile(path.join(root, 'dist/output.js'), 'edited marker')
    await expect(restoreSource({
      root,
      scenario: { id: 'fixture', label: 'Fixture', group: 'native', project: 'fixture', projectLabel: 'Fixture', appDir: '.', collector: 'artifact', sourceFile: 'source.js', outputFiles: ['dist/output.js'], applyMarker: source => source },
      filePath: path.join(root, 'source.js'),
      originalSource: 'original',
      marker: 'marker',
      timeoutMs: 30,
      pollIntervalMs: 5,
      signal: new AbortController().signal,
      waitFor: async task => task,
    })).rejects.toThrow('超时')
    expect(await readFile(path.join(root, 'source.js'), 'utf8')).toBe('original')
    expect(isHealthyHmrScenario([{ scenario: 'fixture', label: 'Fixture', group: 'native', project: 'fixture', projectLabel: 'Fixture', collector: 'artifact', iteration: 1, sourceFile: 'source.js', ok: true, totalMs: 10, restoration: { ok: false, durationMs: 30, error: 'timeout' } }], 1)).toBe(false)
  })

  it('aborts artifact polling promptly when its owned process exits', async () => {
    const dev = startDevProcess({ command: process.execPath, args: ['-e', 'process.exit(2)'], cwd: process.cwd(), env: process.env })
    const started = Date.now()
    try {
      await expect(waitForArtifacts(['/nonexistent-owned-hmr-output'], 60_000, dev.signal)).rejects.toThrow()
      expect(Date.now() - started).toBeLessThan(5000)
    }
    finally {
      await dev.stop()
    }
  })
  it('never accepts an earlier compiler error as the outcome of a later edit', async () => {
    const dev = startDevProcess({ command: process.execPath, args: ['-e', 'console.log("ERROR old"); setInterval(() => {}, 1000)'], cwd: process.cwd(), env: process.env })
    try {
      await dev.waitForOutput(/ERROR/, 'startup', 5000)
      const cursor = dev.outputCursor()
      await expect(dev.waitForOutput(/ERROR/, 'new error', 40, cursor)).rejects.toThrow('超时')
    }
    finally {
      await dev.stop()
    }
  })

  it('rejects altered inputs and unsafe replay edits, and renders missing diagnostics honestly', () => {
    const provenance = evidence('hmr')
    const scenario = { id: 'fixture', label: 'Fixture', group: 'native' as const, project: 'fixture', projectLabel: 'Fixture', appDir: '.', collector: 'artifact' as const, sourceFile: 'source.js', outputFiles: ['dist/output.js'], applyMarker: (source: string) => source }
    const report = {
      generatedAt: provenance.finishedAt,
      iterations: 1,
      samples: [],
      notes: [],
      provenance,
      diagnostics: {
        schemaVersion: 1 as const,
        runId: provenance.runId,
        inputFingerprint: provenance.inputs.fingerprint,
        enabled: true,
        failures: [],
        longWatch: { requestedMs: 0, elapsedMs: 0, completedEdits: 0 },
        notes: [],
        edits: [{ id: 'edit-1', scenario: 'fixture', project: 'fixture', phase: 'first' as const, marker: 'marker', startedAt: provenance.startedAt, ok: true, externalMs: 123, observationMs: 1, profile: { status: 'missing' as const, reason: 'No events', events: [], readMs: 1 } }],
      },
    }
    expect(validateReplay(report, provenance.inputs, [scenario])).toBe(report.diagnostics)
    expect(() => validateReplay(report, { ...provenance.inputs, fingerprint: 'different' }, [scenario])).toThrow('fingerprint')
    expect(diagnosticLines(report.diagnostics).join('\n')).toContain('123.0 | missing')
    report.diagnostics.edits[0]!.marker = 'unsafe\'injection'
    expect(() => validateReplay(report, provenance.inputs, [scenario])).toThrow('Invalid replay')
    expect(diagnosticLines(undefined).join('\n')).toContain('未执行')
  })
  it('waits for sidecar replacement and measures bytes from the verified output snapshot', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'benchmark-hmr-publish-'))
    roots.push(root)
    await writeFile(path.join(root, 'page.js'), 'marker')
    await writeFile(path.join(root, 'page.json'), 'old')
    const publication = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        writeFile(path.join(root, 'page.json'), 'final-sidecar').then(resolve, reject)
      }, 30)
    })
    const snapshot = await settledOutput(root, new AbortController().signal)
    await publication
    expect(snapshot.bytes.get('page.json')).toBe(13)
    expect(snapshot.manifest.files.map(file => file.path)).toEqual(['page.js', 'page.json'])
    await expect(settledOutput(path.join(root, 'missing'), new AbortController().signal, 30)).rejects.toThrow('did not settle')
  })
})
