<template>
  <div class="page-search">
    <my-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h3>高级检索</h3>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </my-form>
  </div>
</template>

<script lang="ts">
import myForm from "@/base-ui/form"
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      request: true
    },
  },
  components: {
    myForm,
  },
  setup () {

    const formData = ref({
      id: "",
      name: "",
      password: "",
      sport: "",
      createTime: "",
    })

    return {
      formData
    }
  }
})
</script>

<style scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
