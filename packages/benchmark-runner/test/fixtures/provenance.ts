import type { VerificationReport } from '../../src/dashboard/types'
import type { ReportProvenance } from '../../src/reports/provenance/types'
import { execFileSync } from 'node:child_process'
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'pathe'
import { hash, stableJson } from '../../src/reports/provenance/hash'

export async function put(root: string, file: string, value: string | object) {
  const target = path.join(root, file)
  await mkdir(path.dirname(target), { recursive: true })
  await writeFile(target, typeof value === 'string' ? value : JSON.stringify(value))
}

export async function inputFixture() {
  const root = await mkdtemp(path.join(tmpdir(), 'benchmark-provenance-'))
  await put(root, '.gitignore', 'node_modules/\nreports/\ndist/\n.env*\n')
  await put(root, 'package.json', { name: 'fixture', version: '1.0.0', private: true })
  await put(root, 'pnpm-lock.yaml', 'lockfileVersion: 9.0\n')
  await put(root, 'packages/benchmark-runner/package.json', { name: 'runner', version: '1.0.0' })
  await put(root, 'packages/benchmark-runner/src/index.ts', 'export const run = 1\n')
  await put(root, 'apps/app/package.json', { name: 'app', dependencies: { 'weapp-vite': '7.4.0' } })
  await put(root, 'apps/app/vite.config.ts', 'export default {}\n')
  await put(root, 'apps/app/src/page.vue', '<template><view>hello</view></template>\n')
  await put(root, 'apps/app/node_modules/weapp-vite/package.json', { name: 'weapp-vite', version: '7.4.0', dependencies: { vue: '3.5.43' } })
  await put(root, 'apps/app/node_modules/weapp-vite/node_modules/vue/package.json', { name: 'vue', version: '3.5.43' })
  const git = (args: string[]) => execFileSync('git', args, { cwd: root, stdio: 'pipe' })
  git(['init', '-q'])
  git(['add', '.'])
  git(['-c', 'user.name=Benchmark Test', '-c', 'user.email=test@example.invalid', '-c', 'commit.gpgsign=false', '-c', 'core.hooksPath=/dev/null', 'commit', '-qm', 'fixture'])
  return root
}

export function evidence(section: string, runId = 'run-one', at = '2026-09-01T00:00:30.000Z'): ReportProvenance {
  const files = [{ path: 'pnpm-lock.yaml', sha256: hash('lock') }]
  const inputs = {
    fingerprint: hash(stableJson({ files, packages: [], environmentHash: hash('environment') })),
    files,
    packages: [],
    environmentHash: hash('environment'),
    lockfileHash: hash('lock'),
    runner: { version: '1.0.0', sourceHash: hash(stableJson([])) },
    git: { commit: 'fixture', dirty: false, inputDirty: false },
  }
  return {
    schemaVersion: 1,
    section,
    runId,
    inputs,
    startedAt: new Date(Date.parse(at) - 1000).toISOString(),
    finishedAt: at,
    inputStable: true,
    endingFingerprint: inputs.fingerprint,
    method: { settings: { iterations: 2 }, fingerprint: hash(stableJson({ iterations: 2 })) },
  }
}

export function verification(runId = 'run-one', at = '2026-09-01T00:00:30.000Z', status: 'passed' | 'failed' = 'passed'): VerificationReport {
  const startedAt = new Date(Date.parse(at) - 2000).toISOString()
  const finishedAt = new Date(Date.parse(at) + 1000).toISOString()
  return {
    schemaVersion: 1,
    generatedAt: finishedAt,
    overallStatus: status,
    provenance: { ...evidence('verification', runId, finishedAt), startedAt },
    steps: [{ id: 'compile', label: 'Compile', command: 'pnpm bench:compile', startedAt, finishedAt, durationMs: 3000, status, exitCode: status === 'passed' ? 0 : 1, stdoutTail: '', stderrTail: status === 'failed' ? 'original failure' : '' }],
  }
}
