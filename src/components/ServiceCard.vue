<template>
  <div class="card-brief p-8 flex flex-col justify-between group hover:border-[var(--color-border)]">
    <div>
      <!-- Icon container -->
      <div class="w-12 h-12 rounded bg-[var(--color-accent)] texttext-[var(--color-text-main)] mb-6 group-hover:scale-105 transition-transform shadow-[2px_2px_0px_var(--color-border)]">
        <slot name="icon">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </slot>
      </div>

      <!-- Tag / Badge -->
      <span v-if="tag" class="font-data text-[9px] font-bold bg-[var(--color-accent)] text-[var(--color-accent-text)] px-2 py-0.5 rounded border border-[var(--color-border)] mb-3 inline-block uppercase tracking-wider shadow-[1px_1px_0px_var(--color-border)]">
        {{ tag }}
      </span>

      <h3 class="font-display text-lg font-black text-[var(--color-text-main)] mb-3 group-hover:text-[var(--color-accent-hover)] transition-colors">
        {{ title }}
      </h3>
      <p class="text-xs text-[var(--color-text-muted)] leading-relaxed mb-6">
        {{ description }}
      </p>

      <!-- Deliverables List -->
      <ul v-if="deliverables && deliverables.length" class="space-y-2 mb-6">
        <li v-for="(item, idx) in deliverables" :key="idx" class="flex items-center gap-2 text-xs text-[var(--color-text-muted)] font-semibold">
          <span class="text-[var(--color-accent-hover)] font-bold">✓</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <!-- Action Link -->
    <router-link to="/contact" class="inline-flex items-center text-xs font-bold text-[var(--color-text-main)] hover:text-[var(--color-accent-hover)] transition-colors gap-2">
      <span>Request Proposal</span>
      <span class="group-hover:translate-x-0.5 transition-transform">→</span>
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
