import type { Framework, Scale } from './schedule'
import { mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'pathe'
import { runBuild, runWorkspaceCommand } from '../../artifacts/build'
import { outputManifest } from '../../artifacts/manifest'
import { scales } from './schedule'

export function scaleSources(framework: Framework, scale: Scale) {
  const spec = scales[scale]
  const files: Record<string, string> = {}
  const allPages = Array.from({ length: spec.pages }, (_, i) => `${i < spec.pages / 2 ? 'pages' : 'feature'}/p${i}/index`)
  const config = { pages: allPages.filter(route => route.startsWith('pages/')), subPackages: [{ root: 'feature', pages: allPages.filter(route => route.startsWith('feature/')).map(route => route.slice(8)) }] }
  if (framework === 'native') {
    files['app.js'] = '/* global App */\nApp({})\n'
    files['app.json'] = JSON.stringify(config)
    files['app.wxss'] = '.probe { color: #246; }\n'
  }
  else {
    files['app.vue'] = `<script setup lang="ts">\ndefineAppJson(${JSON.stringify(config)})\n</script>\n`
  }
  for (let i = 0; i < spec.shared; i++) {
    files[`shared/m${i}.${framework === 'native' ? 'js' : 'ts'}`] = `export const label = 'shared-${i}'\nexport const values = ${JSON.stringify(Array.from({ length: 40 }, (_, j) => i * 40 + j))}\n`
  }
  for (let i = 0; i < spec.components; i++) {
    const location = `components/c${i}/index`
    const script = `import { label, values } from '../../shared/m${i % spec.shared}.js'\n`

    if (framework === 'native') {
      files[`${location}.js`] = `/* global Component */\n${script}Component({ data: { label, total: values.reduce((a, b) => a + b, 0) } })\n`
      files[`${location}.json`] = JSON.stringify({ component: true })
      files[`${location}.wxml`] = '<view class="probe">{{label}}:{{total}}</view>\n'
      files[`${location}.wxss`] = '.probe { color: #246; }\n'
    }
    else {
      files[`${location}.vue`] = `<script setup lang="ts">\n${script}const total = values.reduce((a: number, b: number) => a + b, 0)\ndefineComponentJson({ component: true })\n</script>\n<template><view class="probe">{{ label }}:{{ total }}</view></template>\n<style>.probe { color: #246; }</style>\n`
    }
  }
  for (const [i, route] of allPages.entries()) {
    const components = { cell: `/components/c${i % spec.components}/index` }
    const imports = `import { label } from '../../shared/m${i % spec.shared}.js'\n`
    if (framework === 'native') {
      files[`${route}.js`] = `/* global Page */\n${imports}Page({ data: { label, index: ${i} } })\n`
      files[`${route}.json`] = JSON.stringify({ usingComponents: components })
      files[`${route}.wxml`] = '<view><text>{{label}}:{{index}}</text><cell /></view>\n'
    }
    else {
      files[`${route}.vue`] = `<script setup lang="ts">\n${imports}definePageJson({ usingComponents: ${JSON.stringify(components)} })\n</script>\n<template><view><text>{{ label }}:${i}</text><cell /></view></template>\n`
    }
  }
  return { files, allPages, spec }
}

export async function prepareScale(app: string, framework: Framework, scale: Scale) {
  const fixture = scaleSources(framework, scale)
  await rm(path.join(app, 'src'), { recursive: true, force: true })
  for (const [relative, content] of Object.entries(fixture.files)) {
    const file = path.join(app, 'src', relative)
    await mkdir(path.dirname(file), { recursive: true })
    await writeFile(file, content)
  }
  await writeFile(path.join(app, 'weapp-vite.config.ts'), `import { defineConfig } from 'weapp-vite/config'\nexport default defineConfig({ cacheDir: '.bench-cache/vite', weapp: { srcRoot: 'src', autoRoutes: false } })\n`)
  await runBuild(app, 'lint', ['--fix'])
  await runWorkspaceCommand(app, ['exec', 'stylelint', framework === 'native' ? 'src/**/*.wxss' : 'src/**/*.vue'])
  const source = await outputManifest(path.join(app, 'src'))
  return { ...fixture, sourceHash: source.fingerprint }
}
