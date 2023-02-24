<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <Hyperlink href="/" class="font-logo text-3xl font-bold hover:underline">
    {{ state.appName }}
  </Hyperlink>
</template>
