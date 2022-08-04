import { UserJson, UserSchema } from "../jsons/UserJson"

export class Auth {
  user: UserJson | null = null

  async loadUser(): Promise<void> {
    if (this.user) return

    const response = await fetch("/api/user")

    const data = await response.json()
    if (!data) return

    this.user = UserSchema.validate(data)
  }

  logout(): void {
    // TODO
    // const token = useCookie("token")
    // token.value = ""
    this.user = null
  }
}
