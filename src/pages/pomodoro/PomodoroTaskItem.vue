TaskJson
<script setup lang="ts">
import { EllipsisVerticalIcon } from '@heroicons/vue/24/outline'
import { reactive } from 'vue'
import { TaskJson } from '../../jsons/TaskJson'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import PomodoroTaskForm from './PomodoroTaskForm.vue'
import PomodoroTaskItemCount from './PomodoroTaskItemCount.vue'
import { State } from './State'
import { stateDeleteTask } from './stateDeleteTask'
import { stateSelectTask } from './stateSelectTask'

const props = defineProps<{ state: State; task: TaskJson }>()

const theme = useGlobalTheme()
const lang = useGlobalLang()

const locals = reactive({ inputTitle: props.task.title, active: false })

const alert = window.alert
</script>

<template>
  <div
    class="flex flex-col border-2 p-3 text-xl font-semibold hover:border-white md:py-4"
    :class="[
      'transition-tender',
      `border-${theme.name}-200 bg-${theme.name}-100`,
      locals.active ? `text-${theme.name}-500` : `text-${theme.name}-900`,
    ]"
  >
    <PomodoroTaskForm
      v-if="task.editing"
      :state="state"
      v-model="locals.inputTitle"
      :options="{
        onDelete: () => {
          stateDeleteTask(state, task.id)
          task.editing = false
        },
        onCancel: () => {
          locals.inputTitle = task.title
          task.editing = false
        },
        onSave: () => {
          if (!locals.inputTitle) {
            return alert(lang.isZh() ? '输入不能为空' : 'Input required')
          }

          task.title = locals.inputTitle
          task.editing = false
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
              stateSelectTask(state, task.id)
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
