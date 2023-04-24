import { Directive } from 'vue'

export const mounted: Directive = {
  mounted: (target, binding) => binding.value(),
}
