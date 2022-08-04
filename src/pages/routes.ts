import type { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: () => import("./pomodoro/Pomodoro.vue") },
]
