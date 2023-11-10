import { defineStore } from "pinia";
import { appAuthFetch } from "~/AppFetch/appAuthFetch";

export const useAuthStore = defineStore('authorization', () =>{
  const config = useRuntimeConfig();
  const token = ref(useCookie(config.public.JWT_TOKEN).value || '');

  const isAuth = computed(() => !!token.value);
  const getToken = computed(() => token.value)

  interface IAuthData {
    username: string,
    password: string
  }

  const authorization = async (dataBody:IAuthData) =>{
    try{
      interface APIAuth {
        token: string
      }
      const { data } = await appAuthFetch<APIAuth>('https://dummyjson.com/auth/login',{
        method: 'POST',
        body: dataBody,
      });
      setToken(data.value!.token)
    }
    catch(e: any){
      throw new Error(e)
    }
  }

  const setToken = (newToken: string) =>{
    token.value = newToken;
    useCookie(config.public.JWT_TOKEN).value = newToken;
  }

  const logout = () =>{
    useCookie(config.public.JWT_TOKEN).value = token.value = ''
  }

  return {
    isAuth,
    authorization,
    logout,
    getToken
  }
})