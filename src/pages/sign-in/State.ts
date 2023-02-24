import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { VerifyingJson, VerifyingSchema } from '../../schemas/VerifyingSchema'

export class State {
  auth = useGlobalAuth()

  verifying: Verifying | null = null

  verify(input: any) {
    const json = VerifyingSchema.validate(input)
    this.verifying = new Verifying(json)
  }

  get links() {
    const api = import.meta.env.VITE_API_URL

    return {
      'sign-in': `${api}/sign-in`,
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
      verify: `${api}/sign-in/${this.verification_token}/verify`,
      revoke: `${api}/sign-in/${this.verification_token}/revoke`,
    }
  }
}
