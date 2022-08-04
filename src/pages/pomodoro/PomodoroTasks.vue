<script setup lang="ts">
import PomodoroTaskCurrent from "./PomodoroTaskCurrent.vue"
import PomodoroTaskItem from "./PomodoroTaskItem.vue"
import PomodoroTaskInput from "./PomodoroTaskInput.vue"
import { PomodoroState as State } from "./PomodoroState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col py-2">
    <div v-if="state.currentTesk" class="py-3">
      <PomodoroTaskCurrent :state="state" :task="state.currentTesk" />
    </div>

    <ul>
      <li v-for="task of state.tasks" class="py-2" :key="task.id">
        <PomodoroTaskItem :state="state" :task="task" />
      </li>

      <li class="py-2">
        <PomodoroTaskInput :state="state" />
      </li>
    </ul>
  </div>
</template>
