import type { ConsistencyMode } from './fixture'
import { mkdir, rm, writeFile } from 'node:fs/promises'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import path from 'pathe'
import { outputManifest } from '../../artifacts/manifest'
import { stageWorkspace } from '../../artifacts/workspace'
import { waitForArtifacts } from '../../hmr/artifacts'
import { startDevProcess } from '../../hmr/dev'
import { repoRoot } from '../../projects'
import { startReportRun } from '../../reports/provenance/run'
import { resolveWechatCliPath } from '../devtools'
import { Deadline } from '../session/deadline'
import { reserveSuite } from '../session/ownership'
import { runtimePreflight } from '../session/preflight'
import { runJsonWorker } from '../session/process'
import { phases } from './fixture'
import { prepareFixture } from './prepare'

export async function runConsistency() {
  const reportDir = path.resolve(process.env['BENCH_REPORT_RUNTIME_CONSISTENCY_DIR'] ?? path.join(repoRoot, 'reports/runtime/consistency'))
  await mkdir(reportDir, { recursive: true })
  const run = await startReportRun('runtime-consistency', { schemaVersion: 1, modes: ['classic', 'stateful'], phases: phases.map(item => item.phase) })
  const cliPath = await resolveWechatCliPath()
  const preflight = cliPath ? await runtimePreflight(cliPath, new Deadline(45_000)) : { status: 'not-installed' }
  const results: Array<Record<string, unknown>> = []
  let release: (() => Promise<void>) | undefined
  try {
    if (preflight.status !== 'passed' || !cliPath) {
      throw new Error(`IDE preflight: ${preflight.status}`)
    }
    release = await reserveSuite()
    for (const mode of ['classic', 'stateful'] as ConsistencyMode[]) {
      const workspace = await stageWorkspace(repoRoot, run.inputs, 'runtime')
      const app = path.join(workspace.root, 'apps/weapp-vite-wevu')
      let dev: ReturnType<typeof startDevProcess> | undefined
      let stage = 'prepare'
      try {
        const fixture = await prepareFixture(app, mode)
        await rm(path.join(app, 'dist'), { recursive: true })
        const env: NodeJS.ProcessEnv = { ...process.env, NODE_ENV: 'development', CI: '1', FORCE_COLOR: '0' }
        delete env['TEST']
        delete env['VITEST']
        stage = 'watch'
        dev = startDevProcess({ command: process.execPath, args: [path.join(app, 'node_modules/weapp-vite/dist/cli.mjs'), 'dev'], cwd: app, env })
        await dev.waitFor(waitForArtifacts([path.join(app, 'dist/app.js'), path.join(app, 'dist/pages/index/index.js')], 30_000, dev.signal), 'fixture output')
        stage = 'IDE worker'
        const worker = fileURLToPath(new URL(import.meta.url.endsWith('.ts') ? './worker.ts' : './worker.mjs', import.meta.url))
        const observed = await runJsonWorker({ worker, root: workspace.root, projectPath: app, cliPath, timeoutMs: 120_000, request: { app, mode, cliPath, reportDir, ...fixture } })
        if (!Array.isArray(observed) || !observed.length || observed.some(row => row.mode !== mode || typeof row.ok !== 'boolean')) {
          throw new Error('Invalid consistency worker result')
        }
        results.push(...observed)
        if (phases.some(item => !observed.some(row => row.ok && row.phase === item.phase))) {
          results.push({ mode, phase: 'coverage', ok: false, error: 'Not all required phases passed' })
        }
      }
      catch (error) {
        results.push({ mode, phase: stage, ok: false, error: String(error) })
      }
      finally {
        // Parent owns the watch process, so a killed RPC worker cannot leak a detached dev process.
        await dev?.stop()
        await writeFile(path.join(reportDir, `${mode}-dev.log`), dev?.getOutput() ?? '')
        await writeFile(path.join(reportDir, `${mode}-artifacts.json`), JSON.stringify(await outputManifest(path.join(app, 'dist')).catch(() => null), null, 2))
        await workspace.dispose()
      }
    }
  }
  catch (error) {
    results.push({ ok: false, error: String(error) })
  }
  finally {
    await release?.()
  }
  await writeFile(path.join(reportDir, 'latest.json'), JSON.stringify({ generatedAt: new Date().toISOString(), provenance: await run.finish(), preflight, results }, null, 2))
  if (results.some(row => !row['ok'])) {
    process.exitCode = 1
  }
}
