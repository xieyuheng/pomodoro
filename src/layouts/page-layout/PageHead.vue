<script setup lang="ts">
import { WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/Hyperlink.vue'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import PageDesktopMenuGuest from './PageDesktopMenuGuest.vue'
import PageDesktopMenuUser from './PageDesktopMenuUser.vue'
import PageLang from './PageLang.vue'
import PageLogo from './PageLogo.vue'
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
    <div class="mr-3 flex items-baseline space-x-3">
      <PageLogo />
      <PageLang />
    </div>

    <div class="flex items-center space-x-3">
      <div class="hidden md:block">
        <PageDesktopMenuUser v-if="auth.user" />
        <PageDesktopMenuGuest v-else />
      </div>

      <div class="block md:hidden">
        <PageMobileMenuUser v-if="auth.user" :user="auth.user" />
        <PageMobileMenuGuest v-else />
      </div>

      <Hyperlink href="/settings">
        <button class="flex items-center">
          <WrenchScrewdriverIcon class="h-5 w-5" />
        </button>
      </Hyperlink>
    </div>
  </div>
</template>
