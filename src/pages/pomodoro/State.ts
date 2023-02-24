import { TaskJson } from '../../jsons/TaskJson'
import { Mode } from './mode'
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

  classes = {
    transition: 'transition delay-0 duration-500 ease-out',
  }

  constructor() {
    this.mode = this.settings.modes.Focus
    this.timer = new Timer(this.mode.interval)
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
    refreshIds(state.tasks)
    return state
  }
}

function refreshIds(tasks: Array<TaskJson>): void {
  const ids: Set<number> = new Set()

  for (const task of tasks) {
    if (ids.has(task.id)) {
      const newId = Math.max(...Array.from(ids)) + 1
      task.id = newId
    }

    ids.add(task.id)
  }
}
