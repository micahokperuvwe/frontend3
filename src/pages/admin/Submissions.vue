<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Submissions</h1>

      <!-- Filter Tabs -->
      <div class="mb-8 flex gap-4 border-b border-gray-300 dark:border-gray-700">
        <button
          v-for="status in ['unread', 'read', 'spam']"
          :key="status"
          @click="selectedStatus = status"
          :class="{
            'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400': selectedStatus === status,
            'text-gray-600 dark:text-gray-400': selectedStatus !== status,
          }"
          class="px-4 py-2 font-semibold transition-colors"
        >
          {{ status.charAt(0).toUpperCase() + status.slice(1) }}
          <span class="ml-2 text-sm">{{ getStatusCount(status) }}</span>
        </button>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>

      <!-- Submissions List -->
      <div v-else-if="filteredSubmissions.length > 0" class="space-y-4">
        <div v-for="submission in filteredSubmissions" :key="submission._id" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div class="flex justify-between items-start mb-4">
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900 dark:text-white">{{ submission.name }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ submission.email }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">{{ formatDate(submission.submitted_at) }}</p>
            </div>
            <span
              :class="{
                'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200': submission.status === 'spam',
                'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200': submission.status === 'unread',
                'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300': submission.status === 'read',
              }"
              class="px-3 py-1 rounded-full text-sm font-semibold capitalize"
            >
              {{ submission.status }}
            </span>
          </div>

          <p class="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-wrap">{{ submission.message }}</p>

          <div class="flex gap-4">
            <button
              v-if="submission.status !== 'read'"
              @click="markStatus(submission._id, 'read')"
              class="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium text-sm"
            >
              Mark as Read
            </button>
            <button
              v-if="submission.status !== 'spam'"
              @click="markStatus(submission._id, 'spam')"
              class="text-orange-600 hover:text-orange-700 dark:text-orange-400 font-medium text-sm"
            >
              Mark as Spam
            </button>
            <button @click="deleteSubmission(submission._id)" class="text-red-600 hover:text-red-700 dark:text-red-400 font-medium text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="bg-white dark:bg-gray-800 rounded-lg shadow p-12 text-center">
        <p class="text-gray-600 dark:text-gray-400">No {{ selectedStatus }} submissions</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { ContactSubmission } from '../../types';
import api from '../../utils/api';

const submissions = ref<ContactSubmission[]>([]);
const selectedStatus = ref('unread');
const loading = ref(false);

const filteredSubmissions = computed(() => {
  return submissions.value.filter((s) => s.status === selectedStatus.value);
});

const getStatusCount = (status: string) => {
  return submissions.value.filter((s) => s.status === status).length;
};

const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString() + ' ' + new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const fetchSubmissions = async () => {
  loading.value = true;
  try {
    const response = await api.get('/api/admin/submissions');
    submissions.value = response.data;
  } catch (err) {
    console.error('Failed to load submissions');
  } finally {
    loading.value = false;
  }
};

const markStatus = async (id: string | undefined, status: string) => {
  if (!id) return;
  try {
    await api.put(`/api/admin/submissions/${id}`, { status });
    const submission = submissions.value.find((s) => s._id === id);
    if (submission) {
      submission.status = status as 'unread' | 'read' | 'spam';
    }
  } catch (err) {
    console.error('Failed to update submission');
  }
};

const deleteSubmission = async (id: string | undefined) => {
  if (!id || !confirm('Are you sure?')) return;
  try {
    await api.delete(`/api/admin/submissions/${id}`);
    submissions.value = submissions.value.filter((s) => s._id !== id);
  } catch (err) {
    console.error('Failed to delete submission');
  }
};

onMounted(() => {
  fetchSubmissions();
});
</script>
