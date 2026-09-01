<template>
  <nav class="sticky top-0 z-50 bg-[var(--color-bg-main)] border-b border-[var(--color-border)]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 relative">
        
        <!-- Left: Logo -->
        <a href="#hero" @click.prevent="scrollToSection('hero')" class="flex items-center gap-2 group z-10 cursor-pointer">
          <span class="font-display font-black text-2xl tracking-tight text-[var(--color-text-main)]">
            MICAH-WEB
          </span>
        </a>

        <!-- Center: Desktop Navigation Links -->
        <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
          <a href="#hero" @click.prevent="scrollToSection('hero')" class="font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors cursor-pointer">
            Home
          </a>
          <a href="#projects" @click.prevent="scrollToSection('projects')" class="font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors cursor-pointer">
            Projects
          </a>
          <a href="#about" @click.prevent="scrollToSection('about')" class="font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors cursor-pointer">
            About
          </a>
          <a href="#contact" @click.prevent="scrollToSection('contact')" class="font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors cursor-pointer">
            Contact
          </a>
        </div>

        <!-- Right: Theme Toggle & Primary CTA Button -->
        <div class="hidden md:flex items-center gap-4 z-10">
          <button @click="toggleTheme" class="p-2 border border-[var(--color-border)] text-[var(--color-text-main)] hover:bg-[var(--color-bg-sec)] transition-colors cursor-pointer font-data text-xs" title="Toggle Theme">
            <span v-if="!isDark">DARK</span>
            <span v-else>LIGHT</span>
          </button>
          
          <a href="#contact" @click.prevent="scrollToSection('contact')" class="btn-amber text-xs py-2 px-5 cursor-pointer">
            Get In Touch
          </a>
        </div>

        <!-- Mobile menu & Theme toggle buttons -->
        <div class="flex md:hidden items-center gap-3">
          <button @click="toggleTheme" class="px-2 py-1 border border-[var(--color-border)] font-data text-xs text-[var(--color-text-main)]" title="Toggle Theme">
            <span v-if="!isDark">DARK</span>
            <span v-else>LIGHT</span>
          </button>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-[var(--color-text-main)] p-1 border border-[var(--color-border)] text-xs font-data uppercase px-2 py-1 cursor-pointer">
            Menu
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-[var(--color-bg-main)] border-b border-[var(--color-border)] px-4 pt-2 pb-6 space-y-3">
      <a href="#hero" @click.prevent="scrollToSection('hero')" class="block font-data text-xs uppercase tracking-wider text-[var(--color-text-main)] py-2">Home</a>
      <a href="#projects" @click.prevent="scrollToSection('projects')" class="block font-data text-xs uppercase tracking-wider text-[var(--color-text-main)] py-2">Projects</a>
      <a href="#about" @click.prevent="scrollToSection('about')" class="block font-data text-xs uppercase tracking-wider text-[var(--color-text-main)] py-2">About</a>
      <a href="#contact" @click.prevent="scrollToSection('contact')" class="block font-data text-xs uppercase tracking-wider text-[var(--color-text-main)] py-2">Contact</a>
      <a href="#contact" @click.prevent="scrollToSection('contact')" class="block btn-amber text-center text-xs py-3 mt-4 w-full">
        Get In Touch
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const mobileMenuOpen = ref(false);
const isDark = ref(false);
const router = useRouter();
const route = useRoute();

const scrollToSection = (id: string) => {
  mobileMenuOpen.value = false;
  if (route.path !== '/') {
    router.push(`/#${id}`).then(() => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
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


