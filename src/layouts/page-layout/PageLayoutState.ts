import { useAuth } from '../../reactives/useAuth'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import { useTheme } from '../../reactives/useTheme'

export class PageLayoutState {
  theme = useTheme()
  auth = useAuth()

  classes = {
    transition: 'transition delay-0 duration-500 ease-out',
  }

  get appName(): string {
    const lang = useGlobalLang()
    return lang.isZh() ? '番茄钟' : 'Pomodoro'
  }

  formatTitle(): string {
    return `${this.appName}`
  }
}
