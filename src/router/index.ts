import { createRouter, createWebHashHistory } from "vue-router"
// 不加type也没问题
import type { RouteRecordRaw } from "vue-router"
const routes: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: "/login"
	},
	{
		path: "/login",
		component: () => import("@/views/login/login.vue")
	},
	{
		path: "/main",
		component: () => import("@/views/main/main.vue")
	}
]
const router = createRouter({
	routes,
	history: createWebHashHistory()
})

export default router
