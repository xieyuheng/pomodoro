<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalApp } from '../../reactives/useGlobalApp'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import PageHead from './PageHead.vue'

const theme = useGlobalTheme()
const app = useGlobalApp()
</script>

<template>
  <div
    class="h-screen-dynamic flex flex-col items-center"
    :class="[
      'transition-tender',
      `bg-${theme.name}-400 text-${theme.name}-100`,
    ]"
  >
    <Head>
      <title>{{ app.name }}</title>
      <meta name="theme-color" :content="theme.color" />
    </Head>

    <PageHead />

    <div class="mt-6 h-full w-full space-y-2 px-4 sm:max-w-2xl">
      <slot />
    </div>
  </div>
</template>
