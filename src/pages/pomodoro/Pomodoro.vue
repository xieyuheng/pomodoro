<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted } from 'vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import PomodoroTasks from './PomodoroTasks.vue'
import PomodoroTimer from './PomodoroTimer.vue'
import { createState } from './State'
import { stateFormatTitle } from './stateFormatTitle'
import { stateReactive } from './stateReactive'
import { setupNotification } from './utils/setupNotification'

const state = stateReactive(createState())

const theme = useGlobalTheme()

onMounted(async () => await setupNotification())
</script>

<template>
  <PageLayout>
    <Head>
      <title>{{ stateFormatTitle(state) }}</title>
      <meta name="theme-color" :content="theme.color" />
    </Head>

    <PomodoroTimer :state="state" />
    <PomodoroTasks :state="state"
  /></PageLayout>
</template>
