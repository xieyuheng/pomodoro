import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Pomodoro from './pomodoro/Pomodoro.vue'
import SignIn from './sign-in/SignIn.vue'
import SignInEmailConfirmationSuccessPage from './sign-in/SignInEmailConfirmationSuccessPage.vue'
import SignUp from './sign-up/SignUp.vue'
import SignUpEmailConfirmationSuccessPage from './sign-up/SignUpEmailConfirmationSuccessPage.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Pomodoro },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
  {
    path: '/notifications/sign-in-email-confirmation-success',
    component: SignInEmailConfirmationSuccessPage,
  },
  {
    path: '/notifications/sign-up-email-confirmation-success',
    component: SignUpEmailConfirmationSuccessPage,
  },
  { path: '/:slugs(.*)*', component: PageNotFound },
]
