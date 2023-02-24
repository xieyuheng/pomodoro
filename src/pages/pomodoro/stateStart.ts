import { State } from './State'
import { stateNotify } from './stateNotify'
import { emptySoundLoop } from './utils/emptySoundLoop'

export function stateStart(state: State): void {
  if (!state.playing) {
    emptySoundLoop().play()
  }

  state.timer.start({
    onFinished: async () => {
      if (state.tasks[0] && state.mode.kind === 'Focus') {
        state.tasks[0].trace.push(Date.now())
      }

      await stateNotify(state)
    },
  })
}
