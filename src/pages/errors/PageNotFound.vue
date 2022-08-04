<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute()
const { slugs } = route.params
const path = typeof slugs === "string" ? slugs : slugs.join("/")
</script>

<template>
  <div class="flex flex-col space-y-2">
    <div class="text-3xl font-semibold">404</div>
    <div class="text-xl">Page Not Found</div>
    <div class="text-lg">Path: /{{ path }}</div>
  </div>
</template>
