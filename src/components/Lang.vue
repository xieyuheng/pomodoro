<script setup lang="ts">
import { useLang } from "../composables/useLang"

const lang = useLang()
</script>

<template>
  <div>
    <div v-show="lang.zh">
      <slot name="zh"></slot>
    </div>

    <div v-show="lang.en">
      <slot name="en"></slot>
    </div>
  </div>
</template>
