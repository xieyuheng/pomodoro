import colors from 'tailwindcss/colors'
import { reactive } from 'vue'

const globalLang = reactive({
  name: 'red',
  get color(): string {
    return (colors as any)[this.name][400]
  },
})

export function useGlobalTheme() {
  return globalLang
}
