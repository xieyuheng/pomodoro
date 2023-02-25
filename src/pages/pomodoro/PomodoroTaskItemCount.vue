Task
<script setup lang="ts">
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import { State } from './State'
import { Task } from './task'

defineProps<{
  state: State
  task: Task
}>()

const theme = useGlobalTheme()
</script>

<template>
  <div v-if="task.trace.length > 0" class="flex space-x-0.5 pt-2">
    <div
      v-for="time of task.trace"
      :key="time"
      class="h-2.5 w-2.5 border"
      :class="[
        'transition-tender',
        `border-${theme.name}-400 bg-${theme.name}-600`,
      ]"
    ></div>
  </div>
</template>
