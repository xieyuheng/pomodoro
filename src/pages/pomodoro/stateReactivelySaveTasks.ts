import { watch } from 'vue'
import { State } from './State'
import { stateSaveTasks } from './stateSaveTasks'

export function stateReactivelySaveTasks(state: State): void {
  watch(
    () => state.tasks,
    () => {
      if (state.initialTasksUpdate) {
        state.initialTasksUpdate = false
      } else {
        stateSaveTasks(state)
      }
    },
    {
      deep: true,
    },
  )
}
