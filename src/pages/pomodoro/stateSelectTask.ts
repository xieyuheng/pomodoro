import { removeFirst } from '../../utils/removeFirst'
import { State } from './State'

export function stateSelectTask(state: State, id: number): void {
  const task = state.tasks.find((task) => task.id === id)
  if (task === undefined) return

  removeFirst(state.tasks, (task) => task.id === id)
  state.tasks.unshift(task)
}
