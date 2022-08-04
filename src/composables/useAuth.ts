import { Auth } from "../states/Auth"
import { createSingleton } from "../utils/createSingleton"

export const useAuth = createSingleton(new Auth())
