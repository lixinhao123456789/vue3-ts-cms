import { App } from "vue"
import "element-plus/theme-chalk/base.css"

import { ElButton } from "element-plus"

const components = [ElButton]

export default function (app: App): void {
	for (const item of components) {
		app.component(item.name, item)
	}
}
