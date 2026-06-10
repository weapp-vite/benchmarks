import type { AnalysisOutput } from './types'
import process from 'node:process'
import path from 'pathe'
import { ensureDir } from '../fs'
import { repoRoot } from '../projects'
import { writeToolchainReport } from '../reports/archive'
import { createToolchainEnvironment } from '../reports/environment'
import { analyzeProject, analyzeWevuPackage } from './collect'
import { sizeProjects } from './projects'
import { generateReport } from './report'

async function main() {
  const analyzedProjects = await Promise.all(sizeProjects.map(project => analyzeProject(project)))
  const output: AnalysisOutput = {
    generatedAt: new Date().toISOString(),
    toolchain: await createToolchainEnvironment(),
    projects: analyzedProjects,
    wevuPackage: await analyzeWevuPackage(),
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
