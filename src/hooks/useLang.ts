import { Lang } from "../states/Lang"
import { createSingleton } from "../utils/createSingleton"

export const useLang = createSingleton(new Lang("en"))
