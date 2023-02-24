import { TaskJson } from '../../schemas/TaskJson'
import { State } from './State'

export function stateCreateTask(state: State) {
  if (!state.inputTaskTitle) return

  const newTask = stateCreateTaskFromTitle(state, state.inputTaskTitle)

  state.tasks.push(newTask)
  state.inputTaskTitle = undefined
}

function stateCreateTaskFromTitle(state: State, title: string): TaskJson {
  const tasks = state.tasks

  const ids = tasks.map((task) => task.id)
  const newId = ids.length === 0 ? 0 : Math.max(...ids) + 1
  return { id: newId, title, trace: [] }
}
