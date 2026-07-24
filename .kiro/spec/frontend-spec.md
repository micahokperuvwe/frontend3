# Frontend Specification: Portfolio Site

## Overview

Vue.js 3 + TypeScript + Vite frontend that integrates with Supabase backend. Uses vite-ssg for static pre-rendering, @unhead/vue for meta tags, and Pinia for admin session state.

---

## 1. Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── public/
│   │   │   ├── Header.vue
│   │   │   ├── Footer.vue
│   │   │   ├── Hero.vue
│   │   │   ├── ProjectCard.vue
│   │   │   ├── ProjectGrid.vue
│   │   │   ├── TestimonialCard.vue
│   │   │   ├── TestimonialSlider.vue
│   │   │   ├── ContactForm.vue
│   │   │   └── SkillsSection.vue
│   │   └── admin/
│   │       ├── AdminLayout.vue
│   │       ├── ProjectForm.vue
│   │       ├── ImageUpload.vue
│   │       ├── TestimonialForm.vue
│   │       ├── ContactSubmissionsTable.vue
│   │       └── ContentEditor.vue
│   ├── composables/
│   │   ├── useSupabase.ts
│   │   ├── useAuth.ts
│   │   ├── useProjects.ts
│   │   ├── useTestimonials.ts
│   │   ├── useContactSubmissions.ts
│   │   ├── useImageUpload.ts
│   │   └── useDarkMode.ts
│   ├── pages/
│   │   ├── public/
│   │   │   ├── index.vue
│   │   │   ├── about.vue
│   │   │   ├── projects.vue
│   │   │   ├── projects/[slug].vue
│   │   │   ├── services.vue
│   │   │   ├── contact.vue
│   │   │   └── 404.vue
│   │   └── admin/
│   │       ├── login.vue
│   │       ├── dashboard.vue
│   │       ├── projects/index.vue
│   │       ├── projects/[id]/edit.vue
│   │       ├── projects/create.vue
│   │       ├── testimonials/index.vue
│   │       ├── submissions/index.vue
│   │       └── settings.vue
│   ├── stores/
│   │   ├── auth.ts
│   │   └── ui.ts
│   ├── utils/
│   │   ├── supabase.ts
│   │   ├── validation.ts
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── types/
│   │   └── index.ts
│   ├── router/
│   │   └── index.ts
│   ├── App.vue
│   └── main.ts
├── routes.ts
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── vercel.json
```

---

## 2. Key Composables

### 2.1 useSupabase

Singleton Supabase client initialization.

### 2.2 useAuth

Login, logout, session management, token refresh.

### 2.3 useProjects

CRUD operations for projects. Public: published only. Admin: all.

### 2.4 useImageUpload

Upload images with 10 MB limit, JPEG/PNG/WebP validation, transformation.

### 2.5 useDarkMode

Cookie-based dark mode toggle, respects prefers-color-scheme.

---

## 3. Validation Schemas (Zod)

- `projectSchema` — all project fields
- `contactFormSchema` — name, email, message, honeypot
- `testimonialSchema` — author, quote, rating, published

---

## 4. Router Configuration

Public and admin routes. Route guards for /admin/* (requiresAuth meta).

---

## 5. Pinia Stores

### 5.1 Auth Store

Session, user, isAuthenticated, isLoading.

### 5.2 UI Store

SidebarOpen, activeModal, notifications.

---

## 6. Public Pages

- **Home** — hero, featured projects, testimonials, CTA
- **About** — bio, avatar, skills
- **Projects** — listing with search/filter
- **Project Detail** — full description, gallery, OG tags
- **Services** — service list
- **Contact** — form with Turnstile, honeypot, rate limiting
- **404** — not found page

---

## 7. Admin Pages

- **Login** — email/password authentication
- **Dashboard** — quick links, recent projects, submission stats, rebuild button
- **Projects** — CRUD with image upload, drag-to-reorder gallery
- **Testimonials** — CRUD with avatar upload, published toggle
- **Contact Submissions** — view, filter, mark read/spam, export JSON
- **About** — edit title, bio, avatar
- **Skills** — add/edit/delete with category, proficiency
- **Services** — add/edit/delete with icon
- **Settings** — contact info (email, phone, socials)

---

## 8. vite-ssg

routes.ts fetches published projects and generates /projects/:slug routes. Build outputs static HTML with correct meta tags.

---

## 9. Deployment (Vercel)

vercel.json configures build command, output directory, environment variables.

---

## 10. Component Library

Hand-rolled Tailwind components:
- Header, Footer (public layout)
- ProjectCard, ProjectGrid
- TestimonialCard, TestimonialSlider
- ContactForm
- AdminLayout (sidebar navigation)
- ProjectForm, ImageUpload
- TestimonialForm
- ContentEditor

---

## 11. Acceptance Criteria

- [ ] All public pages render with vite-ssg
- [ ] Dark mode persists via cookie
- [ ] Admin login works
- [ ] Admin CRUD operations work
- [ ] Project detail pages have correct OG tags
- [ ] Image uploads with preview
- [ ] Contact form rate-limited
- [ ] Publishing triggers rebuild
- [ ] Site responsive on mobile/tablet/desktop
- [ ] WCAG 2.1 AA accessible
- [ ] Deploys to Vercel
