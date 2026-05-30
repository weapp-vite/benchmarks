import { access } from 'node:fs/promises'
import process from 'node:process'
import { commonWechatCliPaths } from './constants'

export function runtimeMode() {
  return process.env['BENCH_RUNTIME_MODE'] === 'plan' ? 'plan' : 'ide-e2e'
}

async function exists(file: string) {
  try {
    await access(file)
    return true
  }
  catch {
    return false
  }
}

export async function resolveWechatCliPath() {
  const fromEnv = process.env['WECHAT_DEVTOOLS_CLI']
  if (fromEnv && await exists(fromEnv)) {
    return fromEnv
  }

  for (const candidate of commonWechatCliPaths) {
    if (await exists(candidate)) {
      return candidate
    }
  }
}
