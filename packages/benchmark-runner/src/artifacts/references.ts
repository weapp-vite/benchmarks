import type { OutputManifest } from './manifest'
import { readFile } from 'node:fs/promises'
import path from 'pathe'
import ts from 'typescript'

export async function assertStaticReferences(root: string, manifest: OutputManifest) {
  const files = new Set(manifest.files.map(file => file.path))
  const missing: string[] = []
  function reference(from: string, value: string, appRoot = false) {
    if (/^(?:\w+:|#)/.test(value) || value.includes('{{')) {
      return
    }
    const target = path.normalize(appRoot || value.startsWith('/')
      ? value.replace(/^\//, '')
      : path.join(path.dirname(from), value))
    const candidates = [target, `${target}.js`, `${target}/index.js`]
    if (!candidates.some(candidate => files.has(candidate))) {
      missing.push(`${from} -> ${value}`)
    }
  }
  for (const { path: file } of manifest.files) {
    const extension = path.extname(file)
    if (!['.js', '.json', '.wxml', '.wxss'].includes(extension)) {
      continue
    }
    const source = await readFile(path.join(root, file), 'utf8')
    if (extension === '.js') {
      for (const imported of ts.preProcessFile(source, true, true).importedFiles) {
        if (imported.fileName.startsWith('.')) {
          reference(file, imported.fileName)
        }
      }
    }
    else if (extension === '.json') {
      const json = JSON.parse(source) as {
        usingComponents?: Record<string, string>
        pages?: string[]
        subPackages?: Array<{ root: string, pages: string[] }>
        subpackages?: Array<{ root: string, pages: string[] }>
      }
      for (const value of Object.values(json.usingComponents ?? {})) {
        reference(file, value)
      }
      if (file === 'app.json') {
        for (const page of json.pages ?? []) {
          reference(file, page, true)
        }
        for (const pkg of json.subPackages ?? json.subpackages ?? []) {
          for (const page of pkg.pages) {
            reference(file, path.join(pkg.root, page), true)
          }
        }
      }
    }
    else {
      const pattern = extension === '.wxml'
        ? /<(?:import|include|wxs)\s[^>]*\bsrc=["']([^"']+)["']/g
        : /@import\s+(?:url\(\s*)?["']([^"']+)["']/g
      for (const match of source.matchAll(pattern)) {
        reference(file, match[1]!)
      }
    }
  }
  if (missing.length) {
    throw new Error(`Unresolved static output references: ${missing.join(', ')}`)
  }
}
