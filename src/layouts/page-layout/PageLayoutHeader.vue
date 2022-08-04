<script setup lang="ts">
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex w-full items-center border-b px-4 pt-3 pb-2 md:py-4"
    :class="[
      'justify-between',
      state.classes.transition,
      `border-${state.theme.name}-500`,
    ]"
  >
    <div class="mr-3">
      <PageLayoutLogo :state="state" />
    </div>

    <div class="flex items-center space-x-2">
      <PageLayoutLang :state="state" />
      <div class="hidden md:block">
        <PageLayoutMenu v-show="state.auth.user" :state="state" />
        <PageLayoutLure v-show="!state.auth.user" :state="state" />
      </div>

      <div class="block md:hidden">
        <PageLayoutMenuMobile :state="state" />
      </div>
    </div>
  </div>
</template>
