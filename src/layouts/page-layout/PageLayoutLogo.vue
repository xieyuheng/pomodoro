<script setup lang="ts">
import Link from "../../components/Link.vue"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <Link href="/" class="font-logo text-3xl font-bold hover:underline">
    {{ state.appName }}
  </Link>
</template>
