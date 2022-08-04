<script setup lang="ts">
import { onMounted, reactive } from "vue"
import { Head } from "@vueuse/head"
import PomodoroTimer from "./PomodoroTimer.vue"
import PomodoroTasks from "./PomodoroTasks.vue"
import { PomodoroState as State } from "./PomodoroState"

const state = reactive(new State()) as State

onMounted(() => state.setupNotification())
</script>

<template>
  <div>
    <head>
      <title>{{ state.formatTitle() }}</title>
      <meta name="theme-color" :content="state.theme.color" />
    </head>

    <PomodoroTimer :state="state" />
    <PomodoroTasks :state="state" />
  </div>
</template>
