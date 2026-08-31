<template>
  <div class="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-main)] flex flex-col justify-between">
    <Navbar />

    <main class="flex-1 py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Loading -->
        <div v-if="loading" class="space-y-6">
          <div class="skeleton h-6 w-32 rounded"></div>
          <div class="skeleton h-12 w-3/4 rounded"></div>
          <div class="skeleton h-80 w-full rounded border-2 border-[var(--color-border)]"></div>
          <div class="card-brief p-8 space-y-3">
            <div class="skeleton h-5 w-1/3 rounded"></div>
            <div class="skeleton h-4 w-full rounded"></div>
            <div class="skeleton h-4 w-2/3 rounded"></div>
          </div>
        </div>

        <!-- Not found -->
        <div v-else-if="!project" class="card-brief p-12 text-center max-w-xl mx-auto shadow-[4px_4px_0px_var(--color-border)]">
          <p class="text-red-500 font-bold mb-4">Project Not Found</p>
          <router-link to="/case-studies" class="btn-cyan-outline text-xs">
            ← Back to Projects
          </router-link>
        </div>

        <!-- Project detail -->
        <div v-else class="space-y-10">
          <!-- Back Button -->
          <router-link to="/case-studies" class="inline-flex items-center gap-2 font-data text-xs font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors border-b border-[#555555] hover:border-[var(--color-border)] pb-0.5">
            ← Back to Projects
          </router-link>

          <!-- Header & Title -->
          <div class="space-y-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="section-label">
                {{ project.category || 'CASE STUDY' }}
              </span>
              <span class="font-data text-[10px] font-bold text-[var(--color-text-main)] bg-[var(--color-bg-main)] border-2 border-[var(--color-border)] px-2.5 py-0.5 rounded uppercase tracking-wider shadow-[1px_1px_0px_var(--color-border)]">
                {{ project.status || 'Completed' }}
              </span>
            </div>

            <h1 class="font-display font-black text-4xl sm:text-5xl text-[var(--color-text-main)] tracking-tight leading-tight">
              {{ project.title }}
            </h1>

            <p class="text-[var(--color-text-muted)] text-lg leading-relaxed max-w-3xl font-semibold">
              {{ project.short_description }}
            </p>
          </div>

          <!-- Featured Thumbnail -->
          <div class="relative rounded-lg overflow-hidden border-2 border-[var(--color-border)] shadow-[6px_6px_0px_var(--color-border)]">
            <img
              :src="project.thumbnail_image || defaultImage"
              :alt="project.title"
              class="w-full h-80 sm:h-[450px] object-cover"
            />
          </div>

          <!-- Description Section -->
          <div class="card-brief p-8 sm:p-12 space-y-6 bg-[var(--color-bg-main)] shadow-[4px_4px_0px_var(--color-border)]">
            <h2 class="font-display font-black text-2xl text-[var(--color-text-main)]">Project Overview & Results</h2>
            <div class="text-[var(--color-text-muted)] text-sm leading-relaxed whitespace-pre-line font-semibold">
              {{ project.full_description }}
            </div>

            <!-- Tech Stack -->
            <div v-if="project.technologies && project.technologies.length" class="pt-6 border-t-2 border-[var(--color-border)]/10">
              <h3 class="font-display font-bold text-[var(--color-text-main)] text-sm mb-3">Technologies Used</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="font-data text-xs font-bold text-[var(--color-text-main)] bg-[var(--color-bg-main)] border-2 border-[var(--color-border)] px-3 py-1 rounded shadow-[1px_1px_0px_var(--color-border)]"
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

            <router-link to="/contact" class="btn-cyan-outline text-sm py-3 px-6">
              <span>Discuss a Similar Project</span>
            </router-link>
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
