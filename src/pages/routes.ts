import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Pomodoro from './pomodoro/Pomodoro.vue'
import SignIn from './sign-in/SignIn.vue'
import SignUp from './sign-up/SignUp.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Pomodoro },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
  { path: '/:slugs(.*)*', component: PageNotFound },
]
