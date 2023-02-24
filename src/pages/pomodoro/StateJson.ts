import { TaskJson } from '../../jsons/TaskJson'
import { Mode } from './mode'
import { Settings } from './settings'
import { createState, State } from './State'
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

export function stateToJson(state: State): StateJson {
  return {
    mode: state.mode,
    timer: state.timer.json(),
    playing: state.playing,
    editing: state.editing,
    tasks: state.tasks,
    inputTaskTitle: state.inputTaskTitle,
    settings: state.settings,
  }
}

export function stateFromJson(json: StateJson): State {
  const state = createState()
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
