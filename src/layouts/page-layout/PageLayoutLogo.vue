<script setup lang="ts">
import Hyperlink from "../../components/Hyperlink.vue"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <Hyperlink href="/" class="font-logo text-3xl font-bold hover:underline">
    {{ state.appName }}
  </Hyperlink>
</template>
