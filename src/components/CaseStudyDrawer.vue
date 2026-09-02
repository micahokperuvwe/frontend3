<template>
  <Teleport to="body">
    <!-- Dark Backdrop -->
    <Transition name="backdrop-fade">
      <div v-if="isOpen" class="cs-backdrop" @click="$emit('close')" />
    </Transition>

    <!-- Centered Modal Card -->
    <Transition name="modal-pop">
      <div v-if="isOpen" class="cs-modal" role="dialog" aria-modal="true">

        <!-- Modal Top Bar -->
        <div class="cs-topbar">
          <div class="cs-topbar-left">
            <span class="cs-label">CASE STUDY</span>
            <span class="cs-cat">{{ project && project.category ? project.category.toUpperCase() : "PROJECT" }}</span>
          </div>
          <button class="cs-close" @click="$emit('close')">CLOSE [X]</button>
        </div>

        <!-- Scrollable Inner -->
        <div class="cs-body">

          <!-- Full-width Hero Image -->
          <div class="cs-hero">
            <img v-if="project && project.thumbnail_image" :src="project.thumbnail_image" :alt="project && project.title" class="cs-hero-img" />
            <div v-else class="cs-hero-empty">No Image Uploaded</div>
            <span class="cs-status">{{ project && project.status ? project.status.toUpperCase() : "COMPLETED" }}</span>
          </div>

          <!-- Two-column layout: info left, meta right -->
          <div class="cs-grid">

            <!-- LEFT: Main content -->
            <div class="cs-main">

              <!-- Title -->
              <h2 class="cs-title">{{ project && project.title }}</h2>
              <p class="cs-short">{{ project && project.short_description }}</p>

              <!-- CTA buttons -->
              <div class="cs-btns">
                <a v-if="project && project.demo_url" :href="project.demo_url" target="_blank" rel="noopener noreferrer" class="btn-amber cs-btn-text">
                  VIEW LIVE PROJECT [+]
                </a>
                <button @click="handleContact" class="btn-cyan-outline cs-btn-text">
                  DISCUSS THIS PROJECT
                </button>
              </div>

              <!-- Full description -->
              <div v-if="project && project.full_description" class="cs-section">
                <div class="cs-section-label">Project Overview</div>
                <div class="cs-desc">{{ project.full_description }}</div>
              </div>

              <!-- Gallery images -->
              <div v-if="project && project.gallery_images && project.gallery_images.length" class="cs-section">
                <div class="cs-section-label">Project Gallery</div>
                <div class="cs-gallery">
                  <div v-for="(img, i) in project.gallery_images" :key="i" class="cs-gallery-item">
                    <img :src="img.url || img" :alt="(project.title || '') + ' screenshot ' + (Number(i) + 1)" class="cs-gallery-img" />
                  </div>
                </div>
              </div>

            </div>

            <!-- RIGHT: Meta sidebar -->
            <div class="cs-sidebar">

              <!-- Tech stack -->
              <div v-if="project && project.technologies && project.technologies.length" class="cs-section">
                <div class="cs-section-label">Tech Stack</div>
                <div class="cs-tags">
                  <span v-for="tech in project.technologies" :key="tech" class="cs-tag">{{ tech }}</span>
                </div>
              </div>

              <!-- Meta info -->
              <div class="cs-section">
                <div class="cs-section-label">Project Info</div>
                <div class="cs-meta-list">
                  <div v-if="project && project.created_at" class="cs-meta-row">
                    <span class="cs-meta-key">Completed</span>
                    <span class="cs-meta-val">{{ project ? new Date(project.created_at).toLocaleDateString("en-GB", { year: "numeric", month: "long" }) : "" }}</span>
                  </div>
                  <div v-if="project && project.status" class="cs-meta-row">
                    <span class="cs-meta-key">Status</span>
                    <span class="cs-meta-val">{{ project.status }}</span>
                  </div>
                  <div v-if="project && project.view_count !== undefined" class="cs-meta-row">
                    <span class="cs-meta-key">Views</span>
                    <span class="cs-meta-val">{{ project.view_count }}</span>
                  </div>
                  <div v-if="project && project.demo_url" class="cs-meta-row">
                    <span class="cs-meta-key">Live URL</span>
                    <a :href="project.demo_url" target="_blank" class="cs-meta-link">Visit Site [+]</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { watch } from "vue";
const props = defineProps<{ isOpen: boolean; project: any | null; }>();
const emit = defineEmits<{ close: [] }>();
watch(() => props.isOpen, (open) => { document.body.style.overflow = open ? "hidden" : ""; });
const handleContact = () => {
  emit("close");
  setTimeout(() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 300);
};
</script>

