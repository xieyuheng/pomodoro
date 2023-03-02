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
        console.log({
          who: '[start.timer / onFinished]',
          task: state.tasks[0],
        })
      }

      await stateNotify(state)
    },
  })
}
