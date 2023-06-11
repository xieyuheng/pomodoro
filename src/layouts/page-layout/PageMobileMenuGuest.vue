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
      enterActiveClass="transition duration-300"
      enterFromClass="transform opacity-0 translate-x-6 rotate-45"
      enterToClass="transform opacity-100 rotate-0"
      leaveActiveClass="transition duration-300"
      leaveFromClass="transform opacity-100"
      leaveToClass="transform opacity-0 translate-x-6"
    >
      <MenuItems
        class="h-screen-dynamic fixed right-0 top-0 flex w-screen flex-col justify-center border-4 px-6 pb-20"
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
