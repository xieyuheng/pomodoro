TaskJson
<script setup lang="ts">
import { TaskJson } from "../../jsons/TaskJson"
import { PomodoroState as State } from "./PomodoroState"

const props = defineProps<{ state: State; task: TaskJson }>()
</script>

<template>
  <div v-if="task.trace.length > 0" class="flex space-x-0.5 pt-2">
    <div
      v-for="time of task.trace"
      :key="time"
      class="h-2.5 w-2.5 border"
      :class="[
        state.classes.transition,
        `border-${state.theme.name}-400 bg-${state.theme.name}-600`,
      ]"
    ></div>
  </div>
</template>
