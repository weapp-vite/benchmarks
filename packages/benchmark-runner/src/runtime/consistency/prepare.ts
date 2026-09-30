import type { ConsistencyMode } from './fixture'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'pathe'
import { runBuild, runWorkspaceCommand } from '../../artifacts/build'
import { fixtureSource, phases } from './fixture'

export async function prepareFixture(app: string, mode: ConsistencyMode) {
  const pageFile = path.join(app, 'src/pages/index/index.vue')
  await rm(path.join(app, 'src'), { recursive: true })
  await mkdir(path.dirname(pageFile), { recursive: true })
  await writeFile(path.join(app, 'src/app.vue'), `<script setup lang="ts">\ndefineAppJson({ pages: ['pages/index/index'] })\n</script>\n`)
  await writeFile(path.join(app, 'weapp-vite.config.ts'), `import { defineConfig } from 'weapp-vite/config'\nexport default defineConfig({ weapp: { srcRoot: 'src', autoRoutes: false, hmr: { runtime: '${mode === 'stateful' ? 'stateful-experimental' : 'classic'}' } } })\n`)
  const config = JSON.parse(await readFile(path.join(app, 'project.config.json'), 'utf8'))
  config.setting = { ...config.setting, compileHotReLoad: mode === 'stateful', urlCheck: false }
  await writeFile(path.join(app, 'project.config.json'), JSON.stringify(config))
  await writeFile(path.join(app, 'project.private.config.json'), JSON.stringify({ setting: config.setting }))
  const sources: Record<string, string> = {}
  for (const item of phases) {
    await writeFile(pageFile, fixtureSource(item.marker, mode === 'classic' ? item.marker : 'initial', mode === 'classic' ? item.color : '#123'))
    await runBuild(app, 'lint', ['--fix'])
    await runWorkspaceCommand(app, ['exec', 'stylelint', 'src/**/*.vue'])
    sources[item.phase] = await readFile(pageFile, 'utf8')
  }
  await writeFile(pageFile, sources['initial']!)
  await runBuild(app, 'build')
  await runBuild(app, 'typecheck')
  return { sources, pageFile }
}
