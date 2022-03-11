<template>
	<el-dropdown>
		<span class="el-dropdown-link">
			<el-avatar
				size="small"
				src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
				style="margin-right: 5px"
			></el-avatar>
			{{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>退出登录</el-dropdown-item>
				<el-dropdown-item>狮子头</el-dropdown-item>
				<el-dropdown-item>螺蛳粉</el-dropdown-item>
				<el-dropdown-item disabled>双皮奶</el-dropdown-item>
				<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script lang="ts">
import { useStore } from "@/store"
import { computed, defineComponent } from "vue"

export default defineComponent({
	setup() {
		const store = useStore()
		const name = computed(() => store.state.name)
		return {
			name
		}
	}
})
</script>

<style scoped>
.el-dropdown-link {
	display: flex;
	align-items: center;
	cursor: pointer;
}
</style>
