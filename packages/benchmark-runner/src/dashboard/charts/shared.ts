import type { ChartPalette, DashboardReport } from '../types'

export const lightPalette: ChartPalette = {
  background: '#ffffff',
  foreground: '#20242b',
  muted: '#667085',
  grid: '#d9dee8',
  series: ['#1769aa', '#d1495b', '#2a9d8f', '#e09f3e', '#6d597a', '#3a7d44'],
  heatLow: '#eef2f7',
  heatHigh: '#1769aa',
  warning: '#b54708',
}

export const darkPalette: ChartPalette = {
  background: '#17191d',
  foreground: '#f2f4f7',
  muted: '#aab2c0',
  grid: '#3a404b',
  series: ['#62a8e5', '#f27b88', '#54c4b1', '#f2bd5b', '#b49bc8', '#79b985'],
  heatLow: '#282d35',
  heatHigh: '#62a8e5',
  warning: '#f2bd5b',
}

export function baseOption(palette: ChartPalette, title: string, subtitle: string) {
  return {
    backgroundColor: palette.background,
    color: palette.series,
    animationDuration: 350,
    textStyle: {
      color: palette.foreground,
      fontFamily: 'Arial, sans-serif',
      fontSize: 12,
    },
    title: {
      text: title,
      subtext: subtitle,
      left: 20,
      top: 16,
      textStyle: { color: palette.foreground, fontSize: 18, fontWeight: 500 },
      subtextStyle: { color: palette.muted, fontSize: 12, fontWeight: 400 },
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: palette.background,
      borderColor: palette.grid,
      textStyle: { color: palette.foreground },
    },
    aria: { enabled: true },
  }
}

export function axis(palette: ChartPalette) {
  return {
    axisLine: { lineStyle: { color: palette.grid } },
    axisTick: { lineStyle: { color: palette.grid } },
    axisLabel: { color: palette.muted },
    splitLine: { lineStyle: { color: palette.grid } },
    nameTextStyle: { color: palette.muted },
  }
}

export function completeValue(
  report: DashboardReport,
  section: 'compile' | 'runtime' | 'hmr' | 'size',
  projectId: string,
  metric: string,
) {
  const project = report[section]?.projects.find(item => item.id === projectId)
  return project?.complete ? project.values[metric] : undefined
}

export function projectValue(project: { values: Record<string, number> }, metric: string) {
  return project.values[metric] ?? 0
}

export function projectOrder(report: DashboardReport) {
  const labels = new Map<string, string>()
  for (const section of [report.compile, report.runtime, report.hmr, report.size]) {
    for (const project of section?.projects ?? []) {
      labels.set(project.id, project.label)
    }
  }
  return [...labels.entries()].map(([id, label]) => ({ id, label }))
}
