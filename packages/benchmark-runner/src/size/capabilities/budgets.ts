import type { ProjectSize } from '../types'

// Repository acceptance budgets, not claims about the platform's current upload limits.
export const capabilityBudgets = { mainBytes: 512 * 1024, subpackageBytes: 512 * 1024, totalBytes: 1024 * 1024, providerBytes: 512 * 1024 }

export function partitionPackages(files: ProjectSize['files'], roots: string[]) {
  if (roots.some(root => !root || root.startsWith('/') || root.split('/').includes('..'))
    || new Set(roots).size !== roots.length
    || roots.some(root => roots.some(other => other !== root && root.startsWith(`${other}/`)))) {
    throw new Error('Invalid or overlapping subpackage roots')
  }
  const subpackages = roots.map(root => ({ root, bytes: 0, gzipBytes: 0, brotliBytes: 0, files: [] as string[] }))
  let mainBytes = 0
  let mainGzipBytes = 0
  let mainBrotliBytes = 0
  const mainFiles: string[] = []
  for (const file of files) {
    const target = subpackages.find(group => file.path.startsWith(`${group.root}/`))
    if (target) {
      target.bytes += file.bytes
      target.gzipBytes += file.gzipBytes
      target.brotliBytes += file.brotliBytes
      target.files.push(file.path)
    }
    else {
      mainBytes += file.bytes
      mainGzipBytes += file.gzipBytes
      mainBrotliBytes += file.brotliBytes
      mainFiles.push(file.path)
    }
  }
  const totalBytes = files.reduce((sum, file) => sum + file.bytes, 0)
  return { mainBytes, mainGzipBytes, mainBrotliBytes, mainFiles, subpackages, totalBytes }
}

export function assertCapabilityBudget(packages: ReturnType<typeof partitionPackages>, budgets = capabilityBudgets) {
  if (packages.mainBytes > budgets.mainBytes || packages.totalBytes > budgets.totalBytes
    || packages.subpackages.some(group => group.bytes > budgets.subpackageBytes)) {
    throw new Error(`Capability package budget exceeded: ${JSON.stringify(packages)}`)
  }
}
