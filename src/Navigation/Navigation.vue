<template>
  <el-tabs
      tab-position="left"
      class="navigate"
      @tab-click="handleClick"
      v-model="activeName"
  >
    <el-tab-pane v-for="[key, value] in store.getCategories" :key="key" :label="value" :name="key" />
  </el-tabs>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus'
import { useCategoriesStore } from "~/store/categoriesStore";

const store = useCategoriesStore();
const router = useRouter();
const route = useRoute();
const activeName = ref(Number(route.params.id) || 0);

const handleClick = (tab: TabsPaneContext, event: Event) => {
  const id = Number(tab.paneName)
  router.push({name: 'products', params: { id }})
}

</script>

<style scoped>

.navigate {
  display: flex;
  justify-content: flex-end;
}

.navigate > .el-tabs__content {
  display: none;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>