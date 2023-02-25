import { basename } from 'path-browserify'
import { useGlobalBackend } from '../../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../../reactives/useGlobalToken'
import { User } from '../../../schemas/User'
import { Task } from './Task'

export async function createUserTask(
  user: User,
  task: { title: string },
): Promise<Task | void> {
  const { url } = useGlobalBackend()

  const response = await fetch(
    `${url}/users/${basename(user['@path'])}/tasks`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: useGlobalToken().authorization,
      },
      body: JSON.stringify({
        title: task.title,
      }),
    },
  )

  if (response.ok) {
    return await response.json()
  } else {
    console.error({
      message: response.statusText,
    })
  }
}
