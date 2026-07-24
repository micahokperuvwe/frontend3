<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Header -->
      <div class="mb-12 flex justify-between items-center">
        <div>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <p class="text-gray-600 dark:text-gray-400 mt-2">Manage your portfolio content</p>
        </div>
        <button
          @click="handleLogout"
          class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Total Projects</h3>
          <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ stats.projects }}</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Total Skills</h3>
          <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ stats.skills }}</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Total Testimonials</h3>
          <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ stats.testimonials }}</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">New Submissions</h3>
          <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ stats.submissions }}</p>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <RouterLink
          to="/admin/projects"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Projects</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Manage projects and portfolio items</p>
          <p class="text-blue-600 dark:text-blue-400 text-sm mt-4">→ Go to Projects</p>
        </RouterLink>

        <RouterLink
          to="/admin/testimonials"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Testimonials</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Manage client testimonials</p>
          <p class="text-blue-600 dark:text-blue-400 text-sm mt-4">→ Go to Testimonials</p>
        </RouterLink>

        <RouterLink
          to="/admin/submissions"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Submissions</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">View contact form submissions</p>
          <p class="text-blue-600 dark:text-blue-400 text-sm mt-4">→ Go to Submissions</p>
        </RouterLink>

        <RouterLink
          to="/admin/content"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Content</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Edit about, skills, and services</p>
          <p class="text-blue-600 dark:text-blue-400 text-sm mt-4">→ Go to Content</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import { RouterLink } from 'vue-router';
import api from '../../utils/api';

const router = useRouter();
const authStore = useAuthStore();

const stats = ref({
  projects: 0,
  skills: 0,
  testimonials: 0,
  submissions: 0,
});

const fetchStats = async () => {
  try {
    const [projectsRes, skillsRes, testimonialsRes, submissionsRes] = await Promise.all([
      api.get('/api/admin/projects'),
      api.get('/api/admin/skills'),
      api.get('/api/admin/testimonials'),
      api.get('/api/admin/submissions'),
    ]);
    stats.value = {
      projects: projectsRes.data.length,
      skills: skillsRes.data.length,
      testimonials: testimonialsRes.data.length,
      submissions: submissionsRes.data.filter((s: any) => s.status === 'unread').length,
    };
  } catch (err) {
    console.error('Failed to fetch stats');
  }
};

const handleLogout = () => {
  authStore.doLogout();
  router.push('/admin/login');
};

onMounted(() => {
  fetchStats();
});
</script>
