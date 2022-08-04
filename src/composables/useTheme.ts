import { Theme } from "../states/Theme"
import { createSingleton } from "../utils/createSingleton"

export const useTheme = createSingleton(new Theme())
