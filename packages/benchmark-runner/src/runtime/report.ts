import type { RuntimeReport } from './types'
import path from 'pathe'
import { writeJson, writeText } from '../fs'
import { benchmarkProjects } from '../projects'

function formatSource(source: RuntimeReport['samples'][number]['source']) {
  if (source === 'page-data') {
    return '页面数据'
  }
  if (source === 'console-log') {
    return '控制台日志'
  }
  return '无'
}

export function renderPlan(reportDir: string) {
  const lines = [
    '# 运行时基准报告',
    '',
    '每个应用的运行时页面都暴露同一套场景，并输出 `BENCHMARK_RUNTIME` 指标。',
    '',
    '| 项目 | 页面 | 采集状态 |',
    '| --- | --- | --- |',
    ...benchmarkProjects.map(project => `| ${project.label} | \`${project.runtimePage}\` | 等待手动或 DevTools 日志采集 |`),
    '',
    '计划采集流程：',
    '',
    '1. 构建每个应用。',
    '2. 在微信开发者工具中打开生成的小程序项目。',
    '3. 进入表格中列出的页面。',
    '4. 触发 `runBenchmark`，或使用页面自动运行逻辑。',
    '5. 收集控制台中的 `BENCHMARK_RUNTIME` 载荷。',
    '',
    '自动采集：',
    '',
    '- 在可用环境中运行 `pnpm bench:runtime`，通过 `e2e/ide/runtime-benchmark.ts` 采集真实 IDE 运行时数据。',
    '- 如果 DevTools 不在默认 macOS 路径，设置 `WECHAT_DEVTOOLS_CLI=/path/to/cli`。',
    '',
  ]
  return writeText(path.join(reportDir, 'latest.md'), `${lines.join('\n')}\n`)
}

export async function writeReport(reportDir: string, report: RuntimeReport) {
  await writeJson(path.join(reportDir, 'latest.json'), report)

  const lines = [
    '# 运行时基准报告',
    '',
    `生成时间：${report.generatedAt}`,
    `模式：${report.mode === 'ide-e2e' ? 'IDE E2E 采集' : '手动计划'}`,
    '',
    '| 项目 | 轮次 | 通过 | 来源 | 初始渲染 | 追加批次 | 更新每 5 项 | 过滤高分活跃项 |',
    '| --- | ---: | --- | --- | ---: | ---: | ---: | ---: |',
    ...report.samples.map((sample) => {
      const byName = new Map(sample.metrics.map(metric => [metric.name, metric]))
      return [
        sample.label,
        sample.iteration,
        sample.ok ? '是' : `否${sample.error ? `（${sample.error}）` : ''}`,
        formatSource(sample.source),
        byName.get('initial-render')?.durationMs ?? '',
        byName.get('append-batch')?.durationMs ?? '',
        byName.get('update-every-5th')?.durationMs ?? '',
        byName.get('filter-active-high-score')?.durationMs ?? '',
      ].join(' | ')
    }).map(row => `| ${row} |`),
    '',
    '说明：',
    '',
    ...report.notes.map(note => `- ${note}`),
    '',
  ]
  await writeText(path.join(reportDir, 'latest.md'), `${lines.join('\n')}\n`)
}
