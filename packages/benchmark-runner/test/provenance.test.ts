import { rm } from 'node:fs/promises'
import process from 'node:process'
import { afterEach, describe, expect, it } from 'vitest'
import { captureInputs } from '../src/reports/provenance/inputs'
import { startReportRun } from '../src/reports/provenance/run'
import { comparableProvenance, provenanceError } from '../src/reports/provenance/validate'
import { evidence, inputFixture, put } from './fixtures/provenance'

const roots: string[] = []
const exitCode = process.exitCode
async function fixture() {
  const root = await inputFixture()
  roots.push(root)
  return root
}
afterEach(async () => {
  process.exitCode = exitCode
  await Promise.all(roots.splice(0).map(root => rm(root, { recursive: true, force: true })))
})

describe('report input provenance', () => {
  it('records actual nested versions and hashes secrets without local paths', async () => {
    const root = await fixture()
    const inputs = await captureInputs(root, { WECHAT_TOKEN: 'secret-not-for-reports' })
    expect(inputs.packages).toContainEqual({ consumer: 'apps/app', name: 'weapp-vite', version: '7.4.0' })
    expect(inputs.packages).toContainEqual({ consumer: 'apps/app > weapp-vite', name: 'vue', version: '3.5.43' })
    expect(inputs.git.inputDirty).toBe(false)
    expect(JSON.stringify(inputs)).not.toContain(root)
    expect(JSON.stringify(inputs)).not.toContain('secret-not-for-reports')
  })

  it.each([
    ['pnpm-lock.yaml', 'lockfileVersion: 10.0'],
    ['apps/app/vite.config.ts', 'export default { mode: "test" }'],
    ['apps/app/src/page.vue', '<template><view>changed</view></template>'],
    ['.env.local', 'PRIVATE_TOKEN=never-emit-this'],
    ['apps/app/node_modules/weapp-vite/package.json', { name: 'weapp-vite', version: '7.4.1' }],
  ])('changes the fingerprint without changing HEAD when %s changes', async (file, value) => {
    const root = await fixture()
    const before = await captureInputs(root, {})
    await put(root, file, value)
    const after = await captureInputs(root, {})
    expect(after.git.commit).toBe(before.git.commit)
    expect(after.fingerprint).not.toBe(before.fingerprint)
    expect(JSON.stringify(after)).not.toContain('never-emit-this')
    if (!file.includes('node_modules')) {
      expect(after.git.inputDirty).toBe(true)
    }
  })

  it('ignores generated reports but includes new source files', async () => {
    const root = await fixture()
    const before = await captureInputs(root, {})
    await put(root, 'reports/runtime/latest.json', { generatedAt: 'now' })
    await put(root, 'apps/app/dist/index.js', 'generated')
    expect((await captureInputs(root, {})).fingerprint).toBe(before.fingerprint)
    await put(root, 'apps/app/src/new.ts', 'export const value = 1')
    const after = await captureInputs(root, {})
    expect(after.fingerprint).not.toBe(before.fingerprint)
    expect(after.git.inputDirty).toBe(true)
  })

  it('shares a parent run ID and rejects changed inputs before or during collection', async () => {
    const root = await fixture()
    const parent = await startReportRun('verification', {}, { root, env: {} })
    const child = await startReportRun('compile', { iterations: 2 }, { root, env: parent.childEnv })
    expect(child.runId).toBe(parent.runId)
    expect(provenanceError({ provenance: await child.finish(), generatedAt: new Date().toISOString() })).toBeUndefined()
    await put(root, 'apps/app/src/new.ts', 'changed')
    await expect(startReportRun('runtime', {}, { root, env: parent.childEnv })).rejects.toThrow('Input fingerprint changed')
    expect((await parent.finish()).inputStable).toBe(false)
    expect(process.exitCode).toBe(1)
  })

  it('fails explicitly when a required installed dependency is missing', async () => {
    const root = await fixture()
    await rm(`${root}/apps/app/node_modules/weapp-vite`, { recursive: true })
    await expect(captureInputs(root, {})).rejects.toThrow('missing dependency: apps/app > weapp-vite')
  })

  it('rejects corrupted, drifting, malformed and legacy evidence for strict comparisons', () => {
    const generatedAt = '2026-09-01T00:00:30.000Z'
    const valid = { generatedAt, provenance: evidence('compile') }
    expect(provenanceError(valid)).toBeUndefined()
    const corrupt = structuredClone(valid)
    corrupt.provenance.inputs.files[0]!.sha256 = 'changed'
    expect(provenanceError(corrupt)).toContain('fingerprint')
    expect(provenanceError({ ...valid, generatedAt: 'invalid' })).toContain('interval')
    expect(provenanceError({ ...valid, provenance: { ...valid.provenance, inputStable: false } })).toContain('changed')
    expect(comparableProvenance(valid, { generatedAt })).toBe(false)
    const different = structuredClone(valid)
    different.provenance.method.settings['iterations'] = 4
    expect(comparableProvenance(valid, different)).toBe(false)
  })
})
