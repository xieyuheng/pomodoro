<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted } from 'vue'
import PomodoroTasks from './PomodoroTasks.vue'
import PomodoroTimer from './PomodoroTimer.vue'
import { State } from './State'
import { stateFormatTitle } from './stateFormatTitle'
import { stateReactive } from './stateReactive'
import { setupNotification } from './utils/setupNotification'

const state = stateReactive(new State())

onMounted(async () => await setupNotification())
</script>

<template>
  <div>
    <Head>
      <title>{{ stateFormatTitle(state) }}</title>
      <meta name="theme-color" :content="state.theme.color" />
    </Head>

    <PomodoroTimer :state="state" />
    <PomodoroTasks :state="state" />
  </div>
</template>
