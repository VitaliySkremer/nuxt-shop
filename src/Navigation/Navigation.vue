<template>
  <el-menu
      :default-active="activeName"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="handleOpen"
  >
    <el-menu-item index="0">
      <template #title>
        <span>Главная страница</span>
      </template>
    </el-menu-item>
    <el-menu-item v-for="[key, value] in store.getCategories" :index="key">
      <template #title>
        <span>{{value}}</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { useCategoriesStore } from "~/store/categoriesStore";

const store = useCategoriesStore();
const router = useRouter();
const route = useRoute();
const activeName = ref<string>(route.params.id?.toString() || '0');

const isCollapse = ref(false)
const handleOpen = (key: string) => {
  const id = Number(key)
  if(id === 0) {
    router.push({name: 'home'});
    return;
  }
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