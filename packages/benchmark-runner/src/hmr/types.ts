import type { MachineEnvironment } from '../reports/environment'

export interface HmrProfileSample {
  timestamp?: string
  totalMs?: number
  eventId?: string
  event?: string
  file?: string
  relativeFile?: string
  sourceRootFile?: string
  buildCoreMs?: number
  transformMs?: number
  writeMs?: number
  watchToDirtyMs?: number
  emitMs?: number
  sharedChunkResolveMs?: number
  dirtyCount?: number
  pendingCount?: number
  emittedCount?: number
  dirtyReasonSummary?: string[]
  pendingReasonSummary?: string[]
}

export interface HmrScenario {
  id: string
  label: string
  group: 'vue-sfc' | 'native' | 'mpx-sfc'
  project: string
  projectLabel: string
  appDir: string
  collector: 'artifact'
  readyPattern?: RegExp
  outputFiles?: string[]
  sourceFile: string
  applyMarker: (source: string, marker: string) => string
}

export interface HmrSample {
  scenario: string
  label: string
  group: HmrScenario['group']
  project: string
  projectLabel: string
  collector: HmrScenario['collector']
  iteration: number
  sourceFile: string
  ok: boolean
  wallMs?: number
  totalMs?: number
  buildCoreMs?: number
  transformMs?: number
  writeMs?: number
  watchToDirtyMs?: number
  emitMs?: number
  sharedChunkResolveMs?: number
  dirtyCount?: number
  pendingCount?: number
  emittedCount?: number
  profileEvent?: string
  sourceRootFile?: string
  error?: string
}

export interface HmrReport {
  generatedAt: string
  iterations: number
  environment?: MachineEnvironment
  samples: HmrSample[]
  notes: string[]
}
