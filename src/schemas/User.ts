import { Obtain, ty } from '@xieyuheng/ty'

export const UserSchema = ty.object({
  '@revision': ty.string(),
  username: ty.string(),
  name: ty.string(),
})

export type User = Obtain<typeof UserSchema>
