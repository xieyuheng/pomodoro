<script setup lang="ts">
import { callWithConfirm } from '../../utils/callWithConfirm'
import { ModeKind } from './models/Mode'
import { State } from './State'

defineProps<{ state: State; kind: ModeKind }>()
</script>

<template>
  <button
    :disabled="state.mode.kind === kind"
    class="border-2 py-1 px-2"
    :class="[
      state.classes.transition,
      state.mode.kind === kind
        ? `border-${state.theme.name}-400 bg-${state.theme.name}-600 text-${state.theme.name}-200`
        : `border-${state.theme.name}-500 bg-${state.theme.name}-500 text-${state.theme.name}-300`,
    ]"
    @click="
      () => {
        callWithConfirm(() => state.changeMode(kind), {
          when: state.timer.isStarted && !state.timer.isFinished,
          message: state.lang.isZh()
            ? [
                `「${state.translateKind(
                  state.mode.kind,
                )}」模式的计时器已经开始，`,
                `确定要切换到「${state.translateKind(kind)}」模式吗？`,
              ].join('\n')
            : [
                `A timer has been started in ${state.translateKind(
                  state.mode.kind,
                )} mode,`,
                `are you sure to change to ${state.translateKind(kind)} mode?`,
              ].join('\n'),
        })
      }
    "
  >
    {{ state.translateKind(kind) }}
  </button>
</template>
