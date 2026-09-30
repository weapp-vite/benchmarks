import type { ProvenancedReport } from './types'
import { hash, stableJson } from './hash'

export function provenanceError(report: ProvenancedReport, expected?: {
  runId: string
  fingerprint: string
  section: string
}) {
  const value = report.provenance
  if (!value) {
    return 'legacy report has no input provenance; not valid for strict comparison'
  }
  if (value.schemaVersion !== 1 || !value.inputs || !value.method
    || typeof value.runId !== 'string' || !/^[\w-]{1,128}$/.test(value.runId) || !value.section
    || !Array.isArray(value.inputs.files) || !Array.isArray(value.inputs.packages)
    || !value.inputs.runner || !value.method.settings
    || !value.inputs.files.every(file => file && typeof file.path === 'string' && typeof file.sha256 === 'string')
    || !value.inputs.packages.every(pkg => pkg && typeof pkg.consumer === 'string' && typeof pkg.name === 'string' && typeof pkg.version === 'string')) {
    return 'unsupported or incomplete provenance schema'
  }
  const { inputs } = value
  if (hash(stableJson({ files: inputs.files, packages: inputs.packages, environmentHash: inputs.environmentHash })) !== inputs.fingerprint
    || hash(stableJson(value.method.settings)) !== value.method.fingerprint
    || inputs.files.find(file => file?.path === 'pnpm-lock.yaml')?.sha256 !== inputs.lockfileHash
    || hash(stableJson(inputs.files.filter(file => file?.path?.startsWith('packages/benchmark-runner/')))) !== inputs.runner.sourceHash) {
    return 'input or method fingerprint does not match recorded evidence'
  }
  if (value.inputStable !== true || value.endingFingerprint !== inputs.fingerprint) {
    return 'inputs changed during collection'
  }
  if (!Number.isFinite(Date.parse(report.generatedAt))
    || !Number.isFinite(Date.parse(value.startedAt)) || !Number.isFinite(Date.parse(value.finishedAt))
    || Date.parse(value.finishedAt) < Date.parse(value.startedAt)
    || Date.parse(report.generatedAt) < Date.parse(value.finishedAt)) {
    return 'invalid collection interval'
  }
  if (expected && (expected.runId !== value.runId || expected.fingerprint !== inputs.fingerprint || expected.section !== value.section)) {
    return 'run ID, section, or input fingerprint does not match verification'
  }
  return undefined
}

export function comparableProvenance(current: ProvenancedReport, previous: ProvenancedReport) {
  return !provenanceError(current) && !provenanceError(previous)
    && current.provenance!.section === previous.provenance!.section
    && current.provenance!.inputs.fingerprint === previous.provenance!.inputs.fingerprint
    && current.provenance!.method.fingerprint === previous.provenance!.method.fingerprint
}
