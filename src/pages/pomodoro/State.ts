import { Task } from '../../schemas/Task'
import { Mode } from './mode'
import { defaultSettings, Settings, testingSettings } from './settings'
import { Timer } from './timer'

export type State = {
  mode: Mode
  timer: Timer
  playing: boolean
  editing: boolean
  tasks: Array<Task>
  isRightAfterLoadTasks: boolean
  inputTaskTitle?: string
  settings: Settings
}

export function createState(): State {
  const settings = import.meta.env.PROD ? defaultSettings : testingSettings
  const mode = settings.modes.Focus
  const timer = new Timer(mode.interval)

  return {
    playing: false,
    editing: false,
    tasks: [],
    isRightAfterLoadTasks: false,
    settings,
    mode,
    timer,
  }
}
