<script setup lang="ts">
import { reactive } from 'vue'
import RegisterStart from './RegisterStart.vue'
import { RegisterState as State } from './RegisterState'
import RegisterVerifying from './RegisterVerifying.vue'

const state = reactive(new State())

state.auth.redirectUser()
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
