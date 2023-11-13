<template>
  <div>
    <el-text tag="strong" class="text-center" size="large">
      Тестовое приложение на NuxtJS
    </el-text>
    <ul>
      <li>
        <el-text tag="strong" class="text-center" size="large">
          UI библиотека: Element plus
        </el-text>
      </li>
      <li>
        <el-text tag="strong" class="text-center" size="large">
          API: <a href="https://dummyjson.com/" target="_blank">https://dummyjson.com/</a>
        </el-text>
      </li>
      <li>
        <el-text tag="strong" class="text-center" size="large">
          State manager: Pinia
        </el-text>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  name: 'home',
  layout: 'default'
})

</script>

<style scoped>

</style>