import { loginByToken } from './loginByToken'
import { useGlobalBackend } from './useGlobalBackend'
import { useGlobalToken } from './useGlobalToken'

export async function loginByPassword(
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
    new URL(`/users/${options.username}?kind=password-login`, url),
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

    await loginByToken(options, report)
  } else {
    report.errorMessage = response.statusText
  }
}
