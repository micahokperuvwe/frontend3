<template>
  <div class="card-brief p-8 flex flex-col justify-between group hover:border-[#17D9E8]/50">
    <div>
      <!-- Thin-line icon container -->
      <div class="w-12 h-12 rounded-xl bg-[#17D9E8]/10 border border-[#17D9E8]/30 flex items-center justify-center text-[#17D9E8] mb-6 group-hover:scale-110 group-hover:bg-[#17D9E8]/20 transition-all">
        <slot name="icon">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </slot>
      </div>

      <!-- Tag / Badge -->
      <span v-if="tag" class="font-data text-[10px] font-semibold text-[#F2A93B] bg-[#F2A93B]/10 px-2 py-0.5 rounded border border-[#F2A93B]/20 mb-3 inline-block uppercase tracking-wider">
        {{ tag }}
      </span>

      <h3 class="font-display text-xl font-semibold text-white mb-3 group-hover:text-[#17D9E8] transition-colors">
        {{ title }}
      </h3>
      <p class="text-xs text-slate-300 leading-relaxed mb-6">
        {{ description }}
      </p>

      <!-- Deliverables List -->
      <ul v-if="deliverables && deliverables.length" class="space-y-2 mb-6">
        <li v-for="(item, idx) in deliverables" :key="idx" class="flex items-center gap-2 text-xs text-slate-400">
          <span class="text-[#17D9E8] font-bold">✓</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <!-- Action Link -->
    <router-link to="/contact" class="inline-flex items-center text-xs font-semibold text-[#17D9E8] hover:text-[#F2A93B] transition-colors gap-2">
      <span>Request Proposal</span>
      <span class="group-hover:translate-x-1 transition-transform">→</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  tag?: string;
  deliverables?: string[];
}>();
</script>
