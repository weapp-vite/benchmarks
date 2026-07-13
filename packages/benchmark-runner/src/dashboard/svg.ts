import type { DashboardChart } from './types'
import * as echarts from 'echarts'

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll('\'', '&apos;')
}

export function renderChartSvg(chartDefinition: DashboardChart) {
  const chart = echarts.init(null, undefined, {
    renderer: 'svg',
    ssr: true,
    width: chartDefinition.width,
    height: chartDefinition.height,
  })
  try {
    chart.setOption(chartDefinition.option)
    const svg = chart.renderToSVGString()
    const metadata = `<title>${escapeXml(chartDefinition.title)}</title><desc>${escapeXml(chartDefinition.description)}</desc>`
    return svg.replace('<svg ', `<svg role="img" aria-label="${escapeXml(chartDefinition.title)}" `)
      .replace('>', `>${metadata}`)
  }
  finally {
    chart.dispose()
  }
}
