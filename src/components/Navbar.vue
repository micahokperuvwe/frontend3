<template>
  <nav class="sticky top-0 z-50 bg-[var(--color-bg-main)]/90 backdrop-blur-md transition-all duration-300 border-b border-[var(--color-border)]/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-24 relative">
        
        <!-- Left: Logo -->
        <router-link to="/" class="flex items-center gap-2 group z-10">
          <span class="font-display font-bold text-2xl tracking-tight text-[var(--color-text-main)] group-hover:opacity-80 transition-opacity">
            MICAH-WEB
          </span>
        </router-link>

        <!-- Center: Desktop Navigation Links -->
        <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
          <router-link to="/" class="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" active-class="text-[var(--color-text-main)]">
            Home
          </router-link>
          <router-link to="/services" class="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" active-class="text-[var(--color-text-main)]">
            Services
          </router-link>
          <router-link to="/case-studies" class="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" active-class="text-[var(--color-text-main)]">
            Projects
          </router-link>
          <router-link to="/about" class="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" active-class="text-[var(--color-text-main)]">
            About
          </router-link>
        </div>

        <!-- Right: Theme Toggle & Primary CTA Button -->
        <div class="hidden md:flex items-center gap-5 z-10">
          <button @click="toggleTheme" class="text-[var(--color-text-main)] hover:opacity-75 transition-opacity" title="Toggle Theme">
            <!-- Moon icon (shows in light mode) -->
            <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
            <!-- Sun icon (shows in dark mode) -->
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </button>
          
          <router-link to="/contact" class="bg-[var(--color-text-main)] text-[var(--color-bg-main)] font-semibold text-sm py-2.5 px-6 rounded-full hover:opacity-90 transition-opacity">
            Contact me
          </router-link>
        </div>

        <!-- Mobile menu & Theme toggle buttons -->
        <div class="flex md:hidden items-center gap-4">
          <button @click="toggleTheme" class="text-[var(--color-text-main)]" title="Toggle Theme">
            <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </button>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-[var(--color-text-main)] p-1 focus:outline-none">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-[var(--color-bg-main)] border-b border-[var(--color-border)]/10 px-4 pt-2 pb-6 space-y-3">
      <router-link to="/" @click="mobileMenuOpen = false" class="block text-[var(--color-text-main)] py-2 font-medium">Home</router-link>
      <router-link to="/services" @click="mobileMenuOpen = false" class="block text-[var(--color-text-main)] py-2 font-medium">Services</router-link>
      <router-link to="/case-studies" @click="mobileMenuOpen = false" class="block text-[var(--color-text-main)] py-2 font-medium">Projects</router-link>
      <router-link to="/about" @click="mobileMenuOpen = false" class="block text-[var(--color-text-main)] py-2 font-medium">About</router-link>
      <router-link to="/contact" @click="mobileMenuOpen = false" class="block text-[var(--color-text-main)] py-2 font-medium">Contact</router-link>
      <router-link to="/contact" @click="mobileMenuOpen = false" class="block bg-[var(--color-text-main)] text-[var(--color-bg-main)] text-center font-semibold py-3 rounded-full mt-4">
        Contact me
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const mobileMenuOpen = ref(false);
const isDark = ref(false);

onMounted(() => {
  // Check initial theme state on mount
  if (document.documentElement.classList.contains('dark')) {
    isDark.value = true;
  }
});

const toggleTheme = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    isDark.value = false;
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    isDark.value = true;
  }
};
</script>
