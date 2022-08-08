<script setup lang="ts">
import { useTheme } from "../hooks/useTheme"

const theme = useTheme()
</script>

<template>
  <div
    class="flex flex-col h-screen w-screen justify-center items-center text-3xl text-white"
    :class="`bg-${theme.name}-400`"
  >
    <slot />
  </div>
</template>
