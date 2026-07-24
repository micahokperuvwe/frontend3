<template>
  <div class="min-h-screen bg-white text-[#111111] selection:bg-[#facc15] selection:text-[#111111] flex flex-col justify-between">
    <!-- Sticky Navbar -->
    <Navbar />

    <main class="flex-1">
      <!-- HERO SECTION -->
      <section class="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b-2 border-[#111111]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Hero Text Content -->
            <div class="lg:col-span-7 space-y-8 text-left">
              <!-- Brief & Founder Badge -->
              <div class="flex flex-wrap items-center gap-3">
                <div class="inline-flex items-center gap-2 bg-[#facc15] border-2 border-[#111111] px-3.5 py-1.5 rounded shadow-[2px_2px_0px_#111111]">
                  <span class="w-2.5 h-2.5 rounded-full bg-white border border-[#111111] animate-ping"></span>
                  <span class="font-data text-xs font-extrabold text-[#111111] uppercase tracking-wider">
                    BRAND-FORWARD & CONVERSION-READY
                  </span>
                </div>
                <div class="inline-flex items-center gap-1.5 bg-white border-2 border-[#111111] px-3 py-1.5 rounded shadow-[2px_2px_0px_#111111]">
                  <span class="text-xs">👨‍💻</span>
                  <span class="font-data text-xs font-black text-[#111111]">BY MICAH OKPERUVWE</span>
                </div>
              </div>

              <!-- Main Headline (Plus Jakarta Sans) -->
              <h1 class="font-display font-black text-4xl sm:text-6xl lg:text-6xl text-[#111111] tracking-tight leading-[1.1]">
                High-Converting <br class="hidden sm:inline" />
                Digital platforms <br />
                <span class="bg-[#facc15] px-2 border-2 border-[#111111] inline-block mt-2 shadow-[4px_4px_0px_#111111] transform -rotate-1">
                  Engineered
                </span>
              </h1>

              <!-- Subtitle Copy -->
              <p class="text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed font-semibold">
                Welcome to <span class="font-bold text-[#111111]">my Platform</span>. I design and build highly customized websites, solid APIs, and interfaces designed to capture leads, showcase credentials, and convert visitors.
              </p>

              <!-- CTA Button Trio -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <router-link to="/contact" class="btn-amber text-base px-7 py-3.5">
                  <span>Work With Micah</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </router-link>

                <a href="tel:09121168900" class="btn-cyan-outline text-base px-6 py-3.5 font-data">
                  <span>📞 Call: 09121168900</span>
                </a>
              </div>

              <!-- Trust Metrics Bar -->
              <div class="pt-6 border-t-2 border-[#111111]/10 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div class="font-data font-black text-2xl text-[#111111] bg-[#facc15] px-2 py-0.5 border border-[#111111] rounded inline-block shadow-[1px_1px_0px_#111111]">+184%</div>
                  <div class="text-[11px] text-[#555555] font-bold mt-2 uppercase tracking-wide">Conversion Lift</div>
                </div>
                <div>
                  <div class="font-data font-black text-2xl text-[#111111] bg-[#facc15] px-2 py-0.5 border border-[#111111] rounded inline-block shadow-[1px_1px_0px_#111111]">4.2x</div>
                  <div class="text-[11px] text-[#555555] font-bold mt-2 uppercase tracking-wide">Average ROI</div>
                </div>
                <div>
                  <div class="font-data font-black text-2xl text-[#111111] bg-[#facc15] px-2 py-0.5 border border-[#111111] rounded inline-block shadow-[1px_1px_0px_#111111]">99.9%</div>
                  <div class="text-[11px] text-[#555555] font-bold mt-2 uppercase tracking-wide">System Uptime</div>
                </div>
              </div>
            </div>

            <!-- Hero Graphic (Neo-Minimalist Web Mockup) -->
            <div class="lg:col-span-5">
              <div class="relative rounded-lg border-2 border-[#111111] p-1 bg-white shadow-[8px_8px_0px_#111111]">
                <div class="relative rounded bg-white p-6 overflow-hidden">
                  <!-- Mockup Header -->
                  <div class="flex items-center justify-between border-b-2 border-[#111111] pb-4 mb-6">
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 rounded-full bg-[#111111]"></div>
                      <div class="w-3 h-3 rounded-full bg-[#111111]"></div>
                      <div class="w-3 h-3 rounded-full bg-[#111111]"></div>
                    </div>
                    <span class="font-data text-[10px] font-bold text-[#111111] bg-[#facc15] px-2.5 py-0.5 rounded border border-[#111111] shadow-[1px_1px_0px_#111111]">
                      SYSTEM STATISTICS
                    </span>
                  </div>

                  <!-- Graphic Elements -->
                  <div class="space-y-6">
                    <div class="flex items-end justify-between h-40 pt-6 px-2 gap-2 border-b-2 border-[#111111]">
                      <div class="w-1/6 bg-white border-2 border-[#111111] h-[30%] rounded-t shadow-[1px_1px_0px_#111111]"></div>
                      <div class="w-1/6 bg-white border-2 border-[#111111] h-[45%] rounded-t shadow-[1px_1px_0px_#111111]"></div>
                      <div class="w-1/6 bg-white border-2 border-[#111111] h-[65%] rounded-t shadow-[1px_1px_0px_#111111]"></div>
                      <div class="w-1/6 bg-[#facc15] border-2 border-[#111111] h-[85%] rounded-t shadow-[2px_2px_0px_#111111]"></div>
                      <div class="w-1/6 bg-[#111111] h-[100%] rounded-t"></div>
                    </div>

                    <!-- Stat Summary Pills -->
                    <div class="grid grid-cols-2 gap-3">
                      <div class="bg-white p-3 rounded border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
                        <div class="font-data text-[9px] text-[#555555] font-bold">REACH INCREASE</div>
                        <div class="font-data text-sm font-black text-[#111111]">+240.5%</div>
                      </div>
                      <div class="bg-white p-3 rounded border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
                        <div class="font-data text-[9px] text-[#555555] font-bold">PROPOSAL LIFT</div>
                        <div class="font-data text-sm font-black text-[#111111]">3.8x Speed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- DATA CALLOUTS SECTION -->
      <section class="py-16 bg-[#f8f9fa] border-b-2 border-[#111111]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="section-label">
              MEASURABLE OUTCOMES
            </span>
            <h2 class="font-display font-black text-3xl text-[#111111] mt-4">
              Real Performance Indicators
            </h2>
            <p class="text-[#555555] text-sm mt-3 font-semibold">
              We design simple user interfaces engineered around direct action and low friction.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DataCallout
              tag="CONVERSION"
              value="+184%"
              title="Higher Sign-up Rate"
              description="User experiences mapped to guide visitors directly into primary call actions."
            />
            <DataCallout
              tag="SPEED & UX"
              value="0.8s"
              title="First Paint Speed"
              description="Fast page load speeds ensuring higher retention rates on mobile networks."
            />
            <DataCallout
              tag="ROAS LIFT"
              value="4.2x"
              title="Average Campaign ROI"
              description="Targeted copy and layout structure designed to match paid advertising traffic."
            />
            <DataCallout
              tag="RELIABILITY"
              value="99.9%"
              title="System Uptime"
              description="Production-grade cloud code deployed using modern server backends."
            />
          </div>
        </div>
      </section>

      <!-- SERVICES & CAPABILITIES SECTION -->
      <section class="py-20 bg-white border-b-2 border-[#111111]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span class="section-label">
                CORE CAPABILITIES
              </span>
              <h2 class="font-display font-black text-3xl text-[#111111] mt-4">
                Structured Portfolio Solutions
              </h2>
            </div>
            <router-link to="/services" class="btn-cyan-outline text-xs py-2.5 px-5 w-fit">
              View All Services →
            </router-link>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              tag="CONVERSION DESIGN"
              title="Layout & Flow Optimization"
              description="Structuring web pages around clear message hierarchies, logical action buttons, and minimal cognitive load."
              :deliverables="[
                'User Journey Wireframes',
                'Clear Call-To-Action Layouts',
                'Optimized Mobile Flow'
              ]"
            >
              <template #icon>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </template>
            </ServiceCard>

            <ServiceCard
              tag="VISUAL SYSTEM"
              title="Modern Brand Architecture"
              description="Establish visual credibility with high-contrast minimalist grids, clean borders, bright accents, and solid typography."
              :deliverables="[
                'Plus Jakarta Sans Typography',
                'Minimalist High-Contrast Palette',
                'Solid Shadow Card Systems'
              ]"
            >
              <template #icon>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </template>
            </ServiceCard>

            <ServiceCard
              tag="FULL STACK"
              title="Modern Web Applications"
              description="Secure backend configurations combined with responsive Vue 3 components and structured database layers."
              :deliverables="[
                'Vue 3 Web App Development',
                'REST API Development (Node/Express)',
                'MongoDB Data Integration'
              ]"
            >
              <template #icon>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </template>
            </ServiceCard>
          </div>
        </div>
      </section>

      <!-- FEATURED PROJECTS (Live from API) -->
      <section class="py-20 bg-[#f8f9fa] border-b-2 border-[#111111]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span class="section-label mb-3">Selected Works</span>
              <h2 class="font-display font-black text-3xl text-[#111111] mt-4">
                Recent Projects
              </h2>
            </div>
            <router-link to="/case-studies" class="btn-cyan-outline text-xs py-2.5 px-5 w-fit">
              View All Projects →
            </router-link>
          </div>

          <!-- Loading skeletons -->
          <div v-if="projectsLoading" class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="i in 3" :key="i" class="card-brief overflow-hidden bg-white">
              <div class="skeleton h-48 border-b-2 border-[#111111]"></div>
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

      <!-- HIGH CONVERSION BOTTOM CTA BANNER -->
      <section class="py-20 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="card-brief p-10 sm:p-16 relative overflow-hidden bg-white shadow-[6px_6px_0px_#111111]">
            <div class="absolute top-0 left-0 right-0 h-2 bg-[#facc15] border-b-2 border-[#111111]"></div>
            
            <span class="font-data text-xs font-bold text-[#111111] bg-[#facc15] px-3.5 py-1.5 rounded border-2 border-[#111111] shadow-[2px_2px_0px_#111111] uppercase tracking-wider">
              START YOUR PROJECT
            </span>
            <h2 class="font-display font-black text-3xl sm:text-5xl text-[#111111] mt-8 mb-6">
              Let's Build Something Great
            </h2>
            <p class="text-[#555555] text-base max-w-2xl mx-auto mb-8 leading-relaxed font-semibold">
              Work directly with Micah Okperuvwe to design, build, and deploy high-converting digital interfaces customized for your audience.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <router-link to="/contact" class="btn-amber text-base px-8 py-4">
                <span>Start Direct Consultation</span>
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
  } catch (err) {
    featuredProjects.value = staticFallback;
  } finally {
    projectsLoading.value = false;
  }
});
</script>
