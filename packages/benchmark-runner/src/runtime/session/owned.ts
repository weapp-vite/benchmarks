import type { MiniProgram } from '../types'
import type { Deadline } from './deadline'
import { Launcher } from '@weapp-vite/miniprogram-automator'
import { cliCommand } from './command'
import { Deadline as CleanupDeadline } from './deadline'
import { onceDispose, unusedPort } from './ownership'
import { installedIdeVersion } from './version'

export async function openOwnedProject(cliPath: string, projectPath: string, deadline: Deadline) {
  const port = await unusedPort()
  let program: MiniProgram | undefined
  let launched = false
  const dispose = onceDispose(async () => {
    // Disconnect the owned transport; Tool.close/App.exit may affect shared IDE state.
    program?.disconnect()
    if (launched) {
      const result = await cliCommand(cliPath, ['close', '--project', projectPath], new CleanupDeadline(10_000), 10_000)
      if (result.code !== 0) {
        throw new Error(`Owned project close failed: ${result.code}`)
      }
    }
  })
  try {
    // Explicit devtools provider prevents an inherited headless environment from forging IDE evidence.
    // projectPath is exclusively staged by this suite; it is never a user's original project.
    const timeout = deadline.remaining('launch', 60_000)
    launched = true
    const connected: MiniProgram = await new Launcher().launch({ platform: 'wechat', runtimeProvider: 'devtools', cliPath, projectPath, port, timeout, trustProject: true })
    program = connected
    deadline.remaining('launch completed')
    const rawHost = await deadline.run('host metadata', () => connected.send('Tool.getInfo'), 5000)
    const host = Object.fromEntries(Object.entries(rawHost && typeof rawHost === 'object' ? rawHost : {})
      .filter(([key, value]) => ['version', 'SDKVersion', 'platform', 'compileMode', 'toolVersion'].includes(key) && typeof value === 'string')) as Record<string, string>
    const installedVersion = await installedIdeVersion(cliPath)
    if (host['version'] !== installedVersion || !host['SDKVersion']) {
      throw new Error(`Connected host does not match selected installation: ${JSON.stringify(host)}; installed=${installedVersion}`)
    }
    return { program: connected, host, port, dispose }
  }
  catch (error) {
    try {
      await dispose()
    }
    catch (cleanupError) {
      throw new AggregateError([error, cleanupError], 'IDE launch and scoped cleanup failed')
    }
    throw error
  }
}
