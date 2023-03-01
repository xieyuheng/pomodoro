import { useGlobalAuth } from './useGlobalAuth'
import { useGlobalToken } from './useGlobalToken'

export async function logout(): Promise<void> {
  const token = useGlobalToken()
  token.name = ''

  const auth = useGlobalAuth()
  auth.user = undefined
}
