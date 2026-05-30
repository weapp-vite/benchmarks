import process from 'node:process'
import path from 'pathe'
import { writeJson } from '../../packages/benchmark-runner/src/fs'
import { benchmarkProjects, repoRoot } from '../../packages/benchmark-runner/src/projects'
import { collectProjectSamples } from '../../packages/benchmark-runner/src/runtime/collect'
import { defaultIterations } from '../../packages/benchmark-runner/src/runtime/constants'
import { resolveWechatCliPath } from '../../packages/benchmark-runner/src/runtime/devtools'

function readIterations() {
  const index = process.argv.indexOf('--iterations')
  if (index >= 0) {
    return Number(process.argv[index + 1] ?? defaultIterations)
  }
  return Number(process.env['BENCH_RUNTIME_ITERATIONS'] ?? defaultIterations)
}

async function runRuntimeIdeE2e() {
  const iterations = readIterations()
  const cliPath = await resolveWechatCliPath()
  const reportDir = path.join(repoRoot, 'reports/runtime')
  const samplesPath = path.join(reportDir, 'latest.samples.json')

  if (!cliPath) {
    throw new Error('未找到微信开发者工具 CLI，无法运行 e2e/ide 运行时采集')
  }

  const samples = []
  for (const [projectIndex, project] of benchmarkProjects.entries()) {
    samples.push(...await collectProjectSamples(
      project,
      iterations,
      cliPath,
      9420 + projectIndex,
    ))
  }

  await writeJson(samplesPath, samples)
}

runRuntimeIdeE2e().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`)
  process.exitCode = 1
})
