<template>
  <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-[#111111] transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded bg-[#facc15] border-2 border-[#111111] flex items-center justify-center shadow-[2px_2px_0px_#111111] group-hover:scale-105 transition-transform">
            <span class="font-display font-bold text-xl text-[#111111]">⚡</span>
          </div>
          <div class="flex flex-col">
            <span class="font-display font-black text-xl tracking-tight text-[#111111] group-hover:text-[#e2b809] transition-colors">
              MICAH-WEB
            </span>
            <span class="font-data text-[9px] tracking-widest uppercase text-[#555555]">Digital Architect</span>
          </div>
        </router-link>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center gap-8">
          <router-link to="/" class="text-sm font-bold text-[#111111] hover:text-[#e2b809] transition-colors" active-class="text-[#e2b809]">
            Home
          </router-link>
          <router-link to="/services" class="text-sm font-bold text-[#111111] hover:text-[#e2b809] transition-colors" active-class="text-[#e2b809]">
            Services
          </router-link>
          <router-link to="/case-studies" class="text-sm font-bold text-[#111111] hover:text-[#e2b809] transition-colors" active-class="text-[#e2b809]">
            Projects
          </router-link>
          <router-link to="/about" class="text-sm font-bold text-[#111111] hover:text-[#e2b809] transition-colors" active-class="text-[#e2b809]">
            About
          </router-link>
          <router-link to="/contact" class="text-sm font-bold text-[#111111] hover:text-[#e2b809] transition-colors" active-class="text-[#e2b809]">
            Contact
          </router-link>
        </div>

        <!-- Primary CTA Button -->
        <div class="hidden md:flex items-center gap-4">
          <router-link to="/contact" class="btn-amber text-sm py-2 px-4">
            <span>Contact Micah</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-[#111111] hover:text-[#e2b809] p-2 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-b-2 border-[#111111] px-4 pt-2 pb-6 space-y-3">
      <router-link to="/" @click="mobileMenuOpen = false" class="block text-[#111111] hover:text-[#e2b809] py-2 font-bold">Home</router-link>
      <router-link to="/services" @click="mobileMenuOpen = false" class="block text-[#111111] hover:text-[#e2b809] py-2 font-bold">Services</router-link>
      <router-link to="/case-studies" @click="mobileMenuOpen = false" class="block text-[#111111] hover:text-[#e2b809] py-2 font-bold">Projects</router-link>
      <router-link to="/about" @click="mobileMenuOpen = false" class="block text-[#111111] hover:text-[#e2b809] py-2 font-bold">About</router-link>
      <router-link to="/contact" @click="mobileMenuOpen = false" class="block text-[#111111] hover:text-[#e2b809] py-2 font-bold">Contact</router-link>
      <router-link to="/contact" @click="mobileMenuOpen = false" class="btn-amber w-full justify-center text-center mt-3">
        Contact Micah →
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
</script>
