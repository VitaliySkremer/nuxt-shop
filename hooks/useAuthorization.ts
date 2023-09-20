import {useAuthStore} from "~/store/authStore";
import { ElMessage } from 'element-plus'

export const useAuthorization = () =>{
  const login = ref('mor_2314');
  const password = ref('83r5^_');
  const loading = ref(false);
  const store = useAuthStore();
  const router = useRouter();

  const onSubmit = async () => {
    try {
      loading.value = true;
      await store.authorization({
        username: login.value,
        password: password.value
      })
      await router.push({name: 'home'})
    }catch (e) {
      ElMessage.error('Неверный логин или пароль.')
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