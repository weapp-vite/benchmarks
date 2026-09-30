import type { ProfileEvidence } from './types'
import { readFile } from 'node:fs/promises'
import { performance } from 'node:perf_hooks'
import path from 'pathe'

export async function profileLines(file: string) {
  return (await readFile(file, 'utf8').catch(() => '')).split(/\r?\n/).filter(Boolean)
}

export function correlateProfile(lines: string[], sourceFile: string, startedAt: string, root: string): ProfileEvidence {
  const started = performance.now()
  const events: Record<string, unknown>[] = []
  let malformed = 0
  for (const line of lines) {
    try {
      const event = JSON.parse(line) as Record<string, unknown>
      if (!event || typeof event !== 'object' || Array.isArray(event)) {
        malformed += 1
        continue
      }
      // Keep every upstream field, replacing only the private staging path.
      events.push(JSON.parse(JSON.stringify(event).replaceAll(root.replaceAll('\\', '/'), '<workspace>').replaceAll(JSON.stringify(root).slice(1, -1), '<workspace>')))
    }
    catch {
      malformed += 1
    }
  }
  const valid = events.filter((event) => {
    const id = typeof event['eventId'] === 'string' ? event['eventId'].match(/^([a-z\d]+)-[a-z\d]+$/) : undefined
    const observedAt = id ? Number.parseInt(id[1]!, 36) : Number.NaN
    const relative = typeof event['relativeFile'] === 'string' ? event['relativeFile'].replaceAll('\\', '/') : undefined
    // 7.4's event ID captures watcher time; emission timestamps alone could match a late previous edit.
    return relative === sourceFile && observedAt >= Date.parse(startedAt)
      && Date.parse(String(event['timestamp'])) >= Date.parse(startedAt)
      && typeof event['totalMs'] === 'number' && Number.isFinite(event['totalMs'])
  })
  const status = valid.length === 1 ? 'matched' : valid.length > 1 ? 'ambiguous' : 'missing'
  return {
    status,
    events,
    readMs: performance.now() - started,
    ...(status === 'matched' ? { matchedEventId: String(valid[0]!['eventId']) } : {}),
    ...(status === 'matched' ? {} : { reason: `${valid.length} matching upstream events; ${malformed} malformed lines; no phase timings inferred` }),
  }
}

export async function collectProfile(options: { file: string, before: number, sourceFile: string, startedAt: string, root: string, supported: boolean, timeoutMs?: number }) {
  const started = performance.now()
  if (!options.supported) {
    return { status: 'unsupported', reason: 'No compatible upstream profile contract', events: [], readMs: 0 } satisfies ProfileEvidence
  }
  let result: ProfileEvidence
  let matchedAt: number | undefined
  do {
    const lines = await profileLines(options.file)
    result = correlateProfile(lines.slice(options.before), options.sourceFile, options.startedAt, options.root)
    if (result.status === 'ambiguous') {
      break
    }
    if (result.status === 'matched') {
      matchedAt ??= performance.now()
      if (performance.now() - matchedAt >= 100) {
        break
      }
    }
    await new Promise(resolve => setTimeout(resolve, 20))
  } while (performance.now() - started < (options.timeoutMs ?? 500))
  return { ...result, readMs: performance.now() - started }
}

export function profileFile(appDir: string) {
  return path.join(appDir, '.weapp-vite/hmr-profile.jsonl')
}
