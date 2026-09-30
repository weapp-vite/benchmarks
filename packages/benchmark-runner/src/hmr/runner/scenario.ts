import type { HmrSample, HmrScenario } from '../types'
import { readFile, writeFile } from 'node:fs/promises'
import { performance } from 'node:perf_hooks'
import process from 'node:process'
import path from 'pathe'
import { snapshotArtifacts, waitForArtifactChange } from '../artifacts'
import { createFailedSample, createSampleFromArtifact } from './samples'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function resolveOutputFiles(scenario: HmrScenario, root: string) {
  return (scenario.outputFiles ?? []).map(file => path.join(root, scenario.appDir, file))
}

export async function restoreSource(options: {
  root: string
  scenario: HmrScenario
  filePath: string
  originalSource: string
  timeoutMs: number
  pollIntervalMs: number
  marker: string
  signal: AbortSignal
  waitFor: <T>(task: Promise<T>, description: string) => Promise<T>
}) {
  const { root, scenario, filePath, originalSource, timeoutMs, pollIntervalMs, marker, waitFor, signal } = options
  const currentSource = await readFile(filePath, 'utf8').catch(() => '')
  if (currentSource === originalSource) {
    return
  }
  const outputFiles = resolveOutputFiles(scenario, root)
  const beforeArtifacts = outputFiles.length ? await snapshotArtifacts(outputFiles) : []
  await writeFile(filePath, originalSource, 'utf8')
  if (beforeArtifacts.length) {
    await waitFor(waitForArtifactChange(beforeArtifacts, timeoutMs, pollIntervalMs, undefined, signal), 'restored output')
    const deadline = Date.now() + timeoutMs
    while (Date.now() < deadline) {
      signal.throwIfAborted()
      const artifacts = await snapshotArtifacts(outputFiles)
      if (artifacts.every(file => file.exists && !file.content?.includes(marker))) {
        return
      }
      await sleep(pollIntervalMs)
    }
    throw new Error(`Restoration still contains edit marker: ${scenario.id}`)
  }
}

export async function runScenario(options: {
  root: string
  runId: string
  scenario: HmrScenario
  iterations: number
  timeoutMs: number
  pollIntervalMs: number
  iterationAttempts: number
  signal: AbortSignal
  waitFor: <T>(task: Promise<T>, description: string) => Promise<T>
}) {
  const { root, runId, scenario, iterations, timeoutMs, pollIntervalMs, iterationAttempts, waitFor, signal } = options
  const sourcePath = path.join(root, scenario.appDir, scenario.sourceFile)
  const originalSource = await readFile(sourcePath, 'utf8')
  const samples: HmrSample[] = []
  const outputFiles = resolveOutputFiles(scenario, root)
  let lastMarker = ''

  try {
    for (let iteration = 1; iteration <= iterations; iteration += 1) {
      process.stdout.write(`[hmr] ${scenario.label}: iteration ${iteration}\n`)
      let lastError: unknown
      const attemptDurationsMs: number[] = []
      for (let attempt = 1; attempt <= iterationAttempts; attempt += 1) {
        const marker = `${runId}-${scenario.id}-${iteration}-${attempt}`
        lastMarker = marker
        const nextSource = scenario.applyMarker(originalSource, marker)
        const beforeArtifacts = await snapshotArtifacts(outputFiles)
        const started = performance.now()
        try {
          signal.throwIfAborted()
          if (nextSource === originalSource || !nextSource.includes(marker)) {
            throw new Error(`Scenario did not apply its marker: ${scenario.id}`)
          }
          await writeFile(sourcePath, nextSource, 'utf8')
          await waitFor(waitForArtifactChange(beforeArtifacts, timeoutMs, pollIntervalMs, marker, signal), `${scenario.id} edit ${iteration}`)
          const wallMs = performance.now() - started
          attemptDurationsMs.push(wallMs)
          samples.push({ ...createSampleFromArtifact({
            scenario,
            iteration,
            attempts: attempt,
            attemptDurationsMs,
            wallMs,
          }), editId: marker, marker, phase: iteration === 1 ? 'first' : 'continuous' })
          lastError = undefined
          break
        }
        catch (error) {
          attemptDurationsMs.push(performance.now() - started)
          lastError = error
          if (attempt < iterationAttempts) {
            process.stdout.write(`[hmr] ${scenario.label}: iteration ${iteration} retry ${attempt + 1}\n`)
          }
        }
      }
      if (lastError) {
        samples.push({ ...createFailedSample({
          scenario,
          iteration,
          attempts: iterationAttempts,
          attemptDurationsMs,
          error: lastError,
        }), editId: lastMarker, marker: lastMarker, phase: iteration === 1 ? 'first' : 'continuous' })
        break // Preserve the first terminal failure; do not keep timing a broken watch session.
      }
      await sleep(100)
    }
  }
  finally {
    const started = performance.now()
    let error: string | undefined
    try {
      await restoreSource({ root, scenario, filePath: sourcePath, originalSource, timeoutMs, pollIntervalMs, marker: lastMarker, waitFor, signal })
      if (await readFile(sourcePath, 'utf8') !== originalSource) {
        error = 'Source restoration bytes do not match the original'
      }
    }
    catch (caught) {
      error = caught instanceof Error ? caught.message : String(caught)
    }
    const last = samples.at(-1)
    if (last) {
      last.restoration = { ok: !error, durationMs: performance.now() - started, ...(error ? { error } : {}) }
    }
  }

  return samples
}
