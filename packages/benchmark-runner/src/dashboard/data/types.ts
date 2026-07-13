import type { HmrReport } from '../../hmr/types'
import type { MachineEnvironment } from '../../reports/environment'
import type { RuntimeReport } from '../../runtime/types'
import type { AnalysisOutput } from '../../size/types'
import type { VerificationReport } from '../types'

export interface CompileSample {
  project: string
  label: string
  durationMs: number
  ok: boolean
  output: {
    bytes: number
    jsBytes: number
    templateBytes: number
    styleBytes: number
  }
}

export interface CompileReport {
  generatedAt: string
  iterations: number
  environment?: MachineEnvironment
  samples: CompileSample[]
}

export interface ReportInputs {
  compile?: CompileReport
  runtime?: RuntimeReport
  hmr?: HmrReport
  size?: AnalysisOutput
  verification?: VerificationReport
  previousCompile?: CompileReport
  previousRuntime?: RuntimeReport
  previousHmr?: HmrReport
  previousSize?: AnalysisOutput
  errors?: string[]
}
