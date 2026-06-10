import type { MachineEnvironment, ToolchainEnvironment } from './environment'
import { cp } from 'node:fs/promises'
import path from 'pathe'
import { writeJson, writeText } from '../fs'
import {
  formatRunTimestamp,
  machineDocument,
  toolchainDocument,
} from './environment'

export async function writeMachineReport<T extends {
  generatedAt: string
  environment?: MachineEnvironment
}>(options: {
  reportDir: string
  report: T
  markdown: string
  reportName: string
  latestBaseName?: string
  samples?: unknown
  copyDirs?: Array<{
    from: string
    to: string
  }>
}) {
  const latestBaseName = options.latestBaseName ?? 'latest'
  const rootJson = path.join(options.reportDir, `${latestBaseName}.json`)
  const rootMd = path.join(options.reportDir, `${latestBaseName}.md`)
  await writeJson(rootJson, options.report)
  await writeText(rootMd, options.markdown)
  if (options.samples) {
    await writeJson(path.join(options.reportDir, `${latestBaseName}.samples.json`), options.samples)
  }

  const environment = options.report.environment
  if (!environment) {
    return
  }

  const machineDir = path.join(options.reportDir, 'machines', environment.machineId)
  const runDir = path.join(machineDir, 'runs')
  const runName = formatRunTimestamp(options.report.generatedAt)
  await writeJson(path.join(machineDir, `${latestBaseName}.json`), options.report)
  await writeText(path.join(machineDir, `${latestBaseName}.md`), options.markdown)
  await writeJson(path.join(runDir, `${runName}.json`), options.report)
  await writeText(path.join(runDir, `${runName}.md`), options.markdown)
  await writeText(path.join(machineDir, 'MACHINE.md'), machineDocument(environment, options.reportName))
  if (options.samples) {
    await writeJson(path.join(machineDir, `${latestBaseName}.samples.json`), options.samples)
  }
  if (options.copyDirs) {
    await Promise.all(options.copyDirs.map(item =>
      cp(item.from, path.join(machineDir, item.to), { recursive: true, force: true }),
    ))
  }
}

export async function writeToolchainReport<T extends {
  generatedAt: string
  toolchain?: ToolchainEnvironment
}>(options: {
  reportDir: string
  report: T
  markdown: string
  latestBaseName: string
}) {
  await writeJson(path.join(options.reportDir, `${options.latestBaseName}.json`), options.report)
  await writeText(path.join(options.reportDir, `${options.latestBaseName}.md`), options.markdown)

  const toolchain = options.report.toolchain
  if (!toolchain) {
    return
  }

  const toolchainDir = path.join(options.reportDir, 'toolchains', toolchain.toolchainId)
  const runDir = path.join(toolchainDir, 'runs')
  const runName = formatRunTimestamp(options.report.generatedAt)
  await writeJson(path.join(toolchainDir, `${options.latestBaseName}.json`), options.report)
  await writeText(path.join(toolchainDir, `${options.latestBaseName}.md`), options.markdown)
  await writeJson(path.join(runDir, `${runName}.json`), options.report)
  await writeText(path.join(runDir, `${runName}.md`), options.markdown)
  await writeText(path.join(toolchainDir, 'TOOLCHAIN.md'), toolchainDocument(toolchain))
}
