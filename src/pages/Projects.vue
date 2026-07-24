<template>
  <div class="min-h-screen bg-white text-[#111111] flex flex-col justify-between">
    <Navbar />

    <main class="flex-1 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Header -->
        <div class="mb-12">
          <p class="section-label mb-3">Work & Projects</p>
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h1 class="font-display font-black text-3xl sm:text-4xl text-[#111111]">
              Things I've Built
            </h1>
            <p class="text-sm text-[#555555] max-w-md leading-relaxed font-semibold">
              A collection of live applications, digital products, and design solutions completed under MICAH-WEB.
            </p>
          </div>
        </div>

        <hr class="divider mb-10" />

        <!-- Category Filters -->
        <div class="flex flex-wrap items-center gap-2 mb-10">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            class="text-xs px-3.5 py-1.5 rounded font-bold transition-all border-2 border-[#111111]"
            :class="activeCategory === cat
              ? 'bg-[#facc15] text-[#111111] shadow-[2px_2px_0px_#111111]'
              : 'bg-white text-[#555555] hover:bg-[#f8f9fa] hover:text-[#111111]'"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div v-for="i in 6" :key="i" class="card-brief overflow-hidden bg-white">
            <div class="skeleton h-48 border-b-2 border-[#111111]"></div>
            <div class="p-5 space-y-3">
              <div class="skeleton h-4 w-3/4"></div>
              <div class="skeleton h-3 w-full"></div>
              <div class="skeleton h-3 w-2/3"></div>
              <div class="flex gap-2 pt-1">
                <div class="skeleton h-5 w-16 rounded"></div>
                <div class="skeleton h-5 w-16 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Error Notice (DB offline) -->
        <div v-else-if="error" class="mb-6 text-xs text-amber-600 bg-amber-50 border-2 border-[#111111] px-4 py-3 rounded shadow-[2px_2px_0px_#111111] font-semibold">
          ⚠️ Could not reach the database — showing sample projects. Start the backend to see your saved projects.
        </div>

        <!-- Projects Grid -->
        <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.slug || project._id"
            :title="project.title"
            :description="project.short_description || project.description || ''"
            :category="project.category"
            :slug="project.slug"
            :imageUrl="project.thumbnail_image || project.imageUrl || ''"
            :technologies="project.technologies || []"
            :resultMetric="project.resultMetric || ''"
            :liveUrl="project.demo_url || ''"
          />
        </div>

        <!-- Empty state -->
        <div v-if="!loading && filteredProjects.length === 0" class="text-center py-20">
          <div class="text-[#555555] text-sm font-semibold">No projects found in this category.</div>
        </div>

        <!-- Bottom CTA -->
        <div class="border-2 border-[#111111] rounded-lg p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white shadow-[4px_4px_0px_#111111]">
          <div>
            <h2 class="font-display font-black text-xl text-[#111111] mb-1">Have a project in mind?</h2>
            <p class="text-sm text-[#555555] font-semibold">Get in touch and let's talk about what you need.</p>
          </div>
          <router-link to="/contact" class="btn-amber shrink-0">
            Contact Micah →
          </router-link>
        </div>

      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';

const activeCategory = ref('ALL');
const loading = ref(true);
const error = ref(false);

const staticProjects = [
  {
    _id: 'static-1',
    title: 'Fintech Analytics Dashboard',
    short_description: 'Real-time analytics web app for enterprise financial tracking and portfolio metrics.',
    category: 'FINTECH / SAAS',
    slug: 'fintech-analytics-dashboard',
    thumbnail_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue 3', 'TypeScript', 'Node.js', 'MongoDB'],
    resultMetric: '+240% User Growth',
    demo_url: '',
  },
  {
    _id: 'static-2',
    title: 'E-Commerce Conversion Redesign',
    short_description: 'Rebuilt homepage hero and checkout flow, resulting in record conversion rates.',
    category: 'E-COMMERCE',
    slug: 'nextgen-ecommerce-redesign',
    thumbnail_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['Tailwind CSS', 'Pinia', 'Express'],
    resultMetric: '3.8x Sales',
    demo_url: '',
  },
  {
    _id: 'static-3',
    title: 'Enterprise Data Intelligence Portal',
    short_description: 'Brand-forward platform for real-time lead ingestion and executive reporting.',
    category: 'ANALYTICS',
    slug: 'enterprise-data-portal',
    thumbnail_image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    technologies: ['TypeScript', 'Zod', 'Cloudinary'],
    resultMetric: '99.9% Uptime',
    demo_url: '',
  },
];

const projects = ref<any[]>([]);

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

const fetchProjects = async () => {
  loading.value = true;
  error.value = false;
  try {
    const res = await axios.get(`${API_BASE}/api/projects`, { timeout: 6000 });
    const liveProjects = Array.isArray(res.data) ? res.data : [];
    if (liveProjects.length > 0) {
      projects.value = liveProjects;
    } else {
      projects.value = staticProjects;
    }
  } catch {
    error.value = true;
    projects.value = staticProjects;
  } finally {
    loading.value = false;
  }
};

const categories = computed(() => {
  const cats = new Set(projects.value.map((p) => p.category).filter(Boolean));
  return ['ALL', ...Array.from(cats)];
});

const filteredProjects = computed(() => {
  if (activeCategory.value === 'ALL') return projects.value;
  return projects.value.filter((p) => p.category === activeCategory.value);
});

onMounted(fetchProjects);
</script>
