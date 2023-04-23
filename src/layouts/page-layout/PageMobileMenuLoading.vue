<script setup lang="ts">
import { EllipsisHorizontalCircleIcon } from '@heroicons/vue/24/outline'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'

const auth = useGlobalAuth()
</script>

<template>
  <div class="flex space-x-1 text-xl">
    <EllipsisHorizontalCircleIcon class="h-5 w-5" />
  </div>
</template>
