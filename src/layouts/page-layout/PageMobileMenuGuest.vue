<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'

const theme = useGlobalTheme()
const auth = useGlobalAuth()
</script>

<template>
  <Menu as="div" class="relative flex text-3xl">
    <MenuButton>
      <Bars3Icon class="h-5 w-5" />
    </MenuButton>

    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="transform opacity-0 translate-x-6 rotate-45"
      enter-to-class="transform opacity-100 rotate-0"
      leave-active-class="transition duration-300"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0 translate-x-6"
    >
      <MenuItems
        class="fixed right-0 top-0 flex h-screen w-screen flex-col justify-center border-4 px-6 pb-20"
        :class="[`bg-${theme.name}-400 border-${theme.name}-300`]"
      >
        <div class="fixed right-4 top-4">
          <MenuItem v-slot="{ active }">
            <XMarkIcon
              class="h-10 w-10 text-right"
              :class="[
                active && `border-4 border-${theme.name}-200`,
                active && `text-${theme.name}-200`,
              ]"
            />
          </MenuItem>
        </div>

        <div class="space-y-2">
          <MenuItem as="div" v-slot="{ active }">
            <Hyperlink
              href="/register"
              class="font-semibold"
              :class="[
                active && 'underline decoration-6',
                active && `text-${theme.name}-200`,
              ]"
            >
              <Lang>
                <template #zh> 注册 </template>
                <template #en> Register </template>
              </Lang>
            </Hyperlink>
          </MenuItem>

          <MenuItem as="div" v-slot="{ active }">
            <Hyperlink
              href="/login"
              class="font-semibold"
              :class="[
                active && 'underline decoration-6',
                active && `text-${theme.name}-200`,
              ]"
            >
              <Lang>
                <template #zh> 登录 </template>
                <template #en> Login </template>
              </Lang>
            </Hyperlink>
          </MenuItem>
        </div>
      </MenuItems>
    </Transition>
  </Menu>
</template>
