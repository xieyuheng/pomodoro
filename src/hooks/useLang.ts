import { Lang } from "../models/Lang"
import { createSingleton } from "../utils/createSingleton"

export const useLang = createSingleton(new Lang("en"))
