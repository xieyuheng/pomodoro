<script setup lang="ts">
import { onMounted, reactive } from "vue"
import { RouterView } from "vue-router"
import { useAuth } from "./hooks/useAuth"

import Loading from "./components/Loading.vue"
import PageLayout from "./layouts/page-layout/PageLayout.vue"

const state = reactive({
  loading: true,
  auth: useAuth(),
})

onMounted(async () => {
  await state.auth.loadUser()
  state.loading = false
})
</script>

<template>
  <Loading v-if="state.loading">Loading...</Loading>
  <PageLayout v-else>
    <RouterView />
  </PageLayout>
</template>
