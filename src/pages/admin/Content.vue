<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Tabs -->
      <div class="mb-8 flex gap-4 border-b border-gray-300 dark:border-gray-700">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'"
          class="px-4 py-2 font-semibold transition-colors capitalize"
        >
          {{ tab }}
        </button>
      </div>

      <!-- About Section -->
      <div v-if="activeTab === 'about'" class="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Content</h2>
        <form @submit.prevent="saveAbout" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Title *</label>
            <input
              v-model="about.title"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Bio *</label>
            <textarea
              v-model="about.bio"
              required
              rows="6"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
          >
            {{ loading ? 'Saving...' : 'Save About' }}
          </button>
        </form>
      </div>

      <!-- Skills Section -->
      <div v-else-if="activeTab === 'skills'" class="space-y-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
          <button
            @click="showSkillForm = true"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            + Add Skill
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="skill in skills" :key="skill._id" class="bg-white dark:bg-gray-800 p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">{{ skill.name }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 capitalize">{{ skill.proficiency }}</p>
            </div>
            <button @click="deleteSkill(skill._id)" class="text-red-600 hover:text-red-700 dark:text-red-400">
              ✕
            </button>
          </div>
        </div>

        <!-- Skill Form Modal -->
        <div v-if="showSkillForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ skillForm._id ? 'Edit' : 'Add' }} Skill</h3>
            <form @submit.prevent="saveSkill" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Name *</label>
                <input v-model="skillForm.name" type="text" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Proficiency</label>
                <select v-model="skillForm.proficiency" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              <div class="flex gap-4">
                <button type="submit" class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
                  Save
                </button>
                <button type="button" @click="showSkillForm = false" class="flex-1 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Services Section -->
      <div v-else-if="activeTab === 'services'" class="space-y-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Services</h2>
          <button
            @click="showServiceForm = true"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            + Add Service
          </button>
        </div>

        <div class="space-y-4">
          <div v-for="service in services" :key="service._id" class="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">{{ service.title }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ service.description }}</p>
              </div>
              <button @click="deleteService(service._id)" class="text-red-600 hover:text-red-700 dark:text-red-400">
                ✕
              </button>
            </div>
          </div>
        </div>

        <!-- Service Form Modal -->
        <div v-if="showServiceForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ serviceForm._id ? 'Edit' : 'Add' }} Service</h3>
            <form @submit.prevent="saveService" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Title *</label>
                <input v-model="serviceForm.title" type="text" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Description *</label>
                <textarea v-model="serviceForm.description" required rows="4" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              </div>

              <div class="flex gap-4">
                <button type="submit" class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
                  Save
                </button>
                <button type="button" @click="showServiceForm = false" class="flex-1 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { AboutContent, Skill, Service } from '../../types';
import api from '../../utils/api';

const tabs = ['about', 'skills', 'services'];
const activeTab = ref('about');
const loading = ref(false);

const about = ref<Partial<AboutContent>>({
  title: '',
  bio: '',
});

const skills = ref<Skill[]>([]);
const showSkillForm = ref(false);
const skillForm = ref<Partial<Skill>>({
  name: '',
  proficiency: 'intermediate',
});

const services = ref<Service[]>([]);
const showServiceForm = ref(false);
const serviceForm = ref<Partial<Service>>({
  title: '',
  description: '',
});

const fetchData = async () => {
  try {
    const [aboutRes, skillsRes, servicesRes] = await Promise.all([
      api.get('/api/admin/about').catch(() => null),
      api.get('/api/admin/skills'),
      api.get('/api/admin/services'),
    ]);

    if (aboutRes) {
      about.value = aboutRes.data;
    }
    skills.value = skillsRes.data;
    services.value = servicesRes.data;
  } catch (err) {
    console.error('Failed to fetch data');
  }
};

const saveAbout = async () => {
  loading.value = true;
  try {
    const response = await api.put('/api/admin/about', about.value);
    about.value = response.data;
  } catch (err) {
    console.error('Failed to save about');
  } finally {
    loading.value = false;
  }
};

const saveSkill = async () => {
  try {
    if (skillForm.value._id) {
      await api.put(`/api/admin/skills/${skillForm.value._id}`, skillForm.value);
    } else {
      await api.post('/api/admin/skills', {
        ...skillForm.value,
        sort_order: skills.value.length + 1,
      });
    }
    showSkillForm.value = false;
    skillForm.value = { name: '', proficiency: 'intermediate' };
    fetchData();
  } catch (err) {
    console.error('Failed to save skill');
  }
};

const deleteSkill = async (id: string | undefined) => {
  if (!id || !confirm('Delete this skill?')) return;
  try {
    await api.delete(`/api/admin/skills/${id}`);
    fetchData();
  } catch (err) {
    console.error('Failed to delete skill');
  }
};

const saveService = async () => {
  try {
    if (serviceForm.value._id) {
      await api.put(`/api/admin/services/${serviceForm.value._id}`, serviceForm.value);
    } else {
      await api.post('/api/admin/services', {
        ...serviceForm.value,
        sort_order: services.value.length + 1,
      });
    }
    showServiceForm.value = false;
    serviceForm.value = { title: '', description: '' };
    fetchData();
  } catch (err) {
    console.error('Failed to save service');
  }
};

const deleteService = async (id: string | undefined) => {
  if (!id || !confirm('Delete this service?')) return;
  try {
    await api.delete(`/api/admin/services/${id}`);
    fetchData();
  } catch (err) {
    console.error('Failed to delete service');
  }
};

onMounted(() => {
  fetchData();
});
</script>
