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

  const response = await fetch(
    new URL(`/users/${basename(auth.user['@path'])}`, url),
    {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: useGlobalToken().authorization,
      },
      body: JSON.stringify({
        '@revision': auth.user['@revision'],
        tasks: state.tasks,
      }),
    },
  )

  if (response.ok) {
    const patched = await response.json()
    auth.user = patched

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
