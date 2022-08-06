export type Values = Record<string, string>

interface PostOptions {
  then?: (result: any) => void | Promise<void>
  catch?: (error: unknown) => void | Promise<void>
}

type Invalid<T> = { [P in keyof T]?: { zh: T[P]; en: T[P] } }

export class Form<T extends Values> {
  processing = false
  response: Response | undefined = undefined
  error?: Error
  invalid?: Invalid<T> = {}

  constructor(public values: T) {}

  async postByEvent(
    event: Event,
    url: string,
    options?: PostOptions
  ): Promise<void> {
    const target: any = event.target
    for (const key of Object.keys(this.values)) {
      ;(this.values as any)[key] = target[key].value
    }

    await this.post(url, options)
  }

  async post(url: string, options?: PostOptions): Promise<void> {
    this.processing = true

    this.response = undefined
    this.error = undefined
    this.invalid = {}

    try {
      this.response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.values),
      })

      if (this.response.status === 400) {
        const data = await this.response.json()
        this.invalid = data.invalid
      }

      if (options?.then) {
        const data = await this.response.json()
        options.then(data)
      }
    } catch (error) {
      if (!(error instanceof Error)) throw error
      this.error = error
      if (options?.catch) {
        options.catch(error)
      }
    }

    this.processing = false
  }
}
