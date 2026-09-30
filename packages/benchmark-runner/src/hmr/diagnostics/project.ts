import type { HmrScenario } from '../types'
import type { DiagnosticEdit, HmrDiagnostics } from './types'
import { readFile, rm, writeFile } from 'node:fs/promises'
import { performance } from 'node:perf_hooks'
import { setTimeout } from 'node:timers/promises'
import path from 'pathe'
import { launchWatchProject } from '../runner/watch'
import { batchOperation } from './batch'
import { observeEdit } from './observe'
import { diagnosticOperation } from './operations'

export async function runDiagnosticProject(options: {
  root: string
  runId: string
  scenarios: HmrScenario[]
  timeoutMs: number
  pollIntervalMs: number
  longWatchMs: number
  replay?: DiagnosticEdit[]
}) {
  const { root, runId, scenarios, timeoutMs, pollIntervalMs, longWatchMs } = options
  const edits: DiagnosticEdit[] = []
  const originals = new Map(await Promise.all(scenarios.map(async scenario => [scenario.id, await readFile(path.join(root, scenario.appDir, scenario.sourceFile), 'utf8')] as const)))
  let dev: Awaited<ReturnType<typeof launchWatchProject>> | undefined
  const failures: string[] = []
  let ordinal = 0
  const lastMarkers = new Map<string, string>()
  const longWatch: HmrDiagnostics['longWatch'] = { requestedMs: longWatchMs, elapsedMs: 0, completedEdits: 0 }
  async function perform(scenario: HmrScenario, phase: DiagnosticEdit['phase'], replay?: DiagnosticEdit) {
    ordinal += 1
    const id = replay?.id ?? `${runId}-${scenario.id}-${phase}-${ordinal}`
    const marker = replay?.marker ?? (phase === 'restore' || phase === 'batch-restore' ? lastMarkers.get(scenario.id) ?? id : id)
    let edit: DiagnosticEdit
    try {
      if (!dev) {
        throw new Error('Diagnostic watch process is unavailable')
      }
      const operation = phase === 'batch' || phase === 'batch-restore'
        ? batchOperation({ root, scenarios, originals, marker, restore: phase === 'batch-restore', timeoutMs, signal: dev.signal })
        : await diagnosticOperation({ root, scenario, original: originals.get(scenario.id)!, phase, marker, timeoutMs, dev })
      edit = await observeEdit({ root, id, scenario, phase, marker, timeoutMs, pollIntervalMs, signal: dev.signal, pid: dev.pid, ...operation })
    }
    catch (error) {
      edit = { id, scenario: scenario.id, project: scenario.project, phase, marker, startedAt: new Date().toISOString(), ok: false, error: String(error), observationMs: 0, profile: { status: 'missing', reason: 'Edit observation failed before profile collection', events: [], readMs: 0 } }
    }
    edits.push(edit)
    if (phase !== 'restore' && phase !== 'batch-restore') {
      lastMarkers.set(scenario.id, marker)
    }
    return edit.ok
  }
  try {
    dev = await launchWatchProject({ root, scenarios, timeoutMs, profile: true })
    if (options.replay) {
      for (const edit of options.replay) {
        const scenario = scenarios.find(item => item.id === edit.scenario)
        if (!scenario) {
          throw new Error(`Unknown replay scenario: ${edit.scenario}`)
        }
        if (!await perform(scenario, edit.phase, edit)) {
          break
        }
      }
    }
    else {
      for (const scenario of scenarios) {
        for (const phase of ['first', 'continuous', 'restore'] as const) {
          if (!await perform(scenario, phase)) {
            return { edits, longWatch, failures }
          }
        }
      }
      const primary = scenarios[0]!
      const started = performance.now()
      while (performance.now() - started < longWatchMs) {
        if (!await perform(primary, 'long-watch')) {
          break
        }
        longWatch.completedEdits += 1
        await setTimeout(250, undefined, { signal: dev.signal })
      }
      longWatch.elapsedMs = longWatchMs > 0 ? performance.now() - started : 0
      const rss = edits.filter(edit => edit.phase === 'long-watch').flatMap(edit => edit.rssKiB === undefined ? [] : [edit.rssKiB])
      if (rss.length) {
        longWatch.rssStartKiB = rss[0]!
        longWatch.rssEndKiB = rss.at(-1)!
        longWatch.rssPeakKiB = Math.max(...rss)
      }
      if (longWatch.completedEdits) {
        await perform(primary, 'restore')
      }
      for (const phase of ['batch', 'batch-restore', 'failure', 'repair', 'rename', 'recreate', 'delete', 'recreate', 'burst', 'restore'] as const) {
        if (!await perform(primary, phase)) {
          return { edits, longWatch, failures }
        }
      }
    }
    return { edits, longWatch, failures }
  }
  catch (error) {
    failures.push(String(error))
    return { edits, longWatch, failures }
  }
  finally {
    // A cleanup failure must remain visible and must never skip owned-process shutdown.
    try {
      for (const scenario of scenarios) {
        const file = path.join(root, scenario.appDir, scenario.sourceFile)
        try {
          await writeFile(file, originals.get(scenario.id)!)
          await rm(`${file}.bench-moved`, { force: true })
          if (await readFile(file, 'utf8') !== originals.get(scenario.id)) {
            failures.push(`Restored bytes do not match original source (${scenario.id})`)
          }
        }
        catch (error) {
          failures.push(`Source cleanup failed (${scenario.id}): ${String(error)}`)
        }
      }
    }
    finally {
      await dev?.stop().catch(error => failures.push(`Owned process shutdown failed: ${String(error)}`))
    }
  }
}
