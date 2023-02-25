import { useGlobalAuth } from './useGlobalAuth'
import { useGlobalBackend } from './useGlobalBackend'
import { useGlobalToken } from './useGlobalToken'

export async function loadAuthUser(
  options: {
    username: string
  },
  report: {
    errorMessage: string
  },
): Promise<void> {
  const { url } = useGlobalBackend()

  report.errorMessage = ''

  const response = await fetch(`${url}/users/${options.username}?kind=data`, {
    method: 'GET',
    headers: {
      authorization: useGlobalToken().authorization,
    },
  })

  if (response.ok) {
    const auth = useGlobalAuth()
    auth.user = await response.json()
  } else {
    report.errorMessage = response.statusText
  }
}
