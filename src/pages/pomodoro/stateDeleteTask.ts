import { removeFirst } from '../../utils/removeFirst'
import { State } from './State'

export function stateDeleteTask(state: State, path: string) {
  removeFirst(state.tasks, (task) => task['@path'] === path)
}
