import { reactive } from 'vue'
import { useGlobalLang } from '../components/lang/useGlobalLang'

type App = {
  name: string
}

const globalApp: App = reactive({
  get name() {
    const lang = useGlobalLang()
    return lang.isZh() ? '番茄钟' : 'Pomodoro'
  },
})

let initialized = false

export function useGlobalApp(): App {
  if (initialized) {
    return globalApp
  }

  initialized = true

  return globalApp
}
