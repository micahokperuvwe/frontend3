<template>
  <div class="min-h-screen bg-[#0B1E3D] text-slate-100 flex flex-col justify-between">
    <Navbar />

    <main class="flex-1 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span class="font-data text-xs font-semibold text-[#17D9E8] uppercase tracking-widest bg-[#17D9E8]/10 px-3 py-1 rounded border border-[#17D9E8]/20">
            OUR MISSION & CREDIBILITY
          </span>
          <h1 class="font-display font-bold text-4xl sm:text-5xl text-white">
            Brand-Forward Engineering
          </h1>
          <p class="text-slate-300 text-base leading-relaxed">
            We bridge high-end brand aesthetics with data-driven conversion paths, empowering ambitious teams to stand out and scale reliably.
          </p>
        </div>

        <!-- Vision & Values Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div class="card-brief p-8 space-y-4">
            <div class="w-10 h-10 rounded-lg bg-[#17D9E8]/10 border border-[#17D9E8]/30 flex items-center justify-center text-[#17D9E8] font-bold">
              01
            </div>
            <h3 class="font-display text-xl font-semibold text-white">Clear Over Clever</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Copy and visual hierarchy should speak directly to results — growth, visibility, ROI — using plain, active language. No jargon-heavy filler.
            </p>
          </div>

          <div class="card-brief p-8 space-y-4">
            <div class="w-10 h-10 rounded-lg bg-[#17D9E8]/10 border border-[#17D9E8]/30 flex items-center justify-center text-[#17D9E8] font-bold">
              02
            </div>
            <h3 class="font-display text-xl font-semibold text-white">Data-Driven Precision</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Every layout decision, color accent, and CTA placement is guided by empirical performance metrics and real conversion data.
            </p>
          </div>

          <div class="card-brief p-8 space-y-4">
            <div class="w-10 h-10 rounded-lg bg-[#F2A93B]/10 border border-[#F2A93B]/30 flex items-center justify-center text-[#F2A93B] font-bold">
              03
            </div>
            <h3 class="font-display text-xl font-semibold text-white">Scale-Ready Architecture</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Built on production-grade Vue 3, TypeScript, and Express Node.js backends ensuring your site loads fast and handles high traffic with ease.
            </p>
          </div>
        </div>

        <!-- Technical Stack Showcase (JetBrains Mono Badges) -->
        <div class="card-brief p-10 sm:p-12 mb-20">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span class="font-data text-xs font-semibold text-[#17D9E8] uppercase tracking-widest">TECHNOLOGY STACK</span>
              <h2 class="font-display font-bold text-2xl text-white mt-1">Built with Modern Web Standards</h2>
            </div>
            <span class="font-data text-xs text-[#F2A93B] bg-[#F2A93B]/10 px-3 py-1 rounded border border-[#F2A93B]/30 w-fit">
              PERFORMANCE FIRST
            </span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="tech in techStack" :key="tech.name" class="bg-[#061226] border border-slate-800 p-4 rounded-lg text-center hover:border-[#17D9E8]/40 transition-colors">
              <div class="font-data font-bold text-sm text-[#17D9E8]">{{ tech.name }}</div>
              <div class="text-[10px] text-slate-400 mt-1 font-data">{{ tech.role }}</div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center">
          <router-link to="/contact" class="btn-amber text-base px-8 py-3.5 inline-flex items-center gap-2">
            <span>Work With Us</span>
            <span>→</span>
          </router-link>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

const techStack = [
  { name: 'Vue 3', role: 'Frontend Core' },
  { name: 'TypeScript', role: 'Type Safety' },
  { name: 'Tailwind CSS', role: 'Design Tokens' },
  { name: 'Vite 8', role: 'Build Engine' },
  { name: 'Node.js', role: 'Runtime' },
  { name: 'Express API', role: 'Backend Server' },
  { name: 'MongoDB', role: 'Database' },
  { name: 'Pinia', role: 'State Store' },
  { name: 'Space Grotesk', role: 'Display Font' },
  { name: 'JetBrains Mono', role: 'Data Font' },
  { name: 'Zod', role: 'Validation' },
  { name: 'Cloudinary', role: 'Media CDN' },
];
</script>
