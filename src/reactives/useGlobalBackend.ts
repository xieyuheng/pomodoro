import { reactive } from 'vue'

type Backend = {
  url: string
}

const globalBackend: Backend = reactive({
  url: 'https://pomodoro.fidb.app:5108',
  // url: 'http://127.0.0.1:5108',
})

export function useGlobalBackend() {
  return globalBackend
}
