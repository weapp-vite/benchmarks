import type { Deadline } from '../session/deadline'
import type { RuntimePage } from '../types'
import { replaceCount, stressCycles } from '../../scenario'

export async function verifyFinalView(page: RuntimePage, deadline: Deadline) {
  const firstId = 100_000 + (stressCycles.replaceDataset - 1) * replaceCount
  while (true) {
    const state = await deadline.run('host view', async () => {
      const [summary, titles, metrics, groups] = await Promise.all([
        page.$('.summary'),
        page.$$('.row__title'),
        page.$$('.metric'),
        page.$$('.group'),
      ])
      const [text, first, last, color] = await Promise.all([
        summary?.text(),
        titles[0]?.text(),
        titles.at(-1)?.text(),
        summary?.style('color'),
      ])
      return { text: text?.trim(), first: first?.trim(), last: last?.trim(), color, count: titles.length, metrics: metrics.length, groups: groups.length }
    })
    if (state.text === `${replaceCount}/${replaceCount}` && state.count === replaceCount
      && state.first === `Item ${firstId}` && state.last === `Item ${firstId + replaceCount - 1}`
      && state.metrics === 8 && state.groups === 0) {
      if (!['rgb(37, 99, 235)', '#2563eb', 'rgba(37, 99, 235, 1)'].includes(String(state.color))) {
        throw new Error(`Host computed color mismatch: ${String(state.color)}`)
      }
      return ['summary', 'row-count', 'first-title', 'last-title', 'metric-count', 'groups-cleared', 'computed-color']
    }
    await deadline.pause(100)
  }
}
