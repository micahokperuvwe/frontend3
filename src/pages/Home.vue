<template>
  <div class="min-h-screen bg-[#0B1E3D] text-slate-100 selection:bg-[#17D9E8] selection:text-[#0B1E3D] flex flex-col justify-between">
    <!-- Sticky Navbar -->
    <Navbar />

    <main class="flex-1">
      <!-- HERO SECTION -->
      <section class="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <!-- Glowing Ambient Lighting Backdrops -->
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#17D9E8]/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div class="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#F2A93B]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Hero Text Content -->
            <div class="lg:col-span-7 space-y-8 text-left">
              <!-- Brief & Founder Badge -->
              <div class="flex flex-wrap items-center gap-3">
                <div class="inline-flex items-center gap-2 bg-[#17D9E8]/10 border border-[#17D9E8]/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                  <span class="w-2 h-2 rounded-full bg-[#17D9E8] animate-pulse"></span>
                  <span class="font-data text-xs font-semibold text-[#17D9E8] uppercase tracking-widest">
                    BRAND-FORWARD & CONVERSION-READY
                  </span>
                </div>
                <div class="inline-flex items-center gap-1.5 bg-[#F2A93B]/10 border border-[#F2A93B]/30 px-3 py-1.5 rounded-full">
                  <span class="text-xs">👨‍💻</span>
                  <span class="font-data text-xs font-bold text-[#F2A93B]">BY MICAH OKPERUVWE</span>
                </div>
              </div>

              <!-- Main Headline (Space Grotesk) -->
              <h1 class="font-display font-bold text-4xl sm:text-6xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                A Brand-Forward, <br class="hidden sm:inline" />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#17D9E8]">
                  Conversion-Ready
                </span> <br />
                Website Direction
              </h1>

              <!-- Subtitle Copy -->
              <p class="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                A visual and structural blueprint for a modern, credible site — engineered by <strong class="text-white">Micah Okperuvwe</strong> around a confident dark-and-cyan palette, data-driven storytelling, and clean conversion paths.
              </p>

              <!-- CTA Button Trio (Amber + Cyan Outline + Direct Call) -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <router-link to="/contact" class="btn-amber text-base px-7 py-3.5 shadow-lg shadow-[#F2A93B]/20">
                  <span>Work With Me</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </router-link>

                <a href="tel:09121168900" class="btn-cyan-outline text-base px-6 py-3.5 font-data">
                  <span>📞 Call: 09121168900</span>
                </a>
              </div>

              <!-- Trust Metrics Bar -->
              <div class="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div class="font-data font-bold text-2xl text-[#17D9E8]">+184%</div>
                  <div class="text-[11px] text-slate-400 font-medium">Conversion Lift</div>
                </div>
                <div>
                  <div class="font-data font-bold text-2xl text-white">4.2x</div>
                  <div class="text-[11px] text-slate-400 font-medium">Average ROI</div>
                </div>
                <div>
                  <div class="font-data font-bold text-2xl text-[#F2A93B]">99.9%</div>
                  <div class="text-[11px] text-slate-400 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <!-- Hero Image / Visual Graphic from Design Brief -->
            <div class="lg:col-span-5">
              <div class="relative rounded-2xl p-1 bg-gradient-to-tr from-[#17D9E8]/30 via-slate-800/50 to-[#F2A93B]/20 cyan-glow">
                <div class="relative rounded-xl bg-[#061226] p-6 overflow-hidden">
                  <!-- Mockup Header -->
                  <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span class="font-data text-[10px] text-[#17D9E8] bg-[#17D9E8]/10 px-2 py-0.5 rounded border border-[#17D9E8]/20">
                      LIVE ANALYTICS DASHBOARD
                    </span>
                  </div>

                  <!-- Glowing Growth Chart Illustration -->
                  <div class="space-y-6">
                    <div class="flex items-end justify-between h-40 pt-6 px-2 gap-2 border-b border-slate-800/80">
                      <div class="w-1/6 bg-gradient-to-t from-[#17D9E8]/10 to-[#17D9E8]/40 h-[30%] rounded-t"></div>
                      <div class="w-1/6 bg-gradient-to-t from-[#17D9E8]/20 to-[#17D9E8]/60 h-[45%] rounded-t"></div>
                      <div class="w-1/6 bg-gradient-to-t from-[#17D9E8]/30 to-[#17D9E8]/80 h-[65%] rounded-t"></div>
                      <div class="w-1/6 bg-gradient-to-t from-[#17D9E8]/40 to-[#17D9E8] h-[85%] rounded-t shadow-[0_0_15px_rgba(23,217,232,0.5)]"></div>
                      <div class="w-1/6 bg-gradient-to-t from-[#F2A93B]/40 to-[#F2A93B] h-[100%] rounded-t shadow-[0_0_15px_rgba(242,169,59,0.5)]"></div>
                    </div>

                    <!-- Stat Summary Pills -->
                    <div class="grid grid-cols-2 gap-3">
                      <div class="bg-[#0B1E3D] p-3 rounded-lg border border-[#17D9E8]/20">
                        <div class="font-data text-[10px] text-slate-400">ORGANIC REACH</div>
                        <div class="font-data text-base font-bold text-[#17D9E8]">+240.5%</div>
                      </div>
                      <div class="bg-[#0B1E3D] p-3 rounded-lg border border-[#F2A93B]/20">
                        <div class="font-data text-[10px] text-slate-400">PIPELINE VALUE</div>
                        <div class="font-data text-base font-bold text-[#F2A93B]">$1.4M+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- DATA CALLOUTS SECTION (Stats Numerals from Brief Page 4) -->
      <section class="py-16 bg-[#061226] border-y border-[#17D9E8]/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="font-data text-xs font-semibold text-[#17D9E8] uppercase tracking-widest">
              MEASURABLE OUTCOMES
            </span>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
              Data-Backed Performance Indicators
            </h2>
            <p class="text-slate-400 text-sm mt-3">
              We replace guesswork with high-converting user flows and measurable analytics.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DataCallout
              tag="CONVERSION RATE"
              value="+184%"
              title="Higher Sign-up Rate"
              description="Engineered sales funnels designed to guide visitors directly into primary CTAs."
            />
            <DataCallout
              tag="SPEED & UX"
              value="0.8s"
              title="First Contentful Paint"
              description="Ultra-fast page response speed guaranteeing low bounce rates on all mobile devices."
            />
            <DataCallout
              tag="RETURN ON AD SPEND"
              value="4.2x"
              title="Average Client ROI"
              description="Targeted brand messaging that converts paid traffic into qualified leads."
            />
            <DataCallout
              tag="ACCESSIBILITY"
              value="99.9%"
              title="Uptime & Reliability"
              description="Production-grade cloud backend infrastructure built for high traffic scale."
            />
          </div>
        </div>
      </section>

      <!-- SERVICES & CAPABILITIES SECTION -->
      <section class="py-20 bg-[#0B1E3D]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span class="font-data text-xs font-semibold text-[#17D9E8] uppercase tracking-widest">
                CORE SOLUTIONS
              </span>
              <h2 class="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
                Engineered for Maximum Impact
              </h2>
            </div>
            <router-link to="/services" class="btn-cyan-outline text-xs py-2.5 px-5 w-fit">
              View All Services →
            </router-link>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              tag="CONVERSION ARCHITECTURE"
              title="Conversion Path Optimization"
              description="Restructure your digital touchpoints around clear value propositions, reducing friction and maximizing sales velocity."
              :deliverables="[
                'User Journey Mapping',
                'High-converting Hero Wireframes',
                'Frictionless Contact Forms'
              ]"
            >
              <template #icon>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </template>
            </ServiceCard>

            <ServiceCard
              tag="BRAND ENGINEERING"
              title="Brand-Forward Visual Identity"
              description="Establish instant technical credibility with confident midnight navy foundations, signal cyan highlights, and crisp typography."
              :deliverables="[
                'Space Grotesk & Inter Type Systems',
                'Modern Dark & Cyan Color Palettes',
                'Micro-animations & Interactive Cards'
              ]"
            >
              <template #icon>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </template>
            </ServiceCard>

            <ServiceCard
              tag="DATA INFRASTRUCTURE"
              title="Full-Stack Web Platforms"
              description="Fast Vue 3 / Node.js backend architectures backed by MongoDB database storage and real-time CMS control panels."
              :deliverables="[
                'Vue 3 + Vite Frontend Engine',
                'RESTful Node.js + Express API',
                'Dynamic Content Management Portal'
              ]"
            >
              <template #icon>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </template>
            </ServiceCard>
          </div>
        </div>
         <!-- FEATURED PROJECTS (Live from API) -->
      <section class="py-20 bg-[#050e1a]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p class="section-label mb-2">Selected Work</p>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-white">
                Recent Projects
              </h2>
            </div>
            <router-link to="/projects" class="btn-ghost text-sm">
              View all projects →
            </router-link>
          </div>

          <!-- Loading skeletons -->
          <div v-if="projectsLoading" class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="i in 3" :key="i" class="card-brief overflow-hidden">
              <div class="skeleton h-48"></div>
              <div class="p-5 space-y-3">
                <div class="skeleton h-4 w-3/4"></div>
                <div class="skeleton h-3 w-full"></div>
                <div class="flex gap-2 pt-1">
                  <div class="skeleton h-5 w-16 rounded"></div>
                  <div class="skeleton h-5 w-16 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard
              v-for="project in featuredProjects"
              :key="project.slug || project._id"
              :title="project.title"
              :description="project.short_description || project.description || ''"
              :category="project.category"
              :slug="project.slug"
              :imageUrl="project.thumbnail_image || project.imageUrl || ''"
              :technologies="project.technologies || []"
              :resultMetric="project.resultMetric || ''"
              :liveUrl="project.demo_url || ''"
            />
          </div>
        </div>
      </section>
      </section>

      <!-- HIGH CONVERSION BOTTOM CTA BANNER (Brief Page 4) -->
      <section class="py-20 bg-[#0B1E3D] relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-[#17D9E8]/10 via-transparent to-[#F2A93B]/10"></div>
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div class="card-brief p-10 sm:p-16 border-[#17D9E8]/30 cyan-glow">
            <span class="font-data text-xs font-semibold text-[#F2A93B] uppercase tracking-widest bg-[#F2A93B]/10 px-3 py-1 rounded border border-[#F2A93B]/30">
              START YOUR TRANSFORMATION
            </span>
            <h2 class="font-display font-bold text-3xl sm:text-5xl text-white mt-4 mb-6">
              Ready to Upgrade Your Website Direction?
            </h2>
            <p class="text-slate-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Partner with us to create a brand-forward, high-converting digital platform that drives revenue and builds instant authority.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <router-link to="/contact" class="btn-amber text-base px-8 py-4 shadow-xl">
                <span>Get Started Now</span>
                <span>→</span>
              </router-link>
              <router-link to="/services" class="btn-cyan-outline text-base px-8 py-4">
                <span>Explore Solutions</span>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DataCallout from '../components/DataCallout.vue';
import ServiceCard from '../components/ServiceCard.vue';
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';

const projectsLoading = ref(true);
const featuredProjects = ref<any[]>([]);

const staticFallback = [
  {
    _id: 's1', title: 'Fintech Analytics Dashboard', slug: 'fintech-analytics-dashboard',
    short_description: 'Real-time analytics web app for enterprise financial tracking.',
    category: 'FINTECH / SAAS',
    thumbnail_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue 3', 'TypeScript', 'MongoDB'], resultMetric: '+240% Growth', demo_url: '',
  },
  {
    _id: 's2', title: 'E-Commerce Conversion Redesign', slug: 'nextgen-ecommerce-redesign',
    short_description: 'Rebuilt checkout flow, resulting in record conversion rates.',
    category: 'E-COMMERCE',
    thumbnail_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['Tailwind CSS', 'Pinia', 'Express'], resultMetric: '3.8x Sales', demo_url: '',
  },
  {
    _id: 's3', title: 'Data Intelligence Portal', slug: 'enterprise-data-portal',
    short_description: 'Platform for real-time lead ingestion and executive reporting.',
    category: 'ANALYTICS',
    thumbnail_image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    technologies: ['TypeScript', 'Zod', 'Cloudinary'], resultMetric: '99.9% Uptime', demo_url: '',
  },
];

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

onMounted(async () => {
  try {
    const res = await axios.get(`${API_BASE}/api/projects`, { timeout: 6000 });
    const live = Array.isArray(res.data) ? res.data : [];
    featuredProjects.value = live.length > 0 ? live.slice(0, 3) : staticFallback;
  } catch {
    featuredProjects.value = staticFallback;
  } finally {
    projectsLoading.value = false;
  }
});
</script>
