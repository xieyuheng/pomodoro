import { watch } from 'vue'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { State } from './State'

export function stateReactivelyLoadTasks(state: State): void {
  const auth = useGlobalAuth()

  watch(
    () => auth.user,
    async (value) => {
      if (value === undefined) {
        state.tasks = []
      } else {
        state.tasks = value.tasks || []
        state.isRightAfterLoadTasks = true
      }
    },
    {
      immediate: true,
    },
  )
}
