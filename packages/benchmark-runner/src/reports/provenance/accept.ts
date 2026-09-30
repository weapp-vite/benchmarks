import type { VerificationReport } from '../../dashboard/types'
import type { ProvenancedReport } from './types'
import { provenanceError } from './validate'

export function aggregationError(report: ProvenancedReport, section: string, verification?: VerificationReport) {
  const anchor = verification?.provenance
  if (report.provenance && !anchor) {
    return 'no matching verification provenance; standalone result is not aggregated'
  }
  const step = verification?.steps.find(item => item.id === section)
  if (step && !(Date.parse(report.generatedAt) >= Date.parse(step.startedAt)
    && Date.parse(report.generatedAt) <= Date.parse(step.finishedAt))) {
    return 'report was not generated during the current verification step'
  }
  if (!anchor) {
    return undefined // Legacy remains readable, with a separate comparability warning.
  }
  const anchorError = provenanceError(verification!)
  if (anchorError || anchor.section !== 'verification' || !step) {
    return `invalid verification anchor: ${anchorError ?? 'missing section step'}`
  }
  const revision = verification?.revisions?.findLast(item => item.section === section)
  if (revision && (revision.replacement.generatedAt !== report.generatedAt
    || provenanceError({ generatedAt: revision.recordedAt, provenance: revision.execution }, {
      runId: revision.replacement.runId,
      fingerprint: anchor.inputs.fingerprint,
      section: 'verification',
    }))) {
    return 'replacement does not match recorded revision execution'
  }
  const error = provenanceError(report, {
    runId: revision?.replacement.runId ?? anchor.runId,
    fingerprint: anchor.inputs.fingerprint,
    section,
  })
  if (error) {
    return error
  }
  if (Date.parse(report.provenance!.startedAt) < Date.parse(step.startedAt)) {
    return 'collection started before the current verification step'
  }
  return undefined
}
