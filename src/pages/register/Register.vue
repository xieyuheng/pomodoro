<script setup lang="ts">
import { reactive } from "vue"
import { RegisterState as State } from "./RegisterState"

const state = reactive(new State())
</script>

<template>
  <div
    v-if="!state.verifying"
    class="mt-4 flex h-full flex-col items-center md:mt-10"
  >
    <RegisterStart :state="state" />
  </div>

  <div v-else class="mt-12 flex h-full flex-col items-center md:mt-10">
    <RegisterVerifying :state="state" :verifying="state.verifying" />
  </div>
</template>
