import { createSingleton } from "../utils/createSingleton"
import { Auth } from "../states/Auth"

export const useAuth = createSingleton(new Auth())
