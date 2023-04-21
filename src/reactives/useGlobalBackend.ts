import { reactive } from 'vue'

type Backend = {
  url: string
}

const globalBackend: Backend = reactive({
  url: import.meta.env.DEV
    ? 'http://localhost:5108'
    : 'https://api.pomodoro.fidb.app',
})

export function useGlobalBackend() {
  return globalBackend
}
