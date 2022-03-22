import { createRouter, createWebHashHistory } from "vue-router"
// 不加type也没问题
import type { RouteRecordRaw } from "vue-router"

import localCache from "@/utils/cache"
import { firstMenu } from "@/utils/map-menus"

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: "/main"
	},
	{
		path: "/login",
    name: "login",
		component: () => import("@/views/login/login.vue")
	},
	{
		path: "/main",
    name: "main",
		component: () => import("@/views/main/main.vue")
	},
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found/not-found.vue")
  }
]
const router = createRouter({
	routes,
	history: createWebHashHistory()
})

router.beforeEach((to) => {
	if (to.path !== "/login") {
		const token = localCache.getCache("token")
		if (!token) {
			return "/login"
		}
	}

  if(to.path === "/main") {
    console.log(firstMenu);
    return firstMenu.url
  }

})

export default router
