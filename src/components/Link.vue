<script setup lang="ts">
// We can not use <NuxtLink> with headlessui:
// - https://headlessui.com/react/menu#integrating-with-next-js

defineProps<{
  href?: string
  target?: string
  class?: any
  style?: any
}>()
</script>

<template>
  <RouterLink :to="href" :target="target" :class="class" :style="style">
    <slot />
  </RouterLink>
</template>
