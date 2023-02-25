import { removeFirst } from '../../utils/removeFirst'
import { State } from './State'

export function stateSelectTask(state: State, path: string): void {
  const task = state.tasks.find((task) => task['@path'] === path)
  if (task === undefined) return

  removeFirst(state.tasks, (task) => task['@path'] === path)
  state.tasks.unshift(task)
}
