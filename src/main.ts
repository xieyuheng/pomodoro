import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import App from './App.vue'
import * as Directives from './directives'
import router from './router'
import './styles/index.css'
import { registerServiceWorker } from './utils/pwa/registerServiceWorker'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)

app.directive('focus', Directives.focus)
app.directive('blur', Directives.blur)
app.directive('on-click-outside', Directives.onClickOutside)

app.mount('#app')

registerServiceWorker('/service-worker.js')
