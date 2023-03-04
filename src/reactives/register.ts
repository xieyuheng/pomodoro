import { useGlobalAuth } from './useGlobalAuth'
import { useGlobalBackend } from './useGlobalBackend'

export async function register(
  options: {
    username: string
    name: string
    password: string
  },
  report: {
    errorMessage: string
  },
): Promise<void> {
  const { url } = useGlobalBackend()

  report.errorMessage = ''

  const response = await fetch(
    new URL(`/users/${options.username}?kind=password-register`, url),
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: options.name,
        },
        options: {
          memo: 'Register',
          password: options.password,
        },
      }),
    },
  )

  if (response.ok) {
    const auth = useGlobalAuth()
    auth.user = await response.json()
  } else {
    report.errorMessage = response.statusText
  }
}
