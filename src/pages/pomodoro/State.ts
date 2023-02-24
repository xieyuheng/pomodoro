import { TaskJson } from '../../jsons/TaskJson'
import { Mode } from './mode'
import { defaultSettings, Settings, testingSettings } from './settings'
import { Timer } from './timer'

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
}
