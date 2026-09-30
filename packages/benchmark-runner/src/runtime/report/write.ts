import type { RuntimeReport } from '../types'
import { writeMachineReport } from '../../reports/archive'
import { machineEnvironmentLines } from '../../reports/environment'
import { isVerifiedRuntimeSample } from '../observe/boundary'
import { metricLabels, scenarioDescriptions } from './scenarios'

function average(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

export async function writeReport(reportDir: string, report: RuntimeReport) {
  const ids = [...new Set(report.samples.map(sample => sample.project))]
  const summaries = ids.map((id) => {
    const all = report.samples.filter(sample => sample.project === id)
    const accepted = all.filter(isVerifiedRuntimeSample)
    return {
      id,
      label: all[0]!.label,
      accepted: accepted.length,
      complete: all.length === report.iterations && accepted.length === report.iterations,
      averageMs: accepted.length ? average(accepted.map(sample => sample.observation!.durationMs)) : undefined,
    }
  })
  const ranked = summaries.filter(row => row.complete).sort((a, b) => a.averageMs! - b.averageMs!)
  const lines = [
    '# 运行时基准报告',
    '',
    `生成时间：${report.generatedAt}`,
    `采样次数：${report.iterations}`,
    '',
    ...machineEnvironmentLines(report.environment),
    '',
    '## 计时边界',
    '',
    '新外部读数从 reLaunch 请求计时，到真实 IDE 文本、列表和计算颜色的七项断言全部满足。它包含导航、协议往返及 100ms 轮询，不是纯宿主提交或屏幕绘制耗时。',
    '原八场景的内部 durationMs 保留在原始明细，按实际完成边界标注。框架 nextTick、原生 setData callback、Mpx setData callback 不混合排名。没有新观察证据的旧样本不进入排名。',
    '',
    '## 总耗时排名',
    '',
    '| 排名 | 项目 | reLaunch → 已确认视图均值 | 有效样本 |',
    '| ---: | --- | ---: | ---: |',
    ...ranked.map((row, index) => `| ${index + 1} | ${row.label} | ${row.averageMs!.toFixed(1)}ms | ${row.accepted}/${report.iterations} |`),
    ...(ranked.length ? [] : ['没有通过新边界验收的完整样本，无法给出排名。']),
    '',
    '## 未完成采集',
    '',
    ...summaries.filter(row => !row.complete).map(row => `- ${row.label}：有效样本 ${row.accepted}/${report.iterations}。`),
    ...report.samples.filter(sample => !sample.ok).map(sample => `- ${sample.label} 第 ${sample.iteration} 轮：${sample.failureKind ?? 'unknown'}；${sample.error ?? '未通过'}`),
    '',
    '## 运行环境诊断',
    '',
    ...(report.preflight
      ? [
          `- 检查时间：${report.preflight.checkedAt}；状态：${report.preflight.status}`,
          `- 官方来源：${report.preflight.source}`,
          `- 稳定版：${report.preflight.stableVersion ?? '未确认'}；所选安装版本：${report.preflight.installedVersion ?? '未确认'}`,
          `- 所选 CLI：${report.preflight.cliPath}；服务端口：${report.preflight.servicePort ?? '未确认'}`,
          ...(report.preflight.reason ? [`- 原因：${report.preflight.reason}`] : []),
        ]
      : ['历史报告未保存本次预检证据。']),
    '',
    '## 原始明细',
    '',
    '| 项目 | 轮次 | 通过 | 内部计时边界 | 指标观察 | 视图观察 | 实际宿主信息 |',
    '| --- | ---: | --- | --- | ---: | ---: | --- |',
    ...report.samples.map(sample => `| ${sample.label} | ${sample.iteration} | ${sample.ok ? '是' : '否'} | ${sample.completion ?? '历史未标注'} | ${sample.observation?.metricsObservedMs.toFixed(1) ?? '-'} | ${sample.observation?.viewObservedMs.toFixed(1) ?? '-'} | ${JSON.stringify(sample.host ?? {})} |`),
    '',
    '### 内部场景计时（仅作各自边界诊断）',
    '',
    `| 项目 | 轮次 | ${metricLabels.map(([, label]) => label).join(' | ')} |`,
    `| --- | ---: | ${metricLabels.map(() => '---:').join(' | ')} |`,
    ...report.samples.map(sample => `| ${sample.label} | ${sample.iteration} | ${metricLabels.map(([name]) => sample.metrics.find(metric => metric.name === name)?.durationMs ?? '-').join(' | ')} |`),
    '',
    '## 场景含义',
    '',
    ...metricLabels.map(([name, label]) => `- ${label}：${scenarioDescriptions.get(name)}`),
    '',
    '## 证据边界',
    '',
    ...report.notes.map(note => `- ${note}`),
  ]
  await writeMachineReport({ reportDir, report, markdown: `${lines.join('\n')}\n`, reportName: 'runtime', samples: report.samples })
}
