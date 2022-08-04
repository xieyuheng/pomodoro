<script setup lang="ts">
import { ref } from "vue"

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="p-4 text-3xl text-red-400">
    <h1>{{ msg }}</h1>
    <button @click="count++">count: {{ count }}</button>
  </div>
</template>
