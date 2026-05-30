import type { RuntimeReport } from './types'
import path from 'pathe'
import { writeJson, writeText } from '../fs'
import { benchmarkProjects } from '../projects'

const metricLabels = [
  ['initial-render', '初始渲染'],
  ['append-batch', '追加批次'],
  ['update-every-5th', '批量更新'],
  ['sort-score-desc', '全量排序'],
  ['filter-active-high-score', '过滤高分活跃项'],
  ['group-aggregate-render', '分组聚合渲染'],
  ['window-slice-middle', '窗口切片'],
  ['replace-dataset', '整表替换'],
] as const

const scenarioDescriptions = new Map<string, string>([
  ['initial-render', '渲染 300 条确定性数据，观察首屏列表创建成本'],
  ['append-batch', '追加 120 条数据，观察增量插入和列表扩容成本'],
  ['update-every-5th', '每 5 条更新一次状态，观察局部批量变更成本'],
  ['sort-score-desc', '按分数和 id 全量排序后重排列表，观察大范围顺序变化成本'],
  ['filter-active-high-score', '过滤高分活跃项，观察列表缩减和条件筛选成本'],
  ['group-aggregate-render', '按 group 聚合并渲染统计行，观察派生数据和结构切换成本'],
  ['window-slice-middle', '截取中间 80 条窗口数据，观察虚拟窗口类场景成本'],
  ['replace-dataset', '用 360 条新数据整表替换，观察大批量替换成本'],
])

function average(values: number[]) {
  return values.length
    ? Math.round(values.reduce((total, value) => total + value, 0) / values.length)
    : 0
}

function formatSource(source: RuntimeReport['samples'][number]['source']) {
  if (source === 'page-data') {
    return '页面数据'
  }
  if (source === 'console-log') {
    return '控制台日志'
  }
  return '无'
}

function formatMs(value: number | undefined) {
  return typeof value === 'number' ? `${value}ms` : '-'
}

function formatGap(fastest: number | undefined, slowest: number | undefined) {
  if (typeof fastest !== 'number' || typeof slowest !== 'number') {
    return '-'
  }
  if (fastest <= 0) {
    return `慢 ${slowest - fastest}ms`
  }
  return `${(slowest / fastest).toFixed(2)}x`
}

function metricMap(sample: RuntimeReport['samples'][number]) {
  return new Map(sample.metrics.map(metric => [metric.name, metric.durationMs]))
}

