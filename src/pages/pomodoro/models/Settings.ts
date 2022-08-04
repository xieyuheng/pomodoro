import { Mode } from "./Mode"

type ModesSetting = {
  Focus: Mode
  Break: Mode
  Recess: Mode
}

export interface Settings {
  modes: ModesSetting
}

export const defaultSettings: Settings = {
  modes: {
    Focus: { kind: "Focus", interval: 25 * 60 * 1000 },
    Break: { kind: "Break", interval: 5 * 60 * 1000 },
    Recess: { kind: "Recess", interval: 15 * 60 * 1000 },
  },
}

export const testingSettings: Settings = {
  modes: {
    Focus: { kind: "Focus", interval: 5 * 1000 },
    Break: { kind: "Break", interval: 2 * 1000 },
    Recess: { kind: "Recess", interval: 3 * 1000 },
  },
}
