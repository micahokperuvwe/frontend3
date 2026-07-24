<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Back Link -->
      <router-link to="/admin/projects" class="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline mb-6 font-medium">
        ← Back to Projects List
      </router-link>

      <!-- Header -->
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {{ isEditMode ? 'Edit Project' : 'Create New Project' }}
      </h1>

      <form @submit.prevent="submitForm" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6">
        <!-- Loading state -->
        <div v-if="loading && isEditMode && !form.title" class="flex items-center justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>

        <div v-else class="space-y-6">
          <!-- Title -->
          <div>
            <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Project Title *</label>
            <input
              v-model="form.title"
              type="text"
              required
              @input="handleTitleInput"
              placeholder="e.g. NextGen E-Commerce Platform"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span v-if="errors.title" class="text-red-600 dark:text-red-400 text-sm mt-1 block">{{ errors.title }}</span>
          </div>

          <!-- Slug -->
          <div>
            <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">URL Slug *</label>
            <input
              v-model="form.slug"
              type="text"
              required
              placeholder="e.g. nextgen-ecommerce-platform"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span v-if="errors.slug" class="text-red-600 dark:text-red-400 text-sm mt-1 block">{{ errors.slug }}</span>
          </div>

          <!-- Short Description -->
          <div>
            <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Short Description *</label>
            <input
              v-model="form.short_description"
              type="text"
              required
              placeholder="Brief summary for project cards"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <!-- Full Description -->
          <div>
            <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Full Description *</label>
            <textarea
              v-model="form.full_description"
              required
              rows="5"
              placeholder="Detailed overview of project goals, features, and technical results..."
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          <!-- Category & Status -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Category *</label>
              <input
                v-model="form.category"
                type="text"
                required
                placeholder="e.g. FINTECH / SAAS, E-COMMERCE"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Status *</label>
              <select
                v-model="form.status"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="completed">Completed</option>
                <option value="in_progress">In Progress</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          <!-- Technologies -->
          <div>
            <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies (comma-separated) *</label>
            <input
              v-model="technologiesStr"
              type="text"
              required
              placeholder="Vue 3, TypeScript, Node.js, Tailwind CSS"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <!-- Live Demo URL -->
          <div>
            <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Live Demo URL (Optional)</label>
            <input
              v-model="form.demo_url"
              type="url"
              placeholder="https://example.com"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <!-- MAIN THUMBNAIL IMAGE/VIDEO UPLOAD -->
          <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
            <label class="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Main Cover Media (Image or Video)</label>
            <div class="flex items-center gap-4">
              <div v-if="form.thumbnail_image" class="w-28 h-28 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 relative shrink-0 bg-gray-900 flex items-center justify-center">
                <video v-if="isMediaVideo(form.thumbnail_image)" :src="form.thumbnail_image" class="w-full h-full object-cover" autoplay muted loop></video>
                <img v-else :src="form.thumbnail_image" alt="Thumbnail" class="w-full h-full object-cover" />
                <button type="button" @click="form.thumbnail_image = ''" class="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">×</button>
              </div>
              <div class="flex-1 space-y-2">
                <input
                  type="file"
                  accept="image/*,video/*"
                  @change="uploadThumbnail"
                  :disabled="uploadingThumbnail"
                  class="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-900/40 dark:file:text-blue-300 hover:file:bg-blue-100"
                />
                <div v-if="uploadingThumbnail" class="text-xs text-blue-600 dark:text-blue-400">Uploading cover media...</div>
                <input
                  v-model="form.thumbnail_image"
                  type="url"
                  placeholder="Or paste direct image/video URL (https://...)"
                  class="w-full px-3 py-1.5 text-xs border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          <!-- PROJECT GALLERY IMAGES & VIDEOS (MAX 10 MEDIA ITEMS) -->
          <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div class="flex items-center justify-between mb-3">
              <div>
                <label class="block text-sm font-semibold text-gray-900 dark:text-white">Project Gallery Media - Images & Videos (Max 10)</label>
                <p class="text-xs text-gray-500 dark:text-gray-400">Upload up to 10 photos or video clips for this project gallery.</p>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 rounded font-bold border border-blue-200 dark:border-blue-800">
                {{ galleryImages.length }} / 10 Media Items
              </span>
            </div>

            <!-- Upload File Input for Gallery (Images & Videos) -->
            <div v-if="galleryImages.length < 10" class="mb-4">
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                @change="uploadGalleryImages"
                :disabled="uploadingGallery"
                class="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-900/40 dark:file:text-blue-300 hover:file:bg-blue-100"
              />
              <div v-if="uploadingGallery" class="text-xs text-blue-600 dark:text-blue-400 mt-1 font-semibold">Uploading media file(s)... Please wait.</div>
            </div>
            <div v-else class="text-xs text-amber-600 dark:text-amber-400 font-semibold mb-4">
              Maximum limit of 10 media items reached. Remove an item to upload a new one.
            </div>

            <!-- Gallery Images & Videos Grid Preview -->
            <div v-if="galleryImages.length > 0" class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div
                v-for="(img, idx) in galleryImages"
                :key="idx"
                class="relative rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 group h-32 bg-gray-900 flex items-center justify-center"
              >
                <!-- Render Video if media is video -->
                <video
                  v-if="isMediaVideo(img.url)"
                  :src="img.url"
                  controls
                  class="w-full h-full object-cover"
                ></video>
                <!-- Render Image otherwise -->
                <img
                  v-else
                  :src="img.url"
                  :alt="`Gallery media ${idx + 1}`"
                  class="w-full h-full object-cover"
                />

                <!-- Remove Button -->
                <button
                  type="button"
                  @click="removeGalleryImage(idx)"
                  class="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow z-10"
                  title="Remove item"
                >
                  ×
                </button>
                <div class="absolute bottom-1 left-1 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">
                  {{ isMediaVideo(img.url) ? '🎥 VIDEO' : '🖼️ IMAGE' }} #{{ idx + 1 }}
                </div>
              </div>
            </div>
          </div>

          <!-- Checkboxes -->
          <div class="flex gap-6 border-t border-gray-200 dark:border-gray-700 pt-6">
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="form.published" type="checkbox" class="w-4 h-4 text-blue-600 rounded" />
              <span class="text-sm font-medium text-gray-900 dark:text-white">Publish Immediately</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="form.featured" type="checkbox" class="w-4 h-4 text-blue-600 rounded" />
              <span class="text-sm font-medium text-gray-900 dark:text-white">Feature on Homepage</span>
            </label>
          </div>

          <!-- Status Message -->
          <div v-if="statusMessage" :class="`p-4 rounded-lg text-sm font-medium ${statusMessage.type === 'success' ? 'bg-green-100 dark:bg-green-900/60 text-green-800 dark:text-green-200 border border-green-300' : 'bg-red-100 dark:bg-red-900/60 text-red-800 dark:text-red-200 border border-red-300'}`">
            {{ statusMessage.text }}
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="loading || uploadingThumbnail || uploadingGallery"
            class="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors shadow"
          >
            {{ loading ? 'Saving Project...' : isEditMode ? 'Update Project' : 'Create Project' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { Project } from '../../types';
import api from '../../utils/api';

const route = useRoute();
const router = useRouter();

const isEditMode = computed(() => {
  const id = route.params.id as string;
  return !!id && id !== 'undefined' && id !== 'create';
});

const projectId = computed(() => {
  const id = route.params.id as string;
  return (id && id !== 'undefined') ? id : '';
});

const form = ref<Partial<Project>>({
  title: '',
  slug: '',
  short_description: '',
  full_description: '',
  category: 'FINTECH / SAAS',
  thumbnail_image: '',
  gallery_images: [],
  technologies: [],
  demo_url: '',
  status: 'completed',
  featured: false,
  published: true,
});

const galleryImages = ref<Array<{ url: string; order: number }>>([]);
const technologiesStr = ref('');
const loading = ref(false);
const uploadingThumbnail = ref(false);
const uploadingGallery = ref(false);
const errors = ref<Record<string, string>>({});
const statusMessage = ref<{ type: 'success' | 'error'; text: string } | null>(null);

const isMediaVideo = (url?: string): boolean => {
  if (!url) return false;
  const lowercase = url.toLowerCase();
  return (
    lowercase.endsWith('.mp4') ||
    lowercase.endsWith('.webm') ||
    lowercase.endsWith('.mov') ||
    lowercase.endsWith('.mkv') ||
    lowercase.endsWith('.avi') ||
    lowercase.includes('/video/upload/') ||
    lowercase.includes('resource_type=video')
  );
};

const handleTitleInput = () => {
  if (!isEditMode.value && form.value.title) {
    form.value.slug = form.value.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
};

const loadProject = async () => {
  if (!projectId.value) return;
  loading.value = true;
  try {
    const response = await api.get(`/api/admin/projects/${projectId.value}`);
    form.value = response.data;
    technologiesStr.value = (form.value.technologies || []).join(', ');
    galleryImages.value = form.value.gallery_images || [];
  } catch (err: any) {
    statusMessage.value = {
      type: 'error',
      text: err.response?.data?.error || 'Failed to load project details',
    };
  } finally {
    loading.value = false;
  }
};

const uploadThumbnail = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  uploadingThumbnail.value = true;
  statusMessage.value = null;
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', 'projects');

    const res = await api.post('/api/admin/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    if (res.data.url) {
      form.value.thumbnail_image = res.data.url;
    }
  } catch (err: any) {
    statusMessage.value = {
      type: 'error',
      text: err.response?.data?.error || 'Upload failed. You can paste a direct media URL instead.',
    };
  } finally {
    uploadingThumbnail.value = false;
  }
};

const uploadGalleryImages = async (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  if (!files || !files.length) return;

  if (galleryImages.value.length + files.length > 10) {
    statusMessage.value = {
      type: 'error',
      text: 'Cannot upload. Maximum 10 gallery media items allowed.',
    };
    return;
  }

  uploadingGallery.value = true;
  statusMessage.value = null;
  try {
    for (let i = 0; i < files.length; i++) {
      if (galleryImages.value.length >= 10) break;

      const formData = new FormData();
      formData.append('file', files[i]);
      formData.append('folder', 'projects/gallery');

      const res = await api.post('/api/admin/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (res.data.url) {
        galleryImages.value.push({
          url: res.data.url,
          order: galleryImages.value.length,
        });
      }
    }
  } catch (err: any) {
    statusMessage.value = {
      type: 'error',
      text: err.response?.data?.error || 'Failed to upload one or more gallery media items.',
    };
  } finally {
    uploadingGallery.value = false;
  }
};

const removeGalleryImage = (index: number) => {
  galleryImages.value.splice(index, 1);
  galleryImages.value.forEach((img, i) => {
    img.order = i;
  });
};

const submitForm = async () => {
  errors.value = {};
  statusMessage.value = null;
  loading.value = true;

  try {
    const data = {
      ...form.value,
      gallery_images: galleryImages.value,
      technologies: technologiesStr.value ? technologiesStr.value.split(',').map((t) => t.trim()).filter(Boolean) : [],
    };

    if (isEditMode.value && projectId.value) {
      await api.put(`/api/admin/projects/${projectId.value}`, data);
    } else {
      await api.post('/api/admin/projects', data);
    }

    statusMessage.value = {
      type: 'success',
      text: isEditMode.value ? 'Project updated successfully!' : 'Project created successfully!',
    };

    setTimeout(() => {
      router.push('/admin/projects');
    }, 1000);
  } catch (err: any) {
    statusMessage.value = {
      type: 'error',
      text: err.response?.data?.error || 'Failed to save project. Please check form fields.',
    };
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  if (isEditMode.value) {
    loadProject();
  }
});
</script>
