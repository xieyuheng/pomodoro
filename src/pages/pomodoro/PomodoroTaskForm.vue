<script setup lang="ts">
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import { State } from './State'

const lang = useGlobalLang()
const theme = useGlobalTheme()

const props = defineProps<{
  state: State
  modelValue?: string
  options: {
    placeholder?: string
    onDelete?: () => void
    onCancel?: () => void
    onSave?: () => void
  }
}>()

const { placeholder, onDelete, onCancel, onSave } = props.options
</script>

<template>
  <div>
    <input
      autofocus
      class="flex w-full flex-col border-b-2 bg-inherit p-3 focus:outline-none focus:ring"
      :class="[
        'transition-tender',
        `border-${theme.name}-200 text-${theme.name}-900 focus:ring-${theme.name}-200`,
        `placeholder-${theme.name}-400`,
      ]"
      type="text"
      :value="modelValue"
      :modelValue="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :placeholder="placeholder"
      @keydown.enter="
        () => {
          if (onSave) onSave()
        }
      "
    />

    <div class="flex justify-end space-x-2 pt-4">
      <button
        v-if="onDelete"
        class="border-2 px-2 py-1 text-lg font-semibold md:text-xl"
        :class="[
          'transition-tender',
          `border-${theme.name}-300 bg-${theme.name}-200 text-${theme.name}-600`,
        ]"
        @click="onDelete"
      >
        {{ lang.isZh() ? '删除' : 'DELETE' }}
      </button>

      <button
        v-if="onCancel"
        class="border-2 px-2 py-1 text-lg font-semibold md:text-xl"
        :class="[
          'transition-tender',
          `border-${theme.name}-300 bg-${theme.name}-200 text-${theme.name}-600`,
        ]"
        @click="onCancel"
      >
        {{ lang.isZh() ? '取消' : 'CANCEL' }}
      </button>

      <button
        v-if="onSave"
        class="border-2 px-2 py-1 text-lg font-semibold md:text-xl"
        :class="[
          'transition-tender',
          `border-${theme.name}-300 bg-${theme.name}-200 text-${theme.name}-600`,
        ]"
        @click="onSave"
      >
        {{ lang.isZh() ? '保存' : 'SAVE' }}
      </button>
    </div>
  </div>
</template>
