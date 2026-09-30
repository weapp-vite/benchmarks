export interface InputFile {
  path: string
  sha256: string
}

export interface InstalledPackage {
  consumer: string
  name: string
  version: string
}

export interface InputSnapshot {
  fingerprint: string
  lockfileHash: string
  files: InputFile[]
  packages: InstalledPackage[]
  runner: { version: string, sourceHash: string }
  git: { commit: string, dirty: boolean, inputDirty: boolean }
  referenceSubmodule?: string
  environmentHash: string
}

export interface ReportProvenance {
  schemaVersion: 1
  runId: string
  section: string
  startedAt: string
  finishedAt: string
  inputStable: boolean
  endingFingerprint: string
  inputs: InputSnapshot
  method: { fingerprint: string, settings: Record<string, unknown> }
}

export interface ProvenancedReport {
  generatedAt: string
  provenance?: ReportProvenance
}
