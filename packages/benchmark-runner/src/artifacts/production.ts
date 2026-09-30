import type { InputSnapshot } from '../reports/provenance/types'
import type { ProjectInput } from '../size/types'
import { rm } from 'node:fs/promises'
import path from 'pathe'
import { runBuild } from './build'
import { assertOutputs, outputManifest } from './manifest'
import { assertStaticReferences } from './references'
import { stageWorkspace } from './workspace'

export async function productionArtifacts(sourceRoot: string, inputs: InputSnapshot, projects: ProjectInput[]) {
  const workspace = await stageWorkspace(sourceRoot, inputs)
  try {
    const artifacts = []
    for (const project of projects) {
      const cwd = path.join(workspace.root, project.appDir)
      const output = path.join(cwd, project.outputDir)
      // Both builds are uncached, in a runner-owned disposable workspace.
      await runBuild(cwd, 'build')
      const baseline = await outputManifest(output)
      await assertStaticReferences(output, baseline)
      await rm(output, { recursive: true, force: true })
      await runBuild(cwd, 'build')
      const actual = await outputManifest(output)
      assertOutputs(baseline, actual)
      await assertStaticReferences(output, actual)
      artifacts.push({ project: project.id, inputFingerprint: inputs.fingerprint, manifest: actual })
    }
    return { ...workspace, artifacts }
  }
  catch (error) {
    await workspace.dispose()
    throw error
  }
}
