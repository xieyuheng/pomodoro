import { watch } from 'vue'
import { State } from './State'
import { stateSaveTasks } from './stateSaveTasks'

export function stateReactivelySaveTasks(state: State): void {
  watch(
    () => state.tasks,
    () => {
      if (state.isRightAfterLoadTasks) {
        state.isRightAfterLoadTasks = false
      } else {
        stateSaveTasks(state)
      }
    },
    {
      deep: true,
    },
  )
}
