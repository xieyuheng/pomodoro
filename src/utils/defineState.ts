import { reactive } from "vue"
import { isServer } from "./isServer"

export function defineState<T>(state: T): () => T {
  let initialized = false

  return () => {
    if (initialized || isServer()) return state

    state = reactive<any>(state)
    initialized = true
    return state
  }
}
