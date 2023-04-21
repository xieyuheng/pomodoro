<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { ArrowsUpDownIcon, CheckIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import { langTagName, useGlobalLang } from '../../reactives/useGlobalLang'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'

const theme = useGlobalTheme()
const lang = useGlobalLang()
</script>

<template>
  <Listbox as="div" class="relative flex text-xl" v-model="lang.tag">
    <ListboxButton class="flex items-center">
      <Lang>
        <template #zh>语言</template>
        <template #en>Lang</template>
      </Lang>

      <ArrowsUpDownIcon class="h-5 w-5" />
    </ListboxButton>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <ListboxOptions
        class="absolute right-0 top-8 min-w-max border-2"
        :class="[`bg-${theme.name}-400 border-${theme.name}-300`]"
      >
        <ListboxOption
          v-slot="{ active, selected }"
          v-for="tag of lang.knownTags"
          :key="tag"
          :value="tag"
        >
          <div
            class="flex min-w-max items-center p-2"
            :class="[active && `bg-${theme.name}-500`]"
          >
            {{ langTagName(tag) }}
            <CheckIcon v-if="selected" class="ml-2 h-5 w-5" />
          </div>
        </ListboxOption>
      </ListboxOptions>
    </Transition>
  </Listbox>
</template>
