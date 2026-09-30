import { cp, lstat, mkdir, readFile, realpath, unlink } from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'pathe'

/** DevTools' npm packer ignores the workspace junction. Materialize its exact runtime closure. */
export async function materializeIdeDependencies(originalApp: string, stagedApp: string) {
  const packages = new Map<string, { root: string, version: string }>()
  const visit = async (manifestPath: string): Promise<void> => {
    const manifest = JSON.parse(await readFile(manifestPath, 'utf8')) as { dependencies?: Record<string, string> }
    const require = createRequire(manifestPath)
    for (const name of Object.keys(manifest.dependencies ?? {})) {
      const file = await realpath(require.resolve(`${name}/package.json`))
      const installed = JSON.parse(await readFile(file, 'utf8')) as { version: string }
      const previous = packages.get(name)
      if (previous) {
        if (previous.version !== installed.version) {
          throw new Error(`IDE npm staging cannot flatten conflicting ${name} versions`)
        }
        continue
      }
      packages.set(name, { root: path.dirname(file), version: installed.version })
      await visit(file)
    }
  }
  await visit(path.join(originalApp, 'package.json'))
  const modules = path.join(stagedApp, 'node_modules')
  if (!(await lstat(modules)).isSymbolicLink()) {
    throw new Error('Expected exclusively staged node_modules junction')
  }
  await unlink(modules)
  await mkdir(modules)
  for (const [name, source] of packages) {
    await cp(source.root, path.join(modules, name), { recursive: true, dereference: true, filter: file => file === source.root || !path.relative(source.root, file).split('/').includes('node_modules') })
  }
  return [...packages].map(([name, source]) => ({ name, version: source.version }))
}
