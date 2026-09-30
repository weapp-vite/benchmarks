import { rm } from 'node:fs/promises'
import { afterEach, describe, expect, it } from 'vitest'
import { buildDashboardReport, loadDashboardReport } from '../src/dashboard/data'
import { hash, stableJson } from '../src/reports/provenance/hash'
import { replaceVerificationSection } from '../src/reports/provenance/revision'
import { provenanceError } from '../src/reports/provenance/validate'
import { evidence, inputFixture, put, verification } from './fixtures/provenance'

const roots: string[] = []
const at = '2026-09-01T00:00:30.000Z'
function compile(runId = 'run-one', generatedAt = at) {
  return { generatedAt, provenance: evidence('compile', runId, generatedAt), iterations: 2, samples: [] }
}
afterEach(async () => {
  await Promise.all(roots.splice(0).map(root => rm(root, { recursive: true, force: true })))
})

describe('provenance aggregation and revisions', () => {
  it('uses stored verification on a later dashboard invocation', async () => {
    const root = await inputFixture()
    roots.push(root)
    await put(root, 'reports/verification/latest.json', verification())
    await put(root, 'reports/compile/latest.json', compile())
    expect((await loadDashboardReport(root)).compile).toBeDefined()
    await put(root, 'reports/compile/latest.json', compile('other-run'))
    const mixed = await loadDashboardReport(root)
    expect(mixed.compile).toBeUndefined()
    expect(mixed.errors.join(' ')).toContain('run ID')
  })

  it.each(['run', 'inputs', 'section', 'anchor', 'step', 'drift'])(
    'rejects a mismatched %s even through the direct builder',
    (kind) => {
      const report = compile()
      const anchor = verification()
      if (kind === 'run') {
        report.provenance.runId = 'other-run'
      }
      if (kind === 'section') {
        report.provenance.section = 'runtime'
      }
      if (kind === 'anchor') {
        anchor.provenance!.inputStable = false
      }
      if (kind === 'step') {
        anchor.steps = []
      }
      if (kind === 'drift') {
        report.provenance.inputStable = false
      }
      if (kind === 'inputs') {
        const inputs = report.provenance.inputs
        inputs.environmentHash = hash('different environment')
        inputs.fingerprint = hash(stableJson({ files: inputs.files, packages: inputs.packages, environmentHash: inputs.environmentHash }))
        report.provenance.endingFingerprint = inputs.fingerprint
      }
      const result = buildDashboardReport({ compile: report, verification: anchor })
      expect(result.compile).toBeUndefined()
      expect(result.status).toBe('partial')
      expect(result.errors.length).toBeGreaterThan(0)
    },
  )

  it('keeps legacy reports readable without strict history or invented provenance', () => {
    const report = { generatedAt: at, iterations: 2, samples: [] }
    const result = buildDashboardReport({ compile: report, previousCompile: report })
    expect(result.compile).toBeDefined()
    expect(result.compile?.provenance).toBeUndefined()
    expect(result.errors.join(' ')).toContain('legacy')
    expect(result.status).toBe('partial')
    expect(buildDashboardReport({ compile: compile() }).compile).toBeUndefined()
  })

  it('preserves original times and failures while recording actual successful rerun evidence', () => {
    const original = verification('run-one', at, 'failed')
    const later = '2026-09-01T00:02:30.000Z'
    const next = compile('run-two', later)
    const execution = verification('run-two', later)
    const result = replaceVerificationSection(original, compile(), next, execution)
    expect(result.overallStatus).toBe('passed')
    expect(result.provenance).toEqual(original.provenance)
    expect(result.steps[0]).toEqual(execution.steps[0])
    expect(result.revisions[0]?.previousStep.stderrTail).toBe('original failure')
    expect(result.revisions[0]?.previous.generatedAt).toBe(at)
    expect(result.revisions[0]?.replacement.generatedAt).toBe(later)
    expect(buildDashboardReport({ compile: next, verification: result }).compile).toBeDefined()
    expect(original.overallStatus).toBe('failed')
  })

  it('keeps failed reruns failed and rejects replacements without real matching execution', () => {
    const original = verification()
    const later = '2026-09-01T00:02:30.000Z'
    const next = compile('run-two', later)
    const failed = verification('run-two', later, 'failed')
    expect(replaceVerificationSection(original, compile(), next, failed).overallStatus).toBe('failed')
    expect(() => replaceVerificationSection(original, compile(), next, original)).toThrow()
    failed.steps[0]!.status = 'passed'
    expect(() => replaceVerificationSection(original, compile(), next, failed)).toThrow()
    const changedMethod = compile('run-two', later)
    changedMethod.provenance.method = { settings: { iterations: 1 }, fingerprint: hash(stableJson({ iterations: 1 })) }
    expect(() => replaceVerificationSection(original, compile(), changedMethod, verification('run-two', later))).toThrow()
  })

  it('preserves JSON digest semantics across persistence and rejects malformed structures', () => {
    const report = compile()
    const settings = { optional: undefined, values: [1, undefined], regex: 'source' }
    report.provenance.method = { settings, fingerprint: hash(stableJson(settings)) }
    expect(provenanceError(JSON.parse(JSON.stringify(report)))).toBeUndefined()
    const malformed = JSON.parse(JSON.stringify(report))
    malformed.provenance.inputs.files = [null, { path: 123 }]
    expect(provenanceError(malformed)).toContain('schema')
  })
})
