<script setup lang="ts">
import { useGlobalLang } from '../../reactives/useGlobalLang'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import { callWithConfirm } from '../../utils/callWithConfirm'
import { ModeKind, modeKindTranslate } from './mode'
import { State } from './State'
import { stateChangeMode } from './stateChangeMode'

defineProps<{ state: State; kind: ModeKind }>()

const theme = useGlobalTheme()
const lang = useGlobalLang()
</script>

<template>
  <button
    :disabled="state.mode.kind === kind"
    class="border-2 py-1 px-2"
    :class="[
      state.classes.transition,
      state.mode.kind === kind
        ? `border-${theme.name}-400 bg-${theme.name}-600 text-${theme.name}-200`
        : `border-${theme.name}-500 bg-${theme.name}-500 text-${theme.name}-300`,
    ]"
    @click="
      () => {
        callWithConfirm(() => stateChangeMode(state, kind), {
          when: state.timer.isStarted && !state.timer.isFinished,
          message: lang.isZh()
            ? [
                `「${modeKindTranslate(
                  state.mode.kind,
                )}」模式的计时器已经开始，`,
                `确定要切换到「${modeKindTranslate(kind)}」模式吗？`,
              ].join('\n')
            : [
                `A timer has been started in ${modeKindTranslate(
                  state.mode.kind,
                )} mode,`,
                `are you sure to change to ${modeKindTranslate(kind)} mode?`,
              ].join('\n'),
        })
      }
    "
  >
    {{ modeKindTranslate(kind) }}
  </button>
</template>
