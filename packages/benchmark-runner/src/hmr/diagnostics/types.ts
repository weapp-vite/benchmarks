export interface ProfileEvidence {
  status: 'matched' | 'missing' | 'ambiguous' | 'unsupported'
  reason?: string
  events: Record<string, unknown>[]
  readMs: number
  matchedEventId?: string
}

export interface DiagnosticEdit {
  id: string
  scenario: string
  project: string
  phase: 'first' | 'continuous' | 'restore' | 'failure' | 'repair' | 'rename' | 'delete' | 'recreate' | 'burst' | 'long-watch' | 'batch' | 'batch-restore'
  marker: string
  startedAt: string
  ok: boolean
  expectedFailure?: boolean
  externalMs?: number
  error?: string
  changedFiles?: string[]
  changedBytes?: number
  removedFiles?: string[]
  rssKiB?: number
  resourceError?: string
  observationMs: number
  profile: ProfileEvidence
}

export interface HmrDiagnostics {
  schemaVersion: 1
  runId: string
  inputFingerprint: string
  enabled: boolean
  edits: DiagnosticEdit[]
  firstFailure?: string
  failures: string[]
  replayOf?: string
  longWatch: { requestedMs: number, elapsedMs: number, completedEdits: number, rssStartKiB?: number, rssEndKiB?: number, rssPeakKiB?: number }
  notes: string[]
}
