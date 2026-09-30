import type { VerificationReport } from '../../dashboard/types'
import type { ProvenancedReport } from './types'
import { aggregationError } from './accept'
import { provenanceError } from './validate'

export function replaceVerificationSection(
  verification: VerificationReport,
  previous: ProvenancedReport,
  replacement: ProvenancedReport,
  execution: VerificationReport,
) {
  const anchor = verification.provenance
  const next = replacement.provenance
  if (!anchor || !next || provenanceError(verification) || provenanceError(previous)
    || provenanceError(replacement) || provenanceError(execution)) {
    throw new Error('Replacement requires valid, stable provenance on every input')
  }
  const section = next.section
  const step = verification.steps.find(item => item.id === section)
  const measuredStep = execution.steps.find(item => item.id === section)
  const revision = verification.revisions?.findLast(item => item.section === section)
  if (!step || !measuredStep || aggregationError(previous, section, verification)
    || aggregationError(replacement, section, execution)
    || execution.steps.length !== 1 || execution.provenance!.section !== 'verification'
    || (measuredStep.status === 'passed' && measuredStep.exitCode !== 0)
    || (measuredStep.status === 'skipped')
    || Date.parse(measuredStep.finishedAt) > Date.parse(execution.provenance!.finishedAt)
    || Date.parse(measuredStep.startedAt) < Date.parse(execution.provenance!.startedAt)
    || previous.provenance!.section !== section
    || previous.provenance!.runId !== (revision?.replacement.runId ?? anchor.runId)
    || next.inputs.fingerprint !== anchor.inputs.fingerprint
    || previous.provenance!.inputs.fingerprint !== anchor.inputs.fingerprint
    || previous.provenance!.method.fingerprint !== next.method.fingerprint
    || previous.generatedAt >= replacement.generatedAt
    || previous.provenance!.runId === next.runId
    || execution.provenance!.runId !== next.runId
    || execution.provenance!.inputs.fingerprint !== anchor.inputs.fingerprint
    || Date.parse(next.startedAt) < Date.parse(measuredStep.startedAt)
    || Date.parse(replacement.generatedAt) > Date.parse(measuredStep.finishedAt)) {
    throw new Error('Replacement must reference this section and preserve its inputs and measurement method')
  }
  const recordedAt = new Date().toISOString()
  const steps = verification.steps.map(item => item.id === section ? measuredStep : item)
  return {
    ...verification,
    generatedAt: recordedAt,
    steps,
    overallStatus: steps.every(item => item.status === 'passed') ? 'passed' : 'failed',
    revisions: [
      ...(verification.revisions ?? []),
      {
        recordedAt,
        section,
        previousStep: step,
        execution: execution.provenance!,
        previous: { runId: previous.provenance!.runId, generatedAt: previous.generatedAt },
        replacement: { runId: next.runId, generatedAt: replacement.generatedAt },
      },
    ],
  } satisfies VerificationReport
}
