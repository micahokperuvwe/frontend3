<template>
  <div class="card-brief p-6 relative overflow-hidden group">
    <!-- Subtle top accent line -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-[#facc15] border-b border-[#111111]"></div>
    
    <div class="flex flex-col gap-2">
      <!-- Label / Tag -->
      <span v-if="tag" class="font-data text-[10px] font-bold tracking-wider text-[#111111] uppercase bg-[#facc15] px-2 py-0.5 rounded w-fit border border-[#111111] shadow-[1px_1px_0px_#111111]">
        {{ tag }}
      </span>

      <!-- Large Numeral (JetBrains Mono) -->
      <div class="font-data text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight my-1">
        {{ value }}
      </div>

      <!-- Metric Label & Description -->
      <div class="font-display font-bold text-[#111111] text-base">
        {{ title }}
      </div>
      <p class="text-xs text-[#555555] leading-relaxed">
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
