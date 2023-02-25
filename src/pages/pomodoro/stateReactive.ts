import { reactive } from 'vue'
import { State } from './State'
import { stateReactivelySaveTasks } from './stateReactivelySaveTasks'

export function stateReactive(inputState: State): State {
  const state = reactive(inputState) as State

  stateReactivelySaveTasks(state)

  return state as State
}
