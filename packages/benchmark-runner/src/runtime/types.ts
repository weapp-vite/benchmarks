import type { RuntimeMetric } from '../scenario'

export interface RuntimeSample {
  project: string
  label: string
  iteration: number
  page: string
  ok: boolean
  source: 'page-data' | 'console-log' | 'none'
  metrics: RuntimeMetric[]
  error?: string
}

export interface RuntimeReport {
  generatedAt: string
  mode: 'ide-e2e' | 'plan'
  iterations: number
  samples: RuntimeSample[]
  notes: string[]
}

export interface MiniProgram {
  on: (event: string, listener: (payload: unknown) => void) => void
  reLaunch: (url: string) => Promise<unknown>
  currentPage: (options?: { retries?: number, timeout?: number }) => Promise<{ data: (path?: string) => Promise<unknown> }>
  close: () => Promise<void>
}
