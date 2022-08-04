import { Obtain, ty } from "@xieyuheng/ty"

export const VerifyingSchema = ty.object({
  username: ty.string(),
  email: ty.string(),
  confirmation_code: ty.string(),
  verification_token: ty.string(),
})

export type VerifyingJson = Obtain<typeof VerifyingSchema>
