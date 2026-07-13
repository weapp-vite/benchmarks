import type { MachineEnvironment, ToolchainEnvironment } from '../reports/environment'

export type ReportStatus = 'failed' | 'passed' | 'skipped'

export interface VerificationStep {
  id: string
  label: string
  command: string
  startedAt: string
  finishedAt: string
  durationMs: number
  status: ReportStatus
  exitCode: number | null
  stdoutTail: string
  stderrTail: string
}

export interface VerificationReport {
  schemaVersion: 1
  generatedAt: string
  environment?: MachineEnvironment
  overallStatus: Exclude<ReportStatus, 'skipped'>
  steps: VerificationStep[]
}

export interface ProjectSummary {
  id: string
  label: string
  sampleCount: number
  expectedSamples: number
  complete: boolean
  values: Record<string, number>
  previousValues?: Record<string, number>
}

export interface ScenarioSummary {
  id: string
  label: string
  project: string
  projectLabel: string
  sampleCount: number
  expectedSamples: number
  complete: boolean
  valueMs?: number
}

export interface BenchmarkSection {
  generatedAt: string
  iterations?: number
  environment?: MachineEnvironment
  toolchain?: ToolchainEnvironment
  projects: ProjectSummary[]
  scenarios?: ScenarioSummary[]
}

export interface DashboardReport {
  schemaVersion: 1
  generatedAt: string
  sourceCommit?: string
  status: 'complete' | 'partial'
  errors: string[]
  verification?: VerificationReport
  compile?: BenchmarkSection
  runtime?: BenchmarkSection
  hmr?: BenchmarkSection
  size?: BenchmarkSection
}

export interface ChartPalette {
  background: string
  foreground: string
  muted: string
  grid: string
  series: string[]
  heatLow: string
  heatHigh: string
  warning: string
}

export interface DashboardChart {
  id: 'overview' | 'compile' | 'runtime' | 'hmr' | 'size'
  title: string
  description: string
  width: number
  height: number
  option: Record<string, unknown>
}
