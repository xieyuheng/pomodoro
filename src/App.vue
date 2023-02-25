<script setup lang="ts">
import { onMounted } from 'vue'
import { loadAuthUser } from './reactives/loadAuthUser'
import { useGlobalAuth } from './reactives/useGlobalAuth'

const auth = useGlobalAuth()

const report = {
  errorMessage: '',
}

onMounted(async () => {
  if (auth.username) {
    auth.isLoadingUser = true

    try {
      await loadAuthUser({ username: auth.username }, report)
    } catch (_error) {}

    auth.isLoadingUser = false
  }
})
</script>

<template>
  <RouterView />
</template>
