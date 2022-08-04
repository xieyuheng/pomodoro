import { useAuth } from "../../composables/useAuth"
import { useLang } from "../../composables/useLang"
import { useTheme } from "../../composables/useTheme"

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
