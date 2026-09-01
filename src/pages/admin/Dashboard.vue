<template>
  <div class="min-h-screen bg-transparent ">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Header -->
      <div class="mb-12 flex justify-between items-center">
        <div>
          <h1 class="text-4xl font-bold text-[var(--color-text-main)] ">Admin Dashboard</h1>
          <p class="text-[var(--color-text-muted)]  mt-2">Manage your portfolio content</p>
        </div>
        <button
          @click="handleLogout"
          class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl transition-colors"
        >
          Logout
        </button>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div class="bg-[var(--color-bg-main)]  p-6 rounded-2xl shadow">
          <h3 class="text-[var(--color-text-muted)]  text-sm font-medium mb-2">Total Projects</h3>
          <p class="text-3xl font-bold text-[var(--color-text-main)] ">{{ stats.projects }}</p>
        </div>
        <div class="bg-[var(--color-bg-main)]  p-6 rounded-2xl shadow">
          <h3 class="text-[var(--color-text-muted)]  text-sm font-medium mb-2">Total Skills</h3>
          <p class="text-3xl font-bold text-[var(--color-text-main)] ">{{ stats.skills }}</p>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RouterLink
          to="/admin/projects"
          class="bg-[var(--color-bg-main)]  p-6 rounded-2xl shadow hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 class="text-lg font-semibold text-[var(--color-text-main)]  mb-2">Projects</h3>
          <p class="text-[var(--color-text-muted)]  text-sm">Manage projects and portfolio items</p>
          <p class="text-[var(--color-text-main)]  text-sm mt-4">→ Go to Projects</p>
        </RouterLink>

        <RouterLink
          to="/admin/content"
          class="bg-[var(--color-bg-main)]  p-6 rounded-2xl shadow hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 class="text-lg font-semibold text-[var(--color-text-main)]  mb-2">Content</h3>
          <p class="text-[var(--color-text-muted)]  text-sm">Edit about, skills, and services</p>
          <p class="text-[var(--color-text-main)]  text-sm mt-4">→ Go to Content</p>
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
});

const fetchStats = async () => {
  try {
    const [projectsRes, skillsRes] = await Promise.all([
      api.get('/api/admin/projects'),
      api.get('/api/admin/skills'),
    ]);
    stats.value = {
      projects: projectsRes.data.length,
      skills: skillsRes.data.length,
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
