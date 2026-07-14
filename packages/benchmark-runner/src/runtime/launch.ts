export interface LaunchFailureContext {
  attempt: number
  retries: number
  error: unknown
}

export async function launchWithCleanup<T>(options: {
  retries: number
  launch: () => Promise<T>
  cleanup: (context: LaunchFailureContext) => Promise<void>
  onFailure?: (context: LaunchFailureContext) => void
  onCleanupFailure?: (context: LaunchFailureContext, cleanupError: unknown) => void
}) {
  let lastError: unknown

  for (let attempt = 1; attempt <= options.retries; attempt += 1) {
    try {
      return await options.launch()
    }
    catch (error) {
      lastError = error
      const context = { attempt, retries: options.retries, error }
      options.onFailure?.(context)
      try {
        await options.cleanup(context)
      }
      catch (cleanupError) {
        options.onCleanupFailure?.(context, cleanupError)
      }
    }
  }

  throw lastError
}
