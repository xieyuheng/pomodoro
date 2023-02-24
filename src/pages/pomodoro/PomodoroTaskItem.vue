TaskJson
<script setup lang="ts">
import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline"
import { reactive } from "vue"
import { TaskJson } from "../../jsons/TaskJson"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTaskForm from "./PomodoroTaskForm.vue"
import PomodoroTaskItemCount from "./PomodoroTaskItemCount.vue"

const props = defineProps<{ state: State; task: TaskJson }>()

const locals = reactive({ inputTitle: props.task.title, active: false })

const alert = window.alert
</script>

<template>
  <div
    class="flex flex-col border-2 p-3 hover:border-white md:py-4 text-xl font-semibold"
    :class="[
      state.classes.transition,
      `border-${state.theme.name}-200 bg-${state.theme.name}-100`,
      locals.active
        ? `text-${state.theme.name}-500`
        : `text-${state.theme.name}-900`,
    ]"
  >
    <PomodoroTaskForm
      v-if="task.editing"
      :state="state"
      v-model="locals.inputTitle"
      :options="{
        onDelete: () => {
          state.deleteTask(task.id)
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
      <div
        class="text-xl font-semibold"
        @mouseleave="
          () => {
            locals.active = false
          }
        "
        @click="
          () => {
            if (!locals.active) {
              locals.active = true
            } else {
              state.selectTask(task.id)
            }
          }
        "
      >
        {{ task.title }}
      </div>

      <button
        class="shrink-0"
        @click="
          () => {
            task.editing = true
          }
        "
      >
        <EllipsisVerticalIcon class="h-6 w-6" />
      </button>
    </div>

    <PomodoroTaskItemCount :state="state" :task="task" />
  </div>
</template>
