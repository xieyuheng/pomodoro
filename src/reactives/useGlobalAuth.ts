import { reactive } from 'vue'
import { UserJson } from '../schemas/UserSchema'

type Auth = {
  user?: UserJson
}

const globalAuth: Auth = reactive({
  user: undefined,
})

export function useGlobalAuth() {
  return globalAuth
}
