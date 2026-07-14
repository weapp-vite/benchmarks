import type { ChartPalette, DashboardChart, DashboardReport } from '../types'
import { axis, baseOption, projectValue } from './shared'

export function compileChart(report: DashboardReport, palette: ChartPalette): DashboardChart {
  const projects = [...(report.compile?.projects ?? [])]
    .sort((left, right) => projectValue(left, 'buildMs') - projectValue(right, 'buildMs'))
  const labels = projects.map(project => project.label)
  return {
    id: 'compile',
    title: '编译性能',
    description: '上图为平均生产构建耗时，下图为同一次构建生成的平均产物体积。',
    width: 1120,
    height: 760,
    option: {
      ...baseOption(palette, '编译性能', '仅完整样本参与排序；耗时和体积均越小越好'),
      grid: [
        { left: 230, right: 90, top: 110, height: 230 },
        { left: 230, right: 90, top: 430, height: 230 },
      ],
      xAxis: [
        { ...axis(palette), type: 'value', name: '毫秒', gridIndex: 0 },
        { ...axis(palette), type: 'value', name: 'KB', gridIndex: 1 },
      ],
      yAxis: [
        { ...axis(palette), type: 'category', data: labels, inverse: true, gridIndex: 0 },
        { ...axis(palette), type: 'category', data: labels, inverse: true, gridIndex: 1 },
      ],
      graphic: [
        { type: 'text', left: 24, top: 110, style: { text: '平均构建耗时', fill: palette.foreground, fontSize: 14, fontWeight: 500 } },
        { type: 'text', left: 24, top: 430, style: { text: '平均产物体积', fill: palette.foreground, fontSize: 14, fontWeight: 500 } },
      ],
      series: [
        {
          name: '平均构建耗时',
          type: 'bar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          data: projects.map(project => project.complete ? projectValue(project, 'buildMs') : 0),
          label: { show: true, position: 'right', formatter: '{c} ms', color: palette.foreground },
          itemStyle: { color: palette.series[0] },
        },
        {
          name: '平均产物体积',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: projects.map(project => project.complete ? Math.round(projectValue(project, 'outputBytes') / 1024 * 10) / 10 : 0),
          label: { show: true, position: 'right', formatter: '{c} KB', color: palette.foreground },
          itemStyle: { color: palette.series[2] },
        },
      ],
    },
  }
}

export function sizeChart(report: DashboardReport, palette: ChartPalette): DashboardChart {
  const projects = [...(report.size?.projects ?? [])]
    .sort((left, right) => projectValue(left, 'runtimeBytes') - projectValue(right, 'runtimeBytes'))
  const labels = projects.map(project => project.label)
  const kb = (value: number) => Math.round(value / 1024 * 10) / 10
  return {
    id: 'size',
    title: '运行时包体积',
    description: '只统计生产构建后的框架运行时 allowlist 文件；页面业务代码、source map 和配置文件不计入。',
    width: 1120,
    height: 760,
    option: {
      ...baseOption(palette, '运行时包体积', '生产构建后的 runtime 实际体积；单位 KB，越小越好'),
      grid: { left: 230, right: 90, top: 115, bottom: 70 },
      xAxis: { ...axis(palette), type: 'value', name: 'KB' },
      yAxis: { ...axis(palette), type: 'category', data: labels, inverse: true },
      series: [{
        name: '运行时体积',
        type: 'bar',
        data: projects.map(project => kb(projectValue(project, 'runtimeBytes'))),
        label: { show: true, position: 'right', color: palette.foreground, formatter: '{@value} KB' },
      }],
    },
  }
}
