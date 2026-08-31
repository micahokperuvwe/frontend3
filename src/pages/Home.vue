<template>
  <div class="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-main)] flex flex-col justify-between">
    <Navbar />

    <main class="flex-1">
      <!-- ===== HERO SECTION - 3D ANIMATED ===== -->
      <section class="hero-scene relative overflow-hidden min-h-[100vh] flex items-center">

        <!-- DOT GRID BACKGROUND -->
        <div class="dot-grid absolute inset-0 z-0 pointer-events-none"></div>

        <!-- 3D FLOATING GEOMETRIC SHAPES -->
        <div class="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div class="shape-cube shape-1">
            <div class="cube-face cube-front"></div>
            <div class="cube-face cube-back"></div>
            <div class="cube-face cube-left"></div>
            <div class="cube-face cube-right"></div>
            <div class="cube-face cube-top"></div>
            <div class="cube-face cube-bottom"></div>
          </div>
          <div class="shape-cube shape-2">
            <div class="cube-face cube-front"></div>
            <div class="cube-face cube-back"></div>
            <div class="cube-face cube-left"></div>
            <div class="cube-face cube-right"></div>
            <div class="cube-face cube-top"></div>
            <div class="cube-face cube-bottom"></div>
          </div>
          <div class="shape-cube shape-3">
            <div class="cube-face cube-front"></div>
            <div class="cube-face cube-back"></div>
            <div class="cube-face cube-left"></div>
            <div class="cube-face cube-right"></div>
            <div class="cube-face cube-top"></div>
            <div class="cube-face cube-bottom"></div>
          </div>
          <div class="float-ring ring-1"></div>
          <div class="float-ring ring-2"></div>
          <div class="float-ring ring-3"></div>
          <div class="orbit-wrapper orbit-1"><div class="orbit-dot"></div></div>
          <div class="orbit-wrapper orbit-2"><div class="orbit-dot"></div></div>
        </div>

        <!-- HERO TEXT CONTENT -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-36 lg:py-44">
          <div class="max-w-4xl space-y-10 text-left">


            <!-- Main headline - staggered word animation -->
            <h1 class="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-[var(--color-text-main)] tracking-tight leading-[1.08]">
              <span class="hero-word word-1 block">Where</span>
              <span class="hero-word word-2 block">Imagination</span>
              <span class="hero-word word-3 block">Meets <em class="not-italic text-stroke">Algorithm</em></span>
              <span class="hero-word word-4 block" style="opacity:0.55">that Delivers Excellence</span>
            </h1>

            <!-- Subtext -->
            <div class="hero-sub space-y-2 pl-5 border-l-2 border-[var(--color-border)]/20">
              <p class="text-base sm:text-lg text-[var(--color-text-main)] font-medium">Hi, I am Micah Okperuvwe, a Full Stack Software Developer</p>
              <p class="text-sm sm:text-base text-[var(--color-text-muted)] max-w-xl leading-relaxed">Specializing in building responsive, user-centric websites and web applications</p>
            </div>

            <!-- CTA Row -->
            <div class="hero-cta flex flex-wrap items-center gap-5 pt-2">
              <router-link to="/case-studies" class="cta-primary group">
                <span class="relative z-10">SEE MY WORK</span>
                <span class="cta-shine"></span>
              </router-link>
              <router-link to="/contact" class="cta-ghost group flex items-center gap-2 text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors uppercase tracking-widest">
                Contact me
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </router-link>
            </div>

            <!-- Stats row -->
            <div class="hero-stats grid grid-cols-3 gap-6 pt-8 border-t border-[var(--color-border)]/10">
              <div v-for="s in heroStats" :key="s.label" class="stat-item">
                <div class="text-2xl sm:text-3xl font-black font-display text-[var(--color-text-main)]">{{ s.value }}</div>
                <div class="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)] mt-1">{{ s.label }}</div>
              </div>
            </div>

          </div>
        </div>

        <!-- Scroll hint -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style="opacity:0.4">
          <span class="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
          <div class="scroll-line"></div>
        </div>
      </section>

      <!-- ===== MARQUEE TICKER SLIDER ===== -->
      <div class="marquee-strip border-y border-[var(--color-border)]/10 py-4 overflow-hidden">
        <div class="marquee-track">
          <div class="marquee-content" v-for="n in 2" :key="n">
            <span v-for="item in marqueeItems" :key="item.label" class="marquee-item">
              <span class="marquee-dot">✦</span>
              {{ item.label }}
            </span>
          </div>
        </div>
      </div>

      <!-- DATA CALLOUTS -->
      <section class="py-16 bg-[var(--color-bg-sec)] border-b border-[var(--color-border)]/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="section-label">MEASURABLE OUTCOMES</span>
            <h2 class="font-display font-black text-3xl text-[var(--color-text-main)] mt-4">Real Performance Indicators</h2>
            <p class="text-[var(--color-text-muted)] text-sm mt-3 font-semibold">We design simple user interfaces engineered around direct action and low friction.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DataCallout tag="CONVERSION" value="+184%" title="Higher Sign-up Rate" description="User experiences mapped to guide visitors directly into primary call actions." />
            <DataCallout tag="SPEED & UX" value="0.8s" title="First Paint Speed" description="Fast page load speeds ensuring higher retention rates on mobile networks." />
            <DataCallout tag="ROAS LIFT" value="4.2x" title="Average Campaign ROI" description="Targeted copy and layout structure designed to match paid advertising traffic." />
            <DataCallout tag="RELIABILITY" value="99.9%" title="System Uptime" description="Production-grade cloud code deployed using modern server backends." />
          </div>
        </div>
      </section>

      <!-- SERVICES -->
      <section class="py-20 bg-[var(--color-bg-main)] border-b border-[var(--color-border)]/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span class="section-label">CORE CAPABILITIES</span>
              <h2 class="font-display font-black text-3xl text-[var(--color-text-main)] mt-4">Structured Portfolio Solutions</h2>
            </div>
            <router-link to="/services" class="btn-cyan-outline text-xs py-2.5 px-5 w-fit">View All Services &#8594;</router-link>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard tag="CONVERSION DESIGN" title="Layout & Flow Optimization" description="Structuring web pages around clear message hierarchies, logical action buttons, and minimal cognitive load." :deliverables="['User Journey Wireframes','Clear Call-To-Action Layouts','Optimized Mobile Flow']">
              <template #icon><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></template>
            </ServiceCard>
            <ServiceCard tag="VISUAL SYSTEM" title="Modern Brand Architecture" description="Establish visual credibility with high-contrast minimalist grids, clean borders, bright accents, and solid typography." :deliverables="['Playfair Display Typography','Minimalist High-Contrast Palette','Solid Shadow Card Systems']">
              <template #icon><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg></template>
            </ServiceCard>
            <ServiceCard tag="FULL STACK" title="Modern Web Applications" description="Secure backend configurations combined with responsive Vue 3 components and structured database layers." :deliverables="['Vue 3 Web App Development','REST API Development (Node/Express)','MongoDB Data Integration']">
              <template #icon><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 12h14M12 5l7 7-7 7" /></svg></template>
            </ServiceCard>
          </div>
        </div>
      </section>

      <!-- FEATURED PROJECTS CAROUSEL -->
      <section class="py-20 bg-[var(--color-bg-sec)] border-b border-[var(--color-border)]/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span class="section-label mb-3">Selected Works</span>
              <h2 class="font-display font-black text-3xl text-[var(--color-text-main)] mt-4">Recent Projects</h2>
            </div>
            <div class="flex items-center gap-4">
              <!-- Prev / Next arrows -->
              <button @click="prevSlide" class="slider-arrow" :class="{ 'opacity-30 cursor-not-allowed': sliderIndex === 0 }" :disabled="sliderIndex === 0" aria-label="Previous">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button @click="nextSlide" class="slider-arrow" :class="{ 'opacity-30 cursor-not-allowed': sliderIndex >= maxIndex }" :disabled="sliderIndex >= maxIndex" aria-label="Next">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
              <router-link to="/case-studies" class="btn-cyan-outline text-xs py-2.5 px-5">View All &#8594;</router-link>
            </div>
          </div>

          <!-- Skeleton loading -->
          <div v-if="projectsLoading" class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="i in 3" :key="i" class="card-brief overflow-hidden bg-[var(--color-bg-main)]">
              <div class="skeleton h-48 border-b-2 border-[var(--color-border)]"></div>
              <div class="p-5 space-y-3"><div class="skeleton h-4 w-3/4"></div><div class="skeleton h-3 w-full"></div></div>
            </div>
          </div>

          <!-- Carousel viewport -->
          <div v-else class="slider-viewport overflow-hidden">
            <div
              class="slider-track"
              :style="{ transform: `translateX(-${sliderIndex * slideStep}%)`, transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }"
            >
              <div
                v-for="project in featuredProjects"
                :key="project.slug || project._id"
                class="slider-item"
              >
                <ProjectCard
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
          </div>

          <!-- Dot indicators -->
          <div v-if="!projectsLoading" class="flex justify-center gap-2 mt-8">
            <button
              v-for="(_, i) in dotCount"
              :key="i"
              @click="sliderIndex = i"
              class="slider-dot"
              :class="{ 'slider-dot--active': sliderIndex === i }"
              :aria-label="`Go to slide ${i + 1}`"
            ></button>
          </div>

        </div>
      </section>


      <!-- CTA BANNER -->
      <section class="py-20 bg-[var(--color-bg-main)]">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="card-brief p-10 sm:p-16 relative overflow-hidden bg-[var(--color-bg-main)]">
            <div class="absolute top-0 left-0 right-0 h-1 bg-[var(--color-accent)]"></div>
            <span class="font-data text-xs font-bold bg-[var(--color-accent)] text-[var(--color-accent-text)] px-3.5 py-1.5 border border-[var(--color-border)] uppercase tracking-wider">START YOUR PROJECT</span>
            <h2 class="font-display font-black text-3xl sm:text-5xl text-[var(--color-text-main)] mt-8 mb-6">Let's Build Something Great</h2>
            <p class="text-[var(--color-text-muted)] text-base max-w-2xl mx-auto mb-8 leading-relaxed font-semibold">Work directly with Micah Okperuvwe to design, build, and deploy high-converting digital interfaces customized for your audience.</p>
            <div class="flex flex-wrap justify-center gap-4">
              <router-link to="/contact" class="btn-amber text-base px-8 py-4"><span>Start Direct Consultation</span><span>&#8594;</span></router-link>
              <router-link to="/services" class="btn-cyan-outline text-base px-8 py-4"><span>Explore Solutions</span></router-link>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DataCallout from '../components/DataCallout.vue';
