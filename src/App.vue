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
  try {
    await state.auth.loadUser()
  } catch (error) {
    console.error(error)
  }

  state.loading = false
})
</script>

<template>
  <Transition
    enter-from-class="transform opacity-100"
    enter-to-class="transform opacity-80"
    leave-active-class="transition duration-700"
    leave-from-class="transform opacity-80"
    leave-to-class="transform opacity-100 "
  >
    <Loading v-if="state.loading">
      <Lang>
        <template #zh>加载中。。。</template>
        <template #en>Loading...</template>
      </Lang>
    </Loading>
    <PageLayout v-else>
      <RouterView />
    </PageLayout>
  </Transition>
</template>
