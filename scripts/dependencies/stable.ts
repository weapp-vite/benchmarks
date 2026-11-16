import type { Framework } from './stable/config'
import { spawn } from 'node:child_process'
import process from 'node:process'
import { pathToFileURL } from 'node:url'
import { frameworkPackages, projects, stablePackages } from './stable/config'
import { dcloudRelease, isPrerelease, npmLatest } from './stable/registry'
import {
  collectVersions,
  packageName,
  projectPath,
  readPackage,
  repoRoot,
  versionOf,
} from './stable/workspaces'

export type { Framework } from './stable/config'
export { isPrerelease } from './stable/registry'
export { collectVersions, versionOf } from './stable/workspaces'

const packageManager = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'

function spawnCommand(command: string, args: string[], cwd = repoRoot) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(command, args, { cwd, stdio: 'inherit', env: process.env })
    child.once('error', reject)
    child.once('exit', (code, signal) => {
      if (code === 0) {
        resolve()
      }
      else {
        reject(new Error(`${command} ${args.join(' ')} 失败：${signal ?? `exit ${code}`}`))
      }
    })
  })
}

async function updatePnpm(project: string, packages: string[]) {
  await spawnCommand(packageManager, ['update', '--latest', '--filter', packageName(project), ...packages])
}

async function updateWeappVite() {
  await updatePnpm(projects.weappViteNative, ['weapp-vite'])
  await updatePnpm(projects.weappViteWevu, ['weapp-vite', 'wevu'])
  await updatePnpm(projects.weappViteWevuPerformance, ['weapp-vite', 'wevu'])
  await updatePnpm(projects.runner, ['@weapp-vite/miniprogram-automator'])
}

async function updateTaro() {
  await updatePnpm(projects.taro, frameworkPackages.taro)
}

async function updateDcloud() {
  for (const project of [projects.uniApp, projects.uniAppX]) {
    await spawnCommand(packageManager, [
      'dlx',
      '--yes',
      '@dcloudio/uvm@latest',
      'latest',
      '--manager',
      'pnpm',
      '--project',
      projectPath(project),
    ])
  }
  await spawnCommand(packageManager, ['install'])
}

async function updateMpx() {
  await updatePnpm(projects.mpx, frameworkPackages.mpx)
}

function assertNoMissing(label: string, versions: Array<{ name: string, version: string }>) {
  const missing = versions.filter(item => item.version === '-')
  if (missing.length) {
    throw new Error(`${label} 缺少依赖：${missing.map(item => item.name).join(', ')}`)
  }
}

function assertNoPrerelease(label: string, versions: Array<{ name: string, version: string }>) {
  const prereleases = versions.filter(item => isPrerelease(item.version))
  if (prereleases.length) {
    throw new Error(`${label} 仍包含 prerelease：${prereleases.map(item => `${item.name}=${item.version}`).join(', ')}`)
  }
}

export async function validateFrameworkVersions() {
  const native = await readPackage(projects.weappViteNative)
  const wevu = await readPackage(projects.weappViteWevu)
  const performance = await readPackage(projects.weappViteWevuPerformance)
  const weappVersionEntries = [
    { name: projects.weappViteNative, version: versionOf(native, 'weapp-vite') },
    { name: projects.weappViteWevu, version: versionOf(wevu, 'weapp-vite') },
    { name: projects.weappViteWevuPerformance, version: versionOf(performance, 'weapp-vite') },
  ]
  assertNoMissing('weapp-vite', weappVersionEntries)
  assertNoPrerelease('weapp-vite', weappVersionEntries)
  const weappVersions = weappVersionEntries.map(item => item.version)
  if (new Set(weappVersions).size !== 1) {
    throw new Error(`weapp-vite 版本未同步：${weappVersions.join(', ')}`)
  }

  const wevuVersionEntries = [
    { name: projects.weappViteWevu, version: versionOf(wevu, 'wevu') },
    { name: projects.weappViteWevuPerformance, version: versionOf(performance, 'wevu') },
  ]
  assertNoMissing('wevu', wevuVersionEntries)
  assertNoPrerelease('wevu', wevuVersionEntries)
  const wevuVersions = wevuVersionEntries.map(item => item.version)
  if (new Set(wevuVersions).size !== 1) {
    throw new Error(`wevu 版本未同步：${wevuVersions.join(', ')}`)
  }

  const taro = await readPackage(projects.taro)
  const taroVersions = collectVersions(taro, frameworkPackages.taro.filter(name => name.startsWith('@tarojs/')))
  assertNoMissing('Taro', taroVersions)
  assertNoPrerelease('Taro', taroVersions)
  if (new Set(taroVersions.map(item => item.version)).size !== 1) {
    throw new Error(`Taro 版本未同步：${taroVersions.map(item => `${item.name}=${item.version}`).join(', ')}`)
  }

  const uniApp = await readPackage(projects.uniApp)
  const uniAppX = await readPackage(projects.uniAppX)
  const commonDcloud = Object.keys({ ...uniApp.dependencies, ...uniApp.devDependencies })
    .filter(name => name.startsWith('@dcloudio/'))
    .filter(name => name !== '@dcloudio/types' && name !== '@dcloudio/hbuilderx-cli' && name !== '@dcloudio/uni-app-x')
    .filter(name => versionOf(uniAppX, name) !== '-')
    .map(name => ({ name, version: versionOf(uniApp, name) }))
  assertNoMissing('DCloud', commonDcloud)
  if (!commonDcloud.length) {
    throw new Error('DCloud 两个项目没有可比较的公共编译器依赖')
  }
  const dcloudMismatches = commonDcloud.filter(item => item.version !== versionOf(uniAppX, item.name))
  if (dcloudMismatches.length) {
    throw new Error(`DCloud 编译器批次未同步：${dcloudMismatches.map(item => `${item.name}=${item.version}/${versionOf(uniAppX, item.name)}`).join(', ')}`)
  }

  const mpx = await readPackage(projects.mpx)
  const mpxVersions = collectVersions(mpx, frameworkPackages.mpx)
  assertNoMissing('Mpx', mpxVersions)
  assertNoPrerelease('Mpx', mpxVersions)
  return { weappVersions, wevuVersions, taroVersions, dcloudPackages: commonDcloud.map(item => item.name), mpxVersions }
}

