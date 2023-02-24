import { VerifyingJson, VerifyingSchema } from '../../jsons/VerifyingJson'
import { useAuth } from '../../reactives/useAuth'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'

export class State {
  lang = useGlobalLang()
  theme = useGlobalTheme()
  auth = useAuth()

  verifying: Verifying | null = null

  verify(input: any) {
    const json = VerifyingSchema.validate(input)
    this.verifying = new Verifying(json)
  }

  get links() {
    const api = import.meta.env.VITE_API_URL

    return {
      login: `${api}/login`,
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
      verify: `${api}/login/${this.verification_token}/verify`,
      revoke: `${api}/login/${this.verification_token}/revoke`,
    }
  }
}
