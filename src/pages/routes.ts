import type { RouteRecordRaw } from "vue-router"
import PageNotFound from "./errors/PageNotFound.vue"
import Login from "./login/Login.vue"
import LoginEmailConfirmationSuccessPage from "./login/LoginEmailConfirmationSuccessPage.vue"
import Pomodoro from "./pomodoro/Pomodoro.vue"
import Register from "./register/Register.vue"
import RegisterEmailConfirmationSuccessPage from "./register/RegisterEmailConfirmationSuccessPage.vue"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Pomodoro },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  {
    path: "/notifications/login-email-confirmation-success",
    component: LoginEmailConfirmationSuccessPage,
  },
  {
    path: "/notifications/register-email-confirmation-success",
    component: RegisterEmailConfirmationSuccessPage,
  },
  { path: "/:slugs(.*)*", component: PageNotFound },
]
