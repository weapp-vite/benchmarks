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
