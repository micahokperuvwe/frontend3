<template>
  <footer class="bg-[var(--color-bg-sec)] border-t border-[var(--color-border)] text-[var(--color-text-main)] pt-16 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <!-- Brand Info & Founder -->
        <div class="md:col-span-1 space-y-4">
          <div class="flex items-center gap-3">
            <span class="font-display font-black text-xl text-[var(--color-text-main)]">MICAH-WEB</span>
          </div>
          <p class="text-xs leading-relaxed text-[var(--color-text-muted)]">
            Digital architecture and full-stack software development by <strong class="text-[var(--color-text-main)]">Micah Okperuvwe</strong>. Built for high impact, clean code, and manual communication.
          </p>
          <div class="font-data text-xs bg-[var(--color-bg-main)] text-[var(--color-text-main)] px-3 py-1 border border-[var(--color-border)] inline-block font-bold">
            FOUNDER: MICAH OKPERUVWE
          </div>
        </div>

        <!-- Quick Links (Single-page anchors) -->
        <div>
          <h4 class="font-display font-bold text-[var(--color-text-main)] text-sm mb-4">Navigation</h4>
          <ul class="space-y-2 text-xs font-data uppercase tracking-wider">
            <li><a href="#hero" @click.prevent="scrollToSection('hero')" class="hover:underline text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors cursor-pointer">Home</a></li>
            <li><a href="#projects" @click.prevent="scrollToSection('projects')" class="hover:underline text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors cursor-pointer">Projects</a></li>
            <li><a href="#about" @click.prevent="scrollToSection('about')" class="hover:underline text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors cursor-pointer">About / Stack</a></li>
            <li><a href="#contact" @click.prevent="scrollToSection('contact')" class="hover:underline text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors cursor-pointer">Contact</a></li>
          </ul>
        </div>

        <!-- Direct Contact Details -->
        <div>
          <h4 class="font-display font-bold text-[var(--color-text-main)] text-sm mb-4">Direct Inquiries</h4>
          <ul class="space-y-3 text-xs font-data">
            <li>
              <div class="text-[10px] uppercase text-[var(--color-text-muted)]">Principal Engineer</div>
              <div class="font-bold text-[var(--color-text-main)]">Micah Okperuvwe</div>
            </li>
            <li>
              <div class="text-[10px] uppercase text-[var(--color-text-muted)]">Direct Email</div>
              <a href="mailto:micahokperuvwe@gmail.com" class="text-[var(--color-text-main)] hover:underline">
                micahokperuvwe@gmail.com
              </a>
            </li>
            <li>
              <div class="text-[10px] uppercase text-[var(--color-text-muted)]">Direct Telephone</div>
              <a href="tel:09121168900" class="text-[var(--color-text-main)] hover:underline">
                09121168900
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal & Action -->
        <div>
          <h4 class="font-display font-bold text-[var(--color-text-main)] text-sm mb-4">Legal & Compliance</h4>
          <ul class="space-y-2 text-xs font-data uppercase tracking-wider mb-6">
            <li><router-link to="/terms" class="hover:underline text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">Terms of Service</router-link></li>
            <li><router-link to="/privacy" class="hover:underline text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">Privacy Policy</router-link></li>
          </ul>
          <a href="#contact" @click.prevent="scrollToSection('contact')" class="btn-amber text-xs py-2 px-4 w-full justify-center cursor-pointer">
            Inquire Directly
          </a>
        </div>
      </div>

      <div class="border-t border-[var(--color-border)]/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-data text-[var(--color-text-muted)]">
        <p>(C) {{ new Date().getFullYear() }} Micah Okperuvwe / MICAH-WEB. All rights reserved.</p>
        <div class="flex gap-6 uppercase tracking-wider">
          <router-link to="/terms" class="hover:underline">Terms</router-link>
          <router-link to="/privacy" class="hover:underline">Privacy</router-link>
          <router-link to="/admin" class="hover:underline">Admin</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>


