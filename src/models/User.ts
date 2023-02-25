import { Obtain, ty } from '@xieyuheng/ty'
import { TaskSchema } from './Task'

export const UserSchema = ty.object({
  '@path': ty.string(),
  '@revision': ty.string(),
  name: ty.string(),
  tasks: ty.array(TaskSchema),
})

export type User = Obtain<typeof UserSchema>
