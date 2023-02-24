<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { RouterView } from 'vue-router'
import { useGlobalAuth } from './reactives/useGlobalAuth'

import Lang from './components/Lang.vue'
import Loading from './components/Loading.vue'
import PageLayout from './layouts/page-layout/PageLayout.vue'

const state = reactive({
  loading: true,
  auth: useGlobalAuth(),
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
