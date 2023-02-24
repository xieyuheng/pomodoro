<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
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

    <Hyperlink href="/sign-in" class="hover:underline">
      <Lang>
        <template #zh>登录</template>
        <template #en>SignIn</template>
      </Lang>
    </Hyperlink>
  </div>
</template>
