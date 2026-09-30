import { readdir, readFile, rm } from 'node:fs/promises'
import path from 'pathe'
import { hash, stableJson } from '../reports/provenance/hash'

export interface OutputManifest {
  fingerprint: string
  files: Array<{ path: string, sha256: string }>
}

export async function outputManifest(root: string, protectedFiles: string[] = []): Promise<OutputManifest> {
  const files: OutputManifest['files'] = []
  async function walk(dir: string) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name)
      if (entry.isSymbolicLink()) {
        throw new Error(`Unexpected symlink in build output: ${path.relative(root, file)}`)
      }
      if (entry.isDirectory()) {
        await walk(file)
      }
      else if (entry.isFile() && !protectedFiles.includes(path.relative(root, file))) {
        files.push({ path: path.relative(root, file), sha256: hash(await readFile(file)) })
      }
    }
  }
  await walk(root)
  files.sort((a, b) => a.path.localeCompare(b.path, 'en'))
  if (!files.length) {
    throw new Error('Build output has no managed files')
  }
  return { fingerprint: hash(stableJson(files)), files }
}

export function compareOutputs(expected: OutputManifest, actual: OutputManifest) {
  const before = new Map(expected.files.map(file => [file.path, file.sha256]))
  const after = new Map(actual.files.map(file => [file.path, file.sha256]))
  return {
    added: actual.files.filter(file => !before.has(file.path)).map(file => file.path),
    removed: expected.files.filter(file => !after.has(file.path)).map(file => file.path),
    changed: actual.files.filter(file => before.has(file.path) && before.get(file.path) !== file.sha256).map(file => file.path),
  }
}

export function assertOutputs(expected: OutputManifest, actual: OutputManifest) {
  const diff = compareOutputs(expected, actual)
  if (diff.added.length || diff.removed.length || diff.changed.length) {
    throw new Error(`Build output differs from verified production: ${JSON.stringify(diff)}`)
  }
}

export async function removeManagedOutputs(root: string, manifest: OutputManifest) {
  // A user may have replaced a previously generated file. Validate ownership before any deletion.
  const current = new Map((await outputManifest(root)).files.map(file => [file.path, file.sha256]))
  for (const file of manifest.files) {
    if (path.isAbsolute(file.path) || file.path.split('/').includes('..')) {
      throw new Error('Managed output must be relative to its owned directory')
    }
    if (current.has(file.path) && current.get(file.path) !== file.sha256) {
      throw new Error(`Managed output was modified; refusing to delete: ${file.path}`)
    }
  }
  for (const file of manifest.files) {
    await rm(path.join(root, file.path), { force: true })
  }
}
