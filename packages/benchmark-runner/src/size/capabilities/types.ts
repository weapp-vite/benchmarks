import type { collectApplications } from './application'
import type { capabilityBudgets } from './budgets'
import type { verifyStressInputs } from './equivalence'

export interface CompressedBytes {
  bytes: number
  gzipBytes: number
  brotliBytes: number
}

export interface ProviderMeasurement extends CompressedBytes {
  id: string
  label: string
  source: string
  sha256: string
  modules: Array<{ path: string, bytesInOutput: number }>
}

export interface CapabilityMatrix {
  schemaVersion: 1
  upstreamDefinition: string
  platform: 'weapp'
  provider: ProviderMeasurement[]
  applications: Awaited<ReturnType<typeof collectApplications>>
  stressInputs: Awaited<ReturnType<typeof verifyStressInputs>>
  budgets: typeof capabilityBudgets
  runtime: { status: 'not-measured', reason: string }
  notes: string[]
}
