import Request from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

import localCache from "@/utils/cache"
// const MyRequest =

export default new Request({
	baseURL: BASE_URL,
	timeout: TIME_OUT,
	interceptors: {
		requestInterceptor: (config) => {
			const token = localCache.getCache("token")
      // console.log("token",token);
			if (token) {
				config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`
        }
			}
			console.log("请求成功的拦截",config.headers)
			return config
		},
		requestInterceptorsCatch: (err) => {
			console.log("请求失败的拦截")
			return err
		},
		responseInterceptor: (config) => {
			console.log("响应成功的拦截")
			return config
		},
		responseInterceptorsCatch: (err) => {
			console.log("相应失败的拦截")
			return err
		}
	}
})
