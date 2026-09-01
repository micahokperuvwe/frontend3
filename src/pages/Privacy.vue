<template>
  <div class="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-main)] flex flex-col justify-between">
    <Navbar />

    <main class="flex-1 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border border-[var(--color-border)] p-8 sm:p-12 bg-[var(--color-bg-card)]">
          <span class="font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)] block mb-3">Legal Documentation</span>
          <h1 class="font-display font-black text-3xl sm:text-4xl text-[var(--color-text-main)] mb-6">Privacy Policy</h1>
          <p class="text-xs text-[var(--color-text-muted)] font-data mb-8">Last Updated: September 2026</p>

          <div class="space-y-8 text-sm leading-relaxed text-[var(--color-text-main)]">
            <section class="space-y-3">
              <h2 class="font-display font-bold text-lg">1. Information Collection</h2>
              <p class="text-[var(--color-text-muted)]">
                We collect personal information that you voluntarily provide when contacting Micah Okperuvwe directly via phone call, WhatsApp, or email (such as your name, email address, phone number, and project details).
              </p>
            </section>

            <section class="space-y-3">
              <h2 class="font-display font-bold text-lg">2. How Information is Used</h2>
              <p class="text-[var(--color-text-muted)]">
                Your data is exclusively used to respond to inquiries, evaluate project architecture, provide proposals, and communicate during active development contracts. We do not sell or distribute personal data to third parties.
              </p>
            </section>

            <section class="space-y-3">
              <h2 class="font-display font-bold text-lg">3. Data Security</h2>
              <p class="text-[var(--color-text-muted)]">
                We implement industry-standard administrative and technical security measures to maintain the safety of your information.
              </p>
            </section>

            <section class="space-y-3">
              <h2 class="font-display font-bold text-lg">4. Inquiries</h2>
              <p class="text-[var(--color-text-muted)]">
                For questions regarding this Privacy Policy or your personal information, email micahokperuvwe@gmail.com or call 09121168900.
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
