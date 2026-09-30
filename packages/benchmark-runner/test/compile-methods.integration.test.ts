import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import process from 'node:process'
import path from 'pathe'
import { expect, it } from 'vitest'
import { startDevProcess } from '../src/hmr/dev'
import { repoRoot } from '../src/projects'

it('builds the emitted runner against both 80-page fixtures and both cache policies', async () => {
  const reportDir = await mkdtemp(path.join(tmpdir(), 'bench-methods-integration-'))
  const env: NodeJS.ProcessEnv = { ...process.env, BENCH_COMPILE_BATCHES: '1', BENCH_COMPILE_ITERATIONS: '1', BENCH_COMPILE_SCALES: 'large', BENCH_COMPILE_FRAMEWORKS: 'native,wevu', BENCH_COMPILE_METHODS_DIR: reportDir }
  delete env['VITEST']
  delete env['TEST']
  const worker = startDevProcess({ command: process.execPath, args: [path.join(repoRoot, 'packages/benchmark-runner/dist/compile/methods.mjs')], cwd: repoRoot, env })
  try {
    const result = await worker.completion
    expect(result.code, worker.getOutput()).toBe(0)
    const report = JSON.parse(await readFile(path.join(reportDir, 'latest.json'), 'utf8'))
    expect(report.provenance.inputStable).toBe(true)
    expect(report.preparations).toHaveLength(2)
    expect(report.preparations.every((row: { ok: boolean }) => row.ok)).toBe(true)
    expect(report.samples).toHaveLength(4)
    expect(report.summaries.every((row: { complete: boolean }) => row.complete)).toBe(true)
    expect(report.samples.filter((row: { primingMs?: number }) => typeof row.primingMs === 'number')).toHaveLength(2)
  }
  finally {
    await worker.stop()
    await rm(reportDir, { recursive: true, force: true })
  }
}, 420_000)
