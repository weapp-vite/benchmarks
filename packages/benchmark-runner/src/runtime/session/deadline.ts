export class DeadlineError extends Error {
  constructor(stage: string) {
    super(`Runtime deadline exceeded at ${stage}`)
    this.name = 'DeadlineError'
  }
}

export class Deadline {
  private readonly end: number
  private expired = false
  constructor(timeoutMs: number) {
    if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
      throw new Error('Runtime deadline must be a positive finite duration')
    }
    this.end = performance.now() + timeoutMs
  }

  remaining(stage: string, cap = Number.POSITIVE_INFINITY) {
    const remaining = Math.min(cap, this.end - performance.now())
    if (this.expired || remaining <= 0) {
      throw new DeadlineError(stage)
    }
    return Math.max(1, Math.ceil(remaining))
  }

  async run<T>(stage: string, action: () => Promise<T>, cap?: number): Promise<T> {
    const timeout = this.remaining(stage, cap)
    const totalTimeout = cap === undefined || this.end - performance.now() <= cap
    let timer: ReturnType<typeof setTimeout> | undefined
    try {
      return await Promise.race([
        action(),
        new Promise<never>((_, reject) => {
          timer = setTimeout(() => {
            if (totalTimeout) {
              this.expired = true
            }
            reject(new DeadlineError(stage))
          }, timeout)
        }),
      ])
    }
    finally {
      clearTimeout(timer)
    }
  }

  async pause(ms = 100) {
    await this.run('poll', () => new Promise(resolve => setTimeout(resolve, ms)))
  }
}
