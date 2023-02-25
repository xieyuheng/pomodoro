import { useGlobalToken } from '../../../reactives/useGlobalToken'
import { User } from '../../../schemas/User'
import { Task } from './Task'

export async function taskUpadte(task: Task, user: User): Promise<void> {
  const token = useGlobalToken()

  await fetch('', { method: '' })
  //
}
