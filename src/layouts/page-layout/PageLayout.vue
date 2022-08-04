<script setup lang="ts">
import { reactive } from "vue"
import { Head } from "@vueuse/head"
import PageLayoutHeader from "./PageLayoutHeader.vue"
import { PageLayoutState as State } from "./PageLayoutState"

const state = reactive(new State())
// await state.auth.loadUser()
</script>

<template>
  <Head>
    <title v-if="state.formatTitle()">{{ state.formatTitle() }}</title>
    <meta name="theme-color" :content="state.theme.color" />
  </Head>

  <div
    class="flex min-h-screen flex-col items-center"
    :class="[
      state.classes.transition,
      `bg-${state.theme.name}-400 text-${state.theme.name}-100`,
    ]"
  >
    <PageLayoutHeader :state="state" />

    <div class="mt-6 h-full w-full space-y-2 px-4 md:max-w-2xl">
      <slot />
    </div>
  </div>
</template>
