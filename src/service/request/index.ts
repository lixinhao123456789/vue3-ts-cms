import axios, { AxiosResponse, AxiosResponseHeaders } from "axios"
import type { AxiosInstance } from "axios"

import { ElLoading } from "element-plus/lib"
import {} from "element-plus/lib/components/loading"
//
import type { MyRequestConfig, MyRequestInterceptors } from "./type"
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading"

const DEAFULT_LOADING = true
class Request {
	instance: AxiosInstance
	interceptors?: MyRequestInterceptors
	showLoading: boolean
	loading?: LoadingInstance

	constructor(config: MyRequestConfig) {
		console.log(config)
		// 创建instance实例
		this.instance = axios.create(config)
		this.showLoading = config.showLoading ?? DEAFULT_LOADING
		this.interceptors = config.interceptors

		this.instance.interceptors.request.use(
			this.interceptors?.requestInterceptor,
			this.interceptors?.requestInterceptorsCatch
		)
		this.instance.interceptors.response.use(
			this.interceptors?.responseInterceptor,
			this.interceptors?.responseInterceptorsCatch
		)
		// 添加所有实例的拦截器
		// 请求后添加的先执行
		this.instance.interceptors.request.use(
			(config) => {
				console.log("请求成功所有实例的拦截", this.showLoading)
				if (this.showLoading) {
					this.loading = ElLoading.service({
						lock: true,
						text: "获取数据中...",
						background: "rgba(0, 0, 0, 0.7)"
					})
				}
				return config
			},
			(err) => {
				return err
			}
		)
		// 相应拦截器 后添加的后执行
		this.instance.interceptors.response.use(
			(config) => {
				console.log("相应成功所有实例的拦截")
				setTimeout(() => {
					this.loading?.close()
				}, 2000)
				return config.data
			},
			(err) => {
				// 真实开发使用switch判断
				if (err.response.status === 404) {
					console.log("请求页面找不到")
				}
				return err
			}
		)
	}

	request<T>(config: MyRequestConfig<T>): Promise<T> {
		return new Promise((resolve, reject) => {
			// 单个请求对请求config的处理
			if (config.interceptors?.requestInterceptor) {
				config = config.interceptors.requestInterceptor(config)
			}
			// 判断是否需要loading
			if (config.showLoading === false) {
				this.showLoading = config.showLoading
			}
			this.instance
				.request<any, T>(config)
				.then((res) => {
					if (config.interceptors?.responseInterceptor) {
						res = config.interceptors.responseInterceptor(res)
					}
					this.showLoading = DEAFULT_LOADING
					console.log(res)
          resolve(res)
				})
				.catch((err) => {
					this.showLoading = DEAFULT_LOADING
          reject(err)
					return err
				})
		})
	}

  get<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Request
