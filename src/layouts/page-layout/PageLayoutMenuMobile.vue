<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue"
import { MenuIcon, XIcon } from "@heroicons/vue/outline/index.js"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <Menu as="div" class="relative flex text-3xl">
    <MenuButton>
      <MenuIcon class="h-5 w-5" />
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
        class="flex flex-col pb-20 justify-center fixed top-0 right-0 h-screen w-screen border-4 px-6"
        :class="[`bg-${state.theme.name}-400 border-${state.theme.name}-300`]"
      >
        <div class="fixed top-4 right-4">
          <MenuItem v-slot="{ active }">
            <XIcon
              class="h-10 w-10 text-right"
              :class="[
                active && `border-4 border-${state.theme.name}-200`,
                active && `text-${state.theme.name}-200`,
              ]"
            />
          </MenuItem>
        </div>

        <div v-if="state.auth.user" class="space-y-2">
          <div class="space-y-1">
            <Lang>
              <template #zh>专注者</template>
              <template #en>Logged in as</template>
            </Lang>
            <div class="font-semibold">{{ state.auth.user.name }}</div>
            <div class="text-xl font-semibold">
              @{{ state.auth.user.username }}
            </div>
          </div>

          <div class="py-2 flex flex-col justify-center">
            <div class="border-b border-white"></div>
          </div>

          <MenuItem v-slot="{ active }">
            <button
              @click="state.auth.logout()"
              class="font-semibold"
              :class="[
                active && 'underline decoration-6',
                active && `text-${state.theme.name}-200`,
              ]"
            >
              <Lang>
                <template #zh>退出</template>
                <template #en>Logout</template>
              </Lang>
            </button>
          </MenuItem>
        </div>

        <div v-else class="space-y-2">
          <MenuItem as="div" v-slot="{ active }">
            <Link
              href="/register"
              class="font-semibold"
              :class="[
                active && 'underline decoration-6',
                active && `text-${state.theme.name}-200`,
              ]"
            >
              <Lang>
                <template #zh>注册</template>
                <template #en>Register</template>
              </Lang>
            </Link>
          </MenuItem>

          <MenuItem as="div" v-slot="{ active }">
            <Link
              href="/login"
              class="font-semibold"
              :class="[
                active && 'underline decoration-6',
                active && `text-${state.theme.name}-200`,
              ]"
            >
              <Lang>
                <template #zh>登录</template>
                <template #en>Login</template>
              </Lang>
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Transition>
  </Menu>
</template>
