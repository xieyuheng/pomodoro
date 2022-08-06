TaskJson
<script setup lang="ts">
import { DotsVerticalIcon } from "@heroicons/vue/outline"
import { reactive } from "vue"
import { TaskJson } from "../../jsons/TaskJson"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTaskForm from "./PomodoroTaskForm.vue"
import PomodoroTaskItemCount from "./PomodoroTaskItemCount.vue"

const props = defineProps<{ state: State; task: TaskJson }>()

const locals = reactive({ inputTitle: props.task.title })

const alert = window.alert
</script>

<template>
  <div
    class="flex flex-col border-2 bg-white p-3 md:py-4 text-2xl font-semibold"
    :class="[
      state.classes.transition,
      `border-${state.theme.name}-300 text-${state.theme.name}-900`,
    ]"
  >
    <PomodoroTaskForm
      v-if="task.editing"
      :state="state"
      v-model="locals.inputTitle"
      :options="{
        onDelete: () => {
          state.deleteTask(task.id)
          if (state.currentTask) {
            locals.inputTitle = state.currentTask.title
          }
          task.editing = false
        },
        onCancel: () => {
          locals.inputTitle = task.title
          task.editing = false
        },
        onSave: () => {
          if (!locals.inputTitle) {
            return alert(state.lang.zh ? '输入不能为空' : 'Input required')
          }

          task.title = locals.inputTitle
          task.editing = false
          state.save()
        },
      }"
    />

    <div v-else class="flex items-start justify-between">
      <div class="text-2xl font-semibold">{{ task.title }}</div>

      <button
        class="shrink-0"
        @click="
          () => {
            task.editing = true
          }
        "
      >
        <DotsVerticalIcon class="h-6 w-6" />
      </button>
    </div>

    <PomodoroTaskItemCount :state="state" :task="task" />
  </div>
</template>
