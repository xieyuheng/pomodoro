<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { UserCircleIcon } from '@heroicons/vue/24/outline'
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
  <Menu as="div" class="relative flex text-xl">
    <MenuButton class="flex items-center space-x-1">
      <span>{{ auth.username }}</span>
      <UserCircleIcon class="h-5 w-5" />
    </MenuButton>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 top-8 w-52 min-w-max border-2"
        :class="[`bg-${theme.name}-400 border-${theme.name}-300`]"
      >
        <div>
          <div class="flex w-full flex-col px-4 py-2">
            <Lang>
              <template #zh>专注者</template>
              <template #en>Logged in as</template>
            </Lang>
            <div class="font-semibold">{{ user.name }}</div>
            <div class="text-lg font-semibold">
              @{{ basename(user['@path']) }}
            </div>
          </div>

          <hr />

          <MenuItem v-slot="{ active }">
            <button
              class="flex w-full px-4 py-2"
              :class="[active && `bg-${theme.name}-500`]"
              @click="logout()"
            >
              <Lang>
                <template #zh>退出</template>
                <template #en>Logout</template>
              </Lang>
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Transition>
  </Menu>
</template>
