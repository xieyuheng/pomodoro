import { reactive } from 'vue'
import { Form, Values } from './Form'

export function useForm<T extends Values>(values: T) {
  return reactive(new Form(values))
}