<style scoped>
/* ── Backdrop ── */
.cs-backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.75);
}

/* ── Modal Card (centered) ── */
.cs-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 51;
  width: calc(100vw - 2rem);
  max-width: 72rem;
  max-height: 88vh;
  background: var(--color-bg-main);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* ── Top bar ── */
.cs-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.75rem;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-sec);
  flex-shrink: 0;
}
.cs-topbar-left { display: flex; align-items: center; gap: 0.75rem; }
.cs-label {
  font-family: var(--font-sc);
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-text-muted);
}
.cs-cat {
  font-family: var(--font-sc);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-main);
  border: 1px solid var(--color-border);
  padding: 0.15rem 0.6rem;
}
.cs-close {
  font-family: var(--font-sc);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  padding: 0.4rem 0.85rem;
  background: var(--color-bg-main);
  cursor: pointer;
  transition: background 0.15s;
}
.cs-close:hover { background: var(--color-bg-sec); color: var(--color-text-main); }

/* ── Scrollable body ── */
.cs-body { flex: 1; overflow-y: auto; }

/* ── Hero image ── */
.cs-hero {
  position: relative;
  height: 22rem;
  background: var(--color-bg-sec);
  border-bottom: 1px solid var(--color-border);
  overflow: hidden;
}
@media (max-width: 640px) { .cs-hero { height: 14rem; } }
.cs-hero-img { width: 100%; height: 100%; object-fit: cover; }
.cs-hero-empty {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-sc); font-size: 0.7rem;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--color-text-muted);
}
.cs-status {
  position: absolute; top: 1rem; left: 1rem;
  font-family: var(--font-sc); font-size: 0.65rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
  background: var(--color-bg-main); color: var(--color-text-main);
  border: 1px solid var(--color-border);
  padding: 0.25rem 0.6rem;
}

/* ── Two-column grid ── */
.cs-grid {
  display: grid;
  grid-template-columns: 1fr 18rem;
  gap: 0;
  min-height: 0;
}
@media (max-width: 768px) {
  .cs-grid { grid-template-columns: 1fr; }
}

/* ── Main content column ── */
.cs-main {
  padding: 2rem;
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.cs-title {
  font-family: var(--font-main);
  font-weight: 900;
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--color-text-main);
  line-height: 1.15;
}
.cs-short {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  font-weight: 400;
}
.cs-btns { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.cs-btn-text { font-size: 0.72rem; padding: 0.55rem 1.1rem; font-family: var(--font-sc); }
.cs-section { display: flex; flex-direction: column; gap: 0.6rem; }
.cs-section-label {
  font-family: var(--font-sc);
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-text-muted);
  border-bottom: 1px solid rgba(128,128,128,0.15);
  padding-bottom: 0.4rem;
}
.cs-desc {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  white-space: pre-line;
  font-weight: 400;
}
.cs-gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
.cs-gallery-item { border: 1px solid var(--color-border); overflow: hidden; }
.cs-gallery-img { width: 100%; height: 8rem; object-fit: cover; }

/* ── Sidebar column ── */
.cs-sidebar {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  background: var(--color-bg-sec);
}
.cs-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.cs-tag {
  font-family: var(--font-sc);
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-main);
  background: var(--color-bg-main);
  border: 1px solid var(--color-border);
  padding: 0.2rem 0.55rem;
}
.cs-meta-list { display: flex; flex-direction: column; gap: 0.6rem; }
.cs-meta-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid rgba(128,128,128,0.1);
  padding-bottom: 0.4rem;
  gap: 0.5rem;
}
.cs-meta-key {
  font-family: var(--font-sc);
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  flex-shrink: 0;
}
.cs-meta-val {
  font-family: var(--font-sc);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--color-text-main);
  text-align: right;
  text-transform: capitalize;
}
.cs-meta-link {
  font-family: var(--font-sc);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--color-text-main);
  text-decoration: underline;
}

/* ── Transitions ── */
.backdrop-fade-enter-active, .backdrop-fade-leave-active { transition: opacity 0.22s ease; }
.backdrop-fade-enter-from, .backdrop-fade-leave-to { opacity: 0; }
.modal-pop-enter-active { transition: opacity 0.22s ease, transform 0.26s cubic-bezier(0.34,1.56,0.64,1); }
.modal-pop-leave-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.modal-pop-enter-from { opacity: 0; transform: translate(-50%, -46%); }
.modal-pop-leave-to { opacity: 0; transform: translate(-50%, -46%); }
.modal-pop-enter-to, .modal-pop-leave-from { opacity: 1; transform: translate(-50%, -50%); }
</style>
