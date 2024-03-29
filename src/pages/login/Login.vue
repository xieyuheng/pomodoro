<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { formSubmit, useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { loginByPassword } from '../../reactives/loginByPassword'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'

const router = useRouter()
const auth = useGlobalAuth()
const theme = useGlobalTheme()
const lang = useGlobalLang()

const form = useForm({
  username: '',
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
    <div class="mt-4 flex h-full flex-col items-center sm:mt-10">
      <form
        class="flex w-auto flex-col space-y-2 text-xl sm:w-[24rem]"
        @submit.prevent="
          formSubmit(form, $event, async () => {
            await loginByPassword(form.values, report)
            if (report.errorMessage) return

            $router.replace({ path: `/` })
          })
        "
      >
        <Lang class="font-logo text-3xl font-semibold">
          <template #zh>登录</template>
          <template #en>Login</template>
        </Lang>

        <FormInput name="username" autocomplete="username" required>
          <template #label>
            <Lang>
              <template #zh>用户名</template>
              <template #en>Username</template>
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

        <div class="flex flex-col justify-center py-4">
          <hr class="border-t border-white" />
        </div>

        <FormButton :disabled="form.processing">
          <Lang>
            <template #zh>登录</template>
            <template #en>Login</template>
          </Lang>
        </FormButton>

        <div class="flex justify-end">
          <div class="text-xl">
            <Lang>
              <template #zh>
                尚未
                <Hyperlink href="/register" class="underline"> 注册 </Hyperlink
                >？
              </template>
              <template #en>
                Not yet
                <Hyperlink href="/register" class="underline">
                  registered
                </Hyperlink>
                ?
              </template>
            </Lang>
          </div>
        </div>
      </form>
    </div>
  </PageLayout>
</template>
