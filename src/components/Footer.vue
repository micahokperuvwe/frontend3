<template>
  <footer class="bg-[#f8f9fa] border-t-2 border-[#111111] text-[#111111] pt-16 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <!-- Brand Info & Founder -->
        <div class="md:col-span-1 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded bg-[#facc15] border-2 border-[#111111] flex items-center justify-center">
              <span class="font-display font-bold text-base text-[#111111]">⚡</span>
            </div>
            <span class="font-display font-black text-lg text-[#111111]">MICAH-WEB</span>
          </div>
          <p class="text-xs leading-relaxed text-[#555555]">
            A brand-forward, conversion-ready digital architecture portfolio by <strong class="text-[#111111]">Micah Okperuvwe</strong>. Built for high impact, clean layouts, and manual communication.
          </p>
          <div class="font-data text-xs text-[#111111] bg-[#facc15] px-3 py-1 rounded border-2 border-[#111111] inline-block font-bold">
            FOUNDER: MICAH OKPERUVWE
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-display font-bold text-[#111111] text-sm mb-4">Navigation</h4>
          <ul class="space-y-2 text-xs font-semibold">
            <li><router-link to="/" class="hover:text-[#e2b809] transition-colors">Home</router-link></li>
            <li><router-link to="/services" class="hover:text-[#e2b809] transition-colors">Services & Solutions</router-link></li>
            <li><router-link to="/case-studies" class="hover:text-[#e2b809] transition-colors">Projects & Case Studies</router-link></li>
            <li><router-link to="/about" class="hover:text-[#e2b809] transition-colors">About Micah</router-link></li>
            <li><router-link to="/contact" class="hover:text-[#e2b809] transition-colors">Contact / Call Micah</router-link></li>
          </ul>
        </div>

        <!-- Direct Contact Details -->
        <div>
          <h4 class="font-display font-bold text-[#111111] text-sm mb-4">Direct Contact</h4>
          <ul class="space-y-3 text-xs font-semibold">
            <li class="flex items-center gap-2">
              <span>👨‍💻</span>
              <span class="text-[#111111]">Micah Okperuvwe</span>
            </li>
            <li class="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:micahokperuvwe@gmail.com" class="font-data text-[#111111] hover:underline">
                micahokperuvwe@gmail.com
              </a>
            </li>
            <li class="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:09121168900" class="font-data text-[#111111] hover:underline">
                09121168900
              </a>
            </li>
          </ul>
        </div>

        <!-- Call to Action -->
        <div>
          <h4 class="font-display font-bold text-[#111111] text-sm mb-4">Ready to Work?</h4>
          <p class="text-xs text-[#555555] mb-4">Reach out manually via call or email for strategy chats and project estimates.</p>
          <router-link to="/contact" class="btn-amber text-xs py-2 px-4 w-full justify-center">
            Call or Email Micah →
          </router-link>
        </div>
      </div>

      <div class="border-t-2 border-[#111111]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555555] font-semibold">
        <p>© {{ new Date().getFullYear() }} Micah Okperuvwe / MICAH-WEB. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="mailto:micahokperuvwe@gmail.com" class="hover:text-[#e2b809] transition-colors">micahokperuvwe@gmail.com</a>
          <a href="tel:09121168900" class="hover:text-[#e2b809] transition-colors">09121168900</a>
          <router-link to="/admin" class="hover:text-[#e2b809] transition-colors">Admin Portal</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
