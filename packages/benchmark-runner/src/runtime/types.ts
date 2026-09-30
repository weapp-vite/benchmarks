import type { MachineEnvironment } from '../reports/environment'
import type { ReportProvenance } from '../reports/provenance/types'
import type { RuntimeMetric } from '../scenario'
import type { RuntimePreflight } from './session/preflight'

export interface RuntimeSample {
  project: string
  label: string
  iteration: number
  page: string
  ok: boolean
  source: 'page-data' | 'console-log' | 'none'
  metrics: RuntimeMetric[]
  error?: string
  failureKind?: 'preflight' | 'connection' | 'deadline' | 'assertion' | 'cleanup' | 'not-executed'
  host?: Record<string, string>
  completion?: 'framework-next-tick' | 'setData-callback' | 'mpx-setData-callback'
  observation?: {
    boundary: 'route-to-verified-view'
    durationMs: number
    metricsObservedMs: number
    viewObservedMs: number
    pollIntervalMs: number
    checks: string[]
  }
}

export interface RuntimeReport {
  provenance?: ReportProvenance
  generatedAt: string
  mode: 'ide-e2e' | 'plan'
  iterations: number
  environment?: MachineEnvironment
  samples: RuntimeSample[]
  notes: string[]
  preflight?: RuntimePreflight
}

export interface RuntimeElement {
  text: () => Promise<string>
  style: (name: string) => Promise<unknown>
  tap: () => Promise<void>
}

export interface RuntimePage {
  path?: string
  data: (path?: string) => Promise<unknown>
  $: (selector: string) => Promise<RuntimeElement | null>
  $$: (selector: string) => Promise<RuntimeElement[]>
}

export interface MiniProgram {
  on: (event: string, listener: (payload: unknown) => void) => void
  reLaunch: (url: string) => Promise<unknown>
  currentPage: (options?: { retries?: number, timeout?: number }) => Promise<RuntimePage>
  close: () => Promise<void>
  disconnect: () => void
  screenshot: (options: { path: string }) => Promise<unknown>
  send: (method: string, params?: Record<string, unknown>, options?: { timeout: number }) => Promise<unknown>
  evaluate: (fn: string, ...args: unknown[]) => Promise<unknown>
}
