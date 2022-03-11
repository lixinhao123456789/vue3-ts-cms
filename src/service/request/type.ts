import type { AxiosRequestConfig, AxiosResponse } from "axios"
export interface MyRequestInterceptors<T = AxiosResponse> {
	requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
	requestInterceptorsCatch?: (error: any) => any
	responseInterceptor?: (res: T) => T
	responseInterceptorsCatch?: (error: any) => any
}

export interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
	interceptors?: MyRequestInterceptors<T>
	showLoading?: boolean
}
