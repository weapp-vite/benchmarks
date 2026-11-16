const npmRegistry = 'https://registry.npmjs.org'

export function isPrerelease(version: string) {
  return version.includes('-')
}

async function fetchJson<T>(url: string): Promise<T> {
  let response: Response
  try {
    response = await fetch(url, { signal: AbortSignal.timeout(15_000) })
  }
  catch (error) {
    const detail = error instanceof Error ? `${error.name}: ${error.message}` : String(error)
    throw new Error(`请求 ${url} 失败：${detail}`, { cause: error })
  }
  if (!response.ok) {
    throw new Error(`请求 ${url} 失败：HTTP ${response.status}`)
  }
  try {
    return await response.json() as T
  }
  catch (error) {
    const detail = error instanceof Error ? `${error.name}: ${error.message}` : String(error)
    throw new Error(`解析 ${url} 响应失败：${detail}`, { cause: error })
  }
}

export async function npmLatest(name: string) {
  const metadata = await fetchJson<{ latest?: string }>(`${npmRegistry}/-/package/${encodeURIComponent(name)}/dist-tags`)
  const version = metadata.latest
  if (!version) {
    throw new Error(`${name} 没有 npm latest stable tag`)
  }
  if (isPrerelease(version)) {
    throw new Error(`${name} 的 npm latest 是 prerelease：${version}`)
  }
  return version
}

export async function dcloudRelease() {
  const metadata = await fetchJson<{ version?: string }>('https://download1.dcloud.net.cn/hbuilderx/release.json')
  if (!metadata.version) {
    throw new Error('DCloud 官方 release.json 缺少 version')
  }
  return metadata.version
}
