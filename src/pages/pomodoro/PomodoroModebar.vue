<script setup lang="ts">
import PomodoroModeButton from "./PomodoroModeButton.vue"
import { State } from "./State"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex w-full px-6">
    <div
      class="flex w-full justify-center space-x-4 px-2 py-2 text-xl font-semibold md:text-2xl"
    >
      <PomodoroModeButton :state="state" kind="Focus" />
      <PomodoroModeButton :state="state" kind="Break" />
      <PomodoroModeButton :state="state" kind="Recess" />
    </div>
  </div>
</template>
