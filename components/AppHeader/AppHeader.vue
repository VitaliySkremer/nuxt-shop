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
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      <el-icon>
        <Avatar />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :command="Commands.BASKET">Корзина</el-dropdown-item>
        <el-dropdown-item :command="Commands.LOGOUT">Выйти из аккаунта</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { Avatar } from '@element-plus/icons-vue'
import {useTheme} from "~/hooks/useTheme";
import { useAuthStore } from '~/store/authStore';

const store = useAuthStore();
const router = useRouter();
const { theme, setTheme } = useTheme();

const enum Commands {
  BASKET = 'basket',
  LOGOUT = 'logout'
}


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

const handleCommand = (command: string | number | object) => {
  switch (command){
    case Commands.BASKET: router.push({name: 'basket'});
      break;
    case Commands.LOGOUT: logout();
      break;
  }
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

.el-dropdown-link {
  background-color: var(--el-color-primary);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

</style>