import { leftPad } from "../../../utils/leftPad"

type TimerId = ReturnType<typeof setInterval>

export type TimerJson = {
  time: number
  interval: number
}

export class Timer {
  time: number
  private id: TimerId | null = null

  constructor(public interval: number) {
    this.time = interval
  }

  json(): TimerJson {
    return {
      time: this.time,
      interval: this.interval,
    }
  }

  static create(json: TimerJson): Timer {
    const timer = new Timer(json.interval)
    timer.time = json.time
    return timer
  }

  start(options: { onFinished: () => void }): void {
    let t0 = performance.now()
    let t1 = performance.now()
    let d = 0

    this.id = setInterval(() => {
      if (this.time > 0) {
        t1 = performance.now()
        d = t1 - t0
        t0 = performance.now()
        this.time -= d
      } else {
        this.stop()
        options.onFinished()
      }
    }, 1000)
  }

  get isRunning(): boolean {
    return this.id !== null
  }

  get isStarted(): boolean {
    return this.time !== this.interval
  }

  get isFinished(): boolean {
    return this.time < 1000
  }

  stop(): void {
    if (this.id === null) return

    clearInterval(this.id)
    this.id = null
  }

  reset(interval?: number): void {
    if (interval !== undefined) {
      this.interval = interval
    }

    this.time = this.interval
    this.stop()
  }

  formatTime(): string {
    return formatTime(this.time)
  }

  formatInterval(): string {
    return formatTime(this.interval)
  }
}

function formatTime(time: number): string {
  const t = Math.ceil(time / 1000)
  const minutes = Math.floor(t / 60)
  const seconds = t % 60

  const mm = leftPad(minutes.toString(), 2, "0")
  const ss = leftPad(seconds.toString(), 2, "0")

  return `${mm}:${ss}`
}
