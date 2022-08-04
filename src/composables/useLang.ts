import { createSingleton } from "../utils/createSingleton"
import { Lang } from "../states/Lang"

export const useLang = createSingleton(new Lang("en"))
