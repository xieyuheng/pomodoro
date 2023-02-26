import { useGlobalApp } from '../../reactives/useGlobalApp'
import { State } from './State'

export function stateFormatTitle(state: State): string {
  const app = useGlobalApp()

  const parts = []

  if (state.timer.isStarted) {
    parts.push(`${state.timer.formatTime()}`)
  }

  if (state.tasks && state.tasks[0]) {
    parts.push(`${state.tasks[0].title}`)
  } else {
    parts.push(`${app.name}`)
  }

  return parts.join(' | ')
}
