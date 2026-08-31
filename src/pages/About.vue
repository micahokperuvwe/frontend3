<template>
  <div class="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-main)] flex flex-col justify-between">
    <Navbar />

    <main class="flex-1 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span class="section-label">
            OUR MISSION & CREDIBILITY
          </span>
          <h1 class="font-display font-black text-4xl sm:text-5xl text-[var(--color-text-main)] mt-4">
            Brand-Forward Engineering
          </h1>
          <p class="text-[var(--color-text-muted)] text-base leading-relaxed font-semibold">
            We bridge high-end brand aesthetics with data-driven conversion paths, empowering ambitious teams to stand out and scale reliably.
          </p>
        </div>

        <!-- Vision & Values Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div class="card-brief p-8 space-y-4">
            <div class="w-10 h-10 rounded bg-[var(--color-accent)] texttext-[var(--color-text-main)] font-bold shadow-[2px_2px_0px_var(--color-border)]">
              01
            </div>
            <h3 class="font-display text-xl font-black text-[var(--color-text-main)]">Clear Over Clever</h3>
            <p class="text-xs text-[var(--color-text-muted)] leading-relaxed font-semibold">
              Copy and visual hierarchy should speak directly to results — growth, visibility, ROI — using plain, active language. No jargon-heavy filler.
            </p>
          </div>

          <div class="card-brief p-8 space-y-4">
            <div class="w-10 h-10 rounded bg-[var(--color-accent)] texttext-[var(--color-text-main)] font-bold shadow-[2px_2px_0px_var(--color-border)]">
              02
            </div>
            <h3 class="font-display text-xl font-black text-[var(--color-text-main)]">Data-Driven Precision</h3>
            <p class="text-xs text-[var(--color-text-muted)] leading-relaxed font-semibold">
              Every layout decision, color accent, and CTA placement is guided by empirical performance metrics and real conversion data.
            </p>
          </div>

          <div class="card-brief p-8 space-y-4">
            <div class="w-10 h-10 rounded bg-[var(--color-bg-main)] border-2 border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] font-bold shadow-[2px_2px_0px_var(--color-border)]">
              03
            </div>
            <h3 class="font-display text-xl font-black text-[var(--color-text-main)]">Scale-Ready Architecture</h3>
            <p class="text-xs text-[var(--color-text-muted)] leading-relaxed font-semibold">
              Built on production-grade Vue 3, TypeScript, and Express Node.js backends ensuring your site loads fast and handles high traffic with ease.
            </p>
          </div>
        </div>

        <!-- Technical Stack Showcase -->
        <div class="card-brief p-10 sm:p-12 mb-20 shadow-[6px_6px_0px_var(--color-border)] bg-[var(--color-bg-main)]">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span class="font-data text-xs font-bold bg-[var(--color-accent)] text-[var(--color-accent-text)] px-2 py-0.5 border border-[var(--color-border)] rounded shadow-[1px_1px_0px_var(--color-border)]">TECHNOLOGY STACK</span>
              <h2 class="font-display font-black text-2xl text-[var(--color-text-main)] mt-3">Built with Modern Web Standards</h2>
            </div>
            <span class="font-data text-xs text-[var(--color-text-main)] border-2 border-[var(--color-border)] px-3 py-1 rounded bg-[var(--color-bg-main)] w-fit font-bold shadow-[2px_2px_0px_var(--color-border)]">
              PERFORMANCE FIRST
            </span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="tech in techStack" :key="tech.name" class="bg-[var(--color-bg-main)] border-2 border-[var(--color-border)] p-4 rounded text-center hover:bg-[var(--color-bg-sec)] transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">
              <div class="font-data font-bold text-sm text-[var(--color-text-main)]">{{ tech.name }}</div>
              <div class="text-[10px] text-[var(--color-text-muted)] mt-1 font-data font-semibold">{{ tech.role }}</div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center">
          <router-link to="/contact" class="btn-amber text-base px-8 py-3.5 inline-flex items-center gap-2">
            <span>Work With Micah</span>
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
