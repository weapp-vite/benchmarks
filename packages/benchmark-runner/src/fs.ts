import { mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import path from 'pathe'

export interface SizeSummary {
  files: number
  bytes: number
  jsBytes: number
  jsonBytes: number
  templateBytes: number
  styleBytes: number
  assetBytes: number
}

const jsExtensions = new Set(['.js', '.mjs', '.cjs'])
const templateExtensions = new Set(['.wxml', '.axml', '.ttml', '.swan'])
const styleExtensions = new Set(['.wxss', '.css', '.acss', '.ttss'])
const invisibleTerminalFormatting = /[\u200B-\u200D\u2060\uFEFF]/g

export function sanitizeTerminalOutput(value: string) {
  return value.replace(invisibleTerminalFormatting, '')
}

export function normalizeGeneratedText(value: string) {
  return `${value.replace(/[\t ]+$/gm, '').trimEnd()}\n`
}

export async function removeDir(dir: string) {
  await rm(dir, { recursive: true, force: true })
}

export async function ensureDir(dir: string) {
  await mkdir(dir, { recursive: true })
}

export async function writeJson(file: string, value: unknown) {
  await ensureDir(path.dirname(file))
  await writeFile(file, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

export async function writeText(file: string, content: string) {
  await ensureDir(path.dirname(file))
  await writeFile(file, content, 'utf8')
}

export async function readJson<T>(file: string): Promise<T> {
  return JSON.parse(await readFile(file, 'utf8')) as T
}

export async function summarizeDir(dir: string): Promise<SizeSummary> {
  const summary: SizeSummary = {
    files: 0,
    bytes: 0,
    jsBytes: 0,
    jsonBytes: 0,
    templateBytes: 0,
    styleBytes: 0,
    assetBytes: 0,
  }

  async function walk(current: string) {
    let entries
    try {
      entries = await readdir(current, { withFileTypes: true })
    }
    catch {
      return
    }

    await Promise.all(entries.map(async (entry) => {
      const file = path.join(current, entry.name)
      if (entry.isDirectory()) {
        await walk(file)
        return
      }
      if (!entry.isFile()) {
        return
      }

      const info = await stat(file)
      const ext = path.extname(entry.name)
      summary.files += 1
      summary.bytes += info.size
      if (jsExtensions.has(ext)) {
        summary.jsBytes += info.size
      }
      else if (ext === '.json') {
        summary.jsonBytes += info.size
      }
      else if (templateExtensions.has(ext)) {
        summary.templateBytes += info.size
      }
      else if (styleExtensions.has(ext)) {
        summary.styleBytes += info.size
      }
      else {
        summary.assetBytes += info.size
      }
    }))
  }

  await walk(dir)
  return summary
}