async function check() {
  const packageNames = [...new Set(stablePackages.map(item => item.name))]
  const npmResults = await Promise.allSettled(packageNames.map(name => npmLatest(name)))
  const stableByName = new Map<string, string>()
  const failures: string[] = []
  npmResults.forEach((result, index) => {
    const name = packageNames[index]
    if (result.status === 'fulfilled') {
      stableByName.set(name, result.value)
    }
    else {
      failures.push(`${name}：${result.reason instanceof Error ? result.reason.message : String(result.reason)}`)
    }
  })

  let dcloud: string | undefined
  try {
    dcloud = await dcloudRelease()
  }
  catch (error) {
    failures.push(`DCloud：${error instanceof Error ? error.message : String(error)}`)
  }
  if (failures.length) {
    throw new Error(`稳定版本查询失败：\n${failures.join('\n')}`)
  }

  const rows = await Promise.all(stablePackages.map(async item => ({
    ...item,
    current: versionOf(await readPackage(item.project), item.name),
    stable: stableByName.get(item.name) ?? '-',
  })))
  for (const row of rows) {
    console.log(`${row.framework}\t${row.project}\t${row.name}\t${row.current}\t${row.stable}`)
  }
  console.log(`dcloud\t${projects.uniApp},${projects.uniAppX}\tofficial-release\t${dcloud}`)
}

async function validate() {
  await validateFrameworkVersions()
  await spawnCommand(packageManager, ['install', '--frozen-lockfile'])
  await spawnCommand(packageManager, ['run', 'validate'])
}

async function update(framework?: Framework) {
  if (framework && !['weapp-vite', 'taro', 'dcloud', 'mpx'].includes(framework)) {
    throw new Error(`未知框架：${framework}`)
  }
  const selected = framework ? [framework] : ['weapp-vite', 'taro', 'dcloud', 'mpx'] as Framework[]
  for (const item of selected) {
    switch (item) {
      case 'weapp-vite':
        await updateWeappVite()
        break
      case 'taro':
        await updateTaro()
        break
      case 'dcloud':
        await updateDcloud()
        break
      case 'mpx':
        await updateMpx()
        break
    }
    await validateFrameworkVersions()
  }
  await spawnCommand(packageManager, ['install'])
}

function usage() {
  console.log(`用法：
  pnpm deps:stable:check
  pnpm deps:stable:update
  pnpm deps:stable:update:weapp-vite
  pnpm deps:stable:update:taro
  pnpm deps:stable:update:dcloud
  pnpm deps:stable:update:mpx
  pnpm deps:stable:validate`)
}

export async function main(args = process.argv.slice(2)) {
  const command = args[0]
  if (command === 'check') {
    return await check()
  }
  if (command === 'validate') {
    return await validate()
  }
  if (command === 'update') {
    return await update(args[1] as Framework | undefined)
  }
  usage()
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch((error: unknown) => {
    process.stderr.write(`${error instanceof Error ? error.stack : String(error)}\n`)
    process.exitCode = 1
  })
}
