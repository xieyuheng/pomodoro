<script setup lang="ts">
import PomodoroModebar from './PomodoroModebar.vue'
import PomodoroTimerControl from './PomodoroTimerControl.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex h-64 flex-col items-center justify-between border-4 py-2 px-2 md:h-80 md:px-6"
    :class="[
      state.classes.transition,
      `border-${state.theme.name}-600 bg-${state.theme.name}-500 bg-${state.theme.name}-400`,
    ]"
  >
    <PomodoroModebar :state="state" />

    <div
      v-if="!state.timer.isFinished"
      class="pt-2 font-mono text-8xl font-semibold md:text-9xl"
    >
      {{ state.timer.formatTime() }}
    </div>
    <div v-else class="flex flex-col items-center pt-2">
      <div class="text-4xl md:text-5xl">{{ state.mode.kind }} finished</div>
      <div class="py-2 font-mono text-3xl font-semibold md:text-4xl">
        {{ state.timer.formatInterval() }}
      </div>
    </div>

    <PomodoroTimerControl :state="state" />
  </div>
</template>
