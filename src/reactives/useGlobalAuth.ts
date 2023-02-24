import { UserJson } from '../schemas/UserSchema'
import { createSingleton } from '../utils/createSingleton'

type Auth = {
  user?: UserJson
}

export const useGlobalAuth = createSingleton<Auth>({
  user: undefined,
})
