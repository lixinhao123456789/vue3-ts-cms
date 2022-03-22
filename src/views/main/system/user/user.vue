<template>
	<div class="user">
		<pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import pageSearch from "@/components/page-search"
import { searchFormConfig } from "./config/search.config"

export default defineComponent({
	components: {
		pageSearch
	},
	name: "user",
	setup() {
		return {
			searchFormConfig
		}
	}
})
</script>

<style scoped>
</style>
