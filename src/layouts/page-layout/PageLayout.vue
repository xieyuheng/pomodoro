<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import { useGlobalApp } from '../../reactives/useGlobalApp'
import PageLayoutHeader from './PageLayoutHeader.vue'
import { State } from './State'

const state = reactive(new State())

const app = useGlobalApp()
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
      <title>{{ app.name }}</title>
      <meta name="theme-color" :content="state.theme.color" />
    </Head>

    <PageLayoutHeader :state="state" />

    <div class="mt-6 h-full w-full space-y-2 px-4 md:max-w-2xl">
      <slot />
    </div>
  </div>
</template>
