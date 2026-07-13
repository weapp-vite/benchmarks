import type { ChartPalette, DashboardChart, DashboardReport } from '../types'
import { axis, baseOption, projectValue } from './shared'

const runtimeLabels: Record<string, string> = {
  'initial-render': '初始渲染',
  'append-batch': '追加列表',
  'update-every-5th': '批量更新',
  'sort-score-desc': '全量排序',
  'filter-active-high-score': '过滤切换',
  'group-aggregate-render': '分组聚合',
  'window-slice-middle': '窗口切片',
  'replace-dataset': '整表替换',
}

export function runtimeChart(report: DashboardReport, palette: ChartPalette): DashboardChart {
  const projects = [...(report.runtime?.projects ?? [])]
    .sort((left, right) => projectValue(left, 'totalMs') - projectValue(right, 'totalMs'))
  const metricNames = Object.keys(runtimeLabels)
    .filter(metric => projects.some(project => typeof project.values[metric] === 'number'))
  const cells = projects.flatMap((project, projectIndex) => metricNames.map((metric, metricIndex) => [
    metricIndex,
    projectIndex,
    project.complete ? projectValue(project, metric) : undefined,
  ]))
  const data = cells.filter(cell => typeof cell[2] === 'number')
  const missing = cells.filter(cell => typeof cell[2] !== 'number').map(([x, y]) => [x, y])
  const numeric = data.map(item => item[2]).filter((value): value is number => typeof value === 'number')
  return {
    id: 'runtime',
    title: '运行时场景耗时',
    description: '八个真实 IDE E2E 场景的平均累计耗时，单位为毫秒。',
    width: 1280,
    height: Math.max(560, 240 + projects.length * 50),
    option: {
      ...baseOption(palette, '运行时场景耗时', '微信开发者工具 IDE E2E；数值越小越好'),
      grid: { left: 220, right: 90, top: 115, bottom: 110 },
      xAxis: {
        ...axis(palette),
        type: 'category',
        data: metricNames.map(metric => runtimeLabels[metric] ?? metric),
        axisLabel: { color: palette.muted, rotate: 24 },
      },
      yAxis: { ...axis(palette), type: 'category', data: projects.map(project => project.label), inverse: true },
      visualMap: {
        min: Math.min(...numeric, 0),
        max: Math.max(...numeric, 1),
        orient: 'horizontal',
        left: 'center',
        bottom: 20,
        inRange: { color: [palette.heatLow, palette.warning] },
        textStyle: { color: palette.muted },
      },
      series: [
        {
          name: '平均耗时',
          type: 'heatmap',
          data,
          label: { show: true, formatter: '{@[2]}', color: palette.foreground },
          itemStyle: { borderColor: palette.background, borderWidth: 3 },
        },
        {
          name: '样本不完整',
          type: 'scatter',
          data: missing,
          symbolSize: 0,
          tooltip: { show: false },
          label: { show: true, formatter: 'N/A', position: 'inside', color: palette.muted },
        },
      ],
    },
  }
}

function scenarioKind(id: string) {
  if (id.includes('template') || id.includes('wxml')) {
    return '模板'
  }
  if (id.includes('style') || id.includes('wxss')) {
    return '样式'
  }
  if (id.includes('json') || id.includes('config')) {
    return '页面配置'
  }
  return '脚本'
}

export function hmrChart(report: DashboardReport, palette: ChartPalette): DashboardChart {
  const projects = report.hmr?.projects ?? []
  const kinds = ['脚本', '模板', '样式', '页面配置']
  const scenarios = report.hmr?.scenarios ?? []
  const cells = projects.flatMap((project, projectIndex) => kinds.map((kind, kindIndex) => {
    const matches = scenarios.filter(scenario => scenario.project === project.id && scenarioKind(scenario.id) === kind)
    const values = matches.map(scenario => scenario.valueMs).filter((value): value is number => typeof value === 'number')
    const value = values.length
      ? Math.round(values.reduce((total, item) => total + item, 0) / values.length * 10) / 10
      : undefined
    return [kindIndex, projectIndex, value]
  }))
  const data = cells.filter(cell => typeof cell[2] === 'number')
  const missing = cells.filter(cell => typeof cell[2] !== 'number').map(([x, y]) => [x, y])
  const numeric = data.map(item => item[2]).filter((value): value is number => typeof value === 'number')
  return {
    id: 'hmr',
    title: 'HMR 场景耗时',
    description: '从写入源文件到目标小程序产物变化的墙钟耗时，单位为毫秒。',
    width: 1120,
    height: Math.max(540, 220 + projects.length * 50),
    option: {
      ...baseOption(palette, 'HMR 场景耗时', 'dev/watch 模式墙钟耗时；N/A 表示该框架没有对应场景'),
      grid: { left: 230, right: 90, top: 115, bottom: 90 },
      xAxis: { ...axis(palette), type: 'category', data: kinds },
      yAxis: { ...axis(palette), type: 'category', data: projects.map(project => project.label), inverse: true },
      visualMap: {
        min: Math.min(...numeric, 0),
        max: Math.max(...numeric, 1),
        orient: 'horizontal',
        left: 'center',
        bottom: 18,
        inRange: { color: [palette.heatLow, palette.warning] },
        textStyle: { color: palette.muted },
      },
      series: [
        {
          name: '平均 HMR',
          type: 'heatmap',
          data,
          label: { show: true, formatter: '{@[2]}', color: palette.foreground },
          itemStyle: { borderColor: palette.background, borderWidth: 3 },
        },
        {
          name: '无对应场景',
          type: 'scatter',
          data: missing,
          symbolSize: 0,
          tooltip: { show: false },
          label: { show: true, formatter: 'N/A', position: 'inside', color: palette.muted },
        },
      ],
    },
  }
}
