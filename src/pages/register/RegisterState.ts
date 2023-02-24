import { VerifyingJson, VerifyingSchema } from '../../jsons/VerifyingJson'
import { useAuth } from '../../reactives/useAuth'
import { useLang } from '../../reactives/useLang'
import { useTheme } from '../../reactives/useTheme'

export class RegisterState {
  lang = useLang()
  theme = useTheme()
  auth = useAuth()

  verifying: Verifying | null = null

  verify(input: any) {
    const json = VerifyingSchema.validate(input)
    this.verifying = new Verifying(json)
  }

  get links() {
    const api = import.meta.env.VITE_API_URL

    return {
      register: `${api}/register`,
    }
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
      verify: `${api}/register/${this.verification_token}/verify`,
      revoke: `${api}/register/${this.verification_token}/revoke`,
    }
  }
}
