import { execFile } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import os from 'node:os'
import process from 'node:process'
import { promisify } from 'node:util'
import path from 'pathe'
import { repoRoot } from '../projects'

export interface MachineEnvironment {
  machineId: string
  machineLabel: string
  os: string
  arch: string
  cpu: string
  cpuCores: number
  memoryGB: number
  node: string
  pnpm: string
  wechatDevtools?: string
  gitCommit?: string
  weappViteSubmodule?: string
}

export interface ToolchainEnvironment {
  toolchainId: string
  toolchainLabel: string
  os: string
  arch: string
  node: string
  pnpm: string
  gitCommit?: string
  weappViteSubmodule?: string
  packages: Record<string, string>
}

const execFileAsync = promisify(execFile)

function roundMemoryGB(bytes: number) {
  return Math.round(bytes / 1024 / 1024 / 1024)
}

export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/^apple\s+/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function formatRunTimestamp(value: string) {
  return value.replace(/[:.]/g, '-')
}

async function run(command: string, args: string[], cwd = repoRoot) {
  try {
    const { stdout } = await execFileAsync(command, args, { cwd })
    return stdout.trim()
  }
  catch {
    return undefined
  }
}

async function readOsLabel() {
  if (process.platform !== 'darwin') {
    return `${os.type()} ${os.release()}`
  }

  const version = await run('sw_vers', ['-productVersion'])
  const build = await run('sw_vers', ['-buildVersion'])
  if (!version) {
    return `${os.type()} ${os.release()}`
  }
  return build ? `macOS ${version} (${build})` : `macOS ${version}`
}

async function readCpuLabel() {
  const brand = await run('sysctl', ['-n', 'machdep.cpu.brand_string'])
  const model = os.cpus()[0]?.model
  return brand || model || 'unknown'
}

async function readGitCommit() {
  return run('git', ['rev-parse', 'HEAD'])
}

async function readWeappViteSubmoduleCommit() {
  return run('git', ['rev-parse', 'HEAD'], path.join(repoRoot, 'submodules/weapp-vite'))
}

async function readPackageVersion(packageFile: string) {
  try {
    const pkg = JSON.parse(await readFile(packageFile, 'utf8')) as { version?: unknown }
    return typeof pkg.version === 'string' ? pkg.version : undefined
  }
  catch {
    return undefined
  }
}

export async function createMachineEnvironment(options: {
  wechatDevtools?: string
} = {}): Promise<MachineEnvironment> {
  const cpu = await readCpuLabel()
  const memoryGB = roundMemoryGB(os.totalmem())
  const machineId = slugify(process.env['BENCH_MACHINE_ID'] ?? '')
    || `${slugify(cpu)}-${memoryGB}gb`
  const machineLabel = process.env['BENCH_MACHINE_LABEL']
    ?? `${cpu} ${memoryGB}GB`
  const pnpm = await run('pnpm', ['--version'])
  const gitCommit = await readGitCommit()
  const weappViteSubmodule = await readWeappViteSubmoduleCommit()

  return {
    machineId,
    machineLabel,
    os: await readOsLabel(),
    arch: `${process.platform}/${process.arch}`,
    cpu,
    cpuCores: os.cpus().length,
    memoryGB,
    node: process.version,
    pnpm: pnpm ?? 'unknown',
    ...(options.wechatDevtools ? { wechatDevtools: options.wechatDevtools } : {}),
    ...(gitCommit ? { gitCommit } : {}),
    ...(weappViteSubmodule ? { weappViteSubmodule } : {}),
  }
}

export async function createToolchainEnvironment(): Promise<ToolchainEnvironment> {
  const pnpm = await run('pnpm', ['--version'])
  const gitCommit = await readGitCommit()
  const weappViteSubmodule = await readWeappViteSubmoduleCommit()
  const shortSubmodule = weappViteSubmodule?.slice(0, 7) ?? 'unknown'
  const packages = Object.fromEntries(
    (await Promise.all([
      ['weapp-vite', readPackageVersion(path.join(repoRoot, 'apps/weapp-vite-wevu/node_modules/weapp-vite/package.json'))],
      ['wevu', readPackageVersion(path.join(repoRoot, 'apps/weapp-vite-wevu/node_modules/wevu/package.json'))],
      ['vite', readPackageVersion(path.join(repoRoot, 'apps/weapp-vite-wevu/node_modules/vite/package.json'))],
      ['@dcloudio/vite-plugin-uni', readPackageVersion(path.join(repoRoot, 'apps/uni-app-vite-vue3/node_modules/@dcloudio/vite-plugin-uni/package.json'))],
    ].map(async ([name, versionPromise]) => [name, await versionPromise] as const)))
      .filter((entry): entry is readonly [string, string] => typeof entry[1] === 'string'),
  )
  const toolchainId = slugify(process.env['BENCH_TOOLCHAIN_ID'] ?? '')
    || `weapp-vite-${shortSubmodule}-node${process.versions.node.split('.')[0]}`

  return {
    toolchainId,
    toolchainLabel: process.env['BENCH_TOOLCHAIN_LABEL'] ?? `weapp-vite ${shortSubmodule} / Node ${process.versions.node}`,
    os: await readOsLabel(),
    arch: `${process.platform}/${process.arch}`,
    node: process.version,
    pnpm: pnpm ?? 'unknown',
    ...(gitCommit ? { gitCommit } : {}),
    ...(weappViteSubmodule ? { weappViteSubmodule } : {}),
    packages,
  }
}

