<template>
  <div class="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-main)] flex flex-col justify-between selection:bg-[var(--color-accent)] selection:text-[var(--color-accent-text)]">
    <Navbar />

    <main class="flex-1">
      
      <!-- ========================================================
           1. HERO SECTION - CLEAN ARCHITECTURAL MONOCHROME
           ======================================================== -->
      <section id="hero" class="relative overflow-hidden min-h-[85vh] flex items-center border-b border-[var(--color-border)] bg-[var(--color-bg-main)]">

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 lg:py-36">
          <div class="max-w-4xl space-y-8 text-left">

            <div class="font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)] border-b border-[var(--color-border)] pb-2 inline-block">
              Software Architecture / Full Stack Engineering
            </div>

            <!-- Main headline in pure Playfair Display Didone -->
            <h1 class="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-[var(--color-text-main)] tracking-tight leading-[1.08]">
              Where Architecture Meets Execution.
            </h1>

            <!-- Subtitle copy -->
            <div class="space-y-3 pl-6 border-l border-[var(--color-border)]">
              <p class="text-lg sm:text-xl text-[var(--color-text-main)] font-medium">
                Micah Okperuvwe | Full Stack Digital Architect
              </p>
              <p class="text-sm sm:text-base text-[var(--color-text-muted)] max-w-2xl leading-relaxed font-normal">
                Designing and engineering production web applications, high-throughput backend APIs, and custom conversion platforms.
              </p>
            </div>

            <!-- CTA Row -->
            <div class="flex flex-wrap items-center gap-4 pt-4">
              <a href="#projects" @click.prevent="scrollToSection('projects')" class="btn-amber cursor-pointer font-data text-xs tracking-widest">
                VIEW PROJECTS [↓]
              </a>
              <a href="#contact" @click.prevent="scrollToSection('contact')" class="btn-cyan-outline cursor-pointer font-data text-xs tracking-widest">
                DIRECT CONTACT
              </a>
            </div>

            <!-- Technical Performance Benchmarks -->
            <div class="grid grid-cols-3 gap-6 pt-10 border-t border-[var(--color-border)]/20">
              <div v-for="s in heroStats" :key="s.label" class="border-l border-[var(--color-border)] pl-4">
                <div class="text-2xl sm:text-3xl font-black font-display text-[var(--color-text-main)]">{{ s.value }}</div>
                <div class="text-[10px] font-data uppercase tracking-wider text-[var(--color-text-muted)] mt-1">{{ s.label }}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ========================================================
           2. TICKER STRIP (MONOCHROME TEXT TICKER, NO SPARKLES)
           ======================================================== -->
      <div class="border-b border-[var(--color-border)] py-3 overflow-hidden bg-[var(--color-bg-sec)]">
        <div class="marquee-track">
          <div class="marquee-content" v-for="n in 2" :key="n">
            <span v-for="item in marqueeItems" :key="item.label" class="marquee-item font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
              <span>/</span>
              {{ item.label }}
            </span>
          </div>
        </div>
      </div>

      <!-- ========================================================
           3. PRODUCTION METRICS (NO EMOJIS, NO DROP SHADOWS)
           ======================================================== -->
      <section class="py-16 bg-[var(--color-bg-main)] border-b border-[var(--color-border)]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="m in metricItems" :key="m.tag" class="border border-[var(--color-border)] p-6 bg-[var(--color-bg-card)]">
              <div class="font-data text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] border-b border-[var(--color-border)]/20 pb-2 mb-4">{{ m.tag }}</div>
              <div class="font-display font-black text-3xl text-[var(--color-text-main)] mb-2">{{ m.value }}</div>
              <div class="font-display font-bold text-sm text-[var(--color-text-main)] mb-1">{{ m.title }}</div>
              <p class="text-xs text-[var(--color-text-muted)] leading-relaxed font-normal">{{ m.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================
           4. RECENT PROJECTS SLIDER (NO DROP SHADOWS, REAL DEMOS)
           ======================================================== -->
      <section id="projects" class="py-24 bg-[var(--color-bg-sec)] border-b border-[var(--color-border)]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Header -->
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[var(--color-border)]">
            <div>
              <span class="font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)] block mb-2">
                SELECTED WORKS
              </span>
              <h2 class="font-display font-black text-3xl sm:text-4xl text-[var(--color-text-main)] tracking-tight">
                Recent Projects
              </h2>
            </div>
            
            <!-- Controls: < > Arrows + VIEW ALL Button -->
            <div class="flex items-center gap-3">
              <button 
                @click="prevSlide" 
                class="slider-arrow font-data text-sm" 
                :class="{ 'opacity-30 cursor-not-allowed': sliderIndex === 0 }" 
                :disabled="sliderIndex === 0" 
                aria-label="Previous Slide"
              >
                &larr;
              </button>
              
              <button 
                @click="nextSlide" 
                class="slider-arrow font-data text-sm" 
                :class="{ 'opacity-30 cursor-not-allowed': sliderIndex >= maxIndex }" 
                :disabled="sliderIndex >= maxIndex" 
                aria-label="Next Slide"
              >
                &rarr;
              </button>

              <router-link 
                to="/case-studies" 
                class="btn-cyan-outline font-data text-xs py-2.5 px-4"
              >
                VIEW ALL [→]
              </router-link>
            </div>
          </div>

          <!-- Loading State (Clean text, no skeleton gradient) -->
          <div v-if="projectsLoading" class="py-16 text-center font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
            Loading project data from server...
          </div>

          <!-- Carousel Viewport & Projects Slider -->
          <div v-else class="slider-viewport overflow-hidden">
            <div
              class="slider-track"
              :style="{ 
                transform: `translateX(-${sliderIndex * slideStep}%)`, 
                transition: 'transform 0.35s ease' 
              }"
            >
              <div
                v-for="project in featuredProjects"
                :key="project.slug || project._id"
                class="slider-item"
              >
                <ProjectCard
                  :title="project.title"
                  :description="project.short_description || project.description || ''"
                  :category="project.category || 'FULL STACK'"
                  :slug="project.slug || 'project'"
                  :imageUrl="project.thumbnail_image || project.imageUrl || ''"
                  :technologies="project.technologies || []"
                  :resultMetric="project.resultMetric || ''"
                  :liveUrl="project.demo_url || project.liveUrl || ''"
                  :fullProject="project"
                  @open-case-study="openDrawer"
                />
              </div>
            </div>
          </div>

          <!-- Slider Pagination Bar -->
          <div v-if="!projectsLoading && dotCount > 1" class="flex justify-center items-center gap-2 mt-8">
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

      <!-- ========================================================
           5. ABOUT & SYSTEM ARCHITECTURE (NO 3-CARDS-IN-A-ROW)
           ======================================================== -->
      <section id="about" class="py-24 bg-[var(--color-bg-main)] border-b border-[var(--color-border)]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Header -->
          <div class="max-w-3xl mb-16 space-y-4">
            <span class="font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)] block">
              ARCHITECTURE & PRINCIPLES
            </span>
            <h2 class="font-display font-black text-3xl sm:text-4xl text-[var(--color-text-main)]">
              Engineering Standards
            </h2>
            <p class="text-[var(--color-text-muted)] text-base leading-relaxed font-normal">
              Digital architecture optimized for uptime, clarity of interaction, and robust backend reliability.
            </p>
          </div>

          <!-- 2-Column Structural Layout (Not generic 3-in-a-row) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            <!-- Left: Methodology List -->
            <div class="border border-[var(--color-border)] p-8 sm:p-10 bg-[var(--color-bg-card)] space-y-8">
              <div class="font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)] border-b border-[var(--color-border)]/20 pb-3">
                Core Methodology
              </div>

              <div class="space-y-6">
                <div class="space-y-2">
                  <div class="font-data text-xs text-[var(--color-text-muted)]">01 / CLARITY</div>
                  <h3 class="font-display text-xl font-bold text-[var(--color-text-main)]">Direct Information Hierarchy</h3>
                  <p class="text-xs text-[var(--color-text-muted)] leading-relaxed">Layouts organized around direct message delivery and seamless transaction flows.</p>
                </div>

                <div class="border-t border-[var(--color-border)]/20 pt-6 space-y-2">
                  <div class="font-data text-xs text-[var(--color-text-muted)]">02 / ROBUSTNESS</div>
                  <h3 class="font-display text-xl font-bold text-[var(--color-text-main)]">Strict Type-Safe Systems</h3>
                  <p class="text-xs text-[var(--color-text-muted)] leading-relaxed">TypeScript schemas and structured API endpoints preventing runtime failures.</p>
                </div>

                <div class="border-t border-[var(--color-border)]/20 pt-6 space-y-2">
                  <div class="font-data text-xs text-[var(--color-text-muted)]">03 / PERFORMANCE</div>
                  <h3 class="font-display text-xl font-bold text-[var(--color-text-main)]">Low-Latency Compute</h3>
                  <p class="text-xs text-[var(--color-text-muted)] leading-relaxed">Optimized client-side rendering with streamlined Node.js and MongoDB operations.</p>
                </div>
              </div>
            </div>

            <!-- Right: Technology Stack Matrix -->
            <div class="border border-[var(--color-border)] p-8 sm:p-10 bg-[var(--color-bg-card)] flex flex-col justify-between">
              <div>
                <div class="font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)] border-b border-[var(--color-border)]/20 pb-3 mb-6">
                  Production Technology Stack
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div 
                    v-for="tech in techStack" 
                    :key="tech.name" 
                    class="border border-[var(--color-border)] p-3 bg-[var(--color-bg-main)] text-center"
                  >
                    <div class="font-data font-bold text-xs text-[var(--color-text-main)]">{{ tech.name }}</div>
                    <div class="text-[9px] text-[var(--color-text-muted)] font-data uppercase mt-1">{{ tech.role }}</div>
                  </div>
                </div>
              </div>

              <div class="pt-8 mt-8 border-t border-[var(--color-border)]/20 flex items-center justify-between font-data text-xs">
                <span class="text-[var(--color-text-muted)]">ENGINEERING STACK</span>
                <span class="text-[var(--color-text-main)] font-bold">100% PRODUCTION-READY</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ========================================================
           6. DIRECT CONTACT SECTION (NO EMOJIS, NO DROP SHADOWS)
           ======================================================== -->
      <section id="contact" class="py-24 bg-[var(--color-bg-sec)]">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Header -->
          <div class="max-w-3xl mb-16 space-y-3">
            <span class="font-data text-xs uppercase tracking-widest text-[var(--color-text-muted)] block">
              DIRECT INQUIRIES
            </span>
            <h2 class="font-display font-black text-3xl sm:text-4xl text-[var(--color-text-main)] tracking-tight">
              Get In Touch With Micah Okperuvwe
            </h2>
            <p class="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed font-normal">
              Direct communication for project proposals, software architecture consultations, and contracts.
            </p>
          </div>

          <!-- Direct contact options -->
          <div class="max-w-2xl mx-auto mb-12">
            <div class="flex flex-col gap-6">
              
              <div class="border border-[var(--color-border)] p-8 bg-[var(--color-bg-main)] flex-1 flex flex-col justify-between">
                <div class="space-y-6">
                  <div class="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                    <span class="font-data text-xs font-bold uppercase tracking-wider text-[var(--color-text-main)]">
                      [DIRECT INBOX]
                    </span>
                  </div>
                  <div>
                    <h3 class="font-display font-bold text-2xl text-[var(--color-text-main)]">
                      Email Consultation
                    </h3>
                    <p class="text-xs text-[var(--color-text-muted)] mt-2 leading-relaxed">
                      Send project specifications or architecture briefs directly.
                    </p>
                  </div>
                  <div class="bg-[var(--color-bg-sec)] p-4 border border-[var(--color-border)] font-data text-center">
                    <div class="text-sm font-black text-[var(--color-text-main)] break-all uppercase">
                      MICAHOKPERUVWE@GMAIL.COM
                    </div>
                  </div>
                </div>
                <div class="pt-8">
                  <a href="mailto:micahokperuvwe@gmail.com" class="btn-cyan-outline w-full justify-center text-xs py-3.5 tracking-wider font-data">
                    EMAIL MICAH DIRECTLY
                  </a>
                </div>
              </div>

              <div class="border border-[var(--color-border)] p-8 bg-[var(--color-bg-main)] flex-1 flex flex-col justify-between">
                <div class="space-y-6">
                  <div class="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                    <span class="font-data text-xs font-bold uppercase tracking-wider text-[var(--color-text-main)]">
                      [TEL / WHATSAPP]
                    </span>
                  </div>
                  <div class="bg-[var(--color-bg-sec)] p-4 border border-[var(--color-border)] font-data text-center">
                    <div class="text-2xl font-black text-[var(--color-text-main)]">
                      09121168900
                    </div>
                  </div>
                </div>
                <div class="pt-8">
                  <a href="tel:09121168900" class="btn-amber w-full justify-center text-xs py-3.5 tracking-wider font-data">
                    CALL DIRECTLY
                  </a>
                </div>
              </div>

            </div>

          </div>

          <!-- Trust Bar -->
          <div class="border border-[var(--color-border)] p-6 bg-[var(--color-bg-main)]">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-data text-xs">
              <div class="space-y-1">
                <div class="font-bold text-[var(--color-text-main)]">Micah Okperuvwe</div>
                <div class="text-[10px] text-[var(--color-text-muted)] uppercase">Principal Engineer</div>
              </div>
              <div class="space-y-1 border-t md:border-t-0 md:border-x border-[var(--color-border)]/20 pt-4 md:pt-0">
                <div class="font-bold text-[var(--color-text-main)]">&lt; 24 Hours Response</div>
                <div class="text-[10px] text-[var(--color-text-muted)] uppercase">Guaranteed Turnaround</div>
              </div>
              <div class="space-y-1 border-t md:border-t-0 border-[var(--color-border)]/20 pt-4 md:pt-0">
                <div class="font-bold text-[var(--color-text-main)]">Direct Communication</div>
                <div class="text-[10px] text-[var(--color-text-muted)] uppercase">No Intermediaries</div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>

    <Footer />

    <!-- Case Study Drawer (renders via Teleport to body) -->
    <CaseStudyDrawer
      :isOpen="drawerOpen"
      :project="drawerProject"
      @close="closeDrawer"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import ProjectCard from '../components/ProjectCard.vue';
import CaseStudyDrawer from '../components/CaseStudyDrawer.vue';
import api from '../utils/api';

// ── Case Study Drawer State ──
const drawerOpen = ref(false);
const drawerProject = ref<any>(null);
const openDrawer = (project: any) => {
  drawerProject.value = project;
  drawerOpen.value = true;
};
const closeDrawer = () => {
  drawerOpen.value = false;
};

// ── Hero Stats ──
const heroStats = [
  { value: '+184%', label: 'Conversion Lift' },
  { value: '4.2x', label: 'Average ROI' },
  { value: '99.9%', label: 'System Uptime' },
];

// ── Metric Callouts ──
const metricItems = [
  { tag: 'CONVERSION', value: '+184%', title: 'Sign-up Conversion', description: 'Architected around structured user flows and frictionless call actions.' },
  { tag: 'SPEED & UX', value: '0.8s', title: 'First Contentful Paint', description: 'Optimized asset delivery ensuring high retention across mobile and desktop.' },
  { tag: 'CAMPAIGN ROI', value: '4.2x', title: 'Average Return', description: 'Copy and interface structure aligned with direct marketing traffic.' },
  { tag: 'RELIABILITY', value: '99.9%', title: 'System Availability', description: 'Production code deployed on resilient cloud server infrastructure.' },
];

// ── Smooth Scroll Helper ──
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

// ── Monochrome Text Ticker ──
const marqueeItems = [
  { label: 'Vue 3' },
  { label: 'TypeScript' },
  { label: 'Node.js Express' },
  { label: 'MongoDB' },
  { label: 'Tailwind CSS' },
  { label: 'REST APIs' },
  { label: 'Cloudinary CDN' },
  { label: 'Socket.IO' },
  { label: 'Pinia' },
  { label: 'Vite' },
  { label: 'Software Architecture' },
];

// ── Projects Slider State ──
const sliderIndex = ref(0);
const visiblePerView = ref(3);

const updateVisiblePerView = () => {
  if (window.innerWidth < 768) {
    visiblePerView.value = 1;
  } else if (window.innerWidth < 1024) {
    visiblePerView.value = 2;
  } else {
    visiblePerView.value = 3;
  }
};

const projectsLoading = ref(true);
const featuredProjects = ref<any[]>([]);

const slideStep = computed(() => 100 / visiblePerView.value);
const maxIndex = computed(() => Math.max(0, featuredProjects.value.length - visiblePerView.value));
const dotCount = computed(() => Math.max(1, featuredProjects.value.length - visiblePerView.value + 1));

const prevSlide = () => { if (sliderIndex.value > 0) sliderIndex.value--; };
const nextSlide = () => { if (sliderIndex.value < maxIndex.value) sliderIndex.value++; };

// ── Real Project Demos ──
const staticFallback = [
  {
    _id: 'p1',
    title: 'ApexRetail (WebMarket Pro)',
    slug: 'apexretail-webmarket-pro',
    short_description: 'Multi-vendor digital marketplace with cart, checkout, vendor analytics, and real-time inventory management.',
    category: 'E-COMMERCE',
    thumbnail_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['Node.js Express', 'TypeScript', 'Vue 3', 'Tailwind CSS', 'MongoDB'],
    resultMetric: '+280% Sales',
    demo_url: 'https://backend3-aotb.onrender.com',
  },
  {
    _id: 'p2',
    title: 'Study Buddy AI Platform',
    slug: 'study-buddy-ai-platform',
    short_description: 'AI-powered personalized learning companion with real-time quiz generation, topic comprehension, and chat assistance.',
    category: 'AI PLATFORM',
    thumbnail_image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Express', 'JWT Auth', 'Supabase'],
    resultMetric: '10k+ Queries',
    demo_url: 'https://backend3-aotb.onrender.com',
  },
  {
    _id: 'p3',
    title: 'VeloStream Media Processing',
    slug: 'volostream',
    short_description: 'Full-stack video processing and streaming platform with low-latency media pipelines and analytics.',
    category: 'STREAMING / SAAS',
    thumbnail_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue 3', 'TypeScript', 'Socket.IO', 'Express', 'Cloudinary', 'Node.js'],
    resultMetric: '99.9% Uptime',
    demo_url: 'https://backend3-aotb.onrender.com',
  },
  {
    _id: 'p4',
    title: 'Fintech Analytics Engine',
    slug: 'fintech-analytics-dashboard',
    short_description: 'Real-time analytics and portfolio balance monitoring web app for enterprise financial asset tracking.',
    category: 'FINTECH / SAAS',
    thumbnail_image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue 3', 'TypeScript', 'Express', 'MongoDB'],
    resultMetric: '+240% Growth',
    demo_url: 'https://backend3-aotb.onrender.com',
  },
];

// ── Technology Stack ──
const techStack = [
  { name: 'Vue 3', role: 'Frontend' },
  { name: 'TypeScript', role: 'Type Safety' },
  { name: 'Tailwind CSS', role: 'Tokens' },
  { name: 'Vite 8', role: 'Build' },
  { name: 'Node.js', role: 'Runtime' },
  { name: 'Express API', role: 'REST Backend' },
  { name: 'MongoDB', role: 'Database' },
  { name: 'Pinia', role: 'State' },
  { name: 'Socket.IO', role: 'Real-time' },
  { name: 'Supabase', role: 'Storage' },
  { name: 'Zod', role: 'Validation' },
  { name: 'Cloudinary', role: 'Media CDN' },
];

onMounted(async () => {
  updateVisiblePerView();
  window.addEventListener('resize', updateVisiblePerView);

  try {
    const res = await api.get('/api/projects');
    const live = Array.isArray(res.data) ? res.data : [];
    featuredProjects.value = live.length > 0 ? live : staticFallback;
  } catch {
    featuredProjects.value = staticFallback;
  } finally {
    projectsLoading.value = false;
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', updateVisiblePerView);
});
</script>

<style scoped>
/* ══════════════════════════════════════════════
   MARQUEE TICKER
══════════════════════════════════════════════ */
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 32s linear infinite;
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
  gap: 0.5rem;
  padding: 0 1.5rem;
  white-space: nowrap;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ══════════════════════════════════════════════
   PROJECTS SLIDER
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
  padding: 0 0.5rem;
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

/* Arrow Buttons */
.slider-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid var(--color-border);
  background: var(--color-bg-main);
  color: var(--color-text-main);
  cursor: pointer;
  transition: background-color 0.15s ease;
}
.slider-arrow:not(:disabled):hover {
  background: var(--color-bg-sec);
}

/* Slider Dot Indicators */
.slider-dot {
  width: 16px;
  height: 3px;
  background: var(--color-border);
  opacity: 0.3;
  transition: opacity 0.2s ease;
  cursor: pointer;
}
.slider-dot--active {
  opacity: 1;
  background: var(--color-text-main);
}
</style>
