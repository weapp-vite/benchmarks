import type { ToolchainEnvironment } from '../reports/environment'

export interface ProjectInput {
  id: string
  label: string
  appDir: string
  outputDir: string
  runtimeFiles: string[]
}

export interface FileSize {
  path: string
  bytes: number
  gzipBytes: number
  brotliBytes: number
  type: FileType
  bucket: FileBucket
  runtime: boolean
}

export interface ProjectSize {
  id: string
  label: string
  outputDir: string
  files: FileSize[]
  totals: SizeTotals
}

export interface SizeTotals {
  files: number
  bytes: number
  gzipBytes: number
  brotliBytes: number
  jsBytes: number
  templateBytes: number
  styleBytes: number
  jsonBytes: number
  assetBytes: number
  vendorJsBytes: number
  pageJsBytes: number
  appJsBytes: number
  sharedJsBytes: number
  runtimeFiles: number
  runtimeBytes: number
  runtimeGzipBytes: number
  runtimeBrotliBytes: number
}

export interface WevuPackageInfo {
  version: string
  sideEffects: unknown
  entryFiles: Array<{
    file: string
    bytes: number
    gzipBytes: number
    brotliBytes: number
  }>
}

export interface AnalysisOutput {
  generatedAt: string
  toolchain?: ToolchainEnvironment
  projects: ProjectSize[]
  wevuPackage: WevuPackageInfo | null
}

export type FileBucket = 'app' | 'asset' | 'page' | 'shared' | 'vendor'
export type FileType = 'asset' | 'js' | 'json' | 'style' | 'template'
