import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { State } from './State'

export async function stateSaveTasks(state: State): Promise<void> {
  const { url } = useGlobalBackend()
  const auth = useGlobalAuth()

  if (auth.user === undefined) {
    return
  }

  const response = await fetch(`${url}/users/${auth.user.username}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      authorization: useGlobalToken().authorization,
    },
    body: JSON.stringify({
      // '@revision': auth.user['@revision'],
      tasks: state.tasks,
    }),
  })

  if (response.ok) {
    return
  } else {
    console.error({
      message: response.statusText,
    })
  }
}
