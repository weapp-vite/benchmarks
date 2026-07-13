import type { HmrReport } from '../../hmr/types'
import type { MachineEnvironment } from '../../reports/environment'
import type { RuntimeReport } from '../../runtime/types'
import type { AnalysisOutput } from '../../size/types'
import type { VerificationReport } from '../types'
import type { CompileReport } from './types'
import { readdir } from 'node:fs/promises'
import process from 'node:process'
import path from 'pathe'
import { readJson } from '../../fs'
import { buildDashboardReport } from './summarize'

async function readOptional<T>(file: string, errors: string[]) {
  try {
    return await readJson<T>(file)
  }
  catch (error) {
    errors.push(`${path.relative(process.cwd(), file)}: ${error instanceof Error ? error.message : String(error)}`)
    return undefined
  }
}

async function findPrevious<T extends { generatedAt: string }>(
  latest: T | undefined,
  runsDir: string | undefined,
  isComparable: (current: T, candidate: T) => boolean,
) {
  if (!latest || !runsDir) {
    return undefined
  }
  let files: string[]
  try {
    files = (await readdir(runsDir)).filter(file => file.endsWith('.json')).sort().reverse()
  }
  catch {
    return undefined
  }
  for (const file of files) {
    try {
      const report = await readJson<T>(path.join(runsDir, file))
      if (report.generatedAt < latest.generatedAt && isComparable(latest, report)) {
        return report
      }
    }
    catch {}
  }
  return undefined
}

function sameIds(current: string[], candidate: string[]) {
  return current.length === candidate.length
    && current.every((id, index) => id === candidate[index])
}

function sampledReportsComparable<Sample extends { ok: boolean }>(
  current: { iterations: number, samples: Sample[] },
  candidate: { iterations: number, samples: Sample[] },
  sampleId: (sample: Sample) => string,
) {
  if (current.iterations !== candidate.iterations) {
    return false
  }
  const currentIds = [...new Set(current.samples.map(sampleId))].sort()
  const candidateIds = [...new Set(candidate.samples.map(sampleId))].sort()
  return sameIds(currentIds, candidateIds)
    && candidate.samples.every(sample => sample.ok)
    && candidateIds.every(id => candidate.samples.filter(sample => sampleId(sample) === id).length === candidate.iterations)
}

function sizeReportsComparable(current: AnalysisOutput, candidate: AnalysisOutput) {
  return sameIds(
    current.projects.map(project => project.id).sort(),
    candidate.projects.map(project => project.id).sort(),
  )
}

function machineRunsDir(root: string, section: string, environment: MachineEnvironment | undefined) {
  return environment
    ? path.join(root, 'reports', section, 'machines', environment.machineId, 'runs')
    : undefined
}

export async function loadDashboardReport(root: string, verification?: VerificationReport) {
  const errors: string[] = []
  const reportsRoot = path.join(root, 'reports')
  const compile = await readOptional<CompileReport>(path.join(reportsRoot, 'compile/latest.json'), errors)
  const runtime = await readOptional<RuntimeReport>(path.join(reportsRoot, 'runtime/latest.json'), errors)
  const hmr = await readOptional<HmrReport>(path.join(reportsRoot, 'hmr/latest.json'), errors)
  const size = await readOptional<AnalysisOutput>(path.join(reportsRoot, 'size/wevu-analysis.json'), errors)
  const storedVerification = verification ?? await readOptional<VerificationReport>(
    path.join(reportsRoot, 'verification/latest.json'),
    [],
  )
  const previousCompile = await findPrevious(
    compile,
    machineRunsDir(root, 'compile', compile?.environment),
    (current, candidate) => sampledReportsComparable(current, candidate, sample => sample.project),
  )
  const previousRuntime = await findPrevious(
    runtime,
    machineRunsDir(root, 'runtime', runtime?.environment),
    (current, candidate) => sampledReportsComparable(current, candidate, sample => sample.project),
  )
  const previousHmr = await findPrevious(
    hmr,
    machineRunsDir(root, 'hmr', hmr?.environment),
    (current, candidate) => sampledReportsComparable(current, candidate, sample => sample.scenario),
  )
  const previousSize = await findPrevious(size, size?.toolchain
    ? path.join(reportsRoot, 'size/toolchains', size.toolchain.toolchainId, 'runs')
    : undefined, sizeReportsComparable)
  return buildDashboardReport({
    ...(compile ? { compile } : {}),
    ...(runtime ? { runtime } : {}),
    ...(hmr ? { hmr } : {}),
    ...(size ? { size } : {}),
    ...(storedVerification ? { verification: storedVerification } : {}),
    ...(previousCompile ? { previousCompile } : {}),
    ...(previousRuntime ? { previousRuntime } : {}),
    ...(previousHmr ? { previousHmr } : {}),
    ...(previousSize ? { previousSize } : {}),
    errors,
  })
}
