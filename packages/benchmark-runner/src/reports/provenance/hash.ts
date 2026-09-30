import type { Buffer } from 'node:buffer'
import { createHash } from 'node:crypto'

export function hash(value: string | Buffer) {
  return createHash('sha256').update(value).digest('hex')
}

export function stableJson(value: unknown): string {
  // Match JSON persistence (undefined object fields disappear, array holes become null).
  return JSON.stringify(value, (_key, item: unknown) => {
    return item && typeof item === 'object' && !Array.isArray(item)
      ? Object.fromEntries(Object.entries(item).sort(([a], [b]) => a.localeCompare(b, 'en')))
      : item
  }) ?? 'null'
}
