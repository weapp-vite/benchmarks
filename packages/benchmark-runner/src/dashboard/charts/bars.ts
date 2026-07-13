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
    .sort((left, right) => projectValue(left, 'bytes') - projectValue(right, 'bytes'))
  const labels = projects.map(project => project.label)
  const kb = (value: number) => Math.round(value / 1024 * 10) / 10
  return {
    id: 'size',
    title: '产物体积分析',
    description: '上图对比 raw、gzip 和 brotli，下图拆分 JavaScript 与 vendor JavaScript。',
    width: 1120,
    height: 760,
    option: {
      ...baseOption(palette, '产物体积分析', '当前 size 专项覆盖四个项目；单位 KB，越小越好'),
      legend: [
        { data: ['raw', 'gzip', 'brotli'], top: 80, right: 50, textStyle: { color: palette.muted } },
        { data: ['全部 JS', 'vendor JS'], top: 400, right: 50, textStyle: { color: palette.muted } },
      ],
      grid: [
        { left: 230, right: 90, top: 115, height: 230 },
        { left: 230, right: 90, top: 435, height: 230 },
      ],
      xAxis: [
        { ...axis(palette), type: 'value', name: 'KB', gridIndex: 0 },
        { ...axis(palette), type: 'value', name: 'KB', gridIndex: 1 },
      ],
      yAxis: [
        { ...axis(palette), type: 'category', data: labels, inverse: true, gridIndex: 0 },
        { ...axis(palette), type: 'category', data: labels, inverse: true, gridIndex: 1 },
      ],
      series: [
        { name: 'raw', type: 'bar', xAxisIndex: 0, yAxisIndex: 0, data: projects.map(project => kb(projectValue(project, 'bytes'))) },
        { name: 'gzip', type: 'bar', xAxisIndex: 0, yAxisIndex: 0, data: projects.map(project => kb(projectValue(project, 'gzipBytes'))) },
        { name: 'brotli', type: 'bar', xAxisIndex: 0, yAxisIndex: 0, data: projects.map(project => kb(projectValue(project, 'brotliBytes'))) },
        { name: '全部 JS', type: 'bar', xAxisIndex: 1, yAxisIndex: 1, data: projects.map(project => kb(projectValue(project, 'jsBytes'))) },
        { name: 'vendor JS', type: 'bar', xAxisIndex: 1, yAxisIndex: 1, data: projects.map(project => kb(projectValue(project, 'vendorJsBytes'))) },
      ],
    },
  }
}
