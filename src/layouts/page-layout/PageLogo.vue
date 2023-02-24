<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import { useGlobalApp } from '../../reactives/useGlobalApp'

const app = useGlobalApp()
</script>

<template>
  <Hyperlink href="/" class="font-logo text-3xl font-bold hover:underline">
    {{ app.name }}
  </Hyperlink>
</template>
