<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'

const auth = useGlobalAuth()
</script>

<template>
  <div class="flex space-x-1 text-xl">
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
