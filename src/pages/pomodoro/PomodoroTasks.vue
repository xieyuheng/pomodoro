<script setup lang="ts">
import PomodoroTaskCurrent from './PomodoroTaskCurrent.vue'
import PomodoroTaskInput from './PomodoroTaskInput.vue'
import PomodoroTaskItem from './PomodoroTaskItem.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col py-2">
    <div v-if="state.currentTask" class="py-3">
      <PomodoroTaskCurrent :state="state" :task="state.currentTask" />
    </div>

    <ul>
      <li v-for="task of state.tasks.slice(1)" class="py-2" :key="task.id">
        <PomodoroTaskItem :state="state" :task="task" />
      </li>

      <li class="py-2">
        <PomodoroTaskInput :state="state" />
      </li>
    </ul>
  </div>
</template>
