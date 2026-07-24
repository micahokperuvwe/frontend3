<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="mb-8 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Testimonials</h1>
        <button
          @click="showForm = true"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          + New Testimonial
        </button>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>

      <!-- Testimonials Grid -->
      <div v-else-if="testimonials.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="testimonial in testimonials" :key="testimonial._id" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">{{ testimonial.author_name }}</h3>
              <p v-if="testimonial.author_role" class="text-sm text-gray-600 dark:text-gray-400">{{ testimonial.author_role }}</p>
            </div>
            <span
              :class="testimonial.published ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'"
              class="px-2 py-1 rounded text-xs font-semibold"
            >
              {{ testimonial.published ? 'Published' : 'Draft' }}
            </span>
          </div>
          <p class="text-gray-700 dark:text-gray-300 mb-4 italic">{{ testimonial.quote }}</p>
          <div class="flex gap-4">
            <button @click="editTestimonial(testimonial)" class="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium text-sm">
              Edit
            </button>
            <button @click="deleteTestimonial(testimonial._id)" class="text-red-600 hover:text-red-700 dark:text-red-400 font-medium text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="bg-white dark:bg-gray-800 rounded-lg shadow p-12 text-center">
        <p class="text-gray-600 dark:text-gray-400 mb-4">No testimonials yet</p>
        <button
          @click="showForm = true"
          class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          Create Your First Testimonial
        </button>
      </div>

      <!-- Form Modal -->
      <div v-if="showForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-8 max-h-[90vh] overflow-auto">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ editingId ? 'Edit Testimonial' : 'New Testimonial' }}</h2>

          <form @submit.prevent="submitForm" class="space-y-4">
            <!-- Author Name -->
            <div>
              <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Author Name *</label>
              <input
                v-model="form.author_name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <!-- Author Role -->
            <div>
              <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Author Role</label>
              <input
                v-model="form.author_role"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <!-- Quote -->
            <div>
              <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Quote *</label>
              <textarea
                v-model="form.quote"
                required
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <!-- Published -->
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="form.published" type="checkbox" class="w-4 h-4" />
              <span class="text-gray-900 dark:text-white">Published</span>
            </label>

            <!-- Buttons -->
            <div class="flex gap-4 pt-4">
              <button type="submit" :disabled="loading" class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors">
                {{ loading ? 'Saving...' : 'Save' }}
              </button>
              <button type="button" @click="closeForm" class="flex-1 px-4 py-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Testimonial } from '../../types';
import api from '../../utils/api';

const testimonials = ref<Testimonial[]>([]);
const loading = ref(false);
const showForm = ref(false);
const editingId = ref<string | null>(null);

const form = ref({
  author_name: '',
  author_role: '',
  quote: '',
  published: false,
});

const fetchTestimonials = async () => {
  loading.value = true;
  try {
    const response = await api.get('/api/admin/testimonials');
    testimonials.value = response.data;
  } catch (err) {
    console.error('Failed to load testimonials');
  } finally {
    loading.value = false;
  }
};

const submitForm = async () => {
  loading.value = true;
  try {
    if (editingId.value) {
      await api.put(`/api/admin/testimonials/${editingId.value}`, form.value);
    } else {
      await api.post('/api/admin/testimonials', {
        ...form.value,
        created_at: new Date(),
      });
    }
    closeForm();
    fetchTestimonials();
  } catch (err) {
    console.error('Failed to save testimonial');
  } finally {
    loading.value = false;
  }
};

const editTestimonial = (testimonial: Testimonial) => {
  editingId.value = testimonial._id || null;
  form.value = {
    author_name: testimonial.author_name,
    author_role: testimonial.author_role || '',
    quote: testimonial.quote,
    published: testimonial.published,
  };
  showForm.value = true;
};

const deleteTestimonial = async (id: string | undefined) => {
  if (!id || !confirm('Are you sure?')) return;
  try {
    await api.delete(`/api/admin/testimonials/${id}`);
    testimonials.value = testimonials.value.filter((t) => t._id !== id);
  } catch (err) {
    console.error('Failed to delete testimonial');
  }
};

const closeForm = () => {
  showForm.value = false;
  editingId.value = null;
  form.value = {
    author_name: '',
    author_role: '',
    quote: '',
    published: false,
  };
};

onMounted(() => {
  fetchTestimonials();
});
</script>
