import { useAuth } from '../../reactives/useAuth'
import { useTheme } from '../../reactives/useTheme'

export class State {
  theme = useTheme()
  auth = useAuth()

  classes = {
    transition: 'transition delay-0 duration-500 ease-out',
  }
}
