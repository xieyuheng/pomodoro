import { useGlobalBackend } from './useGlobalBackend'
import { useGlobalToken } from './useGlobalToken'

export async function login(
  options: {
    username: string
    password: string
  },
  report: {
    errorMessage: string
  },
): Promise<void> {
  const { url } = useGlobalBackend()

  report.errorMessage = ''

  const response = await fetch(
    `${url}/users/${options.username}?kind=password-login`,
    {
      method: 'POST',
      body: JSON.stringify({
        password: options.password,
      }),
    },
  )

  if (response.ok) {
    const token = useGlobalToken()
    token.name = await response.json()
  } else {
    report.errorMessage = response.statusText
  }
}
