import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/styles/index.css"
import "./utils/registerServiceWorker"

const app = createApp(App)

app.use(router)

app.mount("#app")
