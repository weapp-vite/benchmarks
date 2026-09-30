import type { HmrReport } from '../../hmr/types'
import type { RuntimeReport } from '../../runtime/types'
import type { AnalysisOutput } from '../../size/types'
import type { BenchmarkSection, DashboardReport, ProjectSummary } from '../types'
import type { CompileReport, ReportInputs } from './types'
import { isHealthyHmrScenario } from '../../hmr/statistics'
import { aggregationError } from '../../reports/provenance/accept'
import { comparableProvenance, provenanceError } from '../../reports/provenance/validate'
import { isVerifiedRuntimeSample } from '../../runtime/observe/boundary'

function average(values: number[]) {
  return values.length
    ? values.reduce((total, value) => total + value, 0) / values.length
    : undefined
}

function round(value: number | undefined) {
  return typeof value === 'number' ? Math.round(value * 10) / 10 : undefined
}

function attachPrevious(current: ProjectSummary[], previous: ProjectSummary[]) {
  const previousById = new Map(previous.map(item => [item.id, item]))
  return current.map((item) => {
    const previousValues = previousById.get(item.id)?.values
    return { ...item, ...(previousValues ? { previousValues } : {}) }
  })
}

export function summarizeCompile(report: CompileReport): BenchmarkSection {
  const ids = [...new Set(report.samples.map(sample => sample.project))]
  const projects = ids.map((id) => {
    const all = report.samples.filter(sample => sample.project === id)
    const samples = all.filter(sample => sample.ok)
    return {
      id,
      label: all[0]?.label ?? id,
      sampleCount: samples.length,
      expectedSamples: report.iterations,
      complete: samples.length === report.iterations,
      values: {
        buildMs: round(average(samples.map(sample => sample.durationMs))) ?? 0,
        outputBytes: round(average(samples.map(sample => sample.output.bytes))) ?? 0,
        jsBytes: round(average(samples.map(sample => sample.output.jsBytes))) ?? 0,
        templateBytes: round(average(samples.map(sample => sample.output.templateBytes))) ?? 0,
        styleBytes: round(average(samples.map(sample => sample.output.styleBytes))) ?? 0,
      },
    }
  })
  return {
    generatedAt: report.generatedAt,
    ...(report.provenance ? { provenance: report.provenance } : {}),
    iterations: report.iterations,
    ...(report.environment ? { environment: report.environment } : {}),
    projects,
  }
}

export function summarizeRuntime(report: RuntimeReport): BenchmarkSection {
  const ids = [...new Set(report.samples.map(sample => sample.project))]
  const projects = ids.map((id) => {
    const all = report.samples.filter(sample => sample.project === id)
    const samples = all.filter(isVerifiedRuntimeSample)
    const values: Record<string, number> = {}
    if (samples.length === report.iterations && all.length === report.iterations) {
      values['totalMs'] = round(average(samples.map(sample => sample.observation!.durationMs)))!
    }
    return {
      id,
      label: all[0]?.label ?? id,
      sampleCount: samples.length,
      expectedSamples: report.iterations,
      complete: samples.length === report.iterations,
      values,
    }
  })
  return {
    generatedAt: report.generatedAt,
    ...(report.provenance ? { provenance: report.provenance } : {}),
    iterations: report.iterations,
    ...(report.environment ? { environment: report.environment } : {}),
    projects,
  }
}

export function summarizeHmr(report: HmrReport): BenchmarkSection {
  const scenarios = [...new Set(report.samples.map(sample => sample.scenario))].map((id) => {
    const all = report.samples.filter(sample => sample.scenario === id)
    const samples = all.filter(sample => sample.ok && typeof sample.totalMs === 'number')
    const first = all[0]
    const complete = isHealthyHmrScenario(all, report.iterations)
    const valueMs = round(average(samples.map(sample => sample.totalMs as number)))
    return {
      id,
      label: first?.label ?? id,
      project: first?.project ?? 'unknown',
      projectLabel: first?.projectLabel ?? 'unknown',
      sampleCount: samples.length,
      expectedSamples: report.iterations,
      complete,
      ...(complete && typeof valueMs === 'number' ? { valueMs } : {}),
    }
  })
  const projects = [...new Set(scenarios.map(scenario => scenario.project))].map((id) => {
    const projectScenarios = scenarios.filter(scenario => scenario.project === id)
    const values = projectScenarios
      .map(scenario => scenario.valueMs)
      .filter((value): value is number => typeof value === 'number')
    const complete = projectScenarios.every(scenario => scenario.complete)
    const averageMs = complete ? round(average(values)) : undefined
    return {
      id,
      label: projectScenarios[0]?.projectLabel ?? id,
      sampleCount: projectScenarios.reduce((total, scenario) => total + scenario.sampleCount, 0),
      expectedSamples: projectScenarios.length * report.iterations,
      complete,
      values: {
        ...(typeof averageMs === 'number' ? { averageMs } : {}),
        scenarioCount: projectScenarios.length,
      },
    }
  })
  return {
    generatedAt: report.generatedAt,
    ...(report.provenance ? { provenance: report.provenance } : {}),
    iterations: report.iterations,
    ...(report.environment ? { environment: report.environment } : {}),
    projects,
    scenarios,
  }
}

