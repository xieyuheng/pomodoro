<script setup lang="ts">
import { reactive } from 'vue'
import SignInStart from './SignInStart.vue'
import SignInVerifying from './SignInVerifying.vue'
import { State } from './State'

const state = reactive(new State())

state.auth.redirectUser()
</script>

<template>
  <div
    v-if="!state.verifying"
    class="mt-4 flex h-full flex-col items-center md:mt-10"
  >
    <SignInStart :state="state" />
  </div>

  <div v-else class="mt-12 flex h-full flex-col items-center md:mt-10">
    <SignInVerifying :state="state" :verifying="state.verifying" />
  </div>
</template>
