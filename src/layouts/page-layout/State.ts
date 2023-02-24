import { useAuth } from '../../reactives/useAuth'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'

export class State {
  theme = useGlobalTheme()
  auth = useAuth()

  classes = {
    transition: 'transition delay-0 duration-500 ease-out',
  }
}
