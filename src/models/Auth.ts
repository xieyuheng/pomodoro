import { useRouter } from "vue-router"
import { UserJson, UserSchema } from "../jsons/UserJson"

export class Auth {
  user: UserJson | null = null

  async loadUser(): Promise<void> {
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
  }
}

function deleteCookie(name: string) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}
