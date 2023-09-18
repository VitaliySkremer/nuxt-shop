import {useAuthStore} from "~/store/authStore";

export const useAuthorization = () =>{
  const login = ref('mor_2314');
  const password = ref('83r5^_');
  const loading = ref(false);
  const store = useAuthStore();
  const router = useRouter()

  const onSubmit = async () => {
    try {
      loading.value = true;
      await store.authorization({
        username: login.value,
        password: password.value
      })
      await router.push({name: 'home'})
    }catch (e) {
      console.log(e)
    }finally {
      loading.value = false;
    }
  }

  return {
    login,
    password,
    loading,
    onSubmit
  }
}