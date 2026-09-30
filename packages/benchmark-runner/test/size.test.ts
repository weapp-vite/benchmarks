import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'pathe'
import { afterEach, describe, expect, it } from 'vitest'
import { repoRoot } from '../src/projects'
import { analyzeProject } from '../src/size/collect'
import { sizeProjects } from '../src/size/projects'

const temporaryRoots: string[] = []

afterEach(async () => {
  await Promise.all(temporaryRoots.splice(0).map(root => rm(root, { recursive: true, force: true })))
})

async function fixture(files: Record<string, string>) {
  const root = await mkdtemp(path.join(tmpdir(), 'benchmark-size-'))
  temporaryRoots.push(root)
  for (const [file, content] of Object.entries(files)) {
    const target = path.join(root, 'dist', file)
    await mkdir(path.dirname(target), { recursive: true })
    await writeFile(target, content)
  }
  return root
}

const wevuProject = sizeProjects.find(project => project.id === 'weapp-vite-wevu')!

describe('runtime artifact size', () => {
  it.each(['absolute', 'relative'])('counts emitted wevu chunks with an %s app path', async (pathKind) => {
    const appDir = await fixture({
      'weapp-vendors/wevu-runtime.js': 'runtime',
      'weapp-vendors/wevu-reactivity.js': 'reactivity',
      'weapp-vendors/wevu-router.js': 'router',
      'weapp-vendors/unrelated.js': 'other dependency',
      'weapp-vendors/wevu-runtime.js.map': 'source map',
      'pages/index.js': 'page code',
    })
    const result = await analyzeProject({
      ...wevuProject,
      appDir: pathKind === 'relative' ? path.relative(repoRoot, appDir) : appDir,
    })

    expect(result.totals.runtimeFiles).toBe(3)
    expect(result.totals.runtimeBytes).toBe(23)
    expect(result.files.filter(file => file.runtime).map(file => file.path)).toEqual([
      'weapp-vendors/wevu-reactivity.js',
      'weapp-vendors/wevu-router.js',
      'weapp-vendors/wevu-runtime.js',
    ])
  })

  it('rejects outputs with no wevu runtime instead of reporting zero bytes', async () => {
    const appDir = await fixture({ 'pages/index.js': 'page code' })
    await expect(analyzeProject({ ...wevuProject, appDir })).rejects.toThrow('no runtime files matched')
  })

  it('still requires explicitly configured runtime files for other frameworks', async () => {
    const appDir = await fixture({ 'pages/index.js': 'page code' })
    await expect(analyzeProject({
      id: 'uni-app',
      label: 'uni-app',
      appDir,
      outputDir: 'dist',
      runtimeFiles: ['common/vendor.js'],
    })).rejects.toThrow('runtime files are missing for uni-app: common/vendor.js')
  })
})
