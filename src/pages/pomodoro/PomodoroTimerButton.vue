<script setup lang="ts">
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import { State } from './State'

defineProps<{
  state: State
  name: string
}>()

const theme = useGlobalTheme()
</script>

<template>
  <button
    class="border-2 px-4 py-2 text-2xl md:text-3xl"
    :class="[
      state.classes.transition,
      `border-${theme.name}-300 bg-${theme.name}-200 text-${theme.name}-600`,
    ]"
  >
    {{ name }}
  </button>
</template>
