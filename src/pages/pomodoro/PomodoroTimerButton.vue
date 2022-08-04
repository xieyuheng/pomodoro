<script setup lang="ts">
import { PomodoroState as State } from "./PomodoroState"

defineProps<{ state: State; name: string }>()
</script>

<template>
  <button
    class="border-2 px-4 py-2 text-2xl md:text-3xl"
    :class="[
      state.classes.transition,
      `border-${state.theme.name}-300 bg-${state.theme.name}-200 text-${state.theme.name}-600`,
    ]"
  >
    {{ name }}
  </button>
</template>
