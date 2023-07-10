<script setup lang="ts">
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import PomodoroModebar from './PomodoroModebar.vue'
import PomodoroTimerControl from './PomodoroTimerControl.vue'
import { State } from './State'

defineProps<{ state: State }>()

const theme = useGlobalTheme()
</script>

<template>
  <div
    class="flex h-64 flex-col items-center justify-between border-4 px-2 py-2 sm:h-80 sm:px-6"
    :class="[
      'transition-tender',
      `border-${theme.name}-600 bg-${theme.name}-500 bg-${theme.name}-400`,
    ]"
  >
    <PomodoroModebar :state="state" />

    <div
      v-if="!state.timer.isFinished"
      class="pt-2 font-mono text-8xl font-semibold sm:text-9xl"
    >
      {{ state.timer.formatTime() }}
    </div>
    <div v-else class="flex flex-col items-center pt-2">
      <div class="text-4xl sm:text-5xl">{{ state.mode.kind }} finished</div>
      <div class="py-2 font-mono text-3xl font-semibold sm:text-4xl">
        {{ state.timer.formatInterval() }}
      </div>
    </div>

    <PomodoroTimerControl :state="state" />
  </div>
</template>
