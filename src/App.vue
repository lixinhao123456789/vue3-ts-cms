<template>
<!-- <el-config-provider :locale="locale"> -->
	<div id="app">
		<router-view></router-view>
	</div>
<!-- </el-config-provider> -->
</template>

<script lang="ts">
import { defineComponent } from "vue"
// import { ElConfigProvider } from "element-plus"

// import zhCn from "element-plus/lib/locale/lang/zh-cn"
// defineComponent包裹一个对象 并且返回一个对象
// defineComponent定义很多泛型 必须遵循相应的类型规则 类型限制类型推倒的作用
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
  height: 100%;
	// font-family: Avenir, Helvetica, Arial, sans-serif;
	// -webkit-font-smoothing: antialiased;
	// -moz-osx-font-smoothing: grayscale;
	// text-align: center;
	// color: #2c3e50;
	// margin-top: 60px;
}
</style>
