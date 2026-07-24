<template>
  <footer class="bg-[#061226] border-t border-[#17D9E8]/10 text-slate-400 pt-16 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <!-- Brand Info & Founder -->
        <div class="md:col-span-1 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-[#17D9E8]/10 border border-[#17D9E8]/40 flex items-center justify-center">
              <span class="font-display font-bold text-base text-[#17D9E8]">⚡</span>
            </div>
            <span class="font-display font-bold text-lg text-white">NEXUS<span class="text-[#17D9E8]">.</span>ANALYTICS</span>
          </div>
          <p class="text-xs leading-relaxed text-slate-400">
            A brand-forward, conversion-ready web agency led by <strong class="text-white">Micah Okperuvwe</strong> — engineered around data-driven growth, signal cyan aesthetics, and clean conversion paths.
          </p>
          <div class="font-data text-xs text-[#17D9E8] bg-[#17D9E8]/10 inline-block px-3 py-1 rounded-full border border-[#17D9E8]/20">
            FOUNDER: MICAH OKPERUVWE
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-display font-semibold text-white text-sm mb-4">Navigation</h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/" class="hover:text-[#17D9E8] transition-colors">Home</router-link></li>
            <li><router-link to="/services" class="hover:text-[#17D9E8] transition-colors">Services & Solutions</router-link></li>
            <li><router-link to="/case-studies" class="hover:text-[#17D9E8] transition-colors">Case Studies & Proof</router-link></li>
            <li><router-link to="/about" class="hover:text-[#17D9E8] transition-colors">About Micah Okperuvwe</router-link></li>
            <li><router-link to="/contact" class="hover:text-[#17D9E8] transition-colors">Contact / Work With Us</router-link></li>
          </ul>
        </div>

        <!-- Direct Contact Details -->
        <div>
          <h4 class="font-display font-semibold text-white text-sm mb-4">Direct Contact</h4>
          <ul class="space-y-3 text-xs">
            <li class="flex items-center gap-2">
              <span class="text-[#17D9E8]">👨‍💻</span>
              <span class="text-slate-200 font-semibold">Micah Okperuvwe</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-[#17D9E8]">📧</span>
              <a href="mailto:micahokperuvwe@gmail.com" class="font-data text-[#17D9E8] hover:underline">
                micahokperuvwe@gmail.com
              </a>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-[#F2A93B]">📞</span>
              <a href="tel:09121168900" class="font-data text-[#F2A93B] font-bold hover:underline">
                09121168900
              </a>
            </li>
          </ul>
        </div>

        <!-- Call to Action -->
        <div>
          <h4 class="font-display font-semibold text-white text-sm mb-4">Ready to Grow?</h4>
          <p class="text-xs text-slate-400 mb-4">Let real numbers and data-driven storytelling transform your web conversion rate.</p>
          <router-link to="/contact" class="btn-amber text-xs py-2 px-4 w-full justify-center">
            Call or Email Micah →
          </router-link>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {{ new Date().getFullYear() }} Micah Okperuvwe / Nexus Analytics. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="mailto:micahokperuvwe@gmail.com" class="hover:text-[#17D9E8] transition-colors">micahokperuvwe@gmail.com</a>
          <a href="tel:09121168900" class="hover:text-[#F2A93B] transition-colors">09121168900</a>
          <router-link to="/admin" class="hover:text-[#F2A93B] transition-colors">Admin Portal</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
