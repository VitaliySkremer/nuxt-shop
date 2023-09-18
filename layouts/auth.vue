<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <AppHeader/>
      </el-header>
      <el-main class="auth__main">
        <slot/>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>