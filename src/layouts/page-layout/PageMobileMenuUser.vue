<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { UserCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { basename } from 'path-browserify'
import Lang from '../../components/lang/Lang.vue'
import { User } from '../../models/User'
import { logout } from '../../reactives/logout'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'

defineProps<{ user: User }>()

const theme = useGlobalTheme()
</script>

<template>
  <Menu as="div" class="relative flex text-3xl">
    <MenuButton>
      <UserCircleIcon class="h-5 w-5" />
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