import ServiceCard from '../components/ServiceCard.vue';
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';

const heroStats = [
  { value: '+184%', label: 'Conversion Lift' },
  { value: '4.2x', label: 'Average ROI' },
  { value: '99.9%', label: 'System Uptime' },
];

// ── Marquee ticker items ──
const marqueeItems = [
  { label: 'Vue 3' }, { label: 'TypeScript' }, { label: 'Node.js' },
  { label: 'MongoDB' }, { label: 'Tailwind CSS' }, { label: 'REST APIs' },
  { label: 'Cloudinary' }, { label: 'Express.js' }, { label: 'Pinia' },
  { label: 'Vite' }, { label: 'Full Stack' }, { label: 'UI/UX Design' },
];

// ── Projects slider state ──
const sliderIndex = ref(0);
const visiblePerView = 3; // show 3 cards at once on desktop

const projectsLoading = ref(true);
const featuredProjects = ref<any[]>([]);

const slideStep = computed(() => 100 / visiblePerView);
const maxIndex = computed(() => Math.max(0, featuredProjects.value.length - visiblePerView));
const dotCount = computed(() => Math.max(1, featuredProjects.value.length - visiblePerView + 1));

const prevSlide = () => { if (sliderIndex.value > 0) sliderIndex.value--; };
const nextSlide = () => { if (sliderIndex.value < maxIndex.value) sliderIndex.value++; };

