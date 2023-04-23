<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { UserCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { basename } from 'path-browserify'
import Lang from '../../components/lang/Lang.vue'
import { User } from '../../models/User'
import { logout } from '../../reactives/logout'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'

defineProps<{ user: User }>()

const theme = useGlobalTheme()
const auth = useGlobalAuth()
</script>

<template>
  <Menu as="div" class="relative flex text-3xl">
    <MenuButton>
      <UserCircleIcon class="h-5 w-5" />
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
          <div class="space-y-1">
            <Lang>
              <template #zh>专注者</template>
              <template #en>Logged in as</template>
            </Lang>
            <div class="font-semibold">{{ user.name }}</div>
            <div class="text-xl font-semibold">
              @{{ basename(user['@path']) }}
            </div>
          </div>

          <div class="flex flex-col justify-center py-2">
            <div class="border-b border-white"></div>
          </div>

          <MenuItem v-slot="{ active }">
            <button
              @click="logout()"
              class="font-semibold"
              :class="[
                active && 'underline decoration-6',
                active && `text-${theme.name}-200`,
              ]"
            >
              <Lang>
                <template #zh> 退出 </template>
                <template #en> Logout </template>
              </Lang>
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Transition>
  </Menu>
</template>