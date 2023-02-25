import { Obtain, ty } from '@xieyuheng/ty'

export const UserSchema = ty.object({
  username: ty.string(),
  name: ty.string(),
  email: ty.string(),
})

export type User = Obtain<typeof UserSchema>
