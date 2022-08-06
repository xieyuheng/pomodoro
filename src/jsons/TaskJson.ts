import { Obtain, ty } from "@xieyuheng/ty"

export const TaskSchema = ty.object({
  id: ty.number(),
  trace: ty.array(ty.number()),
  title: ty.string(),
  editing: ty.optional(ty.boolean()),
})

export type TaskJson = Obtain<typeof TaskSchema>
