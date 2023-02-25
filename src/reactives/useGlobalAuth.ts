import { reactive, watch } from 'vue'
import { User } from '../schemas/UserSchema'

type Auth = {
  username?: string
  user?: User
  isLoadingUser: boolean
}

const globalAuth: Auth = reactive({
  username: window.localStorage.getItem('username') || undefined,
  isLoadingUser: false,
})

export function useGlobalAuth() {
  return globalAuth
}

watch(
  () => globalAuth.user?.username,
  (value) => {
    globalAuth.username = value
  },
)

watch(
  () => globalAuth.username,
  (value) => {
    if (value) {
      window.localStorage.setItem('username', value)
    } else {
      window.localStorage.removeItem('username')
    }
  },
)
