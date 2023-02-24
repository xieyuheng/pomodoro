import { TaskJson } from '../../jsons/TaskJson'
import { Mode } from './mode'
import { defaultSettings, Settings, testingSettings } from './settings'
import { Timer } from './timer'

export type State = {
  mode: Mode
  timer: Timer
  playing: boolean
  editing: boolean
  tasks: Array<TaskJson>
  inputTaskTitle?: string
  settings: Settings

  classes: Record<string, string>
}

export function createState(): State {
  const settings = import.meta.env.PROD ? defaultSettings : testingSettings
  const mode = settings.modes.Focus
  const timer = new Timer(mode.interval)

  return {
    playing: false,
    editing: false,
    tasks: [],
    settings,
    mode,
    timer,

    classes: {
      transition: 'transition delay-0 duration-500 ease-out',
    },
  }
}
