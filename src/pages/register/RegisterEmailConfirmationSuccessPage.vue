<script setup lang="ts">
import { Head } from "@vueuse/head"
import Lang from "../../components/Lang.vue"
import { useLang } from "../../reactives/useLang"

const lang = useLang()
</script>

<template>
  <div
    class="my-20 mx-auto flex h-full max-w-md flex-col justify-center text-center"
  >
    <Head>
      <title v-if="lang.zh">邮件注册确认 · 成功 | 只读</title>
      <title v-else>Register Email Confirmation Success | Readonly</title>
    </Head>

    <Lang>
      <template #zh>
        <div class="flex h-full flex-col items-center justify-center">
          <h1 class="py-4 text-xl font-bold">邮件注册确认 · 成功</h1>
          <p class="p-1 text-lg">您已经处于登录状态啦！</p>
          <p class="p-1 text-lg">您可以关掉这个页面，然后回到原注册页面。</p>
          <p class="p-3 text-lg font-bold">(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</p>
        </div>
      </template>
      <template #en>
        <div class="flex h-full flex-col items-center justify-center">
          <h1 class="py-4 text-xl font-bold">
            Register Email Confirmation Success
          </h1>
          <p class="p-1 text-lg">The story begins ~</p>
          <p class="p-1 text-lg">
            You may close this page, and go back to the original registering
            page.
          </p>
          <p class="p-3 text-lg font-bold">(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</p>
        </div>
      </template>
    </Lang>
  </div>
</template>
