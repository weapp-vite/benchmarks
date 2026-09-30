import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'pathe'
import { afterEach, describe, expect, it } from 'vitest'
import { assertOutputs, outputManifest, removeManagedOutputs } from '../src/artifacts/manifest'
import { assertStaticReferences } from '../src/artifacts/references'
import { analyzeProject } from '../src/size/collect'

const roots: string[] = []
async function fixture() {
  const root = await mkdtemp(path.join(tmpdir(), 'benchmark-owned-'))
  roots.push(root)
  await mkdir(path.join(root, 'dist'), { recursive: true })
  await writeFile(path.join(root, 'dist/app.js'), 'require("./chunk.js")')
  await writeFile(path.join(root, 'dist/chunk.js'), 'module.exports = 1')
  return root
}
afterEach(async () => {
  await Promise.all(roots.splice(0).map(root => rm(root, { recursive: true, force: true })))
})

describe('production output contract', () => {
  it('rejects old chunks and modified content before size collection', async () => {
    const root = await fixture()
    const manifest = await outputManifest(path.join(root, 'dist'))
    const project = { id: 'fixture', label: 'Fixture', appDir: '.', outputDir: 'dist', runtimeFiles: ['chunk.js'] }
    expect((await analyzeProject(project, { root, manifest })).totals.files).toBe(2)
    await writeFile(path.join(root, 'dist/stale.js'), 'old')
    await expect(analyzeProject(project, { root, manifest })).rejects.toThrow('stale.js')
    await rm(path.join(root, 'dist/stale.js'))
    await writeFile(path.join(root, 'dist/chunk.js'), 'module.exports = 2')
    expect(() => assertOutputs(manifest, { ...manifest, files: manifest.files.slice(1) })).toThrow('removed')
    await expect(analyzeProject(project, { root, manifest })).rejects.toThrow('changed')
  })

  it('removes only recorded managed files and preserves a user asset byte for byte', async () => {
    const root = await fixture()
    const output = path.join(root, 'dist')
    const manifest = await outputManifest(output)
    await writeFile(path.join(output, 'user-owned.txt'), 'do not delete')
    await removeManagedOutputs(output, manifest)
    expect(await readFile(path.join(output, 'user-owned.txt'), 'utf8')).toBe('do not delete')
    expect((await outputManifest(output)).files.map(file => file.path)).toEqual(['user-owned.txt'])
  })

  it('checks static page/component, JS, WXML and style references', async () => {
    const root = await fixture()
    const output = path.join(root, 'dist')
    await assertStaticReferences(output, await outputManifest(output))
    await writeFile(path.join(output, 'app.json'), JSON.stringify({ pages: ['missing-page'], subPackages: [{ root: 'pkg', pages: ['missing'] }], usingComponents: { badge: './missing-badge', external: 'plugin://example/component' } }))
    await writeFile(path.join(output, 'view.wxml'), '<include src="./missing-template.wxml"/>')
    await writeFile(path.join(output, 'view.wxss'), '@import "./missing-style.wxss";')
    const result = assertStaticReferences(output, await outputManifest(output))
    await expect(result).rejects.toThrow('missing-page')
    await expect(result).rejects.toThrow('missing-badge')
    await expect(result).rejects.toThrow('missing-template')
    await expect(result).rejects.toThrow('missing-style')
    await expect(result).rejects.toThrow('pkg/missing')
  })

  it('refuses cleanup when a user replaced a previously managed file', async () => {
    const root = await fixture()
    const output = path.join(root, 'dist')
    const manifest = await outputManifest(output)
    await writeFile(path.join(output, 'chunk.js'), 'user replacement')
    await expect(removeManagedOutputs(output, manifest)).rejects.toThrow('refusing to delete')
    expect(await readFile(path.join(output, 'app.js'), 'utf8')).toBe('require("./chunk.js")')
    expect(await readFile(path.join(output, 'chunk.js'), 'utf8')).toBe('user replacement')
  })
})
