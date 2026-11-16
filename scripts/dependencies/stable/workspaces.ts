import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { projects, workspaceNames } from './config'

export const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..')

export interface PackageJson {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
}

export async function readPackage(project: string) {
  return JSON.parse(await readFile(path.join(repoRoot, project, 'package.json'), 'utf8')) as PackageJson
}

export function projectPath(project: string) {
  return path.join(repoRoot, project)
}

export function packageName(project: string) {
  const name = workspaceNames[project]
  if (!name) {
    throw new Error(`未登记 workspace：${project}`)
  }
  return name
}

export function versionOf(packageJson: PackageJson, name: string) {
  return packageJson.dependencies?.[name] ?? packageJson.devDependencies?.[name] ?? '-'
}

export function collectVersions(packageJson: PackageJson, names: string[]) {
  return names.map(name => ({ name, version: versionOf(packageJson, name) }))
}

export { projects }
