import { Theme } from "../models/Theme"
import { createSingleton } from "../utils/createSingleton"

export const useTheme = createSingleton(new Theme())
