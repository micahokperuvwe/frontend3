<template>
  <div class="card-brief overflow-hidden flex flex-col justify-between group">
    <!-- Image Header with Gradient Overlay -->
    <div class="relative h-48 sm:h-56 bg-[#f8f9fa] overflow-hidden border-b-2 border-[#111111]">
      <img
        :src="imageUrl || defaultImage"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
      />
      
      <!-- Category Badge -->
      <span class="absolute top-4 left-4 font-data text-[9px] font-bold text-[#111111] bg-[#facc15] border-2 border-[#111111] px-2.5 py-1 rounded uppercase tracking-wider shadow-[1px_1px_0px_#111111]">
        {{ category }}
      </span>

      <!-- Key Result Callout -->
      <div v-if="resultMetric" class="absolute bottom-4 right-4 bg-[#facc15] text-[#111111] font-data font-bold text-[10px] px-2.5 py-1 rounded border-2 border-[#111111] shadow-[2px_2px_0px_#111111] flex items-center gap-1">
        <span>📈</span>
        <span>{{ resultMetric }}</span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 flex-1 flex flex-col justify-between bg-white">
      <div>
        <h3 class="font-display text-lg font-black text-[#111111] mb-2 group-hover:text-[#e2b809] transition-colors leading-tight">
          {{ title }}
        </h3>
        <p class="text-xs text-[#555555] line-clamp-2 leading-relaxed mb-4">
          {{ description }}
        </p>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-1.5 mb-6">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="font-data text-[9px] text-[#111111] bg-[#f8f9fa] border border-[#111111] px-2 py-0.5 rounded font-bold"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Footer Link -->
      <div class="pt-4 border-t-2 border-[#111111]/10 flex items-center justify-between">
        <router-link :to="`/case-studies/${slug}`" class="text-xs font-bold text-[#111111] hover:text-[#e2b809] inline-flex items-center gap-1">
          <span>View Case Study</span>
          <span class="group-hover:translate-x-0.5 transition-transform">→</span>
        </router-link>
        <a v-if="liveUrl" :href="liveUrl" target="_blank" rel="noopener" class="text-[11px] font-bold text-[#555555] hover:text-[#111111] inline-flex items-center gap-1">
          <span>Live Site</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
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
