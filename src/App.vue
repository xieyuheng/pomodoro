<script setup lang="ts">
import { onMounted, reactive } from "vue"
import { RouterView } from "vue-router"
import { useAuth } from "./hooks/useAuth"

import Lang from "./components/Lang.vue"
import Loading from "./components/Loading.vue"
import PageLayout from "./layouts/page-layout/PageLayout.vue"

const state = reactive({
  loading: true,
  auth: useAuth(),
})

onMounted(async () => {
  await state.auth.init().catch((error) => {})

  state.loading = false
})
</script>

<template>
  <Loading v-if="state.loading">
    <Lang>
      <template #zh>加载中。。。</template>
      <template #en>Loading...</template>
    </Lang>
  </Loading>
  <PageLayout v-else>
    <RouterView />
  </PageLayout>
</template>
