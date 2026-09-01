<template>
  <div class="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-main)] relative selection:bg-[var(--color-text-main)] selection:text-[var(--color-bg-main)]">
    <!-- Background pattern (floating squares/stars effect) -->
    <div class="fixed inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, var(--color-border) 1px, transparent 0); background-size: 48px 48px;"></div>

    <div class="relative z-10 flex min-h-screen">
      <aside class="hidden md:flex md:w-64 shrink-0 flex-col border-r border-[var(--color-border)]/15 bg-[var(--color-bg-main)] sticky top-0 h-screen">
        <div class="p-6 border-b border-[var(--color-border)]/15">
          <RouterLink to="/admin" class="font-display font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
            MICAH-WEB
            <span class="block font-data text-[10px] text-[var(--color-text-muted)] mt-2 tracking-widest">ADMIN PANEL</span>
          </RouterLink>
        </div>

        <nav class="flex-1 p-4 space-y-2" aria-label="Admin navigation">
          <RouterLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            :active-class="item.exact ? '' : 'bg-[var(--color-text-main)] text-[var(--color-bg-main)]'"
            exact-active-class="bg-[var(--color-text-main)] text-[var(--color-bg-main)]"
            class="block px-4 py-3 text-sm font-semibold text-[var(--color-text-muted)] hover:bg-[var(--color-bg-sec)] hover:text-[var(--color-text-main)] transition-colors"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <div class="p-4 border-t border-[var(--color-border)]/15 space-y-2">
          <RouterLink to="/" class="block px-4 py-3 text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">
            View site
          </RouterLink>
          <button type="button" class="w-full text-left px-4 py-3 text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white transition-colors" @click="handleLogout">
            Log out
          </button>
        </div>
      </aside>

      <div class="flex-1 min-w-0">
        <header class="md:hidden sticky top-0 z-50 bg-[var(--color-bg-main)]/95 backdrop-blur-md border-b border-[var(--color-border)]/15">
          <div class="px-4 py-4 flex items-center justify-between">
            <RouterLink to="/admin" class="font-display font-bold text-lg">MICAH-WEB ADMIN</RouterLink>
            <button type="button" class="text-sm font-semibold text-red-600 dark:text-red-400" @click="handleLogout">Log out</button>
          </div>
          <nav class="overflow-x-auto px-4 pb-3 flex gap-2 no-scrollbar" aria-label="Admin navigation">
            <RouterLink
              v-for="item in navigation"
              :key="item.to"
              :to="item.to"
              :active-class="item.exact ? '' : 'bg-[var(--color-text-main)] text-[var(--color-bg-main)]'"
              exact-active-class="bg-[var(--color-text-main)] text-[var(--color-bg-main)]"
              class="whitespace-nowrap px-4 py-2 text-xs font-semibold text-[var(--color-text-muted)] border border-[var(--color-border)]/20"
            >
              {{ item.label }}
            </RouterLink>
          </nav>
        </header>

        <main class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();
const navigation = [
  { label: 'Overview', to: '/admin', exact: true },
  { label: 'Projects', to: '/admin/projects' },
  { label: 'Content', to: '/admin/content' },
];
const handleLogout = () => {
  authStore.doLogout();
  router.push('/admin/login');
};
</script>

<style scoped>
/* Hide scrollbar for mobile nav */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
