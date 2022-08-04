<script setup>
// Maybe we can not use <RouterLink> in headlessui:
// - https://headlessui.com/react/menu#integrating-with-next-js
</script>

<template>
  <RouterLink :to="$attrs.href" v-bind="$attrs">
    <slot />
  </RouterLink>
</template>
