import type { HmrScenario } from '../types'
import type { DiagnosticEdit } from './types'
import { performance } from 'node:perf_hooks'
import path from 'pathe'
import { compareOutputs } from '../../artifacts/manifest'
import { snapshotArtifacts, waitForArtifactChange } from '../artifacts'
import { resolveOutputFiles } from '../runner/scenario'
import { settledOutput } from './output'
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
  observeResources?: boolean
}): Promise<DiagnosticEdit> {
  const preparationStarted = performance.now()
  const { root, scenario, marker, signal } = options
  const appDir = path.join(root, scenario.appDir)
  const outputDir = path.join(appDir, 'dist')
  const targets = await snapshotArtifacts(resolveOutputFiles(scenario, root))
  const before = await settledOutput(outputDir, signal)
  const profile = profileFile(appDir)
  const beforeProfiles = (await profileLines(profile)).length
  const startedAt = new Date().toISOString()
  const started = performance.now()
  const preparationMs = started - preparationStarted
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
    const after = await settledOutput(outputDir, signal)
    const diff = compareOutputs(before.manifest, after.manifest)
    changedFiles = [...diff.added, ...diff.changed]
    removedFiles = diff.removed
    changedBytes = changedFiles.reduce((total, file) => total + after.bytes.get(file)!, 0)
  }
  catch (caught) {
    error ??= `Output observation failed: ${caught instanceof Error ? caught.message : String(caught)}`
  }
  const resources = options.observeResources ? await ownedRss(options.pid) : {}
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
    resourceSampled: Boolean(options.observeResources),
    preparationMs,
    observationMs: performance.now() - observationStarted + preparationMs,
    profile: evidence,
  }
}
