<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalApp } from '../../reactives/useGlobalApp'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import PageLayoutHeader from './PageLayoutHeader.vue'

const theme = useGlobalTheme()
const app = useGlobalApp()
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center"
    :class="[
      'transition-tender',
      `bg-${theme.name}-400 text-${theme.name}-100`,
    ]"
  >
    <Head>
      <title>{{ app.name }}</title>
      <meta name="theme-color" :content="theme.color" />
    </Head>

    <PageLayoutHeader />

    <div class="mt-6 h-full w-full space-y-2 px-4 md:max-w-2xl">
      <slot />
    </div>
  </div>
</template>
