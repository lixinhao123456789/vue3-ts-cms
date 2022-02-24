import { createApp } from "vue"
import App from "./App.vue"
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import { globalRegister } from "./global"

import router from "./router"
import store from "./store"
const app = createApp(App)
// globalRegister(app)

// app.use(ElementPlus)
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount("#app")
