<script setup lang="ts">
import { useGlobalLang } from '../../reactives/useGlobalLang'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'

const lang = useGlobalLang()
const theme = useGlobalTheme()

defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button
    :disabled="disabled"
    class="rounded-sm border-2 py-3 font-sans font-bold text-white disabled:opacity-50"
    :class="[
      `border-${theme.name}-200`,
      !disabled && `hover:bg-${theme.name}-500`,
    ]"
    type="submit"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
