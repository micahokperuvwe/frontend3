<template>
  <div class="card-brief p-6 relative overflow-hidden group">
    <!-- Subtle top cyan accent glow line -->
    <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#17D9E8] to-transparent opacity-40 group-hover:opacity-100 transition-opacity"></div>
    
    <div class="flex flex-col gap-2">
      <!-- Label / Tag -->
      <span v-if="tag" class="font-data text-[11px] font-medium tracking-wider text-[#17D9E8] uppercase bg-[#17D9E8]/10 px-2.5 py-1 rounded w-fit border border-[#17D9E8]/20">
        {{ tag }}
      </span>

      <!-- Large Cyan Numeral (JetBrains Mono) -->
      <div class="font-data text-4xl sm:text-5xl font-bold text-[#17D9E8] tracking-tight drop-shadow-[0_0_12px_rgba(23,217,232,0.4)] my-1">
        {{ value }}
      </div>

      <!-- Metric Label & Description -->
      <div class="font-display font-semibold text-white text-base">
        {{ title }}
      </div>
      <p class="text-xs text-slate-400 leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string;
  title: string;
  description: string;
  tag?: string;
}>();
</script>
