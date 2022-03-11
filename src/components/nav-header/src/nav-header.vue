<template>
	<div class="nav-header">
		<i class="fold-menu" @click="handleFoldClick">
			<d-arrow-left v-if="isFold" />
			<d-arrow-right v-else />
		</i>
    <div class="content">
      <breadcrumb />
      <user-info />
    </div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import breadcrumb from "@/base-ui/breadcrumb"
import UserInfo from "./user-info.vue"

export default defineComponent({
  components: {
    breadcrumb,
    UserInfo,
  },
  emits: ["flodChange"],
	setup(prop, { emit }) {
		const isFold = ref(false)

		const handleFoldClick = () => {
			isFold.value = !isFold.value
      emit("flodChange", isFold.value)
		}

		return {
			isFold,
			handleFoldClick
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
