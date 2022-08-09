import { createHead } from "@vueuse/head"
import { createApp } from "vue"
import App from "./App.vue"
import "./assets/styles/index.css"
import router from "./router"

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)

app.mount("#app")
