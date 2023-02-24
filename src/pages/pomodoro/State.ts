import { TaskJson } from '../../jsons/TaskJson'
import { useAuth } from '../../reactives/useAuth'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import { Mode, ModeKind } from './mode'
import { modeThemeName } from './mode/modeThemeName'
import { defaultSettings, Settings, testingSettings } from './settings'
import { Timer, TimerJson } from './timer'

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

  lang = useGlobalLang()
  theme = useGlobalTheme()
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

  translateKind(kind: ModeKind): string {
    switch (kind) {
      case 'Focus':
        return this.lang.isZh() ? '专注' : 'Focus'
      case 'Break':
        return this.lang.isZh() ? '短休' : 'Break'
      case 'Recess':
        return this.lang.isZh() ? '长息' : 'Recess'
    }
  }

  changeMode(kind: ModeKind): void {
    this.mode = this.settings.modes[kind]
    this.theme.name = modeThemeName(this.mode)
    this.timer.reset(this.mode.interval)
  }
}
