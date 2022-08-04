import { useAuth } from "../../hooks/useAuth"
import { useLang } from "../../hooks/useLang"
import { useTheme } from "../../hooks/useTheme"

export class PageLayoutState {
  lang = useLang()
  theme = useTheme()
  auth = useAuth()

  classes = {
    transition: "transition delay-0 duration-500 ease-out",
  }

  get appName(): string {
    return this.lang.zh ? "番茄钟" : "Pomodoro"
  }

  formatTitle(): string {
    return `${this.appName}`
  }
}
