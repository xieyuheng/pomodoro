<script setup lang="ts">
import { CogIcon } from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/Hyperlink.vue'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import PageLang from './PageLang.vue'
import PageLogo from './PageLogo.vue'
import PageLure from './PageLure.vue'
import PageMenu from './PageMenu.vue'
import PageMobileMenuGuest from './PageMobileMenuGuest.vue'
import PageMobileMenuUser from './PageMobileMenuUser.vue'

const theme = useGlobalTheme()
const auth = useGlobalAuth()
</script>

<template>
  <div
    class="flex w-full items-center border-b px-4 pb-2 pt-3 md:py-4"
    :class="[
      'justify-between',
      'transition-tender',
      `border-${theme.name}-500`,
    ]"
  >
    <div class="mr-3">
      <PageLogo />
    </div>

    <div class="flex items-center space-x-2">
      <PageLang />

      <div class="hidden md:block">
        <PageMenu v-if="auth.user" />
        <PageLure v-else />
      </div>

      <div class="block md:hidden">
        <PageMobileMenuUser v-if="auth.user" :user="auth.user" />
        <PageMobileMenuGuest v-else />
      </div>

      <Hyperlink href="/settings">
        <button class="flex items-center"><CogIcon class="h-5 w-5" /></button>
      </Hyperlink>
    </div>
  </div>
</template>
