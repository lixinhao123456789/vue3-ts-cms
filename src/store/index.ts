import { createStore, Store, useStore as userVuexStore } from "vuex"
import { IRootState, IStoreType } from "./types"
import login from "./login/login"

const store = createStore<IRootState>({
  state: ()=>{
    return {
      name: "lxh",
      age: 23,
      height: "123"
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

// 初始化数据
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStoreType>{
  return userVuexStore()
}

export default store
