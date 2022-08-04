import { useLang } from "../../composables/useLang"
import { useTheme } from "../../composables/useTheme"
import { VerifyingJson, VerifyingSchema } from "../../types/VerifyingJson"

export class RegisterState {
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
    return {
      verify: `/api/register/${this.verification_token}/verify`,
      revoke: `/api/register/${this.verification_token}/revoke`,
    }
  }
}
