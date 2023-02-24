<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import PomodoroTaskForm from './PomodoroTaskForm.vue'
import { State } from './State'
import { stateCreateTask } from './stateCreateTask'

defineProps<{ state: State }>()

const lang = useGlobalLang()
const theme = useGlobalTheme()
</script>

<template>
  <div>
    <div
      v-if="state.editing"
      class="flex w-full flex-col border-2 p-3 text-xl font-semibold md:py-4"
      :class="[
        'transition-tender',
        `border-${theme.name}-200 bg-${theme.name}-100 text-${theme.name}-900`,
      ]"
    >
      <PomodoroTaskForm
        :state="state"
        v-model="state.inputTaskTitle"
        :options="{
          placeholder: lang.isZh() ? '新的任务' : 'Create a new task',
          onCancel: () => {
            state.inputTaskTitle = undefined
            state.editing = false
          },
          onSave: () => {
            if (!state.inputTaskTitle) {
              state.editing = false
            } else {
              stateCreateTask(state)
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
      class="flex w-full flex-col items-center justify-center border-2 border-dashed p-3 md:py-4"
      :class="[
        'transition-tender',
        `border-${theme.name}-300 bg-${theme.name}-400 hover:bg-${theme.name}-500`,
      ]"
    >
      <PlusIcon
        class="h-10 w-10"
        :class="['transition-tender', `text-${theme.name}-300`]"
      />
    </button>
  </div>
</template>
