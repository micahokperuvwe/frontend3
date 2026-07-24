<template>
  <div class="min-h-screen bg-[#0B1E3D] text-slate-100 flex flex-col justify-between">
    <Navbar />

    <main class="flex-1 py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span class="font-data text-xs font-semibold text-[#17D9E8] uppercase tracking-widest bg-[#17D9E8]/10 px-3.5 py-1.5 rounded-full border border-[#17D9E8]/20">
            DIRECT MANUAL CONTACT
          </span>
          <h1 class="font-display font-bold text-4xl sm:text-5xl text-white">
            Get In Touch With Micah Okperuvwe
          </h1>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            Skip the forms. Reach out directly via phone call, WhatsApp, or email for immediate consultations and tailored project strategy.
          </p>
        </div>

        <!-- High-Impact Direct Contact Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <!-- PHONE / CALL / WHATSAPP CARD -->
          <div class="card-brief p-8 sm:p-10 border-[#F2A93B]/30 flex flex-col justify-between relative overflow-hidden group cyan-glow-sm">
            <div class="absolute top-0 left-0 right-0 h-1 bg-[#F2A93B]"></div>
            
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <div class="w-14 h-14 rounded-2xl bg-[#F2A93B]/10 border border-[#F2A93B]/40 flex items-center justify-center text-2xl text-[#F2A93B] group-hover:scale-110 transition-transform">
                  📞
                </div>
                <span class="font-data text-xs font-bold text-[#F2A93B] bg-[#F2A93B]/10 px-3 py-1 rounded-full border border-[#F2A93B]/30 uppercase">
                  INSTANT CALL
                </span>
              </div>

              <div>
                <h3 class="font-display font-bold text-2xl text-white">Phone / Call / WhatsApp</h3>
                <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                  Call or message Micah Okperuvwe directly for immediate project inquiries, proposals, and strategy calls.
                </p>
              </div>

              <div class="bg-[#061226] p-4 rounded-xl border border-slate-800 font-data text-center">
                <div class="text-xs text-slate-400 uppercase tracking-wider mb-1">Direct Phone Number</div>
                <div class="text-2xl font-bold text-[#F2A93B]">09121168900</div>
              </div>
            </div>

            <div class="pt-8">
              <a href="tel:09121168900" class="btn-amber w-full justify-center text-base py-3.5 shadow-lg">
                <span>Call Now: 09121168900</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <!-- DIRECT EMAIL CARD -->
          <div class="card-brief p-8 sm:p-10 border-[#17D9E8]/30 flex flex-col justify-between relative overflow-hidden group cyan-glow-sm">
            <div class="absolute top-0 left-0 right-0 h-1 bg-[#17D9E8]"></div>

            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <div class="w-14 h-14 rounded-2xl bg-[#17D9E8]/10 border border-[#17D9E8]/40 flex items-center justify-center text-2xl text-[#17D9E8] group-hover:scale-110 transition-transform">
                  📧
                </div>
                <span class="font-data text-xs font-bold text-[#17D9E8] bg-[#17D9E8]/10 px-3 py-1 rounded-full border border-[#17D9E8]/30 uppercase">
                  DIRECT EMAIL
                </span>
              </div>

              <div>
                <h3 class="font-display font-bold text-2xl text-white">Email Consultation</h3>
                <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                  Send your project brief, scope details, or requirements directly to Micah's primary inbox.
                </p>
              </div>

              <div class="bg-[#061226] p-4 rounded-xl border border-slate-800 font-data text-center">
                <div class="text-xs text-slate-400 uppercase tracking-wider mb-1">Direct Email Address</div>
                <div class="text-sm font-bold text-[#17D9E8] break-all">micahokperuvwe@gmail.com</div>
              </div>
            </div>

            <div class="pt-8">
              <a href="mailto:micahokperuvwe@gmail.com" class="btn-cyan-outline w-full justify-center text-base py-3.5 shadow-lg">
                <span>Email Micah Directly</span>
                <span>✉️</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Extra Contact Badges -->
        <div class="card-brief p-8 sm:p-10">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div class="space-y-2">
              <div class="font-data font-bold text-xl text-white">Micah Okperuvwe</div>
              <div class="text-xs text-slate-400 font-data uppercase tracking-wider">Lead Growth Engineer</div>
            </div>
            <div class="space-y-2">
              <div class="font-data font-bold text-xl text-[#17D9E8]">&lt; 24 Hours</div>
              <div class="text-xs text-slate-400 font-data uppercase tracking-wider">Guaranteed Response Time</div>
            </div>
            <div class="space-y-2">
              <div class="font-data font-bold text-xl text-[#F2A93B]">100% Confidential</div>
              <div class="text-xs text-slate-400 font-data uppercase tracking-wider">Direct Founder Access</div>
            </div>
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
