import { TaskJson } from '../../jsons/TaskJson'
import { useAuth } from '../../reactives/useAuth'
import { useLang } from '../../reactives/useLang'
import { useTheme } from '../../reactives/useTheme'
import { Mode, ModeKind } from './models/Mode'
import { defaultSettings, Settings, testingSettings } from './models/Settings'
import { Timer, TimerJson } from './models/Timer'
import { stateNotify } from './stateNotify'
import { emptySoundLoop } from './utils/emptySoundLoop'

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
    transition: 'transition delay-0 duration-500 ease-out',
  }

  constructor() {
    this.mode = this.settings.modes.Focus
    this.timer = new Timer(this.mode.interval)
    if (this.auth.pomodoro) {
      this.tasks = this.auth.pomodoro.tasks
    }
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

  get appName(): string {
    return this.lang.zh ? '番茄钟' : 'Pomodoro'
  }

  translateKind(kind: ModeKind): string {
    switch (kind) {
      case 'Focus':
        return this.lang.zh ? '专注' : 'Focus'
      case 'Break':
        return this.lang.zh ? '短休' : 'Break'
      case 'Recess':
        return this.lang.zh ? '长息' : 'Recess'
    }
  }

  changeMode(kind: ModeKind): void {
    this.mode = this.settings.modes[kind]
    this.theme.name = this.themeName
    this.timer.reset(this.mode.interval)
  }

  get themeName(): string {
    switch (this.mode.kind) {
      case 'Focus':
        return 'red'
      case 'Break':
        return 'sky'
      case 'Recess':
        return 'violet'
    }
  }

  start(): void {
    if (!this.playing) {
      emptySoundLoop().play()
    }

    this.timer.start({
      onFinished: async () => {
        if (this.currentTask && this.mode.kind === 'Focus') {
          this.currentTask.trace.push(Date.now())
        }

        await stateNotify(this)
      },
    })
  }
}
