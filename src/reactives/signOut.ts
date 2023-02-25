import { useGlobalAuth } from './useGlobalAuth'
import { useGlobalToken } from './useGlobalToken'

export async function signOut(): Promise<void> {
  const token = useGlobalToken()
  token.name = ''

  const auth = useGlobalAuth()
  auth.user = undefined
}
