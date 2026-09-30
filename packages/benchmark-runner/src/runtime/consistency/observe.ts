import type { Deadline } from '../session/deadline'
import type { RuntimePage } from '../types'

export async function observeConsistency(currentPage: () => Promise<RuntimePage>, expected: { script: string, template: string, color: string }, deadline: Deadline) {
  let last: unknown
  while (true) {
    try {
      // Automatic compilation replaces page IDs. Reacquire on every poll, including stateful fallback.
      const page = await deadline.run('current consistency page', currentPage, 2000)
      const [script, template, styled] = await deadline.run('consistency selectors', () => Promise.all([
        page.$('.probe-script'),
        page.$('.probe-template'),
        page.$('.probe-style'),
      ]), 2000)
      const [scriptText, templateText, color] = await deadline.run('consistency view', () => Promise.all([
        script?.text(),
        template?.text(),
        styled?.style('color'),
      ]), 2000)
      last = { script: scriptText?.trim(), template: templateText?.trim(), color }
      if (scriptText?.trim() === expected.script && templateText?.trim() === expected.template && color === expected.color) {
        return last
      }
    }
    catch (error) {
      last = { error: String(error) }
    }
    try {
      await deadline.pause(100)
    }
    catch {
      throw new Error(`IDE consistency mismatch: expected ${JSON.stringify(expected)}; observed ${JSON.stringify(last)}`)
    }
  }
}
