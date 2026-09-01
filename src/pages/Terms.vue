<template>
  <div class="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-main)] flex flex-col justify-between">
    <Navbar />

    <main class="flex-1 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border border-[var(--color-border)] p-8 sm:p-12 bg-[var(--color-bg-card)]">
          <span class="font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)] block mb-3">Legal Documentation</span>
          <h1 class="font-display font-black text-3xl sm:text-4xl text-[var(--color-text-main)] mb-6">Terms of Service</h1>
          <p class="text-xs text-[var(--color-text-muted)] font-data mb-8">Last Updated: September 2026</p>

          <div class="space-y-8 text-sm leading-relaxed text-[var(--color-text-main)]">
            <section class="space-y-3">
              <h2 class="font-display font-bold text-lg">1. Agreement to Terms</h2>
              <p class="text-[var(--color-text-muted)]">
                By accessing and using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section class="space-y-3">
              <h2 class="font-display font-bold text-lg">2. Intellectual Property Rights</h2>
              <p class="text-[var(--color-text-muted)]">
                All source code, project designs, architecture documentation, case studies, graphics, and trademarks published on this website are the property of Micah Okperuvwe (MICAH-WEB) unless explicitly stated otherwise.
              </p>
            </section>

            <section class="space-y-3">
              <h2 class="font-display font-bold text-lg">3. Direct Consultation & Estimates</h2>
              <p class="text-[var(--color-text-muted)]">
                All inquiries submitted via telephone, WhatsApp, or email are confidential. Estimates and project scopes provided are non-binding until formal agreement and contractual milestones are executed.
              </p>
            </section>

            <section class="space-y-3">
              <h2 class="font-display font-bold text-lg">4. Contact Information</h2>
              <p class="text-[var(--color-text-muted)]">
                For questions regarding these Terms of Service, reach out directly to Micah Okperuvwe at micahokperuvwe@gmail.com or 09121168900.
              </p>
            </section>
          </div>

          <div class="mt-12 pt-6 border-t border-[var(--color-border)]/20">
            <router-link to="/" class="font-data text-xs uppercase tracking-wider underline hover:text-[var(--color-text-muted)]">
              Back to Welcome Page
            </router-link>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>
