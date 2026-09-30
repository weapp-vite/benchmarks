import type { ReportProvenance } from './types'
import { randomUUID } from 'node:crypto'
import process from 'node:process'
import { repoRoot } from '../../projects'
import { hash, stableJson } from './hash'
import { captureInputs } from './inputs'

export async function startReportRun(section: string, settings: Record<string, unknown>, options: {
  root?: string
  env?: NodeJS.ProcessEnv
} = {}) {
  const root = options.root ?? repoRoot
  const env = options.env ?? process.env
  const inputs = await captureInputs(root, env)
  const expected = env['BENCH_INPUT_FINGERPRINT']
  if (expected && expected !== inputs.fingerprint) {
    throw new Error(`Input fingerprint changed before ${section}; refusing to mix this refresh run`)
  }
  const runId = env['BENCH_RUN_ID'] ?? randomUUID()
  if (!/^[\w-]{1,128}$/.test(runId)) {
    throw new Error('Invalid BENCH_RUN_ID')
  }
  const startedAt = new Date().toISOString()
  return {
    runId,
    inputs,
    childEnv: { BENCH_RUN_ID: runId, BENCH_INPUT_FINGERPRINT: inputs.fingerprint },
    async finish(): Promise<ReportProvenance> {
      const ending = await captureInputs(root, env)
      const inputStable = ending.fingerprint === inputs.fingerprint
      if (!inputStable) {
        process.exitCode = 1
      }
      return {
        schemaVersion: 1,
        runId,
        section,
        startedAt,
        finishedAt: new Date().toISOString(),
        inputs,
        method: { fingerprint: hash(stableJson(settings)), settings },
        inputStable,
        endingFingerprint: ending.fingerprint,
      }
    },
  }
}

export function provenanceLines(value: ReportProvenance | undefined) {
  if (!value) {
    return ['## 采样来源', '', '历史报告未记录输入指纹，不能用于严格版本对比。', '']
  }
  return [
    '## 采样来源',
    '',
    `- Run ID：${value.runId}；步骤：${value.section}`,
    `- 采集区间：${value.startedAt} 至 ${value.finishedAt}`,
    `- 输入指纹：${value.inputs.fingerprint}`,
    `- lockfile SHA-256：${value.inputs.lockfileHash}`,
    `- runner：${value.inputs.runner.version}；源码摘要：${value.inputs.runner.sourceHash}`,
    `- 工作区有修改：${value.inputs.git.dirty}；被测输入有修改：${value.inputs.git.inputDirty}`,
    `- 采样前后输入一致：${value.inputStable}`,
    '- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。',
    '',
  ]
}
