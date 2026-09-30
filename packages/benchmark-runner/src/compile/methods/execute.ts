import process from 'node:process'
import path from 'pathe'
import { startDevProcess } from '../../hmr/dev'

export async function measureBuild(app: string, timeoutMs = 120_000) {
  const env: NodeJS.ProcessEnv = { ...process.env, NODE_ENV: 'production', CI: '1', FORCE_COLOR: '0' }
  delete env['VITEST']
  delete env['TEST']
  const started = performance.now()
  const child = startDevProcess({ command: process.execPath, args: [path.join(app, 'node_modules/weapp-vite/dist/cli.mjs'), 'build'], cwd: app, env })
  let timer: ReturnType<typeof setTimeout> | undefined
  try {
    const result = await Promise.race([child.completion, new Promise<never>((_, reject) => {
      timer = setTimeout(() => reject(new Error('Build process deadline exceeded')), timeoutMs)
    })])
    const durationMs = performance.now() - started
    if (result.code !== 0) {
      throw new Error(`Build exited ${result.code ?? result.signal}: ${child.getOutput().slice(-4000)}`)
    }
    return durationMs
  }
  finally {
    clearTimeout(timer)
    await child.stop()
  }
}
