import type { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: () => import("./pomodoro/Pomodoro.vue") },
  { path: "/login", component: () => import("./login/Login.vue") },
  { path: "/register", component: () => import("./register/Register.vue") },
]
