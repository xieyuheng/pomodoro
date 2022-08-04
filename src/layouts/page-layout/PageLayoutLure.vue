<script setup lang="ts">
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex space-x-1 text-xl font-semibold">
    <Link href="/register" class="hover:underline">
      <Lang>
        <template #zh>注册</template>
        <template #en>Register</template>
      </Lang>
    </Link>
    <div>/</div>

    <Link href="/login" class="hover:underline">
      <Lang>
        <template #zh>登录</template>
        <template #en>Login</template>
      </Lang>
    </Link>
  </div>
</template>
