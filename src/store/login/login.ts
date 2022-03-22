import { Module } from "vuex"
import { IRootState } from "../types"
import { ILoginState } from "./type"

import { accountLogin, getUserInfoById, getUserMenusByRoleId } from "@/service/login/login"

import localCache from "@/utils/cache"
import router from "@/router"
import { mapMenusToRoutes } from "@/utils/map-menus"

const loginModule: Module<ILoginState, IRootState> = {
	namespaced: true,
	state() {
		return {
			token: "",
			userInfo: {},
      userMenus: []
		}
	},
	mutations: {
		changeToken(state, token: string) {
			state.token = token
		},
		changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 将routes添加到router.main.children
      const routes = mapMenusToRoutes(userMenus)
      // console.log(routes);
      routes.forEach(route => {
        router.addRoute("main", route)
      })
      // console.log(router);

    }
	},
	getters: {},
	actions: {
		async accountLoginAction({ commit }, payload: any) {
			// console.log("执行vuex中登录", payload)
			const data = await accountLogin(payload)
			const { id, token } = data.data
			// 将token存储在浏览器中
			commit("changeToken", token)
			localCache.setCache("token", token)

			const userInfo = await getUserInfoById(id)
      commit("changeUserInfo", userInfo.data)
      localCache.setCache("userInfo", userInfo.data)

      // 获取用户权限
      const userMenusResult = await getUserMenusByRoleId(userInfo.data.role.id)
      const userMenus = userMenusResult.data
      // console.log("用户权限",userMenus);
      commit("changeUserMenus", userMenus)
      localCache.setCache("userMenus", userMenus)

      router.push("/main")

		},
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
        // 发送初始化的请求(完整的role/department)
        // dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
	}
}

export default loginModule
