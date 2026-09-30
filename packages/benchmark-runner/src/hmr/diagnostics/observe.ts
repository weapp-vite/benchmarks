import type { HmrScenario } from '../types'
import type { DiagnosticEdit } from './types'
import { readFile } from 'node:fs/promises'
import { performance } from 'node:perf_hooks'
import path from 'pathe'
import { compareOutputs, outputManifest } from '../../artifacts/manifest'
import { snapshotArtifacts, waitForArtifactChange } from '../artifacts'
import { resolveOutputFiles } from '../runner/scenario'
import { collectProfile, profileFile, profileLines } from './profile'
import { ownedRss } from './resources'

export async function observeEdit(options: {
  root: string
  id: string
  scenario: HmrScenario
  phase: DiagnosticEdit['phase']
  marker: string
  operation: () => Promise<void>
  outcome?: () => Promise<unknown>
  expectedFailure?: boolean
  timeoutMs: number
  pollIntervalMs: number
  signal: AbortSignal
  pid: number | undefined
}): Promise<DiagnosticEdit> {
  const { root, scenario, marker, signal } = options
  const appDir = path.join(root, scenario.appDir)
  const outputDir = path.join(appDir, 'dist')
  const targets = await snapshotArtifacts(resolveOutputFiles(scenario, root))
  const before = await outputManifest(outputDir)
  const profile = profileFile(appDir)
  const beforeProfiles = (await profileLines(profile)).length
  const startedAt = new Date().toISOString()
  const started = performance.now()
  let error: string | undefined
  try {
    signal.throwIfAborted()
    await options.operation()
    if (options.outcome) {
      await options.outcome()
    }
    else {
      await waitForArtifactChange(targets, options.timeoutMs, options.pollIntervalMs, marker, signal)
    }
  }
  catch (caught) {
    error = caught instanceof Error ? caught.message : String(caught)
  }
  const externalMs = performance.now() - started
  const observationStarted = performance.now()
  const evidence = await collectProfile({
    file: profile,
    before: beforeProfiles,
    sourceFile: scenario.sourceFile,
    startedAt,
    root,
    supported: scenario.project.startsWith('weapp-vite-'),
  })
  let changedFiles: string[] | undefined
  let changedBytes: number | undefined
  let removedFiles: string[] | undefined
  try {
    const after = await outputManifest(outputDir)
    const diff = compareOutputs(before, after)
    changedFiles = [...diff.added, ...diff.changed]
    removedFiles = diff.removed
    changedBytes = (await Promise.all(changedFiles.map(async file => (await readFile(path.join(outputDir, file))).byteLength)))
      .reduce((total, bytes) => total + bytes, 0)
  }
  catch (caught) {
    error ??= `Output observation failed: ${caught instanceof Error ? caught.message : String(caught)}`
  }
  const resources = await ownedRss(options.pid)
  return {
    id: options.id,
    scenario: scenario.id,
    project: scenario.project,
    phase: options.phase,
    marker,
    startedAt,
    externalMs,
    ok: !error,
    ...(error ? { error } : {}),
    ...(options.expectedFailure ? { expectedFailure: true } : {}),
    ...(changedFiles ? { changedFiles } : {}),
    ...(changedBytes === undefined ? {} : { changedBytes }),
    ...(removedFiles ? { removedFiles } : {}),
    ...resources,
    observationMs: performance.now() - observationStarted,
    profile: evidence,
  }
}