function joinLabels(labels: string[]) {
  if (!labels.length) {
    return '-'
  }
  if (labels.length <= 2) {
    return labels.join('、')
  }
  return `${labels.slice(0, 2).join('、')}等 ${labels.length} 项`
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

  const successfulSamples = report.samples.filter(sample => sample.ok)
  const projectSummaries = benchmarkProjects.map((project) => {
    const samples = successfulSamples.filter(sample => sample.project === project.id)
    const metricAverages = new Map<string, number>()
    for (const [metricName] of metricLabels) {
      metricAverages.set(
        metricName,
        average(samples.map(sample => metricMap(sample).get(metricName) ?? 0)),
      )
    }
    const totalMs = [...metricAverages.values()].reduce((total, value) => total + value, 0)
    return {
      id: project.id,
      label: project.label,
      totalMs,
      metricAverages,
      ok: samples.length === report.iterations,
      sampleCount: samples.length,
    }
  })
  const completeSummaries = projectSummaries.filter(summary => summary.ok)
  const incompleteSummaries = projectSummaries.filter(summary => !summary.ok)
  const byTotal = [...completeSummaries].sort((left, right) => left.totalMs - right.totalMs)
  const fastestTotal = byTotal[0]
  const slowestTotal = byTotal.at(-1)
  const scenarioSummaries = metricLabels.map(([metricName, label]) => {
    const ranked = [...completeSummaries]
      .map(summary => ({
        label: summary.label,
        id: summary.id,
        value: summary.metricAverages.get(metricName) ?? 0,
      }))
      .sort((left, right) => left.value - right.value)
    const fastest = ranked[0]
    const slowest = ranked.at(-1)
    return {
      label,
      metricName,
      fastest,
      slowest,
      gap: formatGap(fastest?.value, slowest?.value),
    }
  })
  const largestGap = scenarioSummaries
    .map((summary) => {
      const fastest = summary.fastest?.value
      const slowest = summary.slowest?.value
      return {
        label: summary.label,
        value: typeof fastest === 'number' && typeof slowest === 'number' ? slowest - fastest : -1,
      }
    })
    .sort((left, right) => right.value - left.value)[0]
  const totalRankByProject = new Map(byTotal.map((summary, index) => [summary.id, index + 1]))
  const insightRows = byTotal.map((summary) => {
    const fastestLabels = scenarioSummaries
      .filter(scenario => scenario.fastest?.id === summary.id)
      .map(scenario => scenario.label)
    const slowestLabels = scenarioSummaries
      .filter(scenario => scenario.slowest?.id === summary.id)
      .map(scenario => scenario.label)
    const rank = totalRankByProject.get(summary.id) ?? 0
    const verdict = rank === 1
      ? '整体最快'
      : rank === byTotal.length
        ? '整体最慢'
        : slowestLabels.length >= 3
          ? '多场景偏慢'
          : fastestLabels.length >= 2
            ? '有局部优势'
            : '表现居中'
    return {
      ...summary,
      rank,
      fastestLabels,
      slowestLabels,
      verdict,
    }
  })

  const lines = [
    '# 运行时基准报告',
    '',
    `生成时间：${report.generatedAt}`,
    `模式：${report.mode === 'ide-e2e' ? 'IDE E2E 采集' : '手动计划'}`,
    '',
    '## 一眼结论',
    '',
    `- 总耗时最好：${fastestTotal?.label ?? '-'}，8 个场景平均合计 ${fastestTotal?.totalMs ?? 0}ms。`,
    `- 总耗时最差：${slowestTotal?.label ?? '-'}，8 个场景平均合计 ${slowestTotal?.totalMs ?? 0}ms。`,
    `- 差距最大场景：${largestGap?.label ?? '-'}，最慢比最快多 ${largestGap?.value ?? 0}ms。`,
    incompleteSummaries.length
      ? `- 未纳入排名：${incompleteSummaries.map(summary => `${summary.label}（有效样本 ${summary.sampleCount}/${report.iterations}）`).join('、')}。`
      : '- 所有项目样本完整，均已纳入排名。',
    '- 场景覆盖：初始渲染、追加列表、批量更新、全量排序、过滤、分组聚合渲染、窗口切片和整表替换。',
    '',
    '## 项目优劣速览',
    '',
    '| 项目 | 总排名 | 总耗时 | 慢于最快 | 场景最快数 | 场景最慢数 | 主要优势 | 主要短板 | 判断 |',
    '| --- | ---: | ---: | ---: | ---: | ---: | --- | --- | --- |',
    ...insightRows.map(summary => [
      summary.label,
      summary.rank,
      formatMs(summary.totalMs),
      formatGap(fastestTotal?.totalMs, summary.totalMs),
      summary.fastestLabels.length,
      summary.slowestLabels.length,
      joinLabels(summary.fastestLabels),
      joinLabels(summary.slowestLabels),
      summary.verdict,
    ].join(' | ')).map(row => `| ${row} |`),
    '',
    '## 总耗时排名',
    '',
    '| 排名 | 项目 | 8 场景平均合计 | 相对最快 | 有效样本 | 全部通过 |',
    '| ---: | --- | ---: | ---: | ---: | --- |',
    ...byTotal.map((summary, index) => [
      index + 1,
      summary.label,
      formatMs(summary.totalMs),
      formatGap(fastestTotal?.totalMs, summary.totalMs),
      summary.sampleCount,
      summary.ok ? '是' : '否',
    ].join(' | ')).map(row => `| ${row} |`),
    ...(incompleteSummaries.length
      ? [
          '',
          '## 未完成采集',
          '',
          '| 项目 | 有效样本 | 问题 |',
          '| --- | ---: | --- |',
          ...incompleteSummaries.map((summary) => {
            const errors = report.samples
              .filter(sample => sample.project === summary.id && !sample.ok)
              .map(sample => sample.error ?? '未知错误')
            return `| ${summary.label} | ${summary.sampleCount}/${report.iterations} | ${[...new Set(errors)].join('；')} |`
          }),
        ]
      : []),
    '',
    '## 各场景最快和最慢',
    '',
    '| 场景 | 最快 | 最快均值 | 最慢 | 最慢均值 | 差距 |',
    '| --- | --- | ---: | --- | ---: | ---: |',
    ...scenarioSummaries.map(summary => [
      summary.label,
      summary.fastest?.label ?? '-',
      formatMs(summary.fastest?.value),
      summary.slowest?.label ?? '-',
      formatMs(summary.slowest?.value),
      summary.gap,
    ].join(' | ')).map(row => `| ${row} |`),
    '',
    '## 场景含义',
    '',
    '| 场景 | 对比重点 |',
    '| --- | --- |',
    ...metricLabels.map(([metricName, label]) => `| ${label} | ${scenarioDescriptions.get(metricName) ?? '-'} |`),
    '',
    '## 项目场景均值',
    '',
    `| 项目 | 总耗时 | ${metricLabels.map(([, label]) => label).join(' | ')} |`,
    `| --- | ---: | ${metricLabels.map(() => '---:').join(' | ')} |`,
    ...byTotal.map(summary => [
      summary.label,
      formatMs(summary.totalMs),
      ...metricLabels.map(([metricName]) => formatMs(summary.metricAverages.get(metricName))),
    ].join(' | ')).map(row => `| ${row} |`),
    '',
    '## 原始明细',
    '',
    `| 项目 | 轮次 | 通过 | 来源 | ${metricLabels.map(([, label]) => label).join(' | ')} |`,
    `| --- | ---: | --- | --- | ${metricLabels.map(() => '---:').join(' | ')} |`,
    ...report.samples.map((sample) => {
      const byName = new Map(sample.metrics.map(metric => [metric.name, metric]))
      return [
        sample.label,
        sample.iteration,
        sample.ok ? '是' : `否${sample.error ? `（${sample.error}）` : ''}`,
        formatSource(sample.source),
        ...metricLabels.map(([metricName]) => byName.get(metricName)?.durationMs ?? ''),
      ].join(' | ')
    }).map(row => `| ${row} |`),
    '',
    '说明：',
    '',
    ...report.notes.map(note => `- ${note}`),
  ]
  await writeText(path.join(reportDir, 'latest.md'), `${lines.join('\n')}\n`)
}