export function summarizeSize(report: AnalysisOutput): BenchmarkSection {
  return {
    generatedAt: report.generatedAt,
    ...(report.provenance ? { provenance: report.provenance } : {}),
    ...(report.toolchain ? { toolchain: report.toolchain } : {}),
    projects: report.projects.map(project => ({
      id: project.id,
      label: project.label,
      sampleCount: 1,
      expectedSamples: 1,
      complete: true,
      values: {
        bytes: project.totals.bytes,
        gzipBytes: project.totals.gzipBytes,
        brotliBytes: project.totals.brotliBytes,
        jsBytes: project.totals.jsBytes,
        vendorJsBytes: project.totals.vendorJsBytes,
        runtimeFiles: project.totals.runtimeFiles,
        runtimeBytes: project.totals.runtimeBytes,
        runtimeGzipBytes: project.totals.runtimeGzipBytes,
        runtimeBrotliBytes: project.totals.runtimeBrotliBytes,
      },
    })),
  }
}

function withPrevious(current: BenchmarkSection, previous: BenchmarkSection | undefined): BenchmarkSection {
  return previous && comparableProvenance(current, previous) ? { ...current, projects: attachPrevious(current.projects, previous.projects) } : current
}

export function buildDashboardReport(inputs: ReportInputs): DashboardReport {
  const errors = [...(inputs.errors ?? [])]
  function accepted<T extends { generatedAt: string }>(name: string, report: T | undefined) {
    if (!report) {
      return undefined
    }
    const rejection = aggregationError(report, name, inputs.verification)
    if (rejection) {
      errors.push(`${name}: ${rejection}`)
      return undefined
    }
    const warning = provenanceError(report)
    if (warning) {
      errors.push(`${name}: ${warning}`)
    }
    return report
  }
  const rawCompile = accepted('compile', inputs.compile)
  const rawRuntime = accepted('runtime', inputs.runtime)
  const rawHmr = accepted('hmr', inputs.hmr)
  const rawSize = accepted('size', inputs.size)
  const compile = rawCompile ? summarizeCompile(rawCompile) : undefined
  const runtime = rawRuntime ? summarizeRuntime(rawRuntime) : undefined
  const hmr = rawHmr ? summarizeHmr(rawHmr) : undefined
  const size = rawSize ? summarizeSize(rawSize) : undefined
  const sourceCommit = compile?.environment?.gitCommit
    ?? runtime?.environment?.gitCommit
    ?? hmr?.environment?.gitCommit
    ?? size?.toolchain?.gitCommit
  const incomplete = [compile, runtime, hmr, size]
    .some(section => !section || section.projects.some(project => !project.complete))

  return {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    ...(sourceCommit ? { sourceCommit } : {}),
    status: errors.length || incomplete || inputs.verification?.overallStatus === 'failed' ? 'partial' : 'complete',
    errors,
    ...(inputs.verification ? { verification: inputs.verification } : {}),
    ...(compile ? { compile: withPrevious(compile, inputs.previousCompile ? summarizeCompile(inputs.previousCompile) : undefined) } : {}),
    ...(runtime ? { runtime: withPrevious(runtime, inputs.previousRuntime ? summarizeRuntime(inputs.previousRuntime) : undefined) } : {}),
    ...(hmr ? { hmr: withPrevious(hmr, inputs.previousHmr ? summarizeHmr(inputs.previousHmr) : undefined) } : {}),
    ...(size ? { size: withPrevious(size, inputs.previousSize ? summarizeSize(inputs.previousSize) : undefined) } : {}),
  }
}

export function lowerIsBetterIndex(value: number | undefined, best: number | undefined) {
  if (value === undefined || best === undefined) {
    return undefined
  }
  if (best === 0) {
    return value === 0 ? 100 : 0
  }
  if (value === 0) {
    return 100
  }
  return Math.round((best / value) * 1000) / 10
}
