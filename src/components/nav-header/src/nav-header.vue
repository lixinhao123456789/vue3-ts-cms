<template>
	<div class="nav-header">
		<i class="fold-menu" @click="handleFoldClick">
			<d-arrow-left v-if="isFold" />
			<d-arrow-right v-else />
		</i>
		<div class="content">
			<breadcrumb :breadcrumbs="breadcrumbs" />
			<user-info />
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import breadcrumb, { IBreadcrumb } from "@/base-ui/breadcrumb"
import UserInfo from "./user-info.vue"
import { useStore } from "@/store"
import { useRoute } from "vue-router"
import { pathMapBreadcrumbs } from "@/utils/map-menus"

export default defineComponent({
	components: {
		breadcrumb,
		UserInfo
	},
	emits: ["flodChange"],
	setup(prop, { emit }) {
		const isFold = ref(false)

		const handleFoldClick = () => {
			isFold.value = !isFold.value
			emit("flodChange", isFold.value)
		}

		// 面包屑的数据
		const store = useStore()
		const breadcrumbs = computed(() => {
			const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      // console.log(userMenus,currentPath,pathMapBreadcrumbs(userMenus, currentPath));
      return pathMapBreadcrumbs(userMenus, currentPath)
		})

		return {
			isFold,
			handleFoldClick,
			breadcrumbs
		}
	}
})
</script>

<style lang="less" scoped>
.nav-header {
	display: flex;
	width: 100%;

	.fold-menu {
		width: 30px;
		// font-size: 30px;
		cursor: pointer;
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex: 1;
		padding: 0 20px;
	}
}
</style>
