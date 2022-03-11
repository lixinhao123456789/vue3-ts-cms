import { App } from "vue"

import { Edit, Aim, DArrowLeft, DArrowRight, BellFilled, ArrowDown, ArrowDownBold } from "@element-plus/icons"

const components = [Edit, Aim, DArrowLeft, DArrowRight, BellFilled, ArrowDown, ArrowDownBold]

export default function (app: App): void {
	for (const item of components) {
		app.component(item.name, item)
	}
}
