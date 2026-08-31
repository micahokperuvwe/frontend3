<template>
  <div class="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-main)] flex flex-col justify-between">
    <Navbar />

    <main class="flex-1 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span class="section-label">
            SOLUTIONS & CAPABILITIES
          </span>
          <h1 class="font-display font-black text-4xl sm:text-5xl text-[var(--color-text-main)] mt-4">
            High-Performance Web Solutions
          </h1>
          <p class="text-[var(--color-text-muted)] text-base leading-relaxed font-semibold">
            From conversion-ready design systems to production-grade Node.js / Vue 3 full-stack applications, we build digital products engineered for growth.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <ServiceCard
            tag="STRATEGY & UX"
            title="Conversion Path Optimization"
            description="We audit existing user funnels to identify friction points and restructure page hierarchy around clear calls-to-action."
            :deliverables="[
              'User journey & drop-off analysis',
              'High-converting hero wireframes',
              'Low-friction form architecture',
              'A/B test ready page flows'
            ]"
          >
            <template #icon>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </template>
          </ServiceCard>

          <ServiceCard
            tag="VISUAL FOUNDATION"
            title="Brand-Forward Design Systems"
            description="Built around modern Space Grotesk typography, electric layouts, and minimalist templates that inspire instant authority."
            :deliverables="[
              'Custom minimalist color tokens',
              'Reusable UI building block library',
              'Solid shadow components',
              'Fully responsive mobile layouts'
            ]"
          >
            <template #icon>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
              </svg>
            </template>
          </ServiceCard>

          <ServiceCard
            tag="ENGINEERING"
            title="Full-Stack Web Engineering"
            description="Clean TypeScript, Express API backends, MongoDB persistence, and Cloudinary media upload pipelines."
            :deliverables="[
              'Vue 3 + Vite Single Page App',
              'Node.js / Express REST API',
              'MongoDB database models & indexing',
              'Secure admin content dashboard'
            ]"
          >
            <template #icon>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </template>
          </ServiceCard>
        </div>

        <!-- How It Works / Process -->
        <div class="card-brief p-10 sm:p-12 mb-20 bg-[var(--color-bg-main)] shadow-[6px_6px_0px_var(--color-border)]">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="font-data text-xs font-bold bg-[var(--color-accent)] text-[var(--color-accent-text)] px-2 py-0.5 border border-[var(--color-border)] rounded shadow-[1px_1px_0px_var(--color-border)]">PROCESS</span>
            <h2 class="font-display font-black text-3xl text-[var(--color-text-main)] mt-3">How We Deliver Results</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <div class="space-y-3">
              <div class="font-data font-black text-2xl text-[var(--color-text-main)]">01. AUDIT</div>
              <h3 class="font-display text-lg font-bold text-[var(--color-text-main)]">Strategy & Goal Setting</h3>
              <p class="text-xs text-[var(--color-text-muted)] leading-relaxed font-semibold">Analyzing target audience, competitors, and conversion metrics to map out project goals.</p>
            </div>
            <div class="space-y-3">
              <div class="font-data font-black text-2xl text-[var(--color-text-main)]">02. WIREFRAME</div>
              <h3 class="font-display text-lg font-bold text-[var(--color-text-main)]">Layout Blueprint</h3>
              <p class="text-xs text-[var(--color-text-muted)] leading-relaxed font-semibold">Structuring headlines, value props, and solid CTA paths for optimum conversion flow.</p>
            </div>
            <div class="space-y-3">
              <div class="font-data font-black text-2xl text-[var(--color-text-main)]">03. CODE</div>
              <h3 class="font-display text-lg font-bold text-[var(--color-text-main)]">Build & Integrate</h3>
              <p class="text-xs text-[var(--color-text-muted)] leading-relaxed font-semibold">Crafting custom Vue 3 components and integrating fast Express / MongoDB backends.</p>
            </div>
            <div class="space-y-3">
              <div class="font-data font-black text-2xl bg-[var(--color-accent)] text-[var(--color-accent-text)] px-1 border border-[var(--color-border)] rounded shadow-[1px_1px_0px_var(--color-border)]">04. LAUNCH</div>
              <h3 class="font-display text-lg font-bold text-[var(--color-text-main)] mt-2">Deploy & Scale</h3>
              <p class="text-xs text-[var(--color-text-muted)] leading-relaxed font-semibold">Rigorous performance testing, SEO optimization, and live deployment.</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center">
          <router-link to="/contact" class="btn-amber text-base px-8 py-3.5 inline-flex items-center gap-2">
            <span>Schedule A Strategy Call</span>
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
import ServiceCard from '../components/ServiceCard.vue';
</script>
