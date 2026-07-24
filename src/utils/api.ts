import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://backend3-aotb.onrender.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30s — Render free tier can have cold start delays
});

// Add API key to admin requests
api.interceptors.request.use((config) => {
  const apiKey = localStorage.getItem('admin_api_key');
  if (apiKey && config.url?.includes('/admin')) {
    config.headers['x-api-key'] = apiKey;
  }
  return config;
});

// Handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token on auth error
      localStorage.removeItem('admin_api_key');
      localStorage.removeItem('admin_token');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default api;
