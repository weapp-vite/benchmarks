import type { AnalysisOutput } from './types'
import process from 'node:process'
import path from 'pathe'
import { productionArtifacts } from '../artifacts/production'
import { ensureDir } from '../fs'
import { repoRoot } from '../projects'
import { writeToolchainReport } from '../reports/archive'
import { createToolchainEnvironment } from '../reports/environment'
import { startReportRun } from '../reports/provenance/run'
import { analyzeProject, analyzeWevuPackage } from './collect'
import { sizeProjects } from './projects'
import { generateReport } from './report'

async function main() {
  const run = await startReportRun('size', { artifactPolicy: 'isolated-two-clean-production-builds', projects: sizeProjects.map(({ runtimeFilePattern, ...project }) => ({ ...project, runtimeFilePattern: runtimeFilePattern?.source })) })
  const workspace = await productionArtifacts(repoRoot, run.inputs, sizeProjects)
  let analyzedProjects
  try {
    analyzedProjects = await Promise.all(sizeProjects.map((project) => {
      const artifact = workspace.artifacts.find(item => item.project === project.id)!
      return analyzeProject(project, { root: workspace.root, manifest: artifact.manifest })
    }))
  }
  finally {
    await workspace.dispose()
  }
  const wevuPackage = await analyzeWevuPackage()
  const output: AnalysisOutput = {
    provenance: await run.finish(),
    generatedAt: new Date().toISOString(),
    toolchain: await createToolchainEnvironment(run.inputs),
    projects: analyzedProjects,
    artifacts: workspace.artifacts,
    wevuPackage,
  }
  const reportDir = path.join(repoRoot, 'reports/size')
  await ensureDir(reportDir)
  await writeToolchainReport({
    reportDir,
    report: output,
    markdown: `${generateReport(output)}\n`,
    latestBaseName: 'wevu-analysis',
  })
}

main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack : String(error)}\n`)
  process.exitCode = 1
})
