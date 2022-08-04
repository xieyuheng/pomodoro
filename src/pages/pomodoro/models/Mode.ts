export type ModeKind = "Focus" | "Break" | "Recess"

export interface Mode {
  kind: ModeKind
  interval: number
}
