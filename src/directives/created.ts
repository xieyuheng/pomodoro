import { Directive } from 'vue'

export const created: Directive = {
  created: (target, binding) => binding.value(),
}
