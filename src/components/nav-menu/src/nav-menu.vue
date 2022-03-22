<template>
	<div class="nav-menu">
		<div class="logo">
			<img class="img" src="~@/assets/img/logo.svg" alt="logo" />
			<span v-if="!collapse" class="title">Vue3+TS</span>
		</div>

		<el-menu
			:default-active="defaultValue"
			class="el-menu-vertical"
			background-color="#0c2135"
			:collapse="collapse"
			text-color="#b7bdc3"
			active-text-color="#0a60bd"
		>
			<template v-for="item in userMenus" :key="item.id">
				<!-- type为1时 为可展开的菜单 -->
				<template v-if="item.type === 1">
					<!-- 二级菜单的可以展开的标题 -->
					<el-sub-menu :index="item.id + ''">
						<template #title>
							<i>
								<bell-filled
									style="
										width: 18px;
										margin-right: 5px;
										display: flex;
										align-items: center;
									"
								/>
							</i>

							<i v-if="item.icon" :class="item.icon"></i>
							<span>{{ item.name }}</span>
						</template>
						<!-- 遍历里面的item -->
						<template v-for="subitem in item.children" :key="subitem.id">
							<el-menu-item
								:index="subitem.id + ''"
								@click="handleMenuItemClick(subitem)"
							>
								<i v-if="subitem.icon" :class="subitem.icon"></i>
								<span>{{ subitem.name }}</span>
							</el-menu-item>
						</template>
					</el-sub-menu>
				</template>
				<template v-else-if="item.type === 2">
					<el-menu-item
						:index="item.id + ''"
						@click="handleMenuItemClick(item)"
					>
						<i v-if="item.icon" :class="item.icon"></i>
						<span>{{ item.name }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"

import { useStore } from "@/store"
import { useRoute, useRouter } from "vue-router"

import { pathMapToMenu } from "@/utils/map-menus"

export default defineComponent({
	props: {
		collapse: {
			type: Boolean,
			default: false
		}
	},
	setup() {
		// 拿到菜单列表 遍历出来
		const store = useStore()
		const router = useRouter()
		const route = useRoute()
		// 如果不用computed的话 缺少类型检测 store.state.login.userMenus 也可以搞一个计算属性
		const userMenus = computed(() => store.state.login.userMenus)
		// const userMenus = store.state.login.userMenus

		const currentPath = route.path

		const menu = pathMapToMenu(userMenus.value, currentPath)
    // console.log("当前的菜单",menu);
		const defaultValue = ref(menu.id + "")

		// console.log("vuex", userMenus)
		const handleMenuItemClick = (item: any) => {
			// console.log(item.url);
			router.push({
				path: item.url ?? "/not-found"
			})
		}

		return {
			userMenus,
			handleMenuItemClick,
			defaultValue
		}
	}
})
</script>

<style lang="less" scoped>
.nav-menu {
	height: 100%;
	background-color: #001529;

	.logo {
		display: flex;
		height: 28px;
		padding: 12px 10px 8px 10px;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		.img {
			height: 100%;
			margin: 0 10px;
		}

		.title {
			font-size: 16px;
			font-weight: 700;
			color: white;
		}
	}

	.el-menu {
		border-right: none;
	}

	// 目录
	.el-submenu {
		background-color: #001529 !important;
		// 二级菜单 ( 默认背景 )
		.el-menu-item {
			padding-left: 50px !important;
			background-color: #0c2135 !important;
		}
	}

	::v-deep .el-submenu__title {
		background-color: #001529 !important;
	}

	// hover 高亮
	.el-menu-item:hover {
		color: #fff !important; // 菜单
	}

	.el-menu-item.is-active {
		color: #fff !important;
		background-color: #0a60bd !important;
	}
}

.el-menu-vertical:not(.el-menu--collapse) {
	width: 100%;
	height: calc(100% - 48px);
}
</style>
