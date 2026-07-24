<template>
  <div class="min-h-screen bg-white text-[#111111] flex flex-col justify-between">
    <Navbar />

    <main class="flex-1 py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span class="section-label">
            DIRECT MANUAL CONTACT
          </span>
          <h1 class="font-display font-black text-4xl sm:text-5xl text-[#111111] mt-4">
            Get In Touch With Micah Okperuvwe
          </h1>
          <p class="text-[#555555] text-base sm:text-lg leading-relaxed font-semibold">
            Skip the forms. Reach out directly via phone call, WhatsApp, or email for immediate consultations and tailored project strategy.
          </p>
        </div>

        <!-- High-Impact Direct Contact Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <!-- PHONE / CALL / WHATSAPP CARD -->
          <div class="card-brief p-8 sm:p-10 border-[#111111] flex flex-col justify-between relative overflow-hidden group shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] bg-white">
            <div class="absolute top-0 left-0 right-0 h-2 bg-[#facc15] border-b-2 border-[#111111]"></div>
            
            <div class="space-y-6 pt-4">
              <div class="flex items-center justify-between">
                <div class="w-14 h-14 rounded bg-[#facc15] border-2 border-[#111111] flex items-center justify-center text-2xl text-[#111111] group-hover:scale-105 transition-transform shadow-[2px_2px_0px_#111111]">
                  📞
                </div>
                <span class="font-data text-xs font-bold text-[#111111] bg-[#facc15] px-3 py-1 rounded border border-[#111111] uppercase">
                  INSTANT CALL
                </span>
              </div>

              <div>
                <h3 class="font-display font-black text-2xl text-[#111111]">Phone & WhatsApp</h3>
                <p class="text-xs text-[#555555] mt-2 leading-relaxed font-semibold">
                  Call or message Micah Okperuvwe directly for immediate project inquiries, proposals, and strategy calls.
                </p>
              </div>

              <div class="bg-[#f8f9fa] p-4 rounded border-2 border-[#111111] font-data text-center shadow-[2px_2px_0px_#111111]">
                <div class="text-[10px] text-[#555555] uppercase tracking-wider mb-1 font-bold">Direct Phone Number</div>
                <div class="text-2xl font-black text-[#111111]">09121168900</div>
              </div>
            </div>

            <div class="pt-8">
              <a href="tel:09121168900" class="btn-amber w-full justify-center text-base py-3.5">
                <span>Call Now: 09121168900</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <!-- DIRECT EMAIL CARD -->
          <div class="card-brief p-8 sm:p-10 border-[#111111] flex flex-col justify-between relative overflow-hidden group shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] bg-white">
            <div class="absolute top-0 left-0 right-0 h-2 bg-[#111111] border-b-2 border-[#111111]"></div>

            <div class="space-y-6 pt-4">
              <div class="flex items-center justify-between">
                <div class="w-14 h-14 rounded bg-white border-2 border-[#111111] flex items-center justify-center text-2xl text-[#111111] group-hover:scale-105 transition-transform shadow-[2px_2px_0px_#111111]">
                  📧
                </div>
                <span class="font-data text-xs font-bold text-[#111111] bg-[#facc15] px-3 py-1 rounded border border-[#111111] uppercase">
                  DIRECT EMAIL
                </span>
              </div>

              <div>
                <h3 class="font-display font-black text-2xl text-[#111111]">Email Consultation</h3>
                <p class="text-xs text-[#555555] mt-2 leading-relaxed font-semibold">
                  Send your project brief, scope details, or requirements directly to Micah's primary inbox.
                </p>
              </div>

              <div class="bg-[#f8f9fa] p-4 rounded border-2 border-[#111111] font-data text-center shadow-[2px_2px_0px_#111111]">
                <div class="text-[10px] text-[#555555] uppercase tracking-wider mb-1 font-bold">Direct Email Address</div>
                <div class="text-sm font-black text-[#111111] break-all">micahokperuvwe@gmail.com</div>
              </div>
            </div>

            <div class="pt-8">
              <a href="mailto:micahokperuvwe@gmail.com" class="btn-cyan-outline w-full justify-center text-base py-3.5">
                <span>Email Micah Directly</span>
                <span>✉️</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Extra Contact Badges -->
        <div class="card-brief p-8 sm:p-10 bg-white">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div class="space-y-2">
              <div class="font-data font-black text-xl text-[#111111]">Micah Okperuvwe</div>
              <div class="text-xs text-[#555555] font-data uppercase tracking-wider font-bold">Lead Growth Engineer</div>
            </div>
            <div class="space-y-2">
              <div class="font-data font-black text-xl text-[#111111] bg-[#facc15] px-2 py-0.5 rounded border border-[#111111] inline-block shadow-[1px_1px_0px_#111111]">&lt; 24 Hours</div>
              <div class="text-xs text-[#555555] font-data uppercase tracking-wider font-bold mt-2">Guaranteed Response</div>
            </div>
            <div class="space-y-2">
              <div class="font-data font-black text-xl text-[#111111]">100% Direct</div>
              <div class="text-xs text-[#555555] font-data uppercase tracking-wider font-bold">Founder Access Only</div>
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
