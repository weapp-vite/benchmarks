import process from 'node:process'
import { runConsistency } from '../../packages/benchmark-runner/src/runtime/consistency/run'

runConsistency().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack : String(error)}\n`)
  process.exitCode = 1
})
