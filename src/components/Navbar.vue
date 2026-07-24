<template>
  <nav class="sticky top-0 z-50 bg-[#0B1E3D]/90 backdrop-blur-md border-b border-[#17D9E8]/10 shadow-lg transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#17D9E8]/20 to-[#0B1E3D] border border-[#17D9E8]/40 flex items-center justify-center shadow-[0_0_15px_rgba(23,217,232,0.3)] group-hover:scale-105 transition-transform">
            <span class="font-display font-bold text-xl text-[#17D9E8]">⚡</span>
          </div>
          <div class="flex flex-col">
            <span class="font-display font-bold text-xl tracking-tight text-white group-hover:text-[#17D9E8] transition-colors">
              NEXUS<span class="text-[#17D9E8]">.</span>ANALYTICS
            </span>
            <span class="font-data text-[10px] tracking-widest uppercase text-[#17D9E8]/80">Data-Driven Growth</span>
          </div>
        </router-link>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center gap-8">
          <router-link to="/" class="text-sm font-medium text-slate-300 hover:text-[#17D9E8] transition-colors" active-class="text-[#17D9E8] font-semibold">
            Home
          </router-link>
          <router-link to="/services" class="text-sm font-medium text-slate-300 hover:text-[#17D9E8] transition-colors" active-class="text-[#17D9E8] font-semibold">
            Services
          </router-link>
          <router-link to="/case-studies" class="text-sm font-medium text-slate-300 hover:text-[#17D9E8] transition-colors" active-class="text-[#17D9E8] font-semibold">
            Case Studies
          </router-link>
          <router-link to="/about" class="text-sm font-medium text-slate-300 hover:text-[#17D9E8] transition-colors" active-class="text-[#17D9E8] font-semibold">
            About
          </router-link>
          <router-link to="/contact" class="text-sm font-medium text-slate-300 hover:text-[#17D9E8] transition-colors" active-class="text-[#17D9E8] font-semibold">
            Contact
          </router-link>
        </div>

        <!-- Primary CTA Button (Amber per brief) -->
        <div class="hidden md:flex items-center gap-4">
          <router-link to="/contact" class="btn-amber text-sm py-2.5 px-5">
            <span>Get Started</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-slate-300 hover:text-[#17D9E8] p-2 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-[#061226] border-b border-[#17D9E8]/20 px-4 pt-2 pb-6 space-y-3">
      <router-link to="/" @click="mobileMenuOpen = false" class="block text-slate-200 hover:text-[#17D9E8] py-2 font-medium">Home</router-link>
      <router-link to="/services" @click="mobileMenuOpen = false" class="block text-slate-200 hover:text-[#17D9E8] py-2 font-medium">Services</router-link>
      <router-link to="/case-studies" @click="mobileMenuOpen = false" class="block text-slate-200 hover:text-[#17D9E8] py-2 font-medium">Case Studies</router-link>
      <router-link to="/about" @click="mobileMenuOpen = false" class="block text-slate-200 hover:text-[#17D9E8] py-2 font-medium">About</router-link>
      <router-link to="/contact" @click="mobileMenuOpen = false" class="block text-slate-200 hover:text-[#17D9E8] py-2 font-medium">Contact</router-link>
      <router-link to="/contact" @click="mobileMenuOpen = false" class="btn-amber w-full justify-center text-center mt-3">
        Get Started →
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
</script>
