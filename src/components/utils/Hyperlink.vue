<script setup lang="ts">
// We can not use <RouterHyperlink> in headlessui:
// - https://github.com/tailwindlabs/headlessui/issues/143
</script>

<template>
  <span
    @click="
      typeof $attrs?.href === 'string' && $router.push({ path: $attrs.href })
    "
    ><a><slot /></a
  ></span>
</template>
