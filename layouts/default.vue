<template>
  <div class="common-layout">
    <el-container v-loading.fullscreen="loading">
      <el-header class="header">
        <AppHeader/>
      </el-header>
      <el-container>
        <el-aside width="300px" class="aside">
          <Navigation/>
        </el-aside>
        <el-container v-if="!loading">
          <el-main>
            <slot/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Navigation from "~/src/Navigation/Navigation.vue";
import { useCategoriesStore } from "~/store/categoriesStore";

const storeCategories = useCategoriesStore()
const loading = ref(false);

const init = async () => {
  try {
    loading.value = true;
    await Promise.all([
      storeCategories.getCategoriesFetch()
    ])
    console.log(1)
  } catch (error) {
    
  }
  finally {
    loading.value = false;
  }
}

init();

 
</script>

<style scoped>

.aside {
  padding: 20px;
}

</style>