<script setup lang="ts">
import { useTheme } from "../hooks/useTheme"

const theme = useTheme()
</script>

<template>
  <div>
    <slot>Loading...</slot>
  </div>
</template>
