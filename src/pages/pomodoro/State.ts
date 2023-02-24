import { TaskJson } from "../../jsons/TaskJson"
import { useAuth } from "../../reactives/useAuth"
import { useLang } from "../../reactives/useLang"
import { useTheme } from "../../reactives/useTheme"
import { removeFirst } from "../../utils/removeFirst"
import { Mode, ModeKind } from "./models/Mode"
import { defaultSettings, Settings, testingSettings } from "./models/Settings"
import { Timer, TimerJson } from "./models/Timer"
import { emptySoundLoop } from "./utils/emptySoundLoop"

export type StateJson = {
  mode: Mode
  timer: TimerJson
  playing: boolean
  editing: boolean
  tasks: Array<TaskJson>
  inputTaskTitle?: string
  settings: Settings
}

export class State {
  mode: Mode
  timer: Timer
  playing = false
  editing = false
  tasks: Array<TaskJson> = []
  inputTaskTitle?: string
  settings: Settings = import.meta.env.PROD ? defaultSettings : testingSettings

  lang = useLang()
  theme = useTheme()
  auth = useAuth()

  classes = {
    transition: "transition delay-0 duration-500 ease-out",
  }

  constructor() {
    this.mode = this.settings.modes.Focus
    this.timer = new Timer(this.mode.interval)
    if (this.auth.pomodoro) {
      this.tasks = this.auth.pomodoro.tasks
    }
  }

  reload() {
    this.tasks = this.auth.pomodoro?.tasks || []
  }

  get currentTask() {
    return this.tasks[0]
  }

  private refreshIds(): void {
    const ids: Set<number> = new Set()

    const tasks = this.tasks

    for (const task of tasks) {
      if (ids.has(task.id)) {
        const newId = Math.max(...Array.from(ids)) + 1
        task.id = newId
      }

      ids.add(task.id)
    }
  }

  json(): StateJson {
    return {
      mode: this.mode,
      timer: this.timer.json(),
      playing: this.playing,
      editing: this.editing,
      tasks: this.tasks,
      inputTaskTitle: this.inputTaskTitle,
      settings: this.settings,
    }
  }

  static create(json: StateJson): State {
    const state = new State()
    state.mode = json.mode
    state.timer = Timer.create(json.timer)
    state.playing = json.playing
    state.editing = json.editing
    state.tasks = json.tasks
    state.inputTaskTitle = json.inputTaskTitle
    state.settings = json.settings
    state.refreshIds()
    return state
  }

  async save(): Promise<void> {
    const api = import.meta.env.VITE_API_URL
    await fetch(`${api}/pomodoro`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tasks: this.tasks }),
    })
  }

  private createTaskFromTitle(title: string = ""): TaskJson {
    const tasks = this.tasks

    const ids = tasks.map((task) => task.id)
    const newId = ids.length === 0 ? 0 : Math.max(...ids) + 1
    return { id: newId, title, trace: [] }
  }

  createTask() {
    if (!this.inputTaskTitle) return

    const newTask = this.createTaskFromTitle(this.inputTaskTitle)

    this.tasks.push(newTask)
    this.inputTaskTitle = undefined
    this.save()
  }

  deleteTask(id: number) {
    removeFirst(this.tasks, (task) => task.id === id)
    this.save()
  }

  get time(): number {
    return this.timer.time
  }

  get appName(): string {
    return this.lang.zh ? "番茄钟" : "Pomodoro"
  }

  async notify(): Promise<void> {
    if (Notification.permission === "granted") {
      const registration = await navigator.serviceWorker.ready
      const kind = this.translateKind(this.mode.kind)
      registration.showNotification(this.appName, {
        body: this.lang.zh ? `${kind} 结束。` : `${kind} finished.`,
      })
    }
  }

  get kind(): ModeKind {
    return this.mode.kind
  }

  translateKind(kind: ModeKind): string {
    switch (kind) {
      case "Focus":
        return this.lang.zh ? "专注" : "Focus"
      case "Break":
        return this.lang.zh ? "短休" : "Break"
      case "Recess":
        return this.lang.zh ? "长息" : "Recess"
    }
  }

  changeMode(kind: ModeKind): void {
    this.mode = this.settings.modes[kind]
    this.theme.name = this.themeName
    this.timer.reset(this.mode.interval)
  }

  get themeName(): string {
    switch (this.kind) {
      case "Focus":
        return "red"
      case "Break":
        return "sky"
      case "Recess":
        return "violet"
    }
  }

  start(): void {
    if (!this.playing) {
      emptySoundLoop().play()
    }

    this.timer.start({
      onFinished: () => {
        if (this.currentTask && this.mode.kind === "Focus") {
          this.currentTask.trace.push(Date.now())
          this.save()
        }
        this.notify()
      },
    })
  }

  selectTask(id: number): void {
    const task = this.tasks.find((task) => task.id === id)
    if (task === undefined) return

    removeFirst(this.tasks, (task) => task.id === id)
    this.tasks.unshift(task)
    this.save()
  }

  formatTitle(): string {
    const parts = []

    if (this.timer.isStarted) {
      parts.push(`${this.timer.formatTime()}`)
    }

    if (this.currentTask) {
      parts.push(`${this.currentTask.title}`)
    } else {
      parts.push(`${this.appName}`)
    }

    return parts.join(" | ")
  }
}
