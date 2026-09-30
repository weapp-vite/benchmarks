import type { VerificationReport } from './types'
import { normalizeGeneratedText } from '../fs'
import { writeMachineReport } from '../reports/archive'

function statusLabel(status: VerificationReport['steps'][number]['status']) {
  if (status === 'passed') {
    return '通过'
  }
  if (status === 'failed') {
    return '失败'
  }
  return '跳过'
}

export async function writeVerificationReport(reportDir: string, report: VerificationReport) {
  const lines = [
    '# 全量验证报告',
    '',
    `生成时间：${report.generatedAt}`,
    `总体状态：${report.overallStatus === 'passed' ? '通过' : '失败'}`,
    '',
    '| 检查 | 状态 | 耗时 | 退出码 | 命令 |',
    '| --- | --- | ---: | ---: | --- |',
    ...report.steps.map(step => `| ${step.label} | ${statusLabel(step.status)} | ${(step.durationMs / 1000).toFixed(1)}s | ${step.exitCode ?? '-'} | \`${step.command}\` |`),
    '',
  ]
  const failed = report.steps.filter(step => step.status === 'failed')
  if (report.revisions?.length) {
    lines.push('## 独立重跑记录', '', '| 步骤 | 原 Run ID | 替换 Run ID | 原采样时间 | 新采样时间 | 原状态 |', '| --- | --- | --- | --- | --- | --- |')
    for (const revision of report.revisions) {
      lines.push(`| ${revision.section} | ${revision.previous.runId} | ${revision.replacement.runId} | ${revision.previous.generatedAt} | ${revision.replacement.generatedAt} | ${statusLabel(revision.previousStep.status)} |`)
    }
    lines.push('', '原步骤与新命令执行证据保存在 JSON revisions 中；原始采样时间未改写。', '')
  }
  if (failed.length) {
    lines.push('## 失败摘要', '')
    for (const step of failed) {
      lines.push(`### ${step.label}`, '', '```text', step.stderrTail || step.stdoutTail || '没有输出', '```', '')
    }
  }
  await writeMachineReport({
    reportDir,
    report,
    markdown: normalizeGeneratedText(lines.join('\n')),
    reportName: 'verification',
  })
}
