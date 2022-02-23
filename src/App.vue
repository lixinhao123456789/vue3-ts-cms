<template>
<!-- <el-config-provider :locale="locale"> -->
	<div id="app">
		<h2>{{ $store.state.name }}</h2>

		<router-link to="/login">登录</router-link>
		<router-link to="/main">首页</router-link>
		<router-view></router-view>
    <el-button> 我是 ElButton </el-button>
	</div>
<!-- </el-config-provider> -->
</template>

<script lang="ts">
import { defineComponent } from "vue"
// import { ElConfigProvider } from "element-plus"

// import zhCn from "element-plus/lib/locale/lang/zh-cn"

export default defineComponent({
	name: "App",
	components: {
	},
	setup() {
		return {
		}
	}
})
</script>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
