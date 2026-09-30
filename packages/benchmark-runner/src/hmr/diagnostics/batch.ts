import type { HmrScenario } from '../types'
import { writeFile } from 'node:fs/promises'
import { setTimeout } from 'node:timers/promises'
import path from 'pathe'
import { snapshotArtifacts } from '../artifacts'
import { resolveOutputFiles } from '../runner/scenario'

export function batchOperation(options: {
  root: string
  scenarios: HmrScenario[]
  originals: Map<string, string>
  marker: string
  restore: boolean
  timeoutMs: number
  signal: AbortSignal
}) {
  const { root, scenarios, originals, marker, restore, timeoutMs, signal } = options
  const sources = new Map<string, string>()
  for (const scenario of scenarios) {
    const file = path.join(root, scenario.appDir, scenario.sourceFile)
    const original = originals.get(scenario.id)!
    const source = sources.get(file) ?? original
    sources.set(file, restore ? original : scenario.applyMarker(source, marker))
  }
  const targets = [...new Set(scenarios.flatMap(scenario => resolveOutputFiles(scenario, root)))]
  return {
    operation: async () => {
      for (const [file, source] of sources) {
        if (!restore && !source.includes(marker)) {
          throw new Error('Batch marker was not applied')
        }
        await writeFile(file, source)
      }
    },
    outcome: async () => {
      const deadline = Date.now() + timeoutMs
      while (Date.now() < deadline) {
        signal.throwIfAborted()
        const outputs = await snapshotArtifacts(targets)
        if (outputs.length && outputs.every(file => file.exists && (restore ? !file.content?.includes(marker) : file.content?.includes(marker)))) {
          return
        }
        await setTimeout(20, undefined, { signal })
      }
      throw new Error(`Batch ${restore ? 'restoration' : 'update'} did not reach every target artifact`)
    },
  }
}
