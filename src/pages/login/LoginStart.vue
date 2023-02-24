<script setup lang="ts">
import {
  ArrowRightCircleIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/vue/24/outline"
import Lang from "../../components/Lang.vue"
import Link from "../../components/Link.vue"
import { useForm } from "../../hooks/useForm"
import { LoginState as State } from "./LoginState"

const { state } = defineProps<{ state: State }>()

const form = useForm({ email: "" })
</script>

<template>
  <form
    @submit.prevent="
      form.post(state.links.login, {
        then: (result) => state.verify(result),
      })
    "
    class="flex w-full flex-col pt-20 space-y-2 text-xl sm:w-auto"
  >
    <div class="flex flex-col pb-2">
      <div class="flex items-baseline justify-between">
        <div class="font-logo text-3xl font-semibold">
          <Lang>
            <template #zh> 登录 </template>
            <template #en> Login </template>
          </Lang>
        </div>

        <div class="text-xl">
          <Lang>
            <template #zh>
              尚未<Link href="/register" class="underline">注册</Link>？
            </template>
            <template #en>
              Not yet
              <Link href="/register" class="underline">Registered</Link>?
            </template>
          </Lang>
        </div>
      </div>
    </div>

    <div class="flex flex-col">
      <div class="flex">
        <input
          v-model.trim="form.values.email"
          id="email"
          name="email"
          autocomplete="email"
          class="w-full rounded-sm border px-3 py-4 font-bold placeholder-opacity-60"
          :class="[
            `text-${state.theme.name}-700`,
            `border-${state.theme.name}-600`,
            `placeholder-${state.theme.name}-800`,
          ]"
          type="email"
          maxlength="100"
          :placeholder="state.lang.zh ? '电子邮箱' : 'Email'"
          spellcheck="false"
          required
        />

        <button
          class="pl-2"
          :class="[
            form.processing
              ? `text-${state.theme.name}-300`
              : `text-${state.theme.name}-100`,
          ]"
          type="submit"
          :disabled="form.processing"
        >
          <ArrowRightCircleIcon v-if="!form.processing" class="h-8 w-8" />
          <EllipsisHorizontalCircleIcon
            v-if="form.processing"
            class="h-8 w-8"
          />
        </button>
      </div>

      <div v-if="form.response && !form.response.ok" class="mt-1">
        <Lang class="font-bold text-yellow-300 text-base py-1">
          <template #zh>这个邮箱不对</template>
          <template #en>Invalid email.</template>
        </Lang>
      </div>
    </div>
  </form>
</template>
