<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import { useGlobalApp } from '../../reactives/useGlobalApp'

const app = useGlobalApp()
</script>

<template>
  <Hyperlink
    href="/"
    class="font-logo text-2xl font-bold hover:underline md:text-3xl"
  >
    {{ app.name }}
  </Hyperlink>
</template>
