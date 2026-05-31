import type {
  FileBucket,
  FileType,
  ProjectInput,
  ProjectSize,
  SizeTotals,
  WevuPackageInfo,
} from './types'
import { readdir, readFile } from 'node:fs/promises'
import { brotliCompressSync, gzipSync } from 'node:zlib'
import path from 'pathe'
import { repoRoot } from '../projects'

const jsExtensions = new Set(['.js', '.mjs', '.cjs'])
const templateExtensions = new Set(['.wxml', '.axml', '.ttml', '.swan'])
const styleExtensions = new Set(['.wxss', '.css', '.acss', '.ttss'])

function typeOfFile(file: string): FileType {
  const ext = path.extname(file)
  if (jsExtensions.has(ext)) {
    return 'js'
  }
  if (ext === '.json') {
    return 'json'
  }
  if (templateExtensions.has(ext)) {
    return 'template'
  }
  if (styleExtensions.has(ext)) {
    return 'style'
  }
  return 'asset'
}

function bucketOfFile(file: string): FileBucket {
  if (file.startsWith('weapp-vendors/') || file.startsWith('common/')) {
    return 'vendor'
  }
  if (file.startsWith('pages/')) {
    return 'page'
  }
  if (file.startsWith('shared/')) {
    return 'shared'
  }
  if (file === 'app.js' || file === 'app.json' || file === 'app.wxss' || file === 'App.wxml') {
    return 'app'
  }
  return 'asset'
}

async function listFiles(dir: string) {
  const files: string[] = []

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
      if (entry.isFile()) {
        files.push(file)
      }
    }))
  }

  await walk(dir)
  return files.sort()
}

function emptyTotals(): SizeTotals {
  return {
    files: 0,
    bytes: 0,
    gzipBytes: 0,
    brotliBytes: 0,
    jsBytes: 0,
    templateBytes: 0,
    styleBytes: 0,
    jsonBytes: 0,
    assetBytes: 0,
    vendorJsBytes: 0,
    pageJsBytes: 0,
    appJsBytes: 0,
    sharedJsBytes: 0,
  }
}

function addFileToTotals(total: SizeTotals, file: ProjectSize['files'][number]) {
  total.files += 1
  total.bytes += file.bytes
  total.gzipBytes += file.gzipBytes
  total.brotliBytes += file.brotliBytes
  if (file.type === 'js') {
    total.jsBytes += file.bytes
    if (file.bucket === 'vendor') {
      total.vendorJsBytes += file.bytes
    }
    else if (file.bucket === 'page') {
      total.pageJsBytes += file.bytes
    }
    else if (file.bucket === 'app') {
      total.appJsBytes += file.bytes
    }
    else if (file.bucket === 'shared') {
      total.sharedJsBytes += file.bytes
    }
  }
  else if (file.type === 'template') {
    total.templateBytes += file.bytes
  }
  else if (file.type === 'style') {
    total.styleBytes += file.bytes
  }
  else if (file.type === 'json') {
    total.jsonBytes += file.bytes
  }
  else {
    total.assetBytes += file.bytes
  }
}

export async function analyzeProject(project: ProjectInput): Promise<ProjectSize> {
  const absoluteOutputDir = path.join(repoRoot, project.appDir, project.outputDir)
  const files: ProjectSize['files'] = []

  for (const file of await listFiles(absoluteOutputDir)) {
    const content = await readFile(file)
    const relativePath = path.relative(absoluteOutputDir, file)
    files.push({
      path: relativePath,
      bytes: content.byteLength,
      gzipBytes: gzipSync(content).byteLength,
      brotliBytes: brotliCompressSync(content).byteLength,
      type: typeOfFile(relativePath),
      bucket: bucketOfFile(relativePath),
    })
  }

  const totals = files.reduce((total, file) => {
    addFileToTotals(total, file)
    return total
  }, emptyTotals())

  return {
    id: project.id,
    label: project.label,
    outputDir: path.relative(repoRoot, absoluteOutputDir),
    files,
    totals,
  }
}

async function readCompressedSize(file: string) {
  const content = await readFile(file)
  return {
    bytes: content.byteLength,
    gzipBytes: gzipSync(content).byteLength,
    brotliBytes: brotliCompressSync(content).byteLength,
  }
}

export async function analyzeWevuPackage(): Promise<WevuPackageInfo | null> {
  const packageFile = path.join(repoRoot, 'apps/weapp-vite-wevu/node_modules/wevu/package.json')
  let pkg: { version?: string, sideEffects?: unknown }
  try {
    pkg = JSON.parse(await readFile(packageFile, 'utf8')) as { version?: string, sideEffects?: unknown }
  }
  catch {
    return null
  }

  const distDir = path.join(path.dirname(packageFile), 'dist')
  const entryNames = [
    'index.mjs',
    'vue-demi.mjs',
    'router.mjs',
    'store.mjs',
  ]
  const distFiles = await listFiles(distDir)
  const runtimeFiles = distFiles
    .filter(file => /\/(?:src|ref|router|store)-[^/]+\.mjs$/.test(file))
    .map(file => path.basename(file))

  const entryFiles = []
  for (const name of [...entryNames, ...runtimeFiles]) {
    const file = path.join(distDir, name)
    try {
      const size = await readCompressedSize(file)
      entryFiles.push({
        file: path.relative(path.dirname(packageFile), file),
        ...size,
      })
    }
    catch {}
  }

  return {
    version: pkg.version ?? 'unknown',
    sideEffects: pkg.sideEffects,
    entryFiles: entryFiles.sort((left, right) => right.bytes - left.bytes),
  }
}
