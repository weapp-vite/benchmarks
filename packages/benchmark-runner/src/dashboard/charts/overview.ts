import type { ChartPalette, DashboardChart, DashboardReport } from '../types'
import { lowerIsBetterIndex } from '../data'
import { axis, baseOption, completeValue, projectOrder } from './shared'

export function overviewChart(report: DashboardReport, palette: ChartPalette): DashboardChart {
  const dimensions = [
    { key: 'compile', label: '编译耗时', metric: 'buildMs' },
    { key: 'runtime', label: '运行时总耗时', metric: 'totalMs' },
    { key: 'hmr', label: 'HMR 平均耗时', metric: 'averageMs' },
    { key: 'size', label: '产物体积', metric: 'bytes' },
  ] as const
  const projects = projectOrder(report)
  const bestByDimension = dimensions.map(dimension => Math.min(
    ...projects
      .map(project => completeValue(report, dimension.key, project.id, dimension.metric))
      .filter((value): value is number => typeof value === 'number' && value > 0),
  ))
  const cells = projects.flatMap((project, projectIndex) => dimensions.map((dimension, dimensionIndex) => {
    const value = completeValue(report, dimension.key, project.id, dimension.metric)
    return [dimensionIndex, projectIndex, lowerIsBetterIndex(value, bestByDimension[dimensionIndex])]
  }))
  const data = cells.filter(cell => typeof cell[2] === 'number')
  const missing = cells.filter(cell => typeof cell[2] !== 'number').map(([x, y]) => [x, y])

  return {
    id: 'overview',
    title: '跨维度性能指数',
    description: '每个维度以当前完整样本中的最佳结果为 100；缺失或不完整样本显示 N/A。',
    width: 1120,
    height: Math.max(520, 210 + projects.length * 48),
    option: {
      ...baseOption(palette, '跨维度性能指数', '每列独立归一化，100 为当前维度最佳；N/A 不参与比较'),
      grid: { left: 220, right: 80, top: 110, bottom: 70 },
      xAxis: {
        ...axis(palette),
        type: 'category',
        data: dimensions.map(item => item.label),
        splitArea: { show: true, areaStyle: { color: [palette.background] } },
      },
      yAxis: {
        ...axis(palette),
        type: 'category',
        data: projects.map(project => project.label),
        inverse: true,
        splitArea: { show: true, areaStyle: { color: [palette.background] } },
      },
      visualMap: {
        min: 0,
        max: 100,
        calculable: false,
        orient: 'horizontal',
        left: 'center',
        bottom: 16,
        inRange: { color: [palette.heatLow, palette.heatHigh] },
        textStyle: { color: palette.muted },
      },
      series: [
        {
          name: '性能指数',
          type: 'heatmap',
          data,
          label: { show: true, formatter: '{@[2]}', color: palette.foreground, fontWeight: 500 },
          itemStyle: { borderColor: palette.background, borderWidth: 3 },
          emphasis: { itemStyle: { borderColor: palette.foreground, borderWidth: 2 } },
        },
        {
          name: '未参与',
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
