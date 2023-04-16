<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { removeServiceWorker } from '../../utils/browser/removeServiceWorker'
</script>

<template>
  <PageLayout>
    <div class="mt-4 flex h-full flex-col items-center md:mt-10">
      <button
        @click="removeServiceWorker()"
        class="rounded border-2 border-red-300 bg-red-500 p-3 text-xl"
      >
        <Lang>
          <template #zh> 清除 Service Worker </template>
          <template #en> Remove Service Worker </template>
        </Lang>
      </button>
    </div>
  </PageLayout>
</template>
