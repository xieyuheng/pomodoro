import { Auth } from "../models/Auth"
import { createSingleton } from "../utils/createSingleton"

export const useAuth = createSingleton(new Auth())
