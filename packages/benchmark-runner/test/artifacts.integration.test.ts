import { execFile } from 'node:child_process'
import { cp, mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import path from 'pathe'
import { expect, it } from 'vitest'
import { runBuild } from '../src/artifacts/build'
import { assertOutputs, outputManifest, removeManagedOutputs } from '../src/artifacts/manifest'
import { assertStaticReferences } from '../src/artifacts/references'
import { stageWorkspace } from '../src/artifacts/workspace'
import { snapshotArtifacts, waitForArtifactChange, waitForArtifacts } from '../src/hmr/artifacts'
import { startDevProcess } from '../src/hmr/dev'
import { repoRoot } from '../src/projects'
import { captureInputs } from '../src/reports/provenance/inputs'

const exec = promisify(execFile)

it('preserves production outputs across dev, cache, route, component and chunk transitions', async () => {
  const inputs = await captureInputs(repoRoot)
  const workspace = await stageWorkspace(repoRoot, inputs, 'transitions')
  const app = path.join(workspace.root, 'apps/weapp-vite-native')
  const output = path.join(app, 'dist')
  const config = path.join(app, 'weapp-vite.config.js')
  try {
    await expect(stageWorkspace(repoRoot, inputs, 'transitions')).rejects.toThrow('already in use')
    await rm(path.join(app, 'src'), { recursive: true })
    await rm(path.join(app, 'weapp-vite.config.ts'))
    await cp(fileURLToPath(new URL('./fixtures/artifacts', import.meta.url)), app, { recursive: true })
    await runBuild(app, 'build')
    const baseline = await outputManifest(output)
    await assertStaticReferences(output, baseline)

    async function devThenBuild() {
      const required = ['app.js', 'app.json', 'pages/home/index.js', 'pages/detail/index.js'].map(file => path.join(output, file))
      const before = await snapshotArtifacts(required)
      const dev = startDevProcess({
        command: process.execPath,
        args: [path.join(repoRoot, 'apps/weapp-vite-native/node_modules/weapp-vite/dist/cli.mjs'), 'dev'],
        cwd: app,
        env: { ...process.env, NODE_ENV: 'development', CI: '1', FORCE_COLOR: '0' },
      })
      try {
        // CI/Vitest suppresses the informational CLI banner; observe emitted output instead.
        await dev.waitFor(waitForArtifactChange(before, 30_000), 'initial dev output')
        await dev.waitFor(waitForArtifacts(required, 30_000), 'complete dev output')
      }
      finally {
        await dev.stop()
      }
      await runBuild(app, 'build')
      assertOutputs(baseline, await outputManifest(output))
    }

    await rm(output, { recursive: true })
    await devThenBuild() // dev -> build
    await devThenBuild() // build -> dev -> build

    const turbo = path.join(repoRoot, 'node_modules/turbo/bin/turbo')
    const turboArgs = [turbo, 'run', 'build', '--filter=@benchmarks/weapp-vite-native', '--cache-dir=.artifact-cache', '--env-mode=loose']
    const options = { cwd: workspace.root, env: { ...process.env, NODE_ENV: 'production', CI: '1', FORCE_COLOR: '0' } }
    await exec(process.execPath, [...turboArgs, '--force'], options)
    await rm(output, { recursive: true })
    const restored = await exec(process.execPath, turboArgs, options)
    expect(`${restored.stdout}${restored.stderr}`).toMatch(/cache hit|FULL TURBO/)
    assertOutputs(baseline, await outputManifest(output))
    await writeFile(path.join(output, 'stale-chunk.js'), 'old output')
    const polluted = await outputManifest(output)
    expect(() => assertOutputs(baseline, polluted)).toThrow('stale-chunk.js')
    await exec(process.execPath, turboArgs, options)
    // A cache hit is not accepted as proof; force production and compare actual files.
    await runBuild(app, 'build')
    assertOutputs(baseline, await outputManifest(output))

    await writeFile(config, 'import { defineConfig } from \'weapp-vite\'\nexport default defineConfig({ build: { emptyOutDir: false }, weapp: { srcRoot: \'src\', autoRoutes: false } })\n')
    const userAsset = path.join(output, 'user-owned.txt')
    await writeFile(userAsset, 'user data must survive')
    await removeManagedOutputs(output, baseline)
    await runBuild(app, 'build')
    assertOutputs(baseline, await outputManifest(output, ['user-owned.txt']))
    expect(await readFile(userAsset, 'utf8')).toBe('user data must survive')

    // Move a component and page into a subpackage; remove the old shared chunk dependency.
    await mkdir(path.join(app, 'src/packages'), { recursive: true })
    await rename(path.join(app, 'src/pages/detail'), path.join(app, 'src/packages/detail'))
    await rename(path.join(app, 'src/components/badge'), path.join(app, 'src/components/moved'))
    await writeFile(path.join(app, 'src/pages/home/index.json'), JSON.stringify({ usingComponents: { badge: '../../components/moved/index' } }))
    await writeFile(path.join(app, 'src/app.json'), JSON.stringify({ pages: ['pages/home/index'], subPackages: [{ root: 'packages/detail', pages: ['index'] }] }))
    await writeFile(path.join(app, 'src/packages/detail/index.js'), '/* global Page */\nPage({ data: { label: "moved" } })\n')
    await removeManagedOutputs(output, baseline)
    await runBuild(app, 'build')
    const transitioned = await outputManifest(output, ['user-owned.txt'])
    await assertStaticReferences(output, transitioned)
    expect(transitioned.files.some(file => file.path.startsWith('pages/detail/') || file.path.startsWith('components/badge/'))).toBe(false)
    expect(transitioned.files.some(file => file.path.startsWith('packages/detail/'))).toBe(true)
    await removeManagedOutputs(output, transitioned)
    await runBuild(app, 'build')
    assertOutputs(transitioned, await outputManifest(output, ['user-owned.txt']))
    expect(await readFile(userAsset, 'utf8')).toBe('user data must survive')

    await writeFile(config, (await readFile(config, 'utf8')).replace('autoRoutes: false', 'autoRoutes: false, chunks: { preserveModules: [\'shared/**\'] }'))
    await removeManagedOutputs(output, transitioned)
    await runBuild(app, 'build')
    const preserved = await outputManifest(output, ['user-owned.txt'])
    expect(preserved.files.some(file => file.path === 'shared/label.js')).toBe(true)
    expect(preserved.fingerprint).not.toBe(transitioned.fingerprint)
    await assertStaticReferences(output, preserved)
    await removeManagedOutputs(output, preserved)
    await runBuild(app, 'build')
    assertOutputs(preserved, await outputManifest(output, ['user-owned.txt']))
    expect(await readFile(userAsset, 'utf8')).toBe('user data must survive')
  }
  finally {
    await workspace.dispose()
  }
}, 120_000)
