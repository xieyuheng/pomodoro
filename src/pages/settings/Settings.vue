<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Scope from '../../components/utils/Scope.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { hasServiceWorker } from '../../utils/pwa/hasServiceWorker'
import { removeServiceWorker } from '../../utils/pwa/removeServiceWorker'
</script>

<template>
  <PageLayout>
    <div class="mt-4 flex h-full flex-col items-center sm:mt-10">
      <div class="flex flex-col space-y-4">
        <Lang class="font-logo text-3xl font-semibold">
          <template #zh>设置</template>
          <template #en>Settings</template>
        </Lang>
        <Scope :scope="{ disabled: false }" v-slot="{ scope }">
          <button
            v-mounted="
              async () => {
                scope.disabled = !(await hasServiceWorker())
              }
            "
            @click="
              () => {
                removeServiceWorker()
                scope.disabled = true
              }
            "
            :disabled="scope.disabled"
            class="rounded-sm border-2 border-red-300 bg-red-500 p-3 text-xl disabled:bg-red-400"
          >
            <Lang>
              <template #zh> 清除 Service Worker </template>
              <template #en> Remove Service Worker </template>
            </Lang>
          </button>
        </Scope>
      </div>
    </div>
  </PageLayout>
</template>
