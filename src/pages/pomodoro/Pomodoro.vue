<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted } from 'vue'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import PomodoroTasks from './PomodoroTasks.vue'
import PomodoroTimer from './PomodoroTimer.vue'
import { State } from './State'
import { stateFormatTitle } from './stateFormatTitle'
import { stateReactive } from './stateReactive'
import { setupNotification } from './utils/setupNotification'

const state = stateReactive(new State())

const lang = useGlobalLang()
const theme = useGlobalTheme()

onMounted(async () => await setupNotification())
</script>

<template>
  <div>
    <Head>
      <title>{{ stateFormatTitle(state) }}</title>
      <meta name="theme-color" :content="theme.color" />
    </Head>

    <PomodoroTimer :state="state" />
    <PomodoroTasks :state="state" />
  </div>
</template>
