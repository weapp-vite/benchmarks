import type { ChartPalette, DashboardReport } from '../types'
import { compileChart, sizeChart } from './bars'
import { hmrChart, runtimeChart } from './heatmaps'
import { overviewChart } from './overview'

export { darkPalette, lightPalette } from './shared'

export function createDashboardCharts(report: DashboardReport, palette: ChartPalette) {
  return [
    overviewChart(report, palette),
    compileChart(report, palette),
    runtimeChart(report, palette),
    hmrChart(report, palette),
    sizeChart(report, palette),
  ]
}