const staticFallback = [
  { _id: 's1', title: 'Fintech Analytics Dashboard', slug: 'fintech-analytics-dashboard', short_description: 'Real-time analytics web app for enterprise financial tracking.', category: 'FINTECH / SAAS', thumbnail_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', technologies: ['Vue 3', 'TypeScript', 'MongoDB'], resultMetric: '+240% Growth', demo_url: '' },
  { _id: 's2', title: 'E-Commerce Conversion Redesign', slug: 'nextgen-ecommerce-redesign', short_description: 'Rebuilt checkout flow, resulting in record conversion rates.', category: 'E-COMMERCE', thumbnail_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', technologies: ['Tailwind CSS', 'Pinia', 'Express'], resultMetric: '3.8x Sales', demo_url: '' },
  { _id: 's3', title: 'Data Intelligence Portal', slug: 'enterprise-data-portal', short_description: 'Platform for real-time lead ingestion and executive reporting.', category: 'ANALYTICS', thumbnail_image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80', technologies: ['TypeScript', 'Zod', 'Cloudinary'], resultMetric: '99.9% Uptime', demo_url: '' },
  { _id: 's4', title: 'Brand Portfolio Platform', slug: 'brand-portfolio-platform', short_description: 'Custom CMS-driven portfolio site with admin dashboard.', category: 'PORTFOLIO', thumbnail_image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80', technologies: ['Vue 3', 'Express', 'Cloudinary'], resultMetric: '100% Custom', demo_url: '' },
  { _id: 's5', title: 'Lead Generation System', slug: 'lead-gen-system', short_description: 'High-converting landing page funnel with CRM integration.', category: 'MARKETING', thumbnail_image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80', technologies: ['Vue 3', 'TypeScript', 'MongoDB'], resultMetric: '+320% Leads', demo_url: '' },
];

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

onMounted(async () => {
  try {
    const res = await axios.get(API_BASE + '/api/projects', { timeout: 6000 });
    const live = Array.isArray(res.data) ? res.data : [];
    featuredProjects.value = live.length > 0 ? live : staticFallback;
  } catch {
    featuredProjects.value = staticFallback;
  } finally {
    projectsLoading.value = false;
  }
});
</script>


<style scoped>
/* DOT GRID */
.dot-grid {
  background-image: radial-gradient(circle at 1.5px 1.5px, var(--color-border) 1px, transparent 0);
  background-size: 40px 40px;
  opacity: 0.07;
}
:root.dark .dot-grid { opacity: 0.18; }

/* 3D CUBES */
.shape-cube {
  position: absolute;
  transform-style: preserve-3d;
  animation: spin-cube 18s linear infinite;
}
.shape-1 { width: 120px; height: 120px; top: 8%; right: 8%; animation-duration: 22s; opacity: 0.13; }
.shape-2 { width: 70px; height: 70px; bottom: 15%; left: 5%; animation-duration: 16s; animation-direction: reverse; opacity: 0.1; }
.shape-3 { width: 45px; height: 45px; top: 55%; right: 22%; animation-duration: 12s; opacity: 0.09; }

.cube-face {
  position: absolute;
  border: 1.5px solid var(--color-border);
  background: transparent;
  width: 100%;
  height: 100%;
  inset: 0;
}
.cube-front  { transform: translateZ(50%); }
.cube-back   { transform: translateZ(-50%) rotateY(180deg); }
.cube-left   { transform: rotateY(-90deg) translateZ(50%); }
.cube-right  { transform: rotateY(90deg)  translateZ(50%); }
.cube-top    { transform: rotateX(90deg)  translateZ(50%); }
.cube-bottom { transform: rotateX(-90deg) translateZ(50%); }

@keyframes spin-cube {
  0%   { transform: rotateX(0deg)   rotateY(0deg)   rotateZ(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(180deg); }
}

/* FLOATING RINGS */
.float-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid var(--color-border);
  animation: float-bob linear infinite;
}
.ring-1 { width: 220px; height: 220px; top: 18%; right: 14%; opacity: 0.07; animation-duration: 8s; }
.ring-2 { width: 110px; height: 110px; bottom: 22%; right: 28%; opacity: 0.09; animation-duration: 6s; animation-delay: -2s; }
.ring-3 { width: 65px;  height: 65px;  top: 62%;  left: 14%; opacity: 0.08; animation-duration: 7s; animation-delay: -4s; }

@keyframes float-bob {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50%       { transform: translateY(-22px) rotate(180deg); }
}

/* ORBITING DOTS */
.orbit-wrapper {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed var(--color-border);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  animation: orbit-spin linear infinite;
}
.orbit-dot { width: 7px; height: 7px; margin-top: -3.5px; border-radius: 50%; background: var(--color-border); }
.orbit-1 { width: 300px; height: 300px; top: 3%; right: 1%; opacity: 0.12; animation-duration: 20s; }
.orbit-2 { width: 160px; height: 160px; bottom: 8%; left: 8%; opacity: 0.1; animation-duration: 14s; animation-direction: reverse; }

@keyframes orbit-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* HERO TEXT STAGGER ANIMATIONS */
.hero-badge { animation: slide-up 0.8s cubic-bezier(.22,1,.36,1) 0.1s both; }
.hero-word  { animation: slide-up 0.9s cubic-bezier(.22,1,.36,1) both; display: block; }
.word-1 { animation-delay: 0.25s; }
.word-2 { animation-delay: 0.42s; }
.word-3 { animation-delay: 0.58s; }
.word-4 { animation-delay: 0.74s; }
.hero-sub   { animation: slide-up 0.9s cubic-bezier(.22,1,.36,1) 0.90s both; }
.hero-cta   { animation: slide-up 0.9s cubic-bezier(.22,1,.36,1) 1.05s both; }
.hero-stats { animation: slide-up 0.9s cubic-bezier(.22,1,.36,1) 1.20s both; }

@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* OUTLINE TEXT on 'Algorithm' */
.text-stroke {
  -webkit-text-stroke: 2px var(--color-text-main);
  color: transparent;
}

/* CTA PRIMARY BUTTON */
.cta-primary {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  background: var(--color-text-main);
  color: var(--color-bg-main);
  font-weight: 700;
  padding: 1rem 2.5rem;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  transition: transform 0.2s ease;
}
.cta-primary:hover  { transform: scale(1.04); }
.cta-primary:active { transform: scale(0.97); }

/* Sweep shine effect */
.cta-shine {
  position: absolute;
  top: -50%;
  left: -75%;
  width: 50%;
  height: 200%;
  background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.22) 50%, transparent 80%);
  transform: skewX(-20deg);
  animation: shine 3.5s ease-in-out infinite;
}
@keyframes shine {
  0%       { left: -75%; }
  40%, 100% { left: 160%; }
}

/* SCROLL HINT */
.scroll-line {
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, var(--color-text-main), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}
@keyframes scroll-pulse {
  0%, 100% { transform: scaleY(1); opacity: 0.5; }
  50%       { transform: scaleY(0.5); opacity: 0.15; }
}

/* STAT ITEMS */
.stat-item { transition: transform 0.3s ease; cursor: default; }
.stat-item:hover { transform: translateY(-5px); }

/* ══════════════════════════════════════════════
   MARQUEE INFINITE TICKER
══════════════════════════════════════════════ */
.marquee-strip {
  background: var(--color-bg-main);
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 28s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;
}
.marquee-content {
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
}
.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 2rem;
  font-family: var(--font-sc);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
  transition: color 0.2s ease;
}
.marquee-item:hover {
  color: var(--color-text-main);
}
.marquee-dot {
  font-size: 0.5rem;
  color: var(--color-text-main);
  opacity: 0.4;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ══════════════════════════════════════════════
   PROJECTS CAROUSEL SLIDER
══════════════════════════════════════════════ */
.slider-viewport {
  width: 100%;
  position: relative;
}
.slider-track {
  display: flex;
  width: 100%;
}
.slider-item {
  flex: 0 0 calc(100% / 3);
  padding: 0 0.75rem;
  box-sizing: border-box;
}
@media (max-width: 768px) {
  .slider-item {
    flex: 0 0 100%;
    padding: 0;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .slider-item {
    flex: 0 0 50%;
  }
}

/* Arrow buttons */
.slider-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1.5px solid var(--color-border);
  background: var(--color-bg-main);
  color: var(--color-text-main);
  transition: all 0.15s ease;
}
.slider-arrow:not(:disabled):hover {
  background: var(--color-text-main);
  color: var(--color-bg-main);
}

/* Dot indicators */
.slider-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid var(--color-border);
  background: transparent;
  transition: all 0.2s ease;
  cursor: pointer;
}
.slider-dot--active {
  background: var(--color-text-main);
  border-color: var(--color-text-main);
  width: 24px;
  border-radius: 4px;
}
</style>

