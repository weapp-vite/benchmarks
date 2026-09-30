import type { BenchmarkProject } from '../../projects'
import { readFile, writeFile } from 'node:fs/promises'
import process from 'node:process'
import { collectProjectSamples } from '../collect'
import { Deadline } from './deadline'

async function main() {
  const request = JSON.parse(await readFile(process.argv[2]!, 'utf8')) as {
    project: BenchmarkProject
    iterations: number
    cliPath: string
    root: string
    timeoutMs: number
    resultPath: string
  }
  const samples = await collectProjectSamples(request.project, request.iterations, request.cliPath, request.root, new Deadline(request.timeoutMs))
  await writeFile(request.resultPath, JSON.stringify(samples))
}
main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`)
  process.exitCode = 1
})
