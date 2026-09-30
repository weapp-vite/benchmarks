import type { BenchmarkProject } from '../../projects'
import type { RuntimeSample } from '../types'
import { fileURLToPath } from 'node:url'
import path from 'pathe'
import { runJsonWorker } from './process'

export async function collectInOwnedWorker(project: BenchmarkProject, iterations: number, cliPath: string, root: string, timeoutMs: number): Promise<RuntimeSample[]> {
  const worker = fileURLToPath(new URL(import.meta.url.endsWith('.ts') ? './worker.ts' : './worker.mjs', import.meta.url))
  const samples = await runJsonWorker({
    worker,
    request: { project, iterations, cliPath, root, timeoutMs: Math.max(1, timeoutMs - 15_000) },
    root,
    projectPath: path.join(root, project.runtimeProjectDir),
    cliPath,
    timeoutMs,
  }) as RuntimeSample[]
  if (!Array.isArray(samples) || samples.length !== iterations || samples.some(sample => sample.project !== project.id)) {
    throw new Error('Invalid runtime worker result')
  }
  return samples
}
