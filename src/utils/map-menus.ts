import { IBreadcrumb } from "@/base-ui/breadcrumb"
import { RouteRecordRaw } from "vue-router"

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
	const routes: RouteRecordRaw[] = []

	// 1、先去加载所有的routes
	const allRoutes: RouteRecordRaw[] = []
	// require.context帮我们加载某个文件夹 是webpack中的函数 是webpack在操作 true是否递归
	const routeFiles = require.context("../router/main", true, /\.ts/)
	routeFiles.keys().forEach((key) => {
		// console.log(key); 输出 ./analysis/dashboard/dashboard.ts
		// require commonjs中的引入方式
		const route = require("../router/main" + key.split(".")[1])
		allRoutes.push(route.default)
	})

	// 2、根据菜单获取需要加载的路由
	// 要一层一层的遍历 匹配
	const _recurseGetRoute = (menus: any[]) => {
		for (const menu of menus) {
			if (menu.type === 2) {
				const route = allRoutes.find((route) => route.path === menu.url)
				if (route) routes.push(route)
				if (!firstMenu) {
					firstMenu = menu
				}
			} else {
				_recurseGetRoute(menu.children)
			}
		}
	}

	_recurseGetRoute(userMenus)

	return routes
}

export function pathMapToMenu(
	userMenus: any[],
	currentPath: string,
	breadcrumbs?: IBreadcrumb[]
): any {
	// console.log(userMenus, currentPath);
	for (const menu of userMenus) {
		if (menu.type === 1) {
			const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
			if (findMenu) {
				breadcrumbs?.push({ name: menu.name, path: menu.path })
				breadcrumbs?.push({ name: findMenu.name, path: findMenu.path })
				return findMenu
			}
		} else if (menu.type === 2 && menu.url === currentPath) {
			return menu
		}
	}
}

// 面包屑数据
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
	const breadcrumbs: IBreadcrumb[] = []
	pathMapToMenu(userMenus, currentPath, breadcrumbs)
	return breadcrumbs
}

export { firstMenu }
