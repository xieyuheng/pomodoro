import { removeFirst } from '../../utils/removeFirst'
import { State } from './State'

export function stateDeleteTask(state: State, id: number) {
  removeFirst(state.tasks, (task) => task.id === id)
}
