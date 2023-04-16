import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Login from './login/Login.vue'
import Pomodoro from './pomodoro/Pomodoro.vue'
import Register from './register/Register.vue'
import Settings from './settings/Settings.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Pomodoro },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/settings', component: Settings },
  { path: '/:slugs(.*)*', component: PageNotFound },
]
