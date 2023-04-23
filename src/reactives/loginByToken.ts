import { useGlobalAuth } from './useGlobalAuth'
import { useGlobalBackend } from './useGlobalBackend'
import { useGlobalToken } from './useGlobalToken'

export async function loginByToken(
  options: {
    username: string
  },
  report: {
    errorMessage: string
  },
): Promise<void> {
  const { url } = useGlobalBackend()

  report.errorMessage = ''

  const response = await fetch(
    new URL(`/users/${options.username}?kind=data`, url),
    {
      method: 'GET',
      headers: {
        authorization: useGlobalToken().authorization,
      },
    },
  )

  if (response.ok) {
    const auth = useGlobalAuth()
    auth.user = await response.json()
  } else {
    report.errorMessage = response.statusText
  }
}
