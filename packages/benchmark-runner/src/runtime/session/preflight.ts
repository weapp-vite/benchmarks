import type { Deadline } from './deadline'
import { realpath } from 'node:fs/promises'
import process from 'node:process'
import { cliCommand } from './command'
import { macDesktopLocked } from './desktop'
import { installedIdeVersion } from './version'

export const officialVersionsUrl = 'https://devtools.wxqcloud.qq.com.cn/WechatWebDev/nightly/versions/config.json'
export interface RuntimePreflight {
  checkedAt: string
  source: string
  cliPath: string
  installedVersion?: string
  stableVersion?: string
  servicePort?: number
  status: 'passed' | 'not-installed' | 'version-unverified' | 'not-logged-in' | 'connection-failed' | 'desktop-locked'
  reason?: string
}

export async function runtimePreflight(cliPath: string, deadline: Deadline): Promise<RuntimePreflight> {
  const result: RuntimePreflight = { checkedAt: new Date().toISOString(), source: officialVersionsUrl, cliPath, status: 'not-installed' }
  try {
    result.cliPath = await realpath(cliPath)
    result.status = 'version-unverified'
    result.installedVersion = await installedIdeVersion(cliPath)
    const response = await fetch(officialVersionsUrl, { signal: AbortSignal.timeout(deadline.remaining('stable release query', 15_000)) })
    if (!response.ok) {
      throw new Error(`Official release query failed: ${response.status}`)
    }
    const metadata = await response.json() as { channels: Array<{ id: string, version: string }> }
    const version = metadata.channels.find(channel => channel.id === 'stable')?.version
    if (!version || result.installedVersion !== version) {
      throw new Error(`Installed IDE ${result.installedVersion} does not match verified stable ${version ?? 'unknown'}`)
    }
    result.stableVersion = version
    if (process.platform === 'darwin') {
      if (await macDesktopLocked(deadline)) {
        result.status = 'desktop-locked'
        result.reason = 'macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification'
        return result
      }
    }
    result.status = 'connection-failed'
    const login = await cliCommand(cliPath, ['islogin'], deadline)
    const servicePort = Number(login.output.match(/127\.0\.0\.1:(\d+)/)?.[1])
    if (servicePort) {
      result.servicePort = servicePort
    }
    if (login.code !== 0) {
      throw new Error(`IDE login query failed with exit ${login.code}`)
    }
    const matched = login.output.match(/\{[^{}]*"login"\s*:\s*(true|false)[^{}]*\}/)
    if (!matched) {
      throw new Error('IDE login query did not return a login state')
    }
    result.status = matched[1] === 'true' ? 'passed' : 'not-logged-in'
  }
  catch (error) {
    result.reason = error instanceof Error ? error.message : String(error)
  }
  return result
}
