import { useLang } from "../../hooks/useLang"
import { useTheme } from "../../hooks/useTheme"
import { removeFirst } from "../../utils/removeFirst"
import { Mode, ModeKind } from "./models/Mode"
import { defaultSettings, Settings, testingSettings } from "./models/Settings"
import { Task } from "./models/Task"
import { Timer, TimerJson } from "./models/Timer"
import { emptySoundLoop } from "./utils/emptySoundLoop"

export type PomodoroStateJson = {
  mode: Mode
  timer: TimerJson
  playing: boolean
  editing: boolean
  currentTesk?: Task
  tasks: Array<Task>
  inputTaskTitle?: string
  settings: Settings
}

export class PomodoroState {
  mode: Mode
  timer: Timer
  playing = false
  editing = false
  currentTesk?: Task
  tasks: Array<Task> = []
  inputTaskTitle?: string
  settings: Settings = import.meta.env.PROD ? defaultSettings : testingSettings

  lang = useLang()
  theme = useTheme()

  classes = {
    transition: "transition delay-0 duration-500 ease-out",
  }

  constructor() {
    this.mode = this.settings.modes.Focus
    this.timer = new Timer(this.mode.interval)
  }

  private refreshIds(): void {
    const ids: Set<number> = new Set()

    const tasks = this.currentTesk
      ? [this.currentTesk, ...this.tasks]
      : this.tasks

    for (const task of tasks) {
      if (ids.has(task.id)) {
        const newId = Math.max(...Array.from(ids)) + 1
        task.id = newId
      }

      ids.add(task.id)
    }
  }

  json(): PomodoroStateJson {
    return {
      mode: this.mode,
      timer: this.timer.json(),
      playing: this.playing,
      editing: this.editing,
      currentTesk: this.currentTesk,
      tasks: this.tasks,
      inputTaskTitle: this.inputTaskTitle,
      settings: this.settings,
    }
  }

  static create(json: PomodoroStateJson): PomodoroState {
    const state = new PomodoroState()
    state.mode = json.mode
    state.timer = Timer.create(json.timer)
    state.playing = json.playing
    state.editing = json.editing
    state.currentTesk = json.currentTesk
    state.tasks = json.tasks
    state.inputTaskTitle = json.inputTaskTitle
    state.settings = json.settings
    state.refreshIds()
    return state
  }

  private createTaskFromTitle(title: string = ""): Task {
    const tasks = this.currentTesk
      ? [this.currentTesk, ...this.tasks]
      : this.tasks

    const ids = tasks.map((task) => task.id)
    const newId = ids.length === 0 ? 0 : Math.max(...ids) + 1
    return { id: newId, title, count: 0 }
  }

  createTask() {
    if (!this.inputTaskTitle) return

    const newTask = this.createTaskFromTitle(this.inputTaskTitle)

    if (this.currentTesk === null) {
      this.currentTesk = newTask
      this.inputTaskTitle = undefined
    } else {
      this.tasks.push(newTask)
      this.inputTaskTitle = undefined
    }
  }

  deleteTask(id: number) {
    if (this.currentTesk?.id === id) {
      this.currentTesk = undefined
      if (this.tasks[0]) {
        this.selectTask(this.tasks[0].id)
      }
    } else {
      removeFirst(this.tasks, (task) => task.id === id)
    }
  }

  get time(): number {
    return this.timer.time
  }

  async setupNotification(): Promise<void> {
    switch (Notification.permission) {
      case "default": {
        await Notification.requestPermission()
        return
      }
      case "granted": {
        return
      }
      case "denied": {
        return
      }
    }
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
        this.notify()
        if (this.currentTesk && this.mode.kind === "Focus") {
          this.currentTesk.count++
        }
      },
    })
  }

  selectTask(id: number): void {
    const task = this.tasks.find((task) => task.id === id)
    if (task === undefined) return

    removeFirst(this.tasks, (task) => task.id === id)

    if (this.currentTesk) {
      this.tasks.unshift(this.currentTesk)
    }

    this.currentTesk = task
  }

  formatTitle(): string {
    const parts = []

    if (this.timer.isStarted) {
      parts.push(`${this.timer.formatTime()}`)
    }

    if (this.currentTesk) {
      parts.push(`${this.currentTesk.title}`)
    } else {
      parts.push(`${this.appName}`)
    }

    return parts.join(" | ")
  }
}
