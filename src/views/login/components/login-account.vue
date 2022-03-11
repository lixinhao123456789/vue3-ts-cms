<template>
	<div class="login-account">
		<el-form label-width="60px" :model="account" :rules="rules" ref="formRef">
			<el-form-item label="账号" prop="name">
				<el-input v-model="account.name" placeholder="请输入账号"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input
					v-model="account.password"
					show-password
					placeholder="请输入密码"
				></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { rules } from "../config/account-config"
import { ElForm } from "element-plus"
import localCache from "@/utils/cache"
import { useStore } from "vuex"

export default defineComponent({
	setup() {
		const account = reactive({
			name: localCache.getCache("name") ?? "",
			password: localCache.getCache("password") ?? ""
		})
		const store = useStore()
		const formRef = ref<InstanceType<typeof ElForm>>()
		const loginAction = (isKeepPassword: boolean) => {
			formRef.value?.validate((valid) => {
				if (valid) {
					console.log("检验通过", account.name)
					if (isKeepPassword) {
						localCache.setCache("name", account.name)
						localCache.setCache("password", account.password)
						console.log(isKeepPassword)
					} else {
						localCache.deleteCache("name")
						localCache.deleteCache("password")
					}
				}

				// 立即登录
				store.dispatch("login/accountLoginAction", { ...account })
			})
		}
		return {
			account,
			rules,
			loginAction,
			formRef
		}
	}
})
</script>

<style scoped>
</style>
