<script setup lang="ts">
import { formSubmit, useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormInput from '../../components/form/FormInput.vue'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'

const form = useForm({
  username: '',
  name: '',
  password: '',
})

async function submit(event: Event) {
  const { url } = useGlobalBackend()

  formSubmit(form, event, async () => {
    const response = await fetch(
      `${url}/users/${form.values.username}?kind=password-sign-up`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            username: form.values.username,
            name: form.values.name,
          },
          options: {
            memo: 'SignUp',
            password: form.values.password,
          },
        }),
      },
    )

    if (response.ok) {
      const created = await response.json()
    } else {
      //
    }
  })
}
</script>

<template>
  <PageLayout>
    <div class="mt-4 flex h-full flex-col items-center md:mt-10">
      <form
        @submit.prevent="submit"
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
  </PageLayout>
</template>
