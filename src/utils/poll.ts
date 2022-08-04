type TimerId = ReturnType<typeof setInterval>

type MaybePromise<A> = Promise<A> | A

export function poll<A>(options: {
  target: () => MaybePromise<A>
  check: (data: A) => MaybePromise<boolean>
  then: (data: A) => MaybePromise<void>
  interval: number
}): { stop: () => void } {
  const { target, check, then, interval } = options

  let polling: TimerId | null = null

  const stop = () => polling && clearInterval(polling)

  polling = setInterval(async () => {
    const data = await target()
    if (await check(data)) {
      await then(data)
      stop()
    }
  }, interval)

  return { stop }
}
