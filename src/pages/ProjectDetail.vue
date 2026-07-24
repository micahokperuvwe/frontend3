<template>
  <div class="min-h-screen bg-[#0B1E3D] text-slate-100 flex flex-col justify-between">
    <Navbar />

    <main class="flex-1 py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="loading" class="text-center py-20">
          <p class="font-data text-[#17D9E8] animate-pulse">Loading case study data...</p>
        </div>

        <div v-else-if="!project" class="card-brief p-12 text-center max-w-xl mx-auto">
          <p class="text-red-400 font-medium mb-4">Case Study / Project Not Found</p>
          <router-link to="/case-studies" class="btn-cyan-outline text-xs">
            ← Back to Case Studies
          </router-link>
        </div>

        <div v-else class="space-y-12">
          <!-- Back Button -->
          <router-link to="/case-studies" class="inline-flex items-center gap-2 font-data text-xs text-[#17D9E8] hover:text-[#F2A93B] transition-colors">
            <span>←</span>
            <span>Back to Case Studies</span>
          </router-link>

          <!-- Header & Title -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="font-data text-xs font-semibold text-[#17D9E8] bg-[#17D9E8]/10 px-3 py-1 rounded border border-[#17D9E8]/30 uppercase tracking-widest">
                {{ project.category || 'CASE STUDY' }}
              </span>
              <span class="font-data text-xs text-[#F2A93B] bg-[#F2A93B]/10 px-3 py-1 rounded border border-[#F2A93B]/30 uppercase">
                {{ project.status || 'Completed' }}
              </span>
            </div>

            <h1 class="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
              {{ project.title }}
            </h1>

            <p class="text-slate-300 text-lg leading-relaxed max-w-3xl">
              {{ project.short_description }}
            </p>
          </div>

          <!-- Featured Thumbnail / Header Visual -->
          <div class="relative rounded-2xl overflow-hidden border border-[#17D9E8]/30 cyan-glow">
            <img
              :src="project.thumbnail_image || defaultImage"
              :alt="project.title"
              class="w-full h-80 sm:h-[450px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0B1E3D] via-transparent to-transparent opacity-80"></div>
          </div>

          <!-- Description Section -->
          <div class="card-brief p-8 sm:p-12 space-y-6">
            <h2 class="font-display font-bold text-2xl text-white">Project Overview & Results</h2>
            <div class="prose text-slate-300 text-sm leading-relaxed whitespace-pre-line">
              {{ project.full_description }}
            </div>

            <!-- Tech Stack -->
            <div v-if="project.technologies && project.technologies.length" class="pt-6 border-t border-slate-800">
              <h3 class="font-display font-semibold text-white text-sm mb-3">Technologies & Architecture</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="font-data text-xs text-[#17D9E8] bg-[#061226] border border-[#17D9E8]/30 px-3 py-1 rounded"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- Action Links -->
          <div class="flex flex-wrap gap-4">
            <a
              v-if="project.demo_url"
              :href="project.demo_url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-amber text-sm py-3 px-6"
            >
              <span>Visit Live Project</span>
              <span>→</span>
            </a>

            <a
              v-if="project.github_url"
              :href="project.github_url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-cyan-outline text-sm py-3 px-6"
            >
              <span>View Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { useProjects } from '../composables/useProjects';

const route = useRoute();
const { projects, loading, fetchPublished, fetchBySlug } = useProjects();
const project = ref<any>(null);
const defaultImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';

onMounted(async () => {
  const slug = route.params.slug as string;
  project.value = await fetchBySlug(slug);
  
  if (!projects.value.length) {
    await fetchPublished();
  }
});
</script>
