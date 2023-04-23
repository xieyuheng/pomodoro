<script setup lang="ts">
import { onMounted } from 'vue'
import { loginByToken } from './reactives/loginByToken'
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
      await loginByToken({ username: auth.username }, report)
    } catch (_error) {}

    auth.isLoadingUser = false
  }
})
</script>

<template>
  <RouterView />
</template>
