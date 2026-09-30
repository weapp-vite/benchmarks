import type { CapabilityPreset } from './fixtures'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'pathe'
import { runBuild, runWorkspaceCommand } from '../../artifacts/build'
import { assertOutputs, outputManifest } from '../../artifacts/manifest'
import { assertStaticReferences } from '../../artifacts/references'
import { hash, stableJson } from '../../reports/provenance/hash'
import { analyzeProject } from '../collect'
import { assertCapabilityBudget, partitionPackages } from './budgets'
import { applicationConfig, applicationSources, applicationTiers, configSource } from './fixtures'

export async function measureApplication(root: string, tier: typeof applicationTiers[number], preset: CapabilityPreset) {
  const appDir = 'apps/weapp-vite-wevu'
  const app = path.join(root, appDir)
  const source = path.join(app, 'src')
  for (const generated of ['src', 'dist', '.weapp-vite']) {
    await rm(path.join(app, generated), { recursive: true, force: true })
  }
  const sources = applicationSources(tier)
  for (const [relative, contents] of Object.entries(sources)) {
    const file = path.join(source, relative)
    await mkdir(path.dirname(file), { recursive: true })
    await writeFile(file, contents)
  }
  await writeFile(path.join(app, 'weapp-vite.config.ts'), configSource(preset))
  // Generated fixtures use the same repository lint configuration as real apps.
  await runBuild(app, 'lint', ['--fix'])
  await runWorkspaceCommand(app, ['exec', 'stylelint', 'src/**/*.vue', '--allow-empty-input'])
  const inputFiles = await Promise.all(Object.keys(sources).sort().map(async file => ({
    path: file,
    sha256: hash(await readFile(path.join(source, file))),
  })))
  const sourceHash = hash(stableJson(inputFiles))
  await runBuild(app, 'build')
  const output = path.join(app, 'dist')
  const first = await outputManifest(output)
  await assertStaticReferences(output, first)
  await rm(output, { recursive: true, force: true })
  await runBuild(app, 'build')
  const manifest = await outputManifest(output)
  assertOutputs(first, manifest)
  await assertStaticReferences(output, manifest)
  // Both presets share identical source; validate its generated Vue types once per tier.
  if (preset === 'standard') {
    await runBuild(app, 'typecheck')
  }
  const size = await analyzeProject({ id: tier.id, label: tier.label, appDir, outputDir: 'dist', runtimeFiles: [] }, { root, manifest })
  const appJson = JSON.parse(await readFile(path.join(output, 'app.json'), 'utf8')) as { subPackages?: Array<{ root: string }>, subpackages?: Array<{ root: string }> }
  const roots = (appJson.subPackages ?? appJson.subpackages ?? []).map(item => item.root.replace(/\/$/, ''))
  if (!roots.includes('feature')) {
    throw new Error('Capability subpackage is missing from emitted app.json')
  }
  const packages = partitionPackages(size.files, roots)
  assertCapabilityBudget(packages)
  return { tier: tier.id, label: tier.label, preset, sourceHash, inputFiles, config: applicationConfig(preset), manifest, size, packages }
}

export async function collectApplications(root: string) {
  const rows: Array<Awaited<ReturnType<typeof measureApplication>>> = []
  for (const tier of applicationTiers) {
    const standard = await measureApplication(root, tier, 'standard')
    const performance = await measureApplication(root, tier, 'performance')
    if (standard.sourceHash !== performance.sourceHash) {
      throw new Error(`Preset sources differ: ${tier.id}`)
    }
    rows.push(standard, performance)
  }
  return rows
}
