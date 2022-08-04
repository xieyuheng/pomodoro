import { useLang } from "../../hooks/useLang"
import { useTheme } from "../../hooks/useTheme"
import { VerifyingJson, VerifyingSchema } from "../../jsons/VerifyingJson"

export class LoginState {
  lang = useLang()
  theme = useTheme()

  verifying: Verifying | null = null

  verify(input: any) {
    const json = VerifyingSchema.validate(input)
    this.verifying = new Verifying(json)
  }
}

export interface Verifying extends VerifyingJson {}
export class Verifying {
  constructor(json: VerifyingJson) {
    Object.assign(this, json)
  }

  get links() {
    const api = import.meta.env.VITE_API_URL

    return {
      verify: `${api}/login/${this.verification_token}/verify`,
      revoke: `${api}/login/${this.verification_token}/revoke`,
    }
  }
}
