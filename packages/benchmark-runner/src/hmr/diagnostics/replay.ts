import type { InputSnapshot } from '../../reports/provenance/types'
import type { HmrReport, HmrScenario } from '../types'
import type { DiagnosticEdit } from './types'
import { readFile } from 'node:fs/promises'

const phases = new Set(['first', 'continuous', 'restore', 'failure', 'repair', 'rename', 'delete', 'recreate', 'burst', 'long-watch', 'batch', 'batch-restore'])

export function validateReplay(report: HmrReport, inputs: InputSnapshot, scenarios: HmrScenario[]) {
  const diagnostics = report.diagnostics
  if (!diagnostics?.enabled || diagnostics.schemaVersion !== 1 || !diagnostics.edits.length) {
    throw new Error('Replay requires a version 1 diagnostic report with edits')
  }
  if (!report.provenance?.inputStable || diagnostics.inputFingerprint !== inputs.fingerprint
    || report.provenance.inputs.fingerprint !== inputs.fingerprint) {
    throw new Error('Replay input/runner fingerprint differs; restore the recorded inputs first')
  }
  const ids = new Set<string>()
  for (const edit of diagnostics.edits) {
    const scenario = scenarios.find(item => item.id === edit.scenario)
    if (!scenario || scenario.project !== edit.project || !phases.has(edit.phase)
      || !/^[\w-]{1,240}$/.test(edit.marker) || !/^[\w-]{1,240}$/.test(edit.id) || ids.has(edit.id)) {
      throw new Error(`Invalid replay edit: ${edit.id}`)
    }
    ids.add(edit.id)
  }
  return diagnostics
}

export async function readReplay(file: string, inputs: InputSnapshot, scenarios: HmrScenario[]) {
  return validateReplay(JSON.parse(await readFile(file, 'utf8')) as HmrReport, inputs, scenarios)
}

export function replayProjects(edits: DiagnosticEdit[]) {
  return [...new Set(edits.map(edit => edit.project))]
}
