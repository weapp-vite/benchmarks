import process from 'node:process'
import { startDevProcess } from '../hmr/dev'

export async function runWorkspaceCommand(cwd: string, args: string[], timeoutMs = 120_000) {
  const child = startDevProcess({
    command: process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm',
    args,
    cwd,
    env: { ...process.env, NODE_ENV: 'production', CI: '1', FORCE_COLOR: '0' },
  })
  let timer: ReturnType<typeof setTimeout> | undefined
  try {
    const result = await Promise.race([
      child.completion,
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error(`Workspace command ${args.join(' ')} timed out after ${timeoutMs}ms:\n${child.getOutput().slice(-4000)}`)), timeoutMs)
      }),
    ])
    if (result.code !== 0) {
      throw new Error(`Workspace command ${args.join(' ')} failed (${result.code ?? result.signal}):\n${child.getOutput()}`)
    }
    return child.getOutput()
  }
  finally {
    clearTimeout(timer)
    await child.stop()
  }
}

export function runBuild(cwd: string, script: string, args: string[] = []) {
  return runWorkspaceCommand(cwd, ['run', script, ...args])
}
