import { ref } from 'vue';
import api from '../utils/api';

export const useAuth = () => {
  const isAuthenticated = ref(false);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const login = async (apiKey: string) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await api.post('/api/admin/login', { apiKey });
      if (response.data.success) {
        localStorage.setItem('admin_api_key', apiKey);
        localStorage.setItem('admin_token', response.data.token);
        isAuthenticated.value = true;
        return true;
      }
      throw new Error('Login failed');
    } catch (err: any) {
      error.value = err.response?.data?.error || 'Login failed';
      isAuthenticated.value = false;
      return false;
    } finally {
      loading.value = false;
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_api_key');
    localStorage.removeItem('admin_token');
    isAuthenticated.value = false;
  };

  const checkAuth = () => {
    const apiKey = localStorage.getItem('admin_api_key');
    isAuthenticated.value = !!apiKey;
    return !!apiKey;
  };

  const getApiKey = () => {
    return localStorage.getItem('admin_api_key');
  };

  return {
    isAuthenticated,
    loading,
    error,
    login,
    logout,
    checkAuth,
    getApiKey,
  };
};
