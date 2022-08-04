import { UserJson, UserSchema } from "../types/UserJson"

export class Auth {
  user: UserJson | null = null

  async loadUser(): Promise<void> {
    if (this.user) return

    // const data = await fetch("/api/user")
    // if (!data) return

    // this.user = UserSchema.validate(data)
  }

  logout(): void {
    // TODO
    this.user = null
  }
}
