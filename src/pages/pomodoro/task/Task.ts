import { Obtain, ty } from '@xieyuheng/ty'

export const TaskSchema = ty.object({
  '@path': ty.string(),
  trace: ty.array(ty.number()),
  title: ty.string(),
  editing: ty.optional(ty.boolean()),
})

export type Task = Obtain<typeof TaskSchema>
