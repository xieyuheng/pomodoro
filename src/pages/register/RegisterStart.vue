<script setup lang="ts">
import FormButton from "../../components/form/FormButton.vue"
import FormInput from "../../components/form/FormInput.vue"
import Hyperlink from "../../components/Hyperlink.vue"
import Lang from "../../components/Lang.vue"
import { useForm } from "../../reactives/useForm"
import { RegisterState as State } from "./RegisterState"

const { state } = defineProps<{ state: State }>()

const form = useForm({ username: "", name: "", email: "" })
</script>

<template>
  <form
    @submit.prevent="
      (event) =>
        form.postByEvent(event, state.links.register, {
          then: (result) => state.verify(result),
        })
    "
    class="flex w-full flex-col space-y-2 text-xl sm:w-auto"
  >
    <Lang class="font-logo text-3xl font-semibold">
      <template #zh>注册</template>
      <template #en>Register</template>
    </Lang>

    <FormInput name="username" required>
      <template #label>
        <Lang>
          <template #zh>用户名</template>
          <template #en>Username</template>
        </Lang>
      </template>
    </FormInput>

    <div v-if="form.invalid?.username">
      <Lang class="py-1 text-base font-bold text-yellow-300">
        <template #zh>{{ form.invalid.username.zh }}</template>
        <template #en>{{ form.invalid.username.en }}</template>
      </Lang>
    </div>

    <FormInput name="name" required>
      <template #label>
        <Lang>
          <template #zh>名字</template>
          <template #en>Name</template>
        </Lang>
      </template>
    </FormInput>

    <FormInput name="email" type="email" required>
      <template #label>
        <Lang>
          <template #zh>电子邮箱</template>
          <template #en>Email</template>
        </Lang>
      </template>
    </FormInput>

    <div v-if="form.invalid?.email">
      <Lang class="py-1 text-base font-bold text-yellow-300">
        <template #zh>{{ form.invalid.email.zh }}</template>
        <template #en>{{ form.invalid.email.en }}</template>
      </Lang>
    </div>

    <div class="flex flex-col justify-center py-4">
      <hr class="border-t border-white" />
    </div>

    <FormButton :disabled="form.processing">
      <Lang>
        <template #zh>注册</template>
        <template #en>Register</template>
      </Lang>
    </FormButton>

    <div class="flex justify-end">
      <Lang class="text-xl">
        <template #zh>
          已注册？
          <Hyperlink href="/login" class="underline"> 登录 </Hyperlink>
        </template>
        <template #en>
          Already Registered?
          <Hyperlink href="/login" class="underline"> Login </Hyperlink>
          .
        </template>
      </Lang>
    </div>
  </form>
</template>
