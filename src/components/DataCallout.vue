<template>
  <div class="card-brief p-6 relative overflow-hidden group">
    <!-- Subtle top accent line -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-[var(--color-accent)] text-[var(--color-accent-text)] border-b border-[var(--color-border)]"></div>
    
    <div class="flex flex-col gap-2">
      <!-- Label / Tag -->
      <span v-if="tag" class="font-data text-[10px] font-bold tracking-wider -[var(--color-accent-text)] px-2 py-0.5 rounded w-fit border border-[var(--color-border)] shadow-[1px_1px_0px_var(--color-border)]">
        {{ tag }}
      </span>

      <!-- Large Numeral (JetBrains Mono) -->
      <div class="font-data text-4xl sm:text-5xl font-extrabold text-[var(--color-text-main)] tracking-tight my-1">
        {{ value }}
      </div>

      <!-- Metric Label & Description -->
      <div class="font-display font-bold text-[var(--color-text-main)] text-base">
        {{ title }}
      </div>
      <p class="text-xs text-[var(--color-text-muted)] leading-relaxed">
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
