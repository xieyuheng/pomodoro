<script setup lang="ts">
import { useGlobalTheme } from '../../reactives/useGlobalTheme'

const theme = useGlobalTheme()

defineProps<{
  name: string
  type?: string
  required?: boolean
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="py-2 font-sans">
      <slot name="label"></slot>
    </label>

    <input
      :id="name"
      :name="name"
      class="w-full rounded-sm border-2 p-3 font-bold"
      :class="[`border-${theme.name}-200 text-${theme.name}-900`]"
      :type="type || 'text'"
      :maxlength="32"
      :spellcheck="false"
      :required="required"
      v-bind="$attrs"
    />

    <slot name="footer"></slot>
  </div>
</template>
