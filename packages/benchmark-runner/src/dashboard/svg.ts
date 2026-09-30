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
    // README images are static. ECharts' wrapper omits these SVG painter options;
    // exporting hover CSS can stringify gradient objects into invalid fill values.
    const painter = chart.getZr().painter
    if (!('renderToString' in painter) || typeof painter.renderToString !== 'function') {
      throw new Error('The configured SVG painter cannot export a static chart')
    }
    // The generic PainterBase declaration omits the SVG-specific options.
    const svg: unknown = Reflect.apply(painter.renderToString, painter, [{ cssAnimation: false, cssEmphasis: false }])
    if (typeof svg !== 'string') {
      throw new TypeError('The SVG painter returned a non-string export')
    }
    const metadata = `<title>${escapeXml(chartDefinition.title)}</title><desc>${escapeXml(chartDefinition.description)}</desc>`
    // ZRender emits these independent font declarations in the opposite order
    // to our generated-style convention. Keep their values and cascade intact.
    const normalizedSvg = svg.replace(/font-size:([^;"]+);font-family:([^;"]+);/g, 'font-family:$2;font-size:$1;')
    return normalizedSvg.replace('<svg ', `<svg role="img" aria-label="${escapeXml(chartDefinition.title)}" `)
      .replace('>', `>${metadata}`)
  }
  finally {
    chart.dispose()
  }
}
