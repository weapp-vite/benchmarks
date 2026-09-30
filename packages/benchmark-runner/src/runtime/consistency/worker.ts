import type { ConsistencyMode } from './fixture'
import { readFile, writeFile } from 'node:fs/promises'
import process from 'node:process'
import path from 'pathe'
import { Deadline } from '../session/deadline'
import { openOwnedProject } from '../session/owned'
import { phases } from './fixture'
import { observeConsistency } from './observe'

async function main() {
  const request = JSON.parse(await readFile(process.argv[2]!, 'utf8')) as {
    app: string
    mode: ConsistencyMode
    cliPath: string
    pageFile: string
    sources: Record<string, string>
    reportDir: string
    resultPath: string
  }
  const { app, mode, cliPath, pageFile, sources, reportDir, resultPath } = request
  const results: Array<Record<string, unknown>> = []
  const logs: unknown[] = []
  const deadline = new Deadline(100_000)
  let session: Awaited<ReturnType<typeof openOwnedProject>> | undefined
  let phase: string = 'launch'
  const persist = () => writeFile(resultPath, JSON.stringify(results))
  try {
    session = await openOwnedProject(cliPath, app, deadline)
    const program = session.program
    program.on('console', (event) => {
      logs.push(event)
      if (logs.length > 40) {
        logs.shift()
      }
    })
    const host = session.host
    await deadline.run('fixture route', () => program.reLaunch('/pages/index/index'))
    const currentPage = () => program.currentPage({ retries: 1, timeout: 2000 })
    for (const item of phases) {
      phase = item.phase
      const template = mode === 'classic' ? item.marker : 'initial'
      if (item.phase !== 'initial') {
        await writeFile(pageFile, sources[item.phase]!)
      }
      // Classic batch changes reset the instance; safe stateful JS patches retain both taps.
      const count = item.phase === 'initial' || mode === 'classic' ? 0 : 2
      const expected = {
        script: `${item.marker}:${count}`,
        template,
        color: mode === 'classic' ? item.computed : phases[0].computed,
      }
      const observation = await observeConsistency(currentPage, expected, new Deadline(deadline.remaining('observe', 20_000)))
      const screenshot = `${mode}-${item.phase}.png`
      await deadline.run('screenshot', () => program.screenshot({ path: path.join(reportDir, screenshot) }), 5000)
      if (item.phase === 'initial' || mode === 'classic') {
        const page = await deadline.run('interaction page', currentPage, 2000)
        const button = await deadline.run('interaction selector', () => page.$('.probe-tap'), 2000)
        if (!button) {
          throw new Error('Missing interaction button')
        }
        await deadline.run('first tap', () => button.tap(), 2000)
        await deadline.run('second tap', () => button.tap(), 2000)
        await observeConsistency(currentPage, { ...expected, script: `${item.marker}:2` }, new Deadline(deadline.remaining('tap assertion', 5000)))
      }
      results.push({ mode, phase, ok: true, observation, screenshot, host })
      await persist()
    }
  }
  catch (error) {
    const evidence: Record<string, unknown> = { logs }
    if (session) {
      const diagnostic = new Deadline(6000)
      try {
        evidence['client'] = await diagnostic.run('HMR client state', () => session!.program.evaluate(`() => {
          const client = globalThis.__WEAPP_VITE_STATEFUL_HMR_CLIENT__;
          return { transport: client?.getTransportState?.(), lastApply: client?.getLastApply?.(), pages: getCurrentPages().map(page => ({ route: page.route, data: page.data })) };
        }`), 2000)
      }
      catch (diagnosticError) { evidence['clientError'] = String(diagnosticError) }
      try {
        const screenshot = `${mode}-${phase}-failed.png`
        await diagnostic.run('failure screenshot', () => session!.program.screenshot({ path: path.join(reportDir, screenshot) }), 3000)
        evidence['screenshot'] = screenshot
      }
      catch (diagnosticError) { evidence['screenshotError'] = String(diagnosticError) }
    }
    results.push({ mode, phase, ok: false, error: String(error), evidence })
  }
  finally {
    await session?.dispose().catch(error => results.push({ mode, phase: 'cleanup', ok: false, error: String(error) }))
    await persist()
  }
}

main().catch((error) => {
  process.stderr.write(`${String(error)}\n`)
  process.exitCode = 1
})
