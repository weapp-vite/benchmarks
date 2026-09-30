import process from 'node:process'
import { runRuntimeBenchmark } from '../../packages/benchmark-runner/src/runtime/run'

const index = process.argv.indexOf('--iterations')
if (index >= 0) {
  process.env['BENCH_RUNTIME_ITERATIONS'] = process.argv[index + 1] ?? ''
}
runRuntimeBenchmark().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack : String(error)}\n`)
  process.exitCode = 1
})
