import type { HmrReport, HmrSample } from './types'
import path from 'pathe'
import { writeMachineReport } from '../reports/archive'
import { machineEnvironmentLines } from '../reports/environment'
import { durationStatistics, isHealthyHmrScenario, sampleWasRetried } from './statistics'

const metricKeys = [
  ['totalMs', 'HMR 总耗时'],
  ['attemptTotalMs', '含重试总耗时'],
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
  const scenarios = [...new Map(report.samples.map(sample => [sample.scenario, {
    id: sample.scenario,
    label: sample.label,
    group: sample.group,
    projectLabel: sample.projectLabel,
    collector: sample.collector,
    sourceFile: sample.sourceFile,
  }])).values()]

  const summaries = scenarios.map((scenario) => {
    const samples = byScenario(report.samples, scenario.id)
    const okSamples = samples.filter(sample => sample.ok)
    const statistics = durationStatistics(okSamples
      .map(sample => sample.totalMs)
      .filter((value): value is number => typeof value === 'number'))
    const retriedSamples = okSamples.filter(sampleWasRetried).length
    return {
      ...scenario,
      sampleCount: okSamples.length,
      retriedSamples,
      healthy: isHealthyHmrScenario(samples, report.iterations),
      totalMs: statistics.meanMs,
      medianMs: statistics.medianMs,
      p95Ms: statistics.p95Ms,
      maxMs: statistics.maxMs,
      attemptTotalMs: metricAverage(okSamples, 'attemptTotalMs'),
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

  const ranked = summaries
    .filter(summary => summary.healthy)
    .sort((left, right) => (left.totalMs ?? 0) - (right.totalMs ?? 0))
  const unranked = summaries.filter(summary => !summary.healthy)
  const fastest = ranked[0]
  const slowest = ranked.at(-1)

  const unrankedReason = (summary: typeof summaries[number]) => {
    const reasons: string[] = []
    if (summary.sampleCount !== report.iterations) {
      reasons.push(`有效样本 ${summary.sampleCount}/${report.iterations}`)
    }
    if (summary.retriedSamples) {
      reasons.push(`重试样本 ${summary.retriedSamples}`)
    }
    return reasons.join('，') || '样本异常'
  }

  const formatGroup = (group: HmrSample['group']) => {
    if (group === 'native') {
      return '原生文件'
    }
    if (group === 'mpx-sfc') {
      return 'Mpx SFC'
    }
    return 'Vue SFC'
  }

  const formatCollector = (_collector: HmrSample['collector']) => '产物变化'

  const lines = [
    '# HMR 基准报告',
    '',
    `生成时间：${report.generatedAt}`,
    `采样次数：${report.iterations} 次，报告中的平均值由有效样本计算。`,
    '',
    ...machineEnvironmentLines(report.environment),
    '',
    '## 一眼结论',
    '',
    `- HMR 最快：${fastest?.label ?? '-'}，平均 ${formatMs(fastest?.totalMs)}。`,
    `- HMR 最慢：${slowest?.label ?? '-'}，平均 ${formatMs(slowest?.totalMs)}。`,
    unranked.length
      ? `- 未纳入排名：${unranked.map(summary => `${summary.label}（${unrankedReason(summary)}）`).join('、')}。`
      : '- 所有 HMR 场景样本完整且无重试，均已纳入排名。',
    '- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。',
    '- 读数口径：所有框架统一使用源文件写入到目标小程序产物更新的墙钟耗时，内部阶段列没有统一可比数据时显示为 -。',
    '- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。',
    '',
    '## 场景速览',
    '',
    '| 排名 | 场景 | 项目 | 类型 | 采集方式 | 平均 HMR | 中位数 | P95 | 最大值 | 相对最快 | 重试样本 | 含重试总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |',
    '| ---: | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |',
    ...ranked.map((summary, index) => [
      index + 1,
      summary.label,
      summary.projectLabel,
      formatGroup(summary.group),
      formatCollector(summary.collector),
      formatMs(summary.totalMs),
      formatMs(summary.medianMs),
      formatMs(summary.p95Ms),
      formatMs(summary.maxMs),
      formatGap(fastest?.totalMs, summary.totalMs),
      summary.retriedSamples,
      formatMs(summary.attemptTotalMs),
      formatMs(summary.wallMs),
      formatMs(summary.buildCoreMs),
      formatMs(summary.transformMs),
      formatMs(summary.writeMs),
      formatMs(summary.emitMs),
      formatMs(summary.sharedChunkResolveMs),
      formatCount(summary.dirtyCount),
      formatCount(summary.emittedCount),
    ].join(' | ')).map(row => `| ${row} |`),
    ...(unranked.length
      ? [
          '',
          '## 未纳入排名场景',
          '',
          '| 场景 | 有效样本 | 重试样本 | 平均 HMR | 中位数 | P95 | 最大值 | 问题 |',
          '| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |',
          ...unranked.map((summary) => {
            const errors = report.samples
              .filter(sample => sample.scenario === summary.id && !sample.ok)
              .map(sample => sample.error ?? '未知错误')
            const problems = [unrankedReason(summary), ...new Set(errors)].filter(Boolean)
            return `| ${summary.label} | ${summary.sampleCount}/${report.iterations} | ${summary.retriedSamples} | ${formatMs(summary.totalMs)} | ${formatMs(summary.medianMs)} | ${formatMs(summary.p95Ms)} | ${formatMs(summary.maxMs)} | ${problems.join('；')} |`
          }),
        ]
      : []),
    '',
    '## 阶段均值',
    '',
    `| 场景 | 采集方式 | ${metricKeys.map(([, label]) => label).join(' | ')} | 脏入口 | 输出文件 | 源文件 |`,
    `| --- | --- | ${metricKeys.map(() => '---:').join(' | ')} | ---: | ---: | --- |`,
    ...summaries.map(summary => [
      summary.label,
      formatCollector(summary.collector),
      ...metricKeys.map(([key]) => formatMs(summary[key])),
      formatCount(summary.dirtyCount),
      formatCount(summary.emittedCount),
      `\`${summary.sourceFile}\``,
    ].join(' | ')).map(row => `| ${row} |`),
    '',
    '## 原始明细',
    '',
    `| 场景 | 轮次 | 尝试次数 | 通过 | 采集方式 | ${metricKeys.map(([, label]) => label).join(' | ')} | 脏入口 | 输出文件 |`,
    `| --- | ---: | ---: | --- | --- | ${metricKeys.map(() => '---:').join(' | ')} | ---: | ---: |`,
    ...report.samples.map(sample => [
      sample.label,
      sample.iteration,
      sample.attempts ?? 1,
      sample.ok ? '是' : `否${sample.error ? `（${sample.error}）` : ''}`,
      formatCollector(sample.collector),
      ...metricKeys.map(([key]) => formatMs(sample[key])),
      sample.dirtyCount ?? '',
      sample.emittedCount ?? '',
    ].join(' | ')).map(row => `| ${row} |`),
    '',
    '说明：',
    '',
    '- 正式排名要求样本完整且没有重试；平均值、中位数、P95 和最大值共同用于识别长尾。',
    ...report.notes.map(note => `- ${note}`),
  ]

  await writeMachineReport({
    reportDir,
    report,
    markdown: `${lines.join('\n')}\n`,
    reportName: 'HMR',
    copyDirs: [
      {
        from: path.join(reportDir, 'profiles'),
        to: 'profiles',
      },
    ],
  })
}
