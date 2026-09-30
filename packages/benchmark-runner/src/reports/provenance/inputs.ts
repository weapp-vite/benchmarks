import type { InputSnapshot, InstalledPackage } from './types'
import { execFile } from 'node:child_process'
import { readdir, readFile, realpath } from 'node:fs/promises'
import { createRequire } from 'node:module'
import process from 'node:process'
import { promisify } from 'node:util'
import path from 'pathe'
import { hash, stableJson } from './hash'

const exec = promisify(execFile)
const inputRoots = ['apps/', 'packages/benchmark-runner/', 'e2e/']
const rootFiles = new Set(['package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', '.pnpmfile.cjs', '.npmrc', 'tsconfig.json', 'turbo.json'])
const excluded = /(?:^|\/)(?:node_modules|dist|unpackage|\.weapp-vite|\.turbo|coverage|reports)(?:\/|$)|\.tsbuildinfo$/
const hiddenEnvironment = /^(?:BENCH_|WECHAT_|NODE_OPTIONS$|NODE_ENV$|CI$|TZ$)/
const operationalEnvironment = /^(?:BENCH_RUN_ID|BENCH_INPUT_FINGERPRINT|BENCH_REPLACE_|BENCH_REPORT_|BENCH_RUNTIME_REQUIRED|BENCH_MACHINE_|BENCH_TOOLCHAIN_)/

interface Manifest {
  name?: string
  version?: string
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  optionalDependencies?: Record<string, string>
}

async function git(root: string, args: string[]) {
  return (await exec('git', args, { cwd: root, maxBuffer: 16 * 1024 * 1024 })).stdout
}

async function manifest(file: string): Promise<Manifest> {
  return JSON.parse(await readFile(file, 'utf8'))
}

async function packageManager(root: string, env: NodeJS.ProcessEnv) {
  const agent = env['npm_config_user_agent']?.match(/^pnpm\/[\d.]+/)?.[0]
  if (agent) {
    return agent
  }
  const { stdout } = process.platform === 'win32'
    ? await exec('cmd.exe', ['/d', '/s', '/c', 'pnpm --version'], { cwd: root })
    : await exec('pnpm', ['--version'], { cwd: root })
  return `pnpm/${stdout.trim()}`
}

async function packages(root: string, files: string[]) {
  const result: InstalledPackage[] = []
  const manifests = files.filter(file => file === 'package.json' || /^(?:apps|packages)\/[^/]+\/package\.json$/.test(file))
  for (const file of manifests) {
    const consumer = path.dirname(file)
    const pkg = await manifest(path.join(root, file))
    const required = { ...pkg.dependencies, ...pkg.devDependencies }
    for (const name of Object.keys({ ...required, ...pkg.optionalDependencies }).sort()) {
      let installed: Manifest
      const dependencyFile = path.join(root, consumer, 'node_modules', name, 'package.json')
      try {
        installed = await manifest(dependencyFile)
      }
      catch {
        if (name in required) {
          throw new Error(`Cannot fingerprint missing dependency: ${consumer} > ${name}`)
        }
        result.push({ consumer, name, version: 'not-installed (optional)' })
        continue
      }
      result.push({ consumer, name, version: installed.version ?? 'unknown' })
      if (['weapp-vite', 'wevu', '@dcloudio/vite-plugin-uni', '@dcloudio/uni-uts-v1'].includes(name)) {
        const location = await realpath(dependencyFile)
        const require = createRequire(location)
        for (const child of ['vite', 'vue', 'wevu', '@wevu/compiler', '@dcloudio/uts', '@dcloudio/uni-app-x']) {
          if (!(child in { ...installed.dependencies, ...installed.optionalDependencies })) {
            continue
          }
          const candidates = require.resolve.paths(child) ?? []
          let version: string | undefined
          for (const candidate of candidates) {
            try {
              version = (await manifest(path.join(candidate, child, 'package.json'))).version
              break
            }
            catch {}
          }
          if (!version && child in (installed.dependencies ?? {})) {
            throw new Error(`Cannot fingerprint missing dependency: ${consumer} > ${name} > ${child}`)
          }
          result.push({ consumer: `${consumer} > ${name}`, name: child, version: version ?? 'not-resolved' })
        }
      }
    }
  }
  return result
}

export async function captureInputs(root: string, env: NodeJS.ProcessEnv = process.env): Promise<InputSnapshot> {
  const listed = (await git(root, ['ls-files', '-z', '--cached', '--others', '--exclude-standard']))
    .split('\0')
    .filter(Boolean)
  // Vite loads local env files even when Git ignores them. Hash content, never values.
  const dirs = ['.', ...listed.filter(file => /^(?:apps|packages)\/[^/]+\/package\.json$/.test(file)).map(file => path.dirname(file))]
  const localEnv = (await Promise.all(dirs.map(async dir => (await readdir(path.join(root, dir)))
    .filter(file => file === '.env' || file.startsWith('.env.'))
    .map(file => path.join(dir, file))))).flat()
  listed.push(...localEnv)
  const paths = [...new Set(listed)].filter(file => !excluded.test(file)
    && (rootFiles.has(file) || localEnv.includes(file) || inputRoots.some(prefix => file.startsWith(prefix)))).sort()
  const files = await Promise.all(paths.map(async file => ({
    path: file,
    sha256: await readFile(path.join(root, file)).then(hash).catch((error: NodeJS.ErrnoException) => {
      if (error.code === 'ENOENT') {
        return 'deleted'
      }
      throw error
    }),
  })))
  const installed = await packages(root, paths)
  const lockfileHash = files.find(file => file.path === 'pnpm-lock.yaml')?.sha256
  if (!lockfileHash || lockfileHash === 'deleted') {
    throw new Error('Cannot fingerprint inputs without pnpm-lock.yaml')
  }
  // Values can contain IDE paths or credentials. Record a digest only.
  const environmentHash = hash(stableJson({
    // Some compilers derive module IDs from paths; record location without disclosing it.
    workspace: hash(await realpath(root)),
    node: process.version,
    platform: process.platform,
    arch: process.arch,
    packageManager: await packageManager(root, env),
    values: Object.fromEntries(Object.entries(env)
      .filter(([key]) => hiddenEnvironment.test(key) && !operationalEnvironment.test(key))),
  }))
  const runner = await manifest(path.join(root, 'packages/benchmark-runner/package.json'))
  const sourceHash = hash(stableJson(files.filter(file => file.path.startsWith('packages/benchmark-runner/'))))
  const status = await git(root, ['status', '--porcelain=v1', '-z', '--untracked-files=all'])
  const changed = (await git(root, ['diff', '--name-only', 'HEAD', '-z'])).split('\0')
  const untracked = (await git(root, ['ls-files', '--others', '--exclude-standard', '-z'])).split('\0')
  const inputDirty = localEnv.length > 0 || [...changed, ...untracked].some(file => paths.includes(file))
  let referenceSubmodule: string | undefined
  try {
    referenceSubmodule = (await git(root, ['ls-tree', 'HEAD', 'submodules/weapp-vite'])).match(/^160000 commit ([a-f\d]+)/)?.[1]
  }
  catch {}
  return {
    fingerprint: hash(stableJson({ files, packages: installed, environmentHash })),
    lockfileHash,
    files,
    packages: installed,
    runner: { version: runner.version ?? 'unknown', sourceHash },
    git: { commit: (await git(root, ['rev-parse', 'HEAD'])).trim(), dirty: Boolean(status), inputDirty },
    ...(referenceSubmodule ? { referenceSubmodule } : {}),
    environmentHash,
  }
}
