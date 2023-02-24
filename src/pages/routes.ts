import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Pomodoro from './pomodoro/Pomodoro.vue'
import Register from './register/Register.vue'
import RegisterEmailConfirmationSuccessPage from './register/RegisterEmailConfirmationSuccessPage.vue'
import SignIn from './sign-in/SignIn.vue'
import SignInEmailConfirmationSuccessPage from './sign-in/SignInEmailConfirmationSuccessPage.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Pomodoro },
  { path: '/sign-in', component: SignIn },
  { path: '/register', component: Register },
  {
    path: '/notifications/sign-in-email-confirmation-success',
    component: SignInEmailConfirmationSuccessPage,
  },
  {
    path: '/notifications/register-email-confirmation-success',
    component: RegisterEmailConfirmationSuccessPage,
  },
  { path: '/:slugs(.*)*', component: PageNotFound },
]
