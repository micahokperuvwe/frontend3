<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
    <div class="text-center px-4">
      <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-8 text-lg">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <RouterLink to="/" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
        Go Home
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
