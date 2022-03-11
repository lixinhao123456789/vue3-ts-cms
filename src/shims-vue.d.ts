/* eslint-disable */
declare module "*.vue" {
  // 明确引入一个类型 这个是组件类型
	import type { DefineComponent } from "vue"
	const component: DefineComponent<{}, {}, any>
	export default component
}

// declare const VUE_APP_BASE_URL: string
// declare const VUE_APP_BASE_NAME: string
