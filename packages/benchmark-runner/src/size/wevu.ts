import type { AnalysisOutput } from './types'
import process from 'node:process'
import path from 'pathe'
import { ensureDir, writeJson, writeText } from '../fs'
import { repoRoot } from '../projects'
import { analyzeProject, analyzeWevuPackage } from './collect'
import { sizeProjects } from './projects'
import { generateReport } from './report'

async function main() {
  const analyzedProjects = await Promise.all(sizeProjects.map(project => analyzeProject(project)))
  const output: AnalysisOutput = {
    generatedAt: new Date().toISOString(),
    projects: analyzedProjects,
    wevuPackage: await analyzeWevuPackage(),
  }
  const reportDir = path.join(repoRoot, 'reports/size')
  await ensureDir(reportDir)
  await writeJson(path.join(reportDir, 'wevu-analysis.json'), output)
  await writeText(path.join(reportDir, 'wevu-analysis.md'), `${generateReport(output)}\n`)
}

main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack : String(error)}\n`)
  process.exitCode = 1
})
