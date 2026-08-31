<template>
  <div class="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-main)] relative selection:bg-[var(--color-text-main)] selection:text-[var(--color-bg-main)]">
    <!-- Background pattern (floating squares/stars effect) -->
    <div class="fixed inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, var(--color-border) 1px, transparent 0); background-size: 48px 48px;"></div>

    <header class="sticky top-0 z-50 bg-[var(--color-bg-main)]/90 backdrop-blur-md border-b border-[var(--color-border)]/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 relative">
          
          <!-- Left: Logo -->
          <RouterLink to="/admin" class="flex items-center gap-2 group z-10">
            <span class="font-display font-bold text-xl tracking-tight text-[var(--color-text-main)] group-hover:opacity-80 transition-opacity">
              MICAH-WEB ADMIN
            </span>
          </RouterLink>

          <!-- Center: Navigation -->
          <nav class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6 z-10" aria-label="Admin navigation">
            <RouterLink 
              v-for="item in navigation" 
              :key="item.to" 
              :to="item.to" 
              active-class="bg-[var(--color-text-main)] text-[var(--color-bg-main)] shadow-md" 
              class="px-5 py-2 rounded-full text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-all"
            >
              {{ item.label }}
            </RouterLink>
          </nav>

          <!-- Right: Actions -->
          <div class="flex items-center gap-5 z-10">
            <RouterLink to="/" class="hidden md:block text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">
              View site
            </RouterLink>
            <button type="button" class="bg-red-600/10 text-red-600 dark:text-red-400 font-semibold text-sm py-2 px-5 rounded-full hover:bg-red-600 hover:text-white transition-all" @click="handleLogout">
              Log out
            </button>
          </div>

        </div>
      </div>
      
      <!-- Mobile Nav Scrollable -->
      <div class="md:hidden overflow-x-auto px-4 py-3 border-t border-[var(--color-border)]/5 flex gap-4 no-scrollbar relative z-10">
        <RouterLink 
          v-for="item in navigation" 
          :key="item.to" 
          :to="item.to" 
          active-class="bg-[var(--color-text-main)] text-[var(--color-bg-main)]" 
          class="whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-text-muted)]"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </header>

    <main class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();
const navigation = [
  { label: 'Overview', to: '/admin' },
  { label: 'Projects', to: '/admin/projects' },
  { label: 'Testimonials', to: '/admin/testimonials' },
  { label: 'Messages', to: '/admin/submissions' },
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