import { expect, it } from 'vitest'
import { renderChartSvg } from '../src/dashboard/svg'

it('exports a complete static gradient chart without invalid hover CSS or animations', () => {
  const svg = renderChartSvg({
    id: 'compile',
    title: 'Static & safe',
    description: 'Two measured values',
    width: 800,
    height: 500,
    option: {
      xAxis: { type: 'category', data: ['one', 'two'] },
      yAxis: { type: 'value' },
      series: [{
        type: 'bar',
        data: [1, 2],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{ offset: 0, color: '#fff' }, { offset: 1, color: '#123456' }],
          },
        },
      }],
    },
  })
  expect(svg).toContain('<title>Static &amp; safe</title>')
  expect(svg).toContain('<linearGradient')
  expect(svg).toMatch(/fill="url\(#[^)]+\)"/)
  expect(svg).toContain('role="img"')
  expect(svg).not.toContain('[object Object]')
  expect(svg).not.toContain('<style')
  expect(svg).not.toContain('@keyframes')
})
