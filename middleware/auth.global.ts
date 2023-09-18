import {useAuthStore} from "~/store/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();

  if(to.name === 'auth') return;

  if(!store.isAuth){
    return navigateTo({name: 'auth'})
  }

})