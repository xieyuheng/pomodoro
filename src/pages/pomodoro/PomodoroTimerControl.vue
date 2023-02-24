<script setup lang="ts">
import { callWithConfirm } from '../../utils/callWithConfirm'
import PomodoroTimerButton from './PomodoroTimerButton.vue'
import { State } from './State'
import { stateStart } from './stateStart'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex justify-between py-2 px-2 font-semibold md:py-4 md:px-6">
    <div class="flex space-x-2">
      <PomodoroTimerButton
        v-if="!state.timer.isRunning && !state.timer.isFinished"
        :state="state"
        :name="state.lang.zh ? '开始' : 'START'"
        @click="() => stateStart(state)"
      />

      <PomodoroTimerButton
        v-if="state.timer.isRunning"
        :state="state"
        :name="state.lang.zh ? '暂停' : 'STOP'"
        @click="() => state.timer.stop()"
      />

      <PomodoroTimerButton
        v-if="state.timer.isStarted"
        :state="state"
        :name="state.lang.zh ? '重置' : 'RESET'"
        @click="
          () => {
            callWithConfirm(() => state.timer.reset(), {
              when: !state.timer.isFinished,
              message: state.lang.zh
                ? '计时器已经开始了，确定要重置吗？'
                : 'A timer has been started, are you sure to reset it?',
            })
          }
        "
      />
    </div>
  </div>
</template>
