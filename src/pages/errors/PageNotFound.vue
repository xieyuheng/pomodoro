<script setup lang="ts">
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const route = useRoute()

const { slugs } = route.params

const path = typeof slugs === 'string' ? slugs : slugs.join('/')
</script>

<template>
  <PageLayout class="flex flex-col space-y-2">
    <div class="text-3xl font-semibold">404</div>
    <div class="text-xl">
      <Lang>
        <template #zh>没有这个页面</template>
        <template #en>Page Not Found</template>
      </Lang>
    </div>
    <div class="text-lg">
      <Lang>
        <template #zh>路径：/{{ path }}</template>
        <template #en>Path: /{{ path }}</template>
      </Lang>
    </div>
  </PageLayout>
</template>
