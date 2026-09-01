<template>
  <div class="project-card flex flex-col justify-between h-full bg-[var(--color-bg-card)] border border-[var(--color-border)]">
    
    <!-- Top Image Container -->
    <div class="relative h-52 bg-[var(--color-bg-sec)] overflow-hidden border-b border-[var(--color-border)]">
      <img
        :src="imageUrl || defaultImage"
        :alt="title"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      
      <!-- Category Badge -->
      <span class="absolute top-3 left-3 font-data text-[10px] font-bold bg-[var(--color-bg-main)] text-[var(--color-text-main)] border border-[var(--color-border)] px-2.5 py-1 uppercase tracking-wider">
        {{ category }}
      </span>

      <!-- Key Result Callout (Clean text, no emojis) -->
      <div v-if="resultMetric" class="absolute bottom-3 right-3 bg-[var(--color-bg-main)] text-[var(--color-text-main)] font-data font-bold text-[10px] px-2 py-0.5 border border-[var(--color-border)]">
        <span>{{ resultMetric }}</span>
      </div>
    </div>

    <!-- Card Body Content -->
    <div class="p-6 flex-1 flex flex-col justify-between bg-[var(--color-bg-main)]">
      <div>
        <h3 class="font-display text-xl font-bold text-[var(--color-text-main)] mb-2 leading-snug">
          {{ title }}
        </h3>
        
        <p class="text-xs text-[var(--color-text-muted)] line-clamp-2 leading-relaxed mb-6 font-normal">
          {{ description }}
        </p>

        <!-- Tech Stack Badges (Clean monochrome text badges, no soft radius, no drop shadows) -->
        <div class="flex flex-wrap gap-1.5 mb-6">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="font-data text-[10px] font-bold text-[var(--color-text-main)] bg-[var(--color-bg-sec)] border border-[var(--color-border)] px-2 py-0.5 uppercase tracking-wider"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Footer Action Links (Real product demo & case study) -->
      <div class="pt-4 border-t border-[var(--color-border)]/20 flex items-center justify-between">
        <router-link :to="`/case-studies/${slug}`" class="font-data text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider hover:underline">
          Case Study
        </router-link>
        
        <a v-if="liveUrl" :href="liveUrl" target="_blank" rel="noopener noreferrer" class="font-data text-xs font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] uppercase tracking-wider">
          Live Demo [↗]
        </a>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string;
  description: string;
  category: string;
  slug: string;
  imageUrl?: string;
  technologies?: string[];
  resultMetric?: string;
  liveUrl?: string;
}>(), {
  technologies: () => [],
  imageUrl: ''
});

const defaultImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
</script>


