import type { HmrScenario } from '../types'
import { rm } from 'node:fs/promises'
import process from 'node:process'
import path from 'pathe'
import { waitForArtifacts } from '../artifacts'
import { startDevProcess } from '../dev'
import { profileFile } from '../diagnostics/profile'
import { resolveOutputFiles } from './scenario'

export async function launchWatchProject(options: { root: string, scenarios: HmrScenario[], timeoutMs: number, profile: boolean }) {
  const project = options.scenarios[0]!
  const appDir = path.join(options.root, project.appDir)
  await rm(path.join(appDir, 'dist'), { recursive: true, force: true })
  await rm(profileFile(appDir), { force: true })
  const targets = [...new Set(options.scenarios.flatMap(scenario => resolveOutputFiles(scenario, options.root)))]
  const dev = startDevProcess({
    command: process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm',
    args: ['run', 'dev'],
    cwd: appDir,
    env: {
      ...process.env,
      NODE_ENV: 'development',
      VITEST: undefined,
      TEST: undefined,
      CI: '1',
      FORCE_COLOR: '0',
      WEAPP_VITE_HMR_PROFILE_JSON: options.profile ? '1' : '0',
    },
  })
  try {
    if (project.readyPattern) {
      await dev.waitForOutput(project.readyPattern, `${project.projectLabel} dev ready`, options.timeoutMs)
    }
    await dev.waitFor(waitForArtifacts(targets, options.timeoutMs, dev.signal), `${project.projectLabel} initial output`)
    return dev
  }
  catch (error) {
    await dev.stop()
    throw error
  }
}
