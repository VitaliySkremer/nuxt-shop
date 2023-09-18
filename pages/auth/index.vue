<template>
  <el-form @submit="onSubmit">
    <el-card shadow="hover">
      <el-input
          v-model="login"
          class="input"
          placeholder="Введите логин"
      />
      <el-input
          v-model="password"
          class="input"
          type="password"
          placeholder="Введите пароль"
          show-password
      />
      <el-button
          :loading="loading"
          @click="onSubmit"
      >
        Авторизоваться
      </el-button>
    </el-card>
  </el-form>
</template>

<script setup lang="ts">

import {useAuthorization} from "~/hooks/useAuthorization";

definePageMeta({
  name: 'auth',
  layout: 'auth'
})

const { login, password, loading, onSubmit } = useAuthorization()
</script>

<style scoped>

.input {
  margin-bottom: 25px;
}

</style>