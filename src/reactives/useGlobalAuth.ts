import { PomodoroJson } from '../schemas/PomodoroSchema'
import { UserJson } from '../schemas/UserSchema'
import { createSingleton } from '../utils/createSingleton'

class Auth {
  user?: UserJson
  pomodoro?: PomodoroJson
}

export const useGlobalAuth = createSingleton(new Auth())
