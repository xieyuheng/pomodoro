<script setup lang="ts">
import { Head } from "@vueuse/head"
import { onMounted, reactive } from "vue"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTasks from "./PomodoroTasks.vue"
import PomodoroTimer from "./PomodoroTimer.vue"

const state = reactive(new State()) as State

onMounted(() => state.setupNotification())
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
