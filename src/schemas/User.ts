import { Obtain, ty } from '@xieyuheng/ty'

export const UserSchema = ty.object({
  '@path': ty.string(),
  '@revision': ty.string(),
  name: ty.string(),
})

export type User = Obtain<typeof UserSchema>
