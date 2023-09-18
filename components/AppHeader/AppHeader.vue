<template>
  <NuxtLink class="logo__name" to="/">
    Shop
  </NuxtLink>
  <el-switch
      v-model="value"
      size="large"
      active-text="Light"
      inactive-text="Dark"
  />
  <el-button @click="logout" v-if="route.name !== 'auth'" type="primary" :icon="Refresh" circle />
</template>

<script setup lang="ts">
import { Refresh } from '@element-plus/icons-vue'
import {useTheme} from "~/hooks/useTheme";
import { useAuthStore } from '~/store/authStore';

const store = useAuthStore();
const router = useRouter();
const route = useRoute();
const { theme, setTheme } = useTheme();


const value = computed({
  get(){
    return theme.value === 'light'
  },
  set(){
    setTheme()
  }
})

const logout = () =>{
  store.logout();
  router.push({name: 'auth'})
}
</script>

<style scoped>

.logo__name {
  font-size: 48px;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--el-color-primary);
}

</style>