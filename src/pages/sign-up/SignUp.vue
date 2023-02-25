<script setup lang="ts">
import { reactive } from 'vue'
import { formSubmit, useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormInput from '../../components/form/FormInput.vue'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { signIn } from '../../reactives/signIn'
import { signUp } from '../../reactives/signUp'

const form = useForm({
  username: '',
  name: '',
  password: '',
})

const report = reactive({
  errorMessage: '',
})
</script>

<template>
  <PageLayout>
    <div class="mt-4 flex h-full flex-col items-center md:mt-10">
      <form
        @submit.prevent="
          formSubmit(form, $event, async () => {
            await signUp(form.values, report)
            if (report.errorMessage) return
            await signIn(form.values, report)
            if (report.errorMessage) return
            $router.replace({ path: `/` })
          })
        "
        class="flex w-auto flex-col space-y-2 text-xl md:w-[24rem]"
      >
        <Lang class="font-logo text-3xl font-semibold">
          <template #zh>注册</template>
          <template #en>Sign up</template>
        </Lang>

        <FormInput name="username" autocomplete="username" required>
          <template #label>
            <Lang>
              <template #zh>用户名</template>
              <template #en>Username</template>
            </Lang>
          </template>
        </FormInput>

        <FormInput name="name" autocomplete="username" required>
          <template #label>
            <Lang>
              <template #zh>名字</template>
              <template #en>Name</template>
            </Lang>
          </template>
        </FormInput>

        <FormInput
          name="password"
          type="password"
          autocomplete="new-password"
          required
        >
          <template #label>
            <Lang>
              <template #zh>密码</template>
              <template #en>Password</template>
            </Lang>
          </template>
        </FormInput>

        <div v-if="report.errorMessage">
          <div class="mt-3 border-2 border-red-300 p-2 text-base">
            {{ report.errorMessage }}
          </div>
        </div>

        <div class="flex flex-col justify-center py-3">
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
              <Hyperlink href="/sign-in" class="underline"> Sign in</Hyperlink>
            </template>
          </Lang>
        </div>
      </form>
    </div>
  </PageLayout>
</template>
