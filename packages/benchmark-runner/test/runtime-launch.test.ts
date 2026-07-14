import type { AddressInfo } from 'node:net'
import { createServer } from 'node:net'
import { describe, expect, it, vi } from 'vitest'
import { ensurePortReleased } from '../src/runtime/devtools-session'
import { launchWithCleanup } from '../src/runtime/launch'

function listen(server: ReturnType<typeof createServer>, port = 0) {
  return new Promise<number>((resolve) => {
    server.listen(port, '127.0.0.1', () => {
      resolve((server.address() as AddressInfo).port)
    })
  })
}

function close(server: ReturnType<typeof createServer>) {
  return new Promise<void>((resolve, reject) => {
    if (!server.listening) {
      resolve()
      return
    }
    server.close(error => error ? reject(error) : resolve())
  })
}

describe('runtime launch cleanup', () => {
  it('cleans a failed launch before retrying', async () => {
    const launch = vi.fn()
      .mockRejectedValueOnce(new Error('connection timeout'))
      .mockResolvedValueOnce('session')
    const cleanup = vi.fn().mockResolvedValue(undefined)

    await expect(launchWithCleanup({ retries: 3, launch, cleanup })).resolves.toBe('session')
    expect(launch).toHaveBeenCalledTimes(2)
    expect(cleanup).toHaveBeenCalledTimes(1)
    expect(cleanup).toHaveBeenCalledWith(expect.objectContaining({ attempt: 1, retries: 3 }))
  })

  it('does not let cleanup failure prevent the next launch attempt', async () => {
    const launchError = new Error('connection timeout')
    const cleanupError = new Error('close timeout')
    const launch = vi.fn()
      .mockRejectedValueOnce(launchError)
      .mockResolvedValueOnce('session')
    const cleanup = vi.fn().mockRejectedValue(cleanupError)
    const onCleanupFailure = vi.fn()

    await expect(launchWithCleanup({
      retries: 2,
      launch,
      cleanup,
      onCleanupFailure,
    })).resolves.toBe('session')
    expect(onCleanupFailure).toHaveBeenCalledWith(
      expect.objectContaining({ error: launchError }),
      cleanupError,
    )
  })

  it('closes a DevTools listener that appears after the first cleanup', async () => {
    const reservation = createServer()
    const port = await listen(reservation)
    await close(reservation)

    const lateServer = createServer()
    const timer = setTimeout(() => void listen(lateServer, port), 20)
    const closeProject = vi.fn(async () => close(lateServer))

    try {
      await ensurePortReleased(port, closeProject, {
        timeoutMs: 500,
        settleMs: 40,
        pollIntervalMs: 10,
      })
    }
    finally {
      clearTimeout(timer)
      await close(lateServer)
    }

    expect(closeProject).toHaveBeenCalled()
  })
})
