<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
    <div class="w-full max-w-md px-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Admin Login</h1>
        <p class="text-gray-600 dark:text-gray-400 text-center mb-8">Enter your API key to access the admin dashboard</p>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- API Key Input -->
          <div>
            <label for="apiKey" class="block text-sm font-medium text-gray-900 dark:text-white mb-2">API Key</label>
            <input
              id="apiKey"
              v-model="apiKey"
              type="password"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your API key"
            />
          </div>

          <!-- Error Message -->
          <div v-if="error" class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg">
            {{ error }}
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
          >
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </form>

        <p class="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
          Don't have an API key? Contact the site owner.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const apiKey = ref('');
const loading = ref(false);
const error = ref<string | null>(null);

const handleLogin = async () => {
  loading.value = true;
  error.value = null;

  try {
    const success = await authStore.doLogin(apiKey.value);
    if (success) {
      router.push('/admin');
    } else {
      error.value = authStore.error || 'Login failed. Please check your API key.';
    }
  } catch (err: any) {
    error.value = err.message || 'An error occurred. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>
