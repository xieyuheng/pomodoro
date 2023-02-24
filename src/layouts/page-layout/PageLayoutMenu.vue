<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import { PageLayoutState as State } from './PageLayoutState'

defineProps<{ state: State }>()
</script>

<template>
  <Menu as="div" class="relative flex text-xl">
    <MenuButton>
      <Bars3Icon class="h-5 w-5" />
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
        class="absolute top-8 right-0 w-52 min-w-max border-2"
        :class="[`bg-${state.theme.name}-400 border-${state.theme.name}-300`]"
      >
        <div v-if="state.auth.user">
          <div class="flex w-full flex-col px-4 py-2">
            <Lang>
              <template #zh>专注者</template>
              <template #en>Logged in as</template>
            </Lang>
            <div class="font-semibold">{{ state.auth.user.name }}</div>
            <div class="text-lg font-semibold">
              @{{ state.auth.user.username }}
            </div>
          </div>

          <hr />

          <MenuItem v-slot="{ active }">
            <button
              class="flex w-full px-4 py-2"
              :class="[active && `bg-${state.theme.name}-500`]"
              @click="state.auth.logout()"
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
