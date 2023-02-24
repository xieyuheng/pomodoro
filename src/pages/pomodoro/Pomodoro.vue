<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted, watch } from 'vue'
import PomodoroTasks from './PomodoroTasks.vue'
import PomodoroTimer from './PomodoroTimer.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'
import { setupNotification } from './utils/setupNotification'

const state = stateReactive(new State())

watch(
  () => state.auth.pomodoro,
  () => state.reload(),
)

onMounted(async () => await setupNotification())
</script>

<template>
  <div>
    <Head>
      <title>{{ state.formatTitle() }}</title>
      <meta name="theme-color" :content="state.theme.color" />
    </Head>

    <PomodoroTimer :state="state" />
    <PomodoroTasks :state="state" />
  </div>
</template>
