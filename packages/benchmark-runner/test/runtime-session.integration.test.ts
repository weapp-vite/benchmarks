import { mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises'
import { createServer } from 'node:net'
import { tmpdir } from 'node:os'
import process from 'node:process'
import path from 'pathe'
import { expect, it } from 'vitest'
import { repoRoot } from '../src/projects'
import { materializeIdeDependencies } from '../src/runtime/session/npm'
import { runJsonWorker } from '../src/runtime/session/process'

it('materializes the installed IDE npm graph while leaving original dependencies intact', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'bench-npm-staging-'))
  const original = path.join(repoRoot, 'apps/vue-mini-core')
  const before = await readFile(path.join(original, 'node_modules/@vue-mini/core/package.json'), 'utf8')
  try {
    await symlink(path.join(original, 'node_modules'), path.join(root, 'node_modules'), 'junction')
    const dependencies = await materializeIdeDependencies(original, root)
    const copy = JSON.parse(await readFile(path.join(root, 'node_modules/@vue-mini/core/package.json'), 'utf8'))
    expect(dependencies).toContainEqual({ name: '@vue-mini/core', version: copy.version })
    expect(dependencies.some(pkg => pkg.name === '@vue/reactivity')).toBe(true)
    expect(await readFile(path.join(root, 'node_modules/@vue-mini/core', copy.main), 'utf8')).toContain('exports.createApp')
    expect(await readFile(path.join(original, 'node_modules/@vue-mini/core/package.json'), 'utf8')).toBe(before)
    await expect(materializeIdeDependencies(original, root)).rejects.toThrow('exclusively staged')
  }
  finally {
    await rm(root, { recursive: true, force: true })
  }
})

it('terminates a hanging owned worker within its deadline and preserves an unrelated listener', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'bench-worker-timeout-'))
  const unrelated = createServer()
  await new Promise<void>(resolve => unrelated.listen(0, '127.0.0.1', resolve))
  const worker = path.join(root, 'hang.mjs')
  const pidPath = path.join(root, 'owned.pid')
  await writeFile(worker, `import { writeFileSync } from 'node:fs';\nimport process from 'node:process';\nwriteFileSync(${JSON.stringify(pidPath)}, String(process.pid));\nsetInterval(() => {}, 100);\n`)
  try {
    await expect(runJsonWorker({ worker, request: {}, root, projectPath: root, cliPath: process.execPath, timeoutMs: 2000 })).rejects.toThrow('deadline')
    const pid = Number(await readFile(pidPath, 'utf8'))
    expect(() => process.kill(pid, 0)).toThrow()
    expect(unrelated.listening).toBe(true)
  }
  finally {
    await new Promise<void>(resolve => unrelated.close(() => resolve()))
    await rm(root, { recursive: true, force: true })
  }
}, 15_000)
