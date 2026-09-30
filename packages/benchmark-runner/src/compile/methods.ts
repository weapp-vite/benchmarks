import process from 'node:process'
import { runCompileMethods } from './methods/run'

runCompileMethods().catch((error: unknown) => {
  process.stderr.write(`${String(error)}\n`)
  process.exitCode = 1
})
