import type { launchWatchProject } from '../runner/watch'
import type { HmrScenario } from '../types'
import type { DiagnosticEdit } from './types'
import { readFile, rename, rm, writeFile } from 'node:fs/promises'
import { setTimeout } from 'node:timers/promises'
import path from 'pathe'
import { snapshotArtifacts } from '../artifacts'
import { resolveOutputFiles } from '../runner/scenario'

export async function diagnosticOperation(options: {
  root: string
  scenario: HmrScenario
  original: string
  phase: DiagnosticEdit['phase']
  marker: string
  timeoutMs: number
  dev: Awaited<ReturnType<typeof launchWatchProject>>
}) {
  const { root, scenario, original, phase, marker, timeoutMs, dev } = options
  const file = path.join(root, scenario.appDir, scenario.sourceFile)
  const moved = `${file}.bench-moved`
  const targets = resolveOutputFiles(scenario, root)
  const before = await snapshotArtifacts(targets)
  const logs = dev.outputCursor()
  async function waitForSignal(restore = false) {
    const deadline = Date.now() + timeoutMs
    while (Date.now() < deadline) {
      dev.signal.throwIfAborted()
      const current = await snapshotArtifacts(targets)
      if (restore ? current.every(item => item.exists && !item.content?.includes(marker)) : current.some((item, index) => item.exists !== before[index]?.exists || item.content !== before[index]?.content)) {
        return
      }
      if (!restore && /error|failed|编译失败|错误|unexpected/i.test(dev.outputSince(logs))) {
        return
      }
      await setTimeout(20, undefined, { signal: dev.signal })
    }
    throw new Error(`No compiler/output acknowledgement for ${phase}`)
  }
  if (phase === 'failure') {
    const invalid = scenario.sourceFile.endsWith('.js') || scenario.sourceFile.endsWith('.ts')
      ? `${original}\nconst __benchBroken = ;\n`
      : original.replace('</script>', '\nconst __benchBroken = ;\n</script>')
    if (invalid === original) {
      throw new Error('No script block available for the compile-error probe')
    }
    return {
      operation: () => writeFile(file, invalid),
      outcome: () => dev.waitForOutput(/error|failed|编译失败|错误|unexpected/i, 'expected compile error', timeoutMs, logs),
      expectedFailure: true,
    }
  }
  if (phase === 'rename' || phase === 'delete') {
    return { operation: () => phase === 'rename' ? rename(file, moved) : rm(file), outcome: () => waitForSignal() }
  }
  if (phase === 'restore') {
    return { operation: () => writeFile(file, original), outcome: () => waitForSignal(true) }
  }
  return {
    operation: async () => {
      if (phase === 'recreate') {
        await rm(moved, { force: true })
      }
      const markers = phase === 'burst' ? [`${marker}-a`, `${marker}-b`, marker] : [marker]
      for (const value of markers) {
        const source = scenario.applyMarker(original, value)
        if (source === original || !source.includes(value)) {
          throw new Error(`Diagnostic marker was not applied: ${scenario.id}`)
        }
        await writeFile(file, source)
      }
      if (await readFile(file, 'utf8') !== scenario.applyMarker(original, marker)) {
        throw new Error('Diagnostic source write did not persist')
      }
    },
  }
}
