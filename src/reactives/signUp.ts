import { useGlobalAuth } from './useGlobalAuth'
import { useGlobalBackend } from './useGlobalBackend'

export async function signUp(
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
    `${url}/users/${options.username}?kind=password-sign-up`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          username: options.username,
          name: options.name,
        },
        options: {
          memo: 'SignUp',
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
