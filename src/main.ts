import { createApp } from "vue"
import App from "./App.vue"

import "normalize.css"
import './assets/css/index.css'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import { globalRegister } from "./global"
import { setupStore } from "./store"
import "./service/axios_demo"
// import MyRequest from "./service"

import router from "./router"
import store from "./store"
const app = createApp(App)
// globalRegister(app)
// console.log(process.env.VUE_APP_BASE_URL);
// console.log(process.env.VUE_APP_BASE_NAME);

// 初始化vuex中数据
setupStore()

// app.use(ElementPlus)
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount("#app")

// MyRequest.request({
// 	url: "/home/multidata",
// 	method: "get",
// 	interceptors: {
// 		requestInterceptor: (config) => {
// 			console.log("单独请求接口加入请求拦截")
// 			return config
// 		},
// 		responseInterceptor: (res) => {
// 			console.log("单独请求接口加入响应拦截")
// 			return res
// 		}
// 	}
// })

// interface DateType {
//   data: any
//   returnCode: string
//   sucsess: boolean
// }
// MyRequest.get<DateType>({
// 	url: "/home/multidata",
//   showLoading: false
// }).then(res=>{
//   console.log(res.data);
// })
