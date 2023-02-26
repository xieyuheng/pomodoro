import { reactive } from 'vue'

type Backend = {
  url: string
}

const globalBackend: Backend = reactive({
  url: 'https://pomodoro.database.fidb.app',
  // url: 'http://localhost:3000',
})

export function useGlobalBackend() {
  return globalBackend
}