export function machineEnvironmentLines(environment: MachineEnvironment | undefined) {
  if (!environment) {
    return [
      '## 运行环境',
      '',
      '- 未记录机器环境。旧报告只能按生成时间粗略对比，不建议跨机器比较。',
    ]
  }

  return [
    '## 运行环境',
    '',
    `- 机器：${environment.machineLabel}（\`${environment.machineId}\`）`,
    `- 系统：${environment.os}；架构：${environment.arch}`,
    `- CPU：${environment.cpu}；核心数：${environment.cpuCores}；内存：${environment.memoryGB}GB`,
    `- Node：${environment.node}；pnpm：${environment.pnpm}`,
    `- 微信开发者工具 CLI：${environment.wechatDevtools ?? '-'}`,
    `- Git commit：${environment.gitCommit ?? '-'}`,
    `- weapp-vite submodule：${environment.weappViteSubmodule ?? '-'}`,
  ]
}

export function machineDocument(environment: MachineEnvironment, reportName: string) {
  return [
    `# ${environment.machineLabel}`,
    '',
    `机器 ID：\`${environment.machineId}\``,
    '',
    '| 项 | 值 |',
    '| --- | --- |',
    `| 系统 | ${environment.os} |`,
    `| 架构 | ${environment.arch} |`,
    `| CPU | ${environment.cpu} |`,
    `| 核心数 | ${environment.cpuCores} |`,
    `| 内存 | ${environment.memoryGB}GB |`,
    `| Node | ${environment.node} |`,
    `| pnpm | ${environment.pnpm} |`,
    `| 微信开发者工具 CLI | ${environment.wechatDevtools ?? '-'} |`,
    '',
    `这个目录下的 ${reportName} 报告只和同一机器 ID 的历史结果直接比较；跨机器结果只能作为趋势参考。`,
    '',
  ].join('\n')
}

export function toolchainEnvironmentLines(environment: ToolchainEnvironment | undefined) {
  if (!environment) {
    return [
      '## 工具链环境',
      '',
      '- 未记录工具链环境。旧体积报告只能按生成时间粗略对比。',
    ]
  }

  return [
    '## 工具链环境',
    '',
    `- 工具链：${environment.toolchainLabel}（\`${environment.toolchainId}\`）`,
    `- 系统：${environment.os}；架构：${environment.arch}`,
    `- Node：${environment.node}；pnpm：${environment.pnpm}`,
    `- Git commit：${environment.gitCommit ?? '-'}`,
    `- weapp-vite submodule：${environment.weappViteSubmodule ?? '-'}`,
    `- 包版本：${Object.entries(environment.packages).map(([name, version]) => `${name}@${version}`).join('、') || '-'}`,
  ]
}

export function toolchainDocument(environment: ToolchainEnvironment) {
  return [
    `# ${environment.toolchainLabel}`,
    '',
    `工具链 ID：\`${environment.toolchainId}\``,
    '',
    '| 项 | 值 |',
    '| --- | --- |',
    `| 系统 | ${environment.os} |`,
    `| 架构 | ${environment.arch} |`,
    `| Node | ${environment.node} |`,
    `| pnpm | ${environment.pnpm} |`,
    `| Git commit | ${environment.gitCommit ?? '-'} |`,
    `| weapp-vite submodule | ${environment.weappViteSubmodule ?? '-'} |`,
    '',
    '## 包版本',
    '',
    '| 包 | 版本 |',
    '| --- | --- |',
    ...Object.entries(environment.packages).map(([name, version]) => `| ${name} | ${version} |`),
    '',
    '这个目录下的 size 报告按工具链归档；体积结果主要和依赖版本、构建器版本、Node/pnpm 版本相关。',
    '',
  ].join('\n')
}
