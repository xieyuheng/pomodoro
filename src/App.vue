<script setup lang="ts">
import { onMounted } from 'vue'
import { loadAuthUser } from './reactives/loadAuthUser'
import { useGlobalAuth } from './reactives/useGlobalAuth'
import { useGlobalToken } from './reactives/useGlobalToken'

const auth = useGlobalAuth()
const token = useGlobalToken()

const report = {
  errorMessage: '',
}

onMounted(async () => {
  if (!token.name) {
    return
  }

  if (auth.username) {
    auth.isLoadingUser = true

    try {
      await loadAuthUser({ username: auth.username }, report)
    } catch (_error) {}

    if (auth.user === undefined) {
      auth.username = undefined
      token.name = ''
    }

    auth.isLoadingUser = false
  }
})
</script>

<template>
  <RouterView />
</template>
