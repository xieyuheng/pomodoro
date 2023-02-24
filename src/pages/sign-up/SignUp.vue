<script setup lang="ts">
import FormButton from '../../components/form/FormButton.vue'
import FormInput from '../../components/form/FormInput.vue'
import { useForm } from '../../components/form/useForm'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'

const form = useForm({
  username: '',
  name: '',
  password: '',
})
</script>

<template>
  <div class="mt-4 flex h-full flex-col items-center md:mt-10">
    <form
      @submit.prevent="
        () => {
          // TODO
        }
      "
      class="flex w-full flex-col space-y-2 text-xl sm:w-auto"
    >
      <Lang class="font-logo text-3xl font-semibold">
        <template #zh>注册</template>
        <template #en>Sign up</template>
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

      <FormInput name="password" type="password" required>
        <template #label>
          <Lang>
            <template #zh>密码</template>
            <template #en>Password</template>
          </Lang>
        </template>
      </FormInput>

      <div v-if="form.invalid?.password">
        <Lang class="py-1 text-base font-bold text-yellow-300">
          <template #zh>{{ form.invalid.password.zh }}</template>
          <template #en>{{ form.invalid.password.en }}</template>
        </Lang>
      </div>

      <div class="flex flex-col justify-center py-4">
        <hr class="border-t border-white" />
      </div>

      <FormButton :disabled="form.processing">
        <Lang>
          <template #zh>注册</template>
          <template #en>Sign up</template>
        </Lang>
      </FormButton>

      <div class="flex justify-end">
        <Lang class="text-xl">
          <template #zh>
            已注册？
            <Hyperlink href="/sign-in" class="underline"> 登录 </Hyperlink>
          </template>
          <template #en>
            Already signed up?
            <Hyperlink href="/sign-in" class="underline"> Sign in </Hyperlink>
            .
          </template>
        </Lang>
      </div>
    </form>
  </div>
</template>
