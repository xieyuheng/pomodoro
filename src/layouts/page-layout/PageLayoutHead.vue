<script setup lang="ts">
import { useAuth } from '../../reactives/useAuth'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import PageLayoutLang from './PageLayoutLang.vue'
import PageLayoutLogo from './PageLayoutLogo.vue'
import PageLayoutLure from './PageLayoutLure.vue'
import PageLayoutMenu from './PageLayoutMenu.vue'
import PageLayoutMenuMobile from './PageLayoutMenuMobile.vue'

const theme = useGlobalTheme()
const auth = useAuth()
</script>

<template>
  <div
    class="flex w-full items-center border-b px-4 pt-3 pb-2 md:py-4"
    :class="[
      'justify-between',
      'transition-tender',
      `border-${theme.name}-500`,
    ]"
  >
    <div class="mr-3">
      <PageLayoutLogo />
    </div>

    <div class="flex items-center space-x-2">
      <PageLayoutLang />
      <div class="hidden md:block">
        <PageLayoutMenu v-show="auth.user" />
        <PageLayoutLure v-show="!auth.user" />
      </div>

      <div class="block md:hidden">
        <PageLayoutMenuMobile />
      </div>
    </div>
  </div>
</template>
