import process from 'node:process'
import { runHmrBenchmark } from './hmr/runner/index'

runHmrBenchmark().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`)
  process.exitCode = 1
})
