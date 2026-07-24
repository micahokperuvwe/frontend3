import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';

export const useAuthStore = defineStore('auth', () => {
  const { isAuthenticated, loading, error, login, logout, checkAuth } = useAuth();
  const initialized = ref(false);

  const doLogin = async (apiKey: string) => {
    return await login(apiKey);
  };

  const doLogout = () => {
    logout();
  };

  const initAuthListener = () => {
    if (!initialized.value) {
      checkAuth();
      initialized.value = true;
    }
  };

  return {
    isAuthenticated,
    loading,
    error,
    initialized,
    doLogin,
    doLogout,
    initAuthListener,
    checkAuth,
  };
});

