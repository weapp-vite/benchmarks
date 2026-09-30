import type { ProvenancedReport } from '../reports/provenance/types'
import type { VerificationReport, VerificationStep } from './types'
import process from 'node:process'
import path from 'pathe'
import { readJson } from '../fs'
import { repoRoot } from '../projects'
import { createMachineEnvironment } from '../reports/environment'
import { aggregationError } from '../reports/provenance/accept'
import { replaceVerificationSection } from '../reports/provenance/revision'
import { startReportRun } from '../reports/provenance/run'
import { generateDashboard } from './generate'
import { runStep } from './refresh/execute'
import { steps } from './refresh/steps'
import { writeVerificationReport } from './verification'

async function main() {
  const env = { ...process.env, CI: '1', BENCH_RUNTIME_REQUIRED: '1' }
  const args = process.argv.slice(2).filter(value => value !== '--')
  const section = args[0] === '--section' ? args[1] : undefined
  const reportFiles: Record<string, string> = {
    compile: 'compile/latest.json',
    runtime: 'runtime/latest.json',
    hmr: 'hmr/latest.json',
    size: 'size/wevu-analysis.json',
  }
  if (args.length && (args.length !== 2 || !section || !reportFiles[section])) {
    throw new Error('Usage: report:refresh [--section compile|runtime|hmr|size]')
  }
  const selected = section ? steps.filter(([id]) => id === section) : steps
  const verificationDir = path.join(repoRoot, 'reports/verification')
  const baseline = section ? await readJson<VerificationReport>(path.join(verificationDir, 'latest.json')) : undefined
  const source = section ? path.join(repoRoot, 'reports', reportFiles[section]!) : undefined
  const previous = source ? await readJson<ProvenancedReport>(source) : undefined
  if (section && (aggregationError(previous!, section, baseline) || !baseline?.provenance)) {
    throw new Error('Cannot rerun an unverified/legacy baseline; perform a full refresh first')
  }
  const run = await startReportRun('verification', { steps: selected }, { env })
  if (baseline?.provenance && baseline.provenance.inputs.fingerprint !== run.inputs.fingerprint) {
    throw new Error('Baseline inputs changed; perform a full refresh instead of replacing a section')
  }
  const runEnv = { ...env, ...run.childEnv }
  const results: VerificationStep[] = []
  for (const [id, label, args] of selected) {
    results.push(await runStep(id, label, args, runEnv))
  }
  const provenance = await run.finish()
  const report: VerificationReport = {
    schemaVersion: 1,
    provenance,
    generatedAt: new Date().toISOString(),
    environment: await createMachineEnvironment(process.env['WECHAT_DEVTOOLS_CLI']
      ? { wechatDevtools: process.env['WECHAT_DEVTOOLS_CLI'] }
      : {}),
    overallStatus: provenance.inputStable && results.every(step => step.status === 'passed') ? 'passed' : 'failed',
    steps: results,
  }
  let current = report
  if (baseline && previous && source) {
    // Save actual command evidence before validating the replacement, including failures.
    await writeVerificationReport(path.join(verificationDir, 'reruns', run.runId), report)
    current = replaceVerificationSection(baseline, previous, await readJson<ProvenancedReport>(source), report)
  }
  await writeVerificationReport(verificationDir, current)
  await generateDashboard(current)
  if (current.overallStatus === 'failed') {
    process.exitCode = 1
  }
}

main().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`)
  process.exitCode = 1
})
