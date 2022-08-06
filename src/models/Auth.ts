import { useRouter } from "vue-router"
import { PomodoroJson, PomodoroSchema } from "../jsons/PomodoroJson"
import { UserJson, UserSchema } from "../jsons/UserJson"

export class Auth {
  user: UserJson | null = null
  pomodoro: PomodoroJson | null = null

  async init() {
    await this.loadUser()
    await this.loadPomodoro()
  }

  async loadUser() {
    if (this.user) return
    const api = import.meta.env.VITE_API_URL
    const response = await fetch(`${api}/user`, {
      credentials: "include",
    })

    if (!response.ok) return
    const data = await response.json()
    if (!data) return

    this.user = UserSchema.validate(data)
  }

  async loadPomodoro() {
    if (this.pomodoro) return
    const api = import.meta.env.VITE_API_URL
    const response = await fetch(`${api}/pomodoro`, {
      credentials: "include",
    })

    if (!response.ok) return
    const data = await response.json()
    if (!data) return

    this.pomodoro = PomodoroSchema.validate(data)
  }

  redirectUser() {
    const router = useRouter()

    if (this.user) {
      router.replace({ path: "/" })
    }
  }

  redirectGuest() {
    const router = useRouter()

    if (!this.user) {
      router.replace({ path: "/" })
    }
  }

  logout(): void {
    deleteCookie("token")
    this.user = null
    this.pomodoro = null
  }
}

function deleteCookie(name: string) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}
