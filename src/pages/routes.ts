import type { RouteRecordRaw } from "vue-router"
import Pomodoro from "./pomodoro/Pomodoro.vue"
import Login from "./login/Login.vue"
import Register from "./register/Register.vue"
import LoginEmailConfirmationSuccessPage from "./login/LoginEmailConfirmationSuccessPage.vue"
import RegisterEmailConfirmationSuccessPage from "./register/RegisterEmailConfirmationSuccessPage.vue"
import PageNotFound from "./errors/PageNotFound.vue"

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
