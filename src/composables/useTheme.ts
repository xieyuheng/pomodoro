import { createSingleton } from "../utils/createSingleton"
import { Theme } from "../states/Theme"

export const useTheme = createSingleton(new Theme())
