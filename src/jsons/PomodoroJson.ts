import { Obtain, ty } from "@xieyuheng/ty"
import { TaskSchema } from "./TaskJson"

export const PomodoroSchema = ty.object({
  username: ty.string(),
  tasks: ty.array(TaskSchema),
})

export type PomodoroJson = Obtain<typeof PomodoroSchema>
