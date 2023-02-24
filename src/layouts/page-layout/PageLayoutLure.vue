<script setup lang="ts">
import Hyperlink from "../../components/Hyperlink.vue"
import Lang from "../../components/Lang.vue"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex space-x-1 text-xl font-semibold">
    <Hyperlink href="/register" class="hover:underline">
      <Lang>
        <template #zh>注册</template>
        <template #en>Register</template>
      </Lang>
    </Hyperlink>
    <div>/</div>

    <Hyperlink href="/login" class="hover:underline">
      <Lang>
        <template #zh>登录</template>
        <template #en>Login</template>
      </Lang>
    </Hyperlink>
  </div>
</template>
