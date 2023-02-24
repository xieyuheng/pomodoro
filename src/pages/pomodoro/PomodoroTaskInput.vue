<script setup lang="ts">
import { PlusIcon } from "@heroicons/vue/24/outline"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTaskForm from "./PomodoroTaskForm.vue"

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <div
      v-if="state.editing"
      class="flex w-full flex-col border-2 p-3 md:py-4 text-xl font-semibold"
      :class="[
        state.classes.transition,
        `border-${state.theme.name}-200 bg-${state.theme.name}-100 text-${state.theme.name}-900`,
      ]"
    >
      <PomodoroTaskForm
        :state="state"
        v-model="state.inputTaskTitle"
        :options="{
          placeholder: state.lang.zh ? '新的任务' : 'Create a new task',
          onCancel: () => {
            state.inputTaskTitle = undefined
            state.editing = false
          },
          onSave: () => {
            if (!state.inputTaskTitle) {
              state.editing = false
            } else {
              state.createTask()
              state.editing = false
            }
          },
        }"
      />
    </div>
    <button
      v-else
      @click="
        () => {
          state.editing = true
        }
      "
      class="flex w-full flex-col border-2 border-dashed p-3 md:py-4 items-center justify-center"
      :class="[
        state.classes.transition,
        `border-${state.theme.name}-300 bg-${state.theme.name}-400 hover:bg-${state.theme.name}-500`,
      ]"
    >
      <PlusIcon
        class="h-10 w-10"
        :class="[state.classes.transition, `text-${state.theme.name}-300`]"
      />
    </button>
  </div>
</template>
