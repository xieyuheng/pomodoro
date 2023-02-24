<script setup lang="ts">
import {
  ArrowRightCircleIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/vue/24/outline'
import { useForm } from '../../components/form/useForm'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import { State } from './State'

const { state } = defineProps<{ state: State }>()

const theme = useGlobalTheme()
const lang = useGlobalLang()

const form = useForm({ email: '' })
</script>

<template>
  <form
    @submit.prevent="
      form.post(state.links['sign-in'], {
        then: (result) => state.verify(result),
      })
    "
    class="flex w-full flex-col space-y-2 pt-20 text-xl sm:w-auto"
  >
    <div class="flex flex-col pb-2">
      <div class="flex items-baseline justify-between">
        <div class="font-logo text-3xl font-semibold">
          <Lang>
            <template #zh> 登录 </template>
            <template #en> Sign in </template>
          </Lang>
        </div>

        <div class="text-xl">
          <Lang>
            <template #zh>
              尚未<Hyperlink href="/sign-up" class="underline">注册</Hyperlink
              >？
            </template>
            <template #en>
              Not
              <Hyperlink href="/sign-up" class="underline">signed up</Hyperlink>
              yet?
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
            `text-${theme.name}-700`,
            `border-${theme.name}-600`,
            `placeholder-${theme.name}-800`,
          ]"
          type="email"
          maxlength="100"
          :placeholder="lang.isZh() ? '电子邮箱' : 'Email'"
          spellcheck="false"
          required
        />

        <button
          class="pl-2"
          :class="[
            form.processing
              ? `text-${theme.name}-300`
              : `text-${theme.name}-100`,
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
        <Lang class="py-1 text-base font-bold text-yellow-300">
          <template #zh>这个邮箱不对</template>
          <template #en>Invalid email.</template>
        </Lang>
      </div>
    </div>
  </form>
</template>
