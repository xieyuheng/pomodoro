import { basename } from 'path-browserify'
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

  const response = await fetch(`${url}/users/${basename(auth.user['@path'])}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      authorization: useGlobalToken().authorization,
    },
    body: JSON.stringify({
      '@revision': auth.user['@revision'],
      tasks: state.tasks,
    }),
  })

  if (response.ok) {
    console.log({
      who: 'stateSaveTasks',
      message: `tasks saved`,
    })
    return
  } else {
    console.error({
      message: response.statusText,
    })
  }
}
