<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import Hyperlink from '../../components/Hyperlink.vue'
import { formSubmit, useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { loginByPassword } from '../../reactives/loginByPassword'
import { register } from '../../reactives/register'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'

const router = useRouter()
const auth = useGlobalAuth()

const form = useForm({
  username: '',
  name: '',
  password: '',
})

const report = reactive({
  errorMessage: '',
})

watch(
  () => auth.user,
  (value) => {
    if (value !== undefined) {
      router.replace({ path: '/' })
    }
  },
  { immediate: true },
)
</script>

<template>
  <PageLayout>
    <div class="mt-4 flex h-full flex-col items-center md:mt-10">
      <form
        class="flex w-auto flex-col space-y-2 text-xl md:w-[24rem]"
        @submit.prevent="
          formSubmit(form, $event, async () => {
            await register(form.values, report)
            if (report.errorMessage) return

            await loginByPassword(form.values, report)
            if (report.errorMessage) return

            $router.replace({ path: `/` })
          })
        "
      >
        <Lang class="font-logo text-3xl font-semibold">
          <template #zh>注册</template>
          <template #en>Register</template>
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
              Already registered?
              <Hyperlink href="/login" class="underline"> Login</Hyperlink>
            </template>
          </Lang>
        </div>
      </form>
    </div>
  </PageLayout>
</template>
