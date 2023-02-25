import { State } from './State'

export function stateCreateTask(state: State) {
  if (!state.inputTaskTitle) return

  const newTask = {
    '@path': state.tasks.length.toString(),
    title: state.inputTaskTitle,
    trace: [],
  }

  state.tasks.push(newTask)
  state.inputTaskTitle = undefined
}
