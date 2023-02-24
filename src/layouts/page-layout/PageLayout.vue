<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import PageLayoutHeader from './PageLayoutHeader.vue'
import { PageLayoutState as State } from './PageLayoutState'

const state = reactive(new State())
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center"
    :class="[
      state.classes.transition,
      `bg-${state.theme.name}-400 text-${state.theme.name}-100`,
    ]"
  >
    <Head>
      <title v-if="state.formatTitle()">{{ state.formatTitle() }}</title>
      <meta name="theme-color" :content="state.theme.color" />
    </Head>

    <PageLayoutHeader :state="state" />

    <div class="mt-6 h-full w-full space-y-2 px-4 md:max-w-2xl">
      <slot />
    </div>
  </div>
</template>
