import { reactive } from 'vue'
import { State } from './State'
import { stateReactivelyLoadTasks } from './stateReactivelyLoadTasks'
import { stateReactivelySaveTasks } from './stateReactivelySaveTasks'

export function stateReactive(inputState: State): State {
  const state = reactive(inputState) as State

  stateReactivelyLoadTasks(state)
  stateReactivelySaveTasks(state)

  return state as State
}
