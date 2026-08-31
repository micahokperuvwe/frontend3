<template>
  <div class="min-h-screen bg-transparent ">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="mb-8 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-[var(--color-text-main)] ">Projects</h1>
        <RouterLink
          to="/admin/projects/create"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-colors"
        >
          + New Project
        </RouterLink>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-2xl">
        {{ error }}
      </div>

      <!-- Projects Table -->
      <div v-else-if="projects.length > 0" class="bg-[var(--color-bg-main)]  rounded-2xl shadow overflow-x-auto">
        <table class="w-full">
          <thead class="bg-[var(--color-bg-sec)] dark:bg-gray-700">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text-main)] ">Title</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text-main)] ">Status</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text-main)] ">Published</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text-main)] ">Featured</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text-main)] ">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--color-border)]/20 ">
            <tr v-for="project in projects" :key="project._id" class="hover:bg-[var(--color-bg-sec)] dark:hover:bg-gray-700 transition-colors">
              <td class="px-6 py-4 text-sm text-[var(--color-text-main)]  font-medium">{{ project.title }}</td>
              <td class="px-6 py-4 text-sm">
                <span
                  :class="{
                    'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200':
                      project.status === 'in_progress',
                    'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200':
                      project.status === 'completed',
                    'bg-transparent dark:bg-gray-700 text-[var(--color-text-main)] dark:text-gray-300':
                      project.status === 'archived',
                  }"
                  class="px-3 py-1 rounded-full text-xs font-semibold capitalize"
                >
                  {{ project.status }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm">
                <span :class="project.published ? 'text-green-600 dark:text-green-400' : 'text-[var(--color-text-muted)] dark:text-[var(--color-text-muted)]'">
                  {{ project.published ? '✓' : '✗' }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm">
                <span :class="project.featured ? 'text-yellow-600 dark:text-yellow-400' : 'text-[var(--color-text-muted)] dark:text-[var(--color-text-muted)]'">
                  {{ project.featured ? '★' : '☆' }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm space-x-4">
                <RouterLink :to="`/admin/projects/${project._id}/edit`" class="text-[var(--color-text-main)] hover:text-blue-700  font-medium">
                  Edit
                </RouterLink>
                <button @click="deleteProject(project._id)" class="text-red-600 hover:text-red-700 dark:text-red-400 font-medium">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Empty state -->
      <div v-else class="bg-[var(--color-bg-main)]  rounded-2xl shadow p-12 text-center">
        <p class="text-[var(--color-text-muted)]  mb-4">No projects yet</p>
        <RouterLink
          to="/admin/projects/create"
          class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-colors"
        >
          Create Your First Project
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import type { Project } from '../../types';
import api from '../../utils/api';

const projects = ref<Project[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

const fetchProjects = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await api.get('/api/admin/projects');
    projects.value = response.data;
  } catch (err: any) {
    error.value = err.message || 'Failed to load projects';
  } finally {
    loading.value = false;
  }
};

const deleteProject = async (id: string | undefined) => {
  if (!id || !confirm('Are you sure you want to delete this project?')) return;

  try {
    await api.delete(`/api/admin/projects/${id}`);
    projects.value = projects.value.filter((p) => p._id !== id);
  } catch (err: any) {
    error.value = err.response?.data?.error || 'Failed to delete project';
  }
};

onMounted(() => {
  fetchProjects();
});
</script>
