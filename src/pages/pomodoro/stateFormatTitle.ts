import { State } from './State'

export function stateFormatTitle(state: State): string {
  const parts = []

  if (state.timer.isStarted) {
    parts.push(`${state.timer.formatTime()}`)
  }

  if (state.currentTask) {
    parts.push(`${state.currentTask.title}`)
  } else {
    parts.push(`${state.appName}`)
  }

  return parts.join(' | ')
}
