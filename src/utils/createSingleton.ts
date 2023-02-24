import { reactive } from 'vue'

export function createSingleton<T>(state: T): () => T {
  let initialized = false

  return () => {
    if (initialized) return state

    state = reactive<any>(state)
    initialized = true
    return state
  }
}
