import type { HmrReport, HmrSample } from './types'
import path from 'pathe'
import { writeJson, writeText } from '../fs'

const metricKeys = [
  ['totalMs', 'HMR 总耗时'],
  ['wallMs', '外部等待'],
  ['buildCoreMs', '构建核心'],
  ['transformMs', '转换'],
  ['writeMs', '写入'],
  ['emitMs', '产物发射'],
  ['sharedChunkResolveMs', '共享 chunk'],
] as const

function average(values: number[]) {
  return values.length
    ? values.reduce((total, value) => total + value, 0) / values.length
    : undefined
}

function formatMs(value: number | undefined) {
  return typeof value === 'number' ? `${value.toFixed(1)}ms` : '-'
}

function formatCount(value: number | undefined) {
  return typeof value === 'number' ? value.toFixed(1) : '-'
}

function formatGap(base: number | undefined, value: number | undefined) {
  if (!base || typeof value !== 'number') {
    return '-'
  }
  return `${(value / base).toFixed(2)}x`
}

function byScenario(samples: HmrSample[], scenario: string) {
  return samples.filter(sample => sample.scenario === scenario)
}

function metricAverage(samples: HmrSample[], key: keyof HmrSample) {
  return average(samples
    .map(sample => sample[key])
    .filter((value): value is number => typeof value === 'number'))
}

export async function writeHmrReport(reportDir: string, report: HmrReport) {
  await writeJson(path.join(reportDir, 'latest.json'), report)

  const scenarios = [...new Map(report.samples.map(sample => [sample.scenario, {
    id: sample.scenario,
    label: sample.label,
    group: sample.group,
    projectLabel: sample.projectLabel,
    sourceFile: sample.sourceFile,
  }])).values()]

  const summaries = scenarios.map((scenario) => {
    const samples = byScenario(report.samples, scenario.id)
    const okSamples = samples.filter(sample => sample.ok)
    const totalMs = metricAverage(okSamples, 'totalMs')
    return {
      ...scenario,
      sampleCount: okSamples.length,
      ok: okSamples.length === report.iterations,
      totalMs,
      wallMs: metricAverage(okSamples, 'wallMs'),
      buildCoreMs: metricAverage(okSamples, 'buildCoreMs'),
      transformMs: metricAverage(okSamples, 'transformMs'),
      writeMs: metricAverage(okSamples, 'writeMs'),
      emitMs: metricAverage(okSamples, 'emitMs'),
      sharedChunkResolveMs: metricAverage(okSamples, 'sharedChunkResolveMs'),
      dirtyCount: metricAverage(okSamples, 'dirtyCount'),
      emittedCount: metricAverage(okSamples, 'emittedCount'),
    }
  })

  const completeSummaries = summaries.filter(summary => summary.ok)
  const incompleteSummaries = summaries.filter(summary => !summary.ok)
  const ranked = [...completeSummaries].sort((left, right) => (left.totalMs ?? 0) - (right.totalMs ?? 0))
  const fastest = ranked[0]
  const slowest = ranked.at(-1)

  const lines = [
    '# HMR 基准报告',
    '',
    `生成时间：${report.generatedAt}`,
    `采样次数：${report.iterations} 次，报告中的平均值由 weapp-vite HMR profile 有效样本计算。`,
    '',
    '## 一眼结论',
    '',
    `- HMR 最快：${fastest?.label ?? '-'}，平均 ${formatMs(fastest?.totalMs)}。`,
    `- HMR 最慢：${slowest?.label ?? '-'}，平均 ${formatMs(slowest?.totalMs)}。`,
    incompleteSummaries.length
      ? `- 未纳入排名：${incompleteSummaries.map(summary => `${summary.label}（有效样本 ${summary.sampleCount}/${report.iterations}）`).join('、')}。`
      : '- 所有 HMR 场景样本完整，均已纳入排名。',
    '- 场景覆盖：Vue SFC 的 script、template、style、页面配置，以及原生 JS、WXML、WXSS、JSON 文件。',
    '- 读数口径：HMR 总耗时来自 weapp-vite 内部 profile；外部等待是文件写入到 profile 落盘的墙钟耗时，只用于排查 watcher 延迟。',
    '',
    '## 场景速览',
    '',
    '| 排名 | 场景 | 项目 | 类型 | 平均 HMR | 相对最快 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |',
    '| ---: | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |',
    ...ranked.map((summary, index) => [
      index + 1,
      summary.label,
      summary.projectLabel,
      summary.group === 'vue-sfc' ? 'Vue SFC' : '原生文件',
      formatMs(summary.totalMs),
      formatGap(fastest?.totalMs, summary.totalMs),
      formatMs(summary.wallMs),
      formatMs(summary.buildCoreMs),
      formatMs(summary.transformMs),
      formatMs(summary.writeMs),
      formatMs(summary.emitMs),
      formatMs(summary.sharedChunkResolveMs),
      formatCount(summary.dirtyCount),
      formatCount(summary.emittedCount),
    ].join(' | ')).map(row => `| ${row} |`),
    ...(incompleteSummaries.length
      ? [
          '',
          '## 未完成场景',
          '',
          '| 场景 | 有效样本 | 问题 |',
          '| --- | ---: | --- |',
          ...incompleteSummaries.map((summary) => {
            const errors = report.samples
              .filter(sample => sample.scenario === summary.id && !sample.ok)
              .map(sample => sample.error ?? '未知错误')
            return `| ${summary.label} | ${summary.sampleCount}/${report.iterations} | ${[...new Set(errors)].join('；')} |`
          }),
        ]
      : []),
    '',
    '## 阶段均值',
    '',
    `| 场景 | ${metricKeys.map(([, label]) => label).join(' | ')} | 脏入口 | 输出文件 | 源文件 |`,
    `| --- | ${metricKeys.map(() => '---:').join(' | ')} | ---: | ---: | --- |`,
    ...summaries.map(summary => [
      summary.label,
      ...metricKeys.map(([key]) => formatMs(summary[key])),
      formatCount(summary.dirtyCount),
      formatCount(summary.emittedCount),
      `\`${summary.sourceFile}\``,
    ].join(' | ')).map(row => `| ${row} |`),
    '',
    '## 原始明细',
    '',
    `| 场景 | 轮次 | 通过 | ${metricKeys.map(([, label]) => label).join(' | ')} | 脏入口 | 输出文件 |`,
    `| --- | ---: | --- | ${metricKeys.map(() => '---:').join(' | ')} | ---: | ---: |`,
    ...report.samples.map(sample => [
      sample.label,
      sample.iteration,
      sample.ok ? '是' : `否${sample.error ? `（${sample.error}）` : ''}`,
      ...metricKeys.map(([key]) => formatMs(sample[key])),
      sample.dirtyCount ?? '',
      sample.emittedCount ?? '',
    ].join(' | ')).map(row => `| ${row} |`),
    '',
    '说明：',
    '',
    ...report.notes.map(note => `- ${note}`),
  ]

  await writeText(path.join(reportDir, 'latest.md'), `${lines.join('\n')}\n`)
}
