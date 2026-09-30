import { expect, it } from 'vitest'
import { repoRoot } from '../src/projects'
import { captureInputs } from '../src/reports/provenance/inputs'
import { collectCapabilityMatrix } from '../src/size/capabilities'
import { verifyStressInputs } from '../src/size/capabilities/equivalence'
import { capabilityReport } from '../src/size/capabilities/report'
import { assertCapabilityMatrix } from '../src/size/capabilities/validate'

it('builds every provider and both presets from equivalent inputs and fails closed for missing evidence', async () => {
  const inputs = await captureInputs(repoRoot)
  const matrix = await collectCapabilityMatrix(repoRoot, inputs)
  expect(matrix.provider).toHaveLength(9)
  expect(matrix.applications).toHaveLength(8)
  expect(matrix.runtime.status).toBe('not-measured')
  expect(matrix.stressInputs.differences).toEqual(['weapp.wevu.preset'])
  const report = capabilityReport(matrix).join('\n')
  expect(report).toContain('未测量 | 未测量 | 未测量')
  for (const row of matrix.applications) {
    expect(row.packages.mainBytes).toBeGreaterThan(0)
    expect(row.packages.subpackages[0]?.bytes).toBeGreaterThan(0)
    expect(row.size.files.some(file => file.type === 'template')).toBe(true)
    expect(row.size.totals.bytes).toBe(row.packages.totalBytes)
    expect(row.inputFiles).toContainEqual(expect.objectContaining({ path: 'app.vue' }))
  }
  expect(() => assertCapabilityMatrix({ ...matrix, provider: matrix.provider.slice(1) })).toThrow('Incomplete')
  expect(() => assertCapabilityMatrix({ ...matrix, applications: matrix.applications.slice(1) })).toThrow('Incomplete')
  expect(() => assertCapabilityMatrix({ ...matrix, applications: [...matrix.applications, matrix.applications[0]!] })).toThrow('duplicate')
  const altered = structuredClone(matrix)
  altered.applications.find(row => row.preset === 'performance')!.sourceHash = 'different source'
  expect(() => assertCapabilityMatrix(altered)).toThrow('sources differ')
  const differentDependencies = structuredClone(inputs)
  differentDependencies.packages.find(pkg => pkg.consumer === 'apps/weapp-vite-wevu-performance' && pkg.name === 'wevu')!.version = '0.0.0'
  await expect(verifyStressInputs(repoRoot, differentDependencies)).rejects.toThrow('dependencies differ')
  const differentLocalEnv = structuredClone(inputs)
  differentLocalEnv.files.push({ path: 'apps/weapp-vite-wevu-performance/.env.local', sha256: 'unexpected' })
  await expect(verifyStressInputs(repoRoot, differentLocalEnv)).rejects.toThrow('otherInputs differ')
  const after = await captureInputs(repoRoot)
  expect(after.fingerprint).toBe(inputs.fingerprint)
// Sixteen uncached builds plus generated lint/type checks; each command is independently bounded.
}, 420_000)
