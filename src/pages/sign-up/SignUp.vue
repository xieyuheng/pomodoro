<script setup lang="ts">
import { reactive } from 'vue'
import SignUpStart from './SignUpStart.vue'
import SignUpVerifying from './SignUpVerifying.vue'
import { State } from './State'

const state = reactive(new State())

state.auth.redirectUser()
</script>

<template>
  <div
    v-if="!state.verifying"
    class="mt-4 flex h-full flex-col items-center md:mt-10"
  >
    <SignUpStart :state="state" />
  </div>

  <div v-else class="mt-12 flex h-full flex-col items-center md:mt-10">
    <SignUpVerifying :state="state" :verifying="state.verifying" />
  </div>
</template>
