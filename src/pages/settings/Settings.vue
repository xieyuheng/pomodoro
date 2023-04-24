<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import Scope from '../../components/utils/Scope.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { hasServiceWorker } from '../../utils/pwa/hasServiceWorker'
import { removeServiceWorker } from '../../utils/pwa/removeServiceWorker'

const disabledRemoveServiceWorkerButton = ref(false)

onMounted(async () => {
  disabledRemoveServiceWorkerButton.value = !(await hasServiceWorker())
})
</script>

<template>
  <PageLayout>
    <div class="mt-4 flex h-full flex-col items-center md:mt-10">
      <div class="flex flex-col space-y-4">
        <Lang class="font-logo text-3xl font-semibold">
          <template #zh>设置</template>
          <template #en>Settings</template>
        </Lang>
        <Scope :scope="{ disabled: false }" v-slot="{ scope }">
          <button
            @click="
              () => {
                removeServiceWorker()
                disabledRemoveServiceWorkerButton = true
              }
            "
            :disabled="disabledRemoveServiceWorkerButton"
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
