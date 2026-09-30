import type { InputSnapshot } from '../reports/provenance/types'
import { copyFile, mkdir, readFile, realpath, rm, symlink, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'pathe'
import { hash } from '../reports/provenance/hash'

export async function stageWorkspace(sourceRoot: string, inputs: InputSnapshot, purpose: 'production' | 'transitions' | 'hmr' | 'capabilities' | 'runtime' | 'compile-methods' = 'production') {
  if (!/^[a-f\d]{64}$/.test(inputs.fingerprint)) {
    throw new Error('Artifact workspace requires a SHA-256 input fingerprint')
  }
  const parent = path.join(await realpath(tmpdir()), 'benchmark-artifacts')
  await mkdir(parent, { recursive: true })
  const root = path.join(parent, `${inputs.fingerprint}-${purpose}`)
  // Mpx embeds path-derived IDs. A fixed path for each input avoids random size/compression drift.
  // Exclusive creation also prevents concurrent runs from deleting one another's workspace.
  await mkdir(root).catch((error: NodeJS.ErrnoException) => {
    if (error.code === 'EEXIST') {
      throw new Error('Artifact workspace is already in use or was not cleaned up; refusing to overwrite it')
    }
    throw error
  })
  const dispose = () => rm(root, { recursive: true, force: true })
  try {
    for (const file of inputs.files) {
      if (file.sha256 === 'deleted') {
        continue
      }
      const destination = path.join(root, file.path)
      if (path.isAbsolute(file.path) || file.path.split('/').includes('..')) {
        throw new Error('Artifact workspace input must be repository relative')
      }
      await mkdir(path.dirname(destination), { recursive: true })
      await copyFile(path.join(sourceRoot, file.path), destination)
      if (hash(await readFile(destination)) !== file.sha256) {
        throw new Error(`Input changed while staging: ${file.path}`)
      }
    }
    const manifests = inputs.files.filter(file => file.sha256 !== 'deleted'
      && (file.path === 'package.json' || /^(?:apps|packages)\/[^/]+\/package\.json$/.test(file.path)))
    for (const manifest of manifests) {
      const dir = path.dirname(manifest.path)
      await symlink(path.join(sourceRoot, dir, 'node_modules'), path.join(root, dir, 'node_modules'), 'junction')
    }
    // Reuse the exact installed graph. pnpm 12 must not reinstall into linked node_modules.
    const workspace = path.join(root, 'pnpm-workspace.yaml')
    const workspaceConfig = await readFile(workspace, 'utf8')
    await writeFile(workspace, /^verifyDepsBeforeRun:/m.test(workspaceConfig)
      ? workspaceConfig.replace(/^verifyDepsBeforeRun:.*$/m, 'verifyDepsBeforeRun: false')
      : `${workspaceConfig}\nverifyDepsBeforeRun: false\n`)
    await writeFile(path.join(root, '.gitignore'), 'node_modules/\ndist/\n.turbo/\n.weapp-vite/\n')
    return { root, dispose }
  }
  catch (error) {
    await dispose()
    throw error
  }
}
