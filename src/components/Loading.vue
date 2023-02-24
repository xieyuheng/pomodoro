<script setup lang="ts">
import { useTheme } from '../reactives/useTheme'

const theme = useTheme()
</script>

<template>
  <div
    class="flex h-screen w-screen flex-col items-center justify-center text-3xl text-white"
    :class="`bg-${theme.name}-400`"
  >
    <slot />
  </div>
</template>
