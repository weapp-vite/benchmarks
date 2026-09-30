import { randomUUID } from 'node:crypto'
import { readFile, writeFile } from 'node:fs/promises'
import process from 'node:process'
import path from 'pathe'
import { startDevProcess } from '../../hmr/dev'
import { repoRoot } from '../../projects'
import { cliCommand } from './command'
import { Deadline } from './deadline'

/** A worker owns only its RPC session; the caller owns builds/watch processes. */
export async function runJsonWorker(options: {
  worker: string
  request: Record<string, unknown>
  root: string
  projectPath: string
  cliPath: string
  timeoutMs: number
}): Promise<unknown> {
  const deadline = new Deadline(options.timeoutMs)
  const id = randomUUID()
  const requestPath = path.join(options.root, `runtime-${id}.request.json`)
  const resultPath = path.join(options.root, `runtime-${id}.result.json`)
  await writeFile(requestPath, JSON.stringify({ ...options.request, resultPath }))
  const env = { ...process.env }
  delete env['TEST']
  delete env['VITEST']
  const loader = options.worker.endsWith('.ts') ? ['--import', 'tsx'] : []
  const child = startDevProcess({ command: process.execPath, args: [...loader, options.worker, requestPath], cwd: repoRoot, env })
  try {
    const result = await deadline.run('project worker', () => child.completion)
    if (result.code !== 0) {
      throw new Error(`Runtime worker exited ${result.code ?? result.signal}; no successful sample accepted`)
    }
    return JSON.parse(await readFile(resultPath, 'utf8'))
  }
  catch (error) {
    await child.stop()
    // No late RPC can escape the killed owned worker. Never close another project/host.
    const cleanup = await cliCommand(options.cliPath, ['close', '--project', options.projectPath], new Deadline(10_000))
    throw new Error(`${String(error)}; scoped close=${cleanup.code}; worker output=${child.getOutput().slice(-4000)}`)
  }
  finally {
    await child.stop()
  }
}
