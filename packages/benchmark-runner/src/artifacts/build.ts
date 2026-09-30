import { spawn } from 'node:child_process'
import process from 'node:process'

export async function runWorkspaceCommand(cwd: string, args: string[]) {
  const command = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
  const child = spawn(command, args, {
    cwd,
    env: { ...process.env, NODE_ENV: 'production', CI: '1', FORCE_COLOR: '0' },
    shell: process.platform === 'win32',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  let output = ''
  const append = (chunk: string) => {
    output = `${output}${chunk}`.slice(-16_000)
  }
  child.stdout.setEncoding('utf8').on('data', append)
  child.stderr.setEncoding('utf8').on('data', append)
  const code = await new Promise<number | null>((resolve, reject) => {
    child.once('error', reject)
    child.once('close', resolve)
  })
  if (code !== 0) {
    throw new Error(`Workspace command ${args.join(' ')} failed (${code}):\n${output}`)
  }
  return output
}

export function runBuild(cwd: string, script: string, args: string[] = []) {
  return runWorkspaceCommand(cwd, ['run', script, ...args])
}
