import path from 'pathe'
import { expect, it } from 'vitest'
import { assertOutputs, outputManifest } from '../src/artifacts/manifest'
import { productionArtifacts } from '../src/artifacts/production'
import { repoRoot } from '../src/projects'
import { captureInputs } from '../src/reports/provenance/inputs'
import { analyzeProject } from '../src/size/collect'
import { sizeProjects } from '../src/size/projects'

it('verifies all seven production toolchains, protects original outputs and reproduces path-sensitive Mpx builds', async () => {
  const inputs = await captureInputs(repoRoot)
  const originals = await Promise.all(sizeProjects.map(project => outputManifest(path.join(repoRoot, project.appDir, project.outputDir)).catch(() => undefined)))
  const first = await productionArtifacts(repoRoot, inputs, sizeProjects)
  try {
    for (const project of sizeProjects) {
      const manifest = first.artifacts.find(item => item.project === project.id)!.manifest
      const result = await analyzeProject(project, { root: first.root, manifest })
      expect(result.totals.files).toBe(manifest.files.length)
      expect(result.totals.bytes).toBeGreaterThan(0)
    }
  }
  finally {
    await first.dispose()
  }
  for (const [index, project] of sizeProjects.entries()) {
    const original = originals[index]
    if (original) {
      assertOutputs(original, await outputManifest(path.join(repoRoot, project.appDir, project.outputDir)))
    }
  }
  const mpx = sizeProjects.find(project => project.id === 'mpx')!
  const second = await productionArtifacts(repoRoot, inputs, [mpx])
  try {
    expect(second.root).toBe(first.root)
    assertOutputs(first.artifacts.find(item => item.project === 'mpx')!.manifest, second.artifacts[0]!.manifest)
  }
  finally {
    await second.dispose()
  }
}, 300_000)
