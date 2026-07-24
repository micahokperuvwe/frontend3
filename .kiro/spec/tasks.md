# Implementation Tasks: Portfolio Site

## Task Dependencies

Backend setup must complete before frontend integration. Frontend integration must complete before deployment.

---

## Phase 0: Backend Setup (Node.js + Express + MongoDB)

### Task 0a: Set Up Backend Project & Environment

**Status:** Not started

**Acceptance:**
- [ ] Backend repository created on GitHub
- [ ] Node.js 18+ installed locally
- [ ] Express + TypeScript project scaffolded
- [ ] MongoDB Atlas account created (staging + production clusters)
- [ ] Firebase project created with Auth enabled
- [ ] Cloudinary account created
- [ ] `.env.local` and `.env.production` configured with all credentials

**Steps:**
1. Create backend GitHub repository
2. Create MongoDB Atlas clusters (staging + production)
3. Create Firebase project and get service account credentials
4. Create Cloudinary account and get API credentials
5. Clone backend repo locally and run `npm install`
6. Create `.env.local` with all credentials (see backend-spec-mongodb.md §1)
7. Verify MongoDB connection locally

**Notes:** Refer to backend-spec-mongodb.md §1, §2. Keep all secrets secure.

---

### Task 0b: Create MongoDB Collections & Indexes

**Depends on:** Task 0a

**Status:** Not started

**Acceptance:**
- [ ] All 8 collections created (projects, categories, testimonials, contact_submissions, skills, services, about_content, contact_info)
- [ ] All indexes created for query performance
- [ ] Collections tested with sample documents

**Steps:**
1. Connect to MongoDB Atlas clusters (staging + production)
2. Create all 8 collections with schemas (from backend-spec-mongodb.md §2)
3. Create indexes on frequently queried fields
4. Insert sample data (1 project, 1 testimonial, etc.)
5. Verify indexes using MongoDB Atlas dashboard

**Notes:** Refer to backend-spec-mongodb.md §2. Use MongoDB Compass or Atlas UI to create collections.

---

### Task 0c: Set Up Firebase Auth & Cloudinary

**Depends on:** Task 0b

**Status:** Not started

**Acceptance:**
- [ ] Firebase project configured with Email/Password auth
- [ ] Admin user created in Firebase
- [ ] Firebase service account credentials secured in `.env`
- [ ] Cloudinary account configured with upload presets
- [ ] Cloudinary transformation URLs tested

**Steps:**
1. In Firebase Console, enable Email/Password auth
2. Create admin user with email from `.env.local`
3. Download Firebase service account key JSON
4. Add Firebase credentials to `.env` files
5. Configure Cloudinary upload presets (for transformations)
6. Test image upload to Cloudinary

**Notes:** Refer to backend-spec-mongodb.md §4, §5

---

## Phase 1: Backend (Node.js + Express + MongoDB)

### Task 1: Create Express Server & Connect to MongoDB

**Depends on:** Task 0c

**Status:** Not started

**Acceptance:**
- [ ] Express app initializes and runs on port 3001
- [ ] MongoDB connection successful
- [ ] Middleware configured (CORS, JSON parser, rate limiter)
- [ ] Error handling middleware in place
- [ ] Server runs locally without errors

**Steps:**
1. Create `src/app.ts` with Express setup
2. Create `src/services/mongoService.ts` (MongoDB client singleton)
3. Configure middleware (CORS, JSON, rate limiter)
4. Connect to MongoDB Atlas in `.env.local`
5. Test with `npm run dev` locally
6. Verify connection logs

**Notes:** Refer to backend-spec-mongodb.md §3. Use serverless-express or express for Vercel.

---

### Task 2: Create MongoDB Collections Schema & Models

**Depends on:** Task 1

**Status:** Not started

**Acceptance:**
- [ ] All 8 Mongoose models created with schema validation
- [ ] Indexes created on models
- [ ] Models export TypeScript types

**Steps:**
1. Create `src/models/Project.ts` with Mongoose schema
2. Create `src/models/Testimonial.ts`
3. Create `src/models/ContactSubmission.ts`
4. Create `src/models/Skill.ts`
5. Create `src/models/Service.ts`
6. Create `src/models/AboutContent.ts`
7. Create `src/models/ContactInfo.ts`
8. Create `src/models/Category.ts`
9. Verify all indexes
10. Test models with sample queries

**Notes:** Refer to backend-spec-mongodb.md §2. Use Mongoose for schema validation and type safety.

---

### Task 3: Create Public API Routes (Projects, Testimonials, Skills, Services, About, Contact Info)

**Depends on:** Task 2

**Status:** Not started

**Acceptance:**
- [ ] `GET /api/projects` — returns published projects with filters (category, tech, status)
- [ ] `GET /api/projects/:slug` — returns single project by slug
- [ ] `GET /api/testimonials` — returns published testimonials
- [ ] `GET /api/skills` — returns all skills
- [ ] `GET /api/services` — returns all services
- [ ] `GET /api/about` — returns about content
- [ ] `GET /api/contact-info` — returns contact info
- [ ] All routes return correct data structure and HTTP status codes

**Steps:**
1. Create `src/routes/projects.ts` with GET endpoints
2. Create `src/routes/testimonials.ts`
3. Create `src/routes/skills.ts`
4. Create `src/routes/services.ts`
5. Create `src/routes/about.ts`
6. Create `src/routes/contactInfo.ts`
7. Create controllers for each route
8. Test all endpoints with curl or Postman
9. Verify filtering and pagination work

**Notes:** Refer to backend-spec-mongodb.md §3.4. Use MongoDB query operators for filtering.

---

### Task 4: Create Firebase Auth Middleware & Admin Routes

**Depends on:** Task 3

**Status:** Not started

**Acceptance:**
- [ ] Firebase JWT verification middleware implemented
- [ ] Admin email verification middleware implemented
- [ ] `POST /api/admin/projects` creates project (admin only)
- [ ] `PUT /api/admin/projects/:id` updates project (admin only)
- [ ] `DELETE /api/admin/projects/:id` deletes project (admin only)
- [ ] `GET /api/admin/projects` lists all projects incl. unpublished (admin only)
- [ ] Unauthorized requests return 401 Unauthorized
- [ ] All admin routes require valid Firebase token + admin email

**Steps:**
1. Create `src/middleware/auth.ts` — Firebase JWT verification
2. Create `src/services/firebaseService.ts` — Firebase token verification
3. Update admin routes to include auth middleware
4. Implement create/update/delete controllers
5. Test with valid and invalid Firebase tokens
6. Test with non-admin users (should get 401)

**Notes:** Refer to backend-spec-mongodb.md §4. Use Firebase Admin SDK.

---

### Task 5: Create Cloudinary Integration for Image Uploads

**Depends on:** Task 4

**Status:** Not started

**Acceptance:**
- [ ] Image upload endpoint at `POST /api/admin/upload`
- [ ] File size validation (10 MB max, enforced server-side)
- [ ] File type validation (JPEG, PNG, WebP)
- [ ] Images uploaded to Cloudinary with transformations
- [ ] Returns Cloudinary URL with transformation applied
- [ ] Supports project thumbnails, gallery images, and avatars

**Steps:**
1. Create `src/services/cloudinaryService.ts`
2. Create `src/routes/upload.ts`
3. Implement upload endpoint with validation
4. Configure Cloudinary transformations (thumbnails, gallery, avatars)
5. Test upload with valid and invalid files
6. Verify URLs return transformed images

**Notes:** Refer to backend-spec-mongodb.md §5. Use multer for file handling.

---

### Task 6: Create Contact Form & Rate Limiting

**Depends on:** Task 5

**Status:** Not started

**Acceptance:**
- [ ] `POST /api/contact` endpoint accepts contact form
- [ ] Rate limiting: max 3 submissions per IP per hour
- [ ] Spam detection: auto-flags submissions with heuristics
- [ ] Honeypot validation works
- [ ] Submissions saved to MongoDB with unread status
- [ ] Returns 429 (Too Many Requests) if rate-limited
- [ ] Returns 400 (Bad Request) if validation fails

**Steps:**
1. Create `src/routes/contact.ts`
2. Create `src/middleware/rateLimiter.ts` — IP-based rate limiting
3. Implement spam detection heuristics
4. Implement honeypot field validation
5. Save submissions to `contact_submissions` collection
6. Test rate limiting (create 4+ submissions from same IP)
7. Test spam detection with various inputs

**Notes:** Refer to backend-spec-mongodb.md §6. Hash IP address before storing (SHA-256).

---

### Task 7: Create Admin CRUD Routes (Testimonials, Skills, Services, About, Contact Info)

**Depends on:** Task 6

**Status:** Not started

**Acceptance:**
- [ ] `POST /api/admin/testimonials` creates testimonial
- [ ] `PUT /api/admin/testimonials/:id` updates testimonial
- [ ] `DELETE /api/admin/testimonials/:id` deletes testimonial
- [ ] `GET /api/admin/testimonials` lists all testimonials
- [ ] Similar CRUD for skills, services, about content, contact info
- [ ] All routes require Firebase auth + admin email
- [ ] Validation errors return 400 with error messages

**Steps:**
1. Create admin CRUD routes for testimonials
2. Create admin CRUD routes for skills
3. Create admin CRUD routes for services
4. Create admin CRUD routes for about content
5. Create admin CRUD routes for contact info
6. Test all CRUD operations with valid data
7. Test validation errors

**Notes:** Refer to backend-spec-mongodb.md §3.4. Use Zod for schema validation.

---

### Task 8: Create Admin Submissions Management & GitHub Webhook

**Depends on:** Task 7

**Status:** Not started

**Acceptance:**
- [ ] `GET /api/admin/submissions` lists contact submissions (with filter by status)
- [ ] `PUT /api/admin/submissions/:id` marks as read/spam
- [ ] `DELETE /api/admin/submissions/:id` deletes submission
- [ ] `POST /api/admin/rebuild` triggers GitHub Actions rebuild
- [ ] Webhook verifies GitHub secret (HMAC-SHA256)
- [ ] Rebuild webhook calls GitHub API correctly
- [ ] Returns 202 (Accepted) on successful webhook trigger

**Steps:**
1. Create `src/routes/submissions.ts`
2. Implement submission list with status filtering
3. Implement mark read/spam endpoints
4. Create `src/routes/rebuild.ts`
5. Implement GitHub webhook with secret verification
6. Test submission management
7. Test rebuild webhook with curl

**Notes:** Refer to backend-spec-mongodb.md §7. Use crypto for HMAC verification.

---

### Task 9: Set Up Error Handling & Logging

**Depends on:** Task 8

**Status:** Not started

**Acceptance:**
- [ ] Global error handler middleware
- [ ] Validation errors return 400 with details
- [ ] Auth errors return 401
- [ ] Not found errors return 404
- [ ] Server errors return 500 with generic message (no sensitive info)
- [ ] All errors logged to console (or logging service)

**Steps:**
1. Create `src/middleware/errorHandler.ts`
2. Create `src/utils/validation.ts` with Zod schemas
3. Implement error handling in all routes
4. Test error scenarios (missing fields, invalid auth, etc.)
5. Verify error messages are secure (no stack traces to client)

**Notes:** Refer to backend-spec-mongodb.md §3

---

### Task 10: Deploy Backend to Vercel (Serverless Functions)

**Depends on:** Task 9

**Status:** Not started

**Acceptance:**
- [ ] `vercel.json` configured with environment variables
- [ ] Backend repository connected to Vercel
- [ ] `npm run build` builds successfully
- [ ] `npm run dev` works locally with serverless-offline
- [ ] Backend deploys to Vercel as serverless functions
- [ ] All API endpoints accessible on Vercel domain
- [ ] Environment variables set in Vercel project
- [ ] Production MongoDB cluster configured
- [ ] CORS configured to allow frontend domain

**Steps:**
1. Create `vercel.json` (from backend-spec-mongodb.md §8)
2. Create `api/index.ts` (Vercel entry point)
3. Connect backend repo to Vercel
4. Set environment variables in Vercel project
5. Test local dev with `npm run dev`
6. Deploy to Vercel
7. Test deployed API endpoints
8. Verify CORS allows frontend requests

**Notes:** Refer to backend-spec-mongodb.md §8. Use serverless-express for Vercel compatibility.

---

## Phase 2: Frontend (Vue.js + vite-ssg)

## Phase 2: Frontend (Vue.js + vite-ssg)

### Task 11: Set Up Project Dependencies & Tooling

**Depends on:** Task 10 (backend must be deployed and working)

**Status:** Not started

**Acceptance:**
- [ ] All dependencies installed (axios, vue-router, pinia, @unhead/vue, zod, vite-ssg, firebase, etc.)
- [ ] TypeScript configured
- [ ] Tailwind CSS integrated
- [ ] vite-ssg configured with routes.ts
- [ ] Environment variables validated at runtime
- [ ] Firebase Auth SDK initialized

**Steps:**
1. Install axios (for API calls to backend)
2. Install firebase (for Firebase Auth)
3. Install remaining dependencies: vue-router, pinia, @unhead/vue, zod, vite-ssg
4. Update vite.config.ts with vite-ssg integration
5. Create routes.ts for dynamic project routes
6. Create `.env.local` with backend API URL and Firebase config
7. Verify build runs without errors

**Notes:** Refer to frontend-spec.md §7. Backend API endpoint: `https://your-backend.vercel.app/api`

---

### Task 12: Create Type Definitions & Validation Schemas

**Depends on:** Task 11

**Status:** Not started

**Acceptance:**
- [ ] TypeScript types defined for all data models (Project, Testimonial, ContactSubmission, etc.)
- [ ] Zod schemas created for all forms (ProjectForm, ContactForm, TestimonialForm)
- [ ] API types match backend responses
- [ ] Schemas exported and imported by components

**Steps:**
1. Create types/index.ts with interfaces
2. Create utils/validation.ts with Zod schemas
3. Create utils/constants.ts for API endpoints, routes, etc.
4. Verify schemas match backend responses

**Notes:** Refer to frontend-spec.md §3

---

### Task 13: Create Firebase Auth Service & Login Page

**Depends on:** Task 12

**Status:** Not started

**Acceptance:**
- [ ] Firebase Auth initialized in composable
- [ ] Admin login page at /admin/login
- [ ] Email and password fields with validation
- [ ] Submit calls Firebase Auth (not backend)
- [ ] Firebase ID token obtained on login
- [ ] Token passed to backend API requests via Authorization header
- [ ] On success, redirect to /admin dashboard
- [ ] Session persists via Firebase (localStorage)
- [ ] Non-admin users see "unauthorized" error

**Steps:**
1. Create composables/useFirebaseAuth.ts
2. Initialize Firebase Auth with credentials from .env
3. Create pages/admin/login.vue
4. Implement login with email/password
5. Store Firebase ID token locally
6. Test login with Firebase admin account

**Notes:** Refer to frontend-spec.md §10.1. Token refresh handled by Firebase SDK automatically.

---

### Task 14: Create API Composables (Projects, Testimonials, Skills, Services, About, Contact)

**Depends on:** Task 13

**Status:** Not started

**Acceptance:**
- [ ] useProjects() fetches published/all projects (public/admin)
- [ ] useTestimonials() fetches and creates testimonials
- [ ] useSkills() fetches and CRUD skills
- [ ] useServices() fetches and CRUD services
- [ ] useAbout() fetches and updates about content
- [ ] useContactInfo() fetches and updates contact info
- [ ] useContactSubmissions() fetches and manages submissions
- [ ] All composables use axios to call backend API
- [ ] All admin composables include Firebase ID token in headers

**Steps:**
1. Create composables/useProjects.ts
2. Create composables/useTestimonials.ts
3. Create composables/useSkills.ts
4. Create composables/useServices.ts
5. Create composables/useAbout.ts
6. Create composables/useContactInfo.ts
7. Create composables/useContactSubmissions.ts
8. Test all composables with backend

**Notes:** Refer to frontend-spec.md §2. Add Firebase token to all admin requests.

---

### Task 15: Create Core Layout Components & Dark Mode

**Depends on:** Task 14

**Status:** Not started

**Acceptance:**
- [ ] Header.vue with navigation and dark mode toggle
- [ ] Footer.vue with social links and contact info
- [ ] AdminLayout.vue for admin pages (sidebar + main area)
- [ ] Dark mode toggle persists via cookie
- [ ] Light/dark mode applies to all pages
- [ ] Navigation is responsive (hamburger on mobile)
- [ ] All components styled with Tailwind

**Steps:**
1. Create components/public/Header.vue
2. Create components/public/Footer.vue
3. Create components/admin/AdminLayout.vue
4. Create composables/useDarkMode.ts
5. Style with Tailwind CSS
6. Test responsiveness on mobile/tablet/desktop

**Notes:** Refer to frontend-spec.md §11

---

### Task 16: Create Public Pages (Home, About, Services)

**Depends on:** Task 15

**Status:** Not started

**Acceptance:**
- [ ] Home page with hero, featured projects, testimonials, CTA
- [ ] About page with owner bio, avatar, skills
- [ ] Services page with service list
- [ ] All pages have proper @unhead/vue meta tags
- [ ] Responsive on all breakpoints
- [ ] WCAG 2.1 AA accessible

**Steps:**
1. Create pages/public/index.vue (home)
2. Create pages/public/about.vue
3. Create pages/public/services.vue
4. Add @unhead/vue useHead() for SEO
5. Test accessibility

**Notes:** Refer to frontend-spec.md §9

---

### Task 17: Create Projects Pages (Listing & Detail)

**Depends on:** Task 16

**Status:** Not started

**Acceptance:**
- [ ] Projects listing with search and filters
- [ ] Project cards link to detail page
- [ ] Project detail pages fetch by slug (dynamic route)
- [ ] Detail page displays full description, gallery, tech stack
- [ ] Detail page has correct OG tags for social sharing
- [ ] Gallery has lightbox UI
- [ ] 404 for invalid slugs
- [ ] Empty state when no projects exist

**Steps:**
1. Create pages/public/projects.vue (listing)
2. Create components/public/ProjectCard.vue
3. Create pages/public/projects/[slug].vue (detail)
4. Create gallery lightbox component
5. Add dynamic @unhead/vue meta tags on detail page
6. Test with multiple projects

**Notes:** Refer to frontend-spec.md §9.2, §9.3. Use vite-ssg to pre-render all projects.

---

### Task 18: Create Contact Page & Form

**Depends on:** Task 17

**Status:** Not started

**Acceptance:**
- [ ] Contact form with name, email, message, honeypot
- [ ] Cloudflare Turnstile integration
- [ ] Client-side validation with Zod
- [ ] Rate-limit check before submit
- [ ] Form submits to backend API
- [ ] Shows success/error/rate-limit messages
- [ ] Contact info fetched from backend
- [ ] Social links displayed

**Steps:**
1. Create pages/public/contact.vue
2. Create components/public/ContactForm.vue
3. Add honeypot field (hidden)
4. Integrate Cloudflare Turnstile
5. Call backend rate-limit check before submit
6. Test form submission

**Notes:** Refer to frontend-spec.md §9.4. Honeypot should be hidden with CSS.

---

### Task 19: Create Admin Dashboard & Layout

**Depends on:** Task 18

**Status:** Not started

**Acceptance:**
- [ ] Admin dashboard at /admin (requires Firebase auth)
- [ ] Quick links to projects, testimonials, submissions
- [ ] Widget showing recent projects
- [ ] Widget showing unread submissions count
- [ ] Rebuild trigger button
- [ ] Logout button
- [ ] Route guards protect all /admin/* routes

**Steps:**
1. Create pages/admin/dashboard.vue
2. Add route guards via useFirebaseAuth()
3. Fetch recent projects and submission stats
4. Add rebuild button
5. Add logout link

**Notes:** Refer to frontend-spec.md §10.2

---

### Task 20: Create Admin Projects CRUD

**Depends on:** Task 19

**Status:** Not started

**Acceptance:**
- [ ] Projects list at /admin/projects (table with title, status, featured, published)
- [ ] Create button links to /admin/projects/create
- [ ] Edit button links to /admin/projects/:id/edit
- [ ] Delete button with confirm dialog
- [ ] Create/Edit forms with all fields
- [ ] Image upload for thumbnail and gallery
- [ ] Drag-to-reorder gallery
- [ ] Publish/draft toggle
- [ ] Save triggers rebuild if publish status changed
- [ ] Success/error messages

**Steps:**
1. Create pages/admin/projects/index.vue (list)
2. Create pages/admin/projects/create.vue (form)
3. Create pages/admin/projects/[id]/edit.vue (form)
4. Create components/admin/ProjectForm.vue
5. Create components/admin/ImageUpload.vue
6. Test CRUD operations

**Notes:** Refer to frontend-spec.md §10.3. Image uploads use backend `/api/admin/upload`.

---

### Task 21: Create Admin Testimonials & Content CRUD

**Depends on:** Task 20

**Status:** Not started

**Acceptance:**
- [ ] Testimonials CRUD at /admin/testimonials
- [ ] About content editor at /admin/content/about
- [ ] Skills editor at /admin/content/skills
- [ ] Services editor at /admin/content/services
- [ ] Contact info editor at /admin/settings
- [ ] All editors save to backend
- [ ] Success/error messages

**Steps:**
1. Create testimonials CRUD pages
2. Create content editor pages
3. Test all CRUD operations

**Notes:** Refer to frontend-spec.md §10.3

---

### Task 22: Create Admin Submissions Management

**Depends on:** Task 21

**Status:** Not started

**Acceptance:**
- [ ] Submissions list at /admin/submissions
- [ ] Filter by status (unread/read/spam)
- [ ] Mark as read/spam buttons
- [ ] Delete button
- [ ] Export as JSON button

**Steps:**
1. Create pages/admin/submissions/index.vue
2. Implement filter, mark, delete, export
3. Test all operations

**Notes:** Refer to frontend-spec.md §10.4

---

### Task 23: Create 404 & Error Pages

**Depends on:** Task 22

**Status:** Not started

**Acceptance:**
- [ ] 404 page at /404
- [ ] Error boundary for API failures
- [ ] User-friendly error messages

**Steps:**
1. Create pages/public/404.vue
2. Create error handling in API composables

**Notes:** Refer to frontend-spec.md §9

---

### Task 24: Set Up vite-ssg & Routes.ts

**Depends on:** Task 23

**Status:** Not started

**Acceptance:**
- [ ] routes.ts fetches published projects from backend
- [ ] routes.ts generates /projects/:slug routes
- [ ] npm run build generates static HTML in dist/
- [ ] Each HTML has correct meta tags
- [ ] Admin pages not pre-rendered

**Steps:**
1. Create routes.ts
2. Update vite.config.ts with vite-ssg
3. Run npm run build
4. Verify HTML files contain meta tags

**Notes:** Refer to frontend-spec.md §6

---

### Task 25: Configure Deployment to Vercel (Frontend)

**Depends on:** Task 24

**Status:** Not started

**Acceptance:**
- [ ] Frontend repo connected to Vercel
- [ ] Environment variables set (backend API URL, Firebase config)
- [ ] Build deploys successfully
- [ ] Site serves on Vercel domain
- [ ] GitHub Actions workflow configured

**Steps:**
1. Connect frontend repo to Vercel
2. Set environment variables
3. Create GitHub Actions workflow
4. Test: push to main → build → deploy
5. Test: admin rebuild workflow

**Notes:** Refer to frontend-spec.md §12

---

### Task 26: Integration Testing & QA

**Depends on:** Task 25

**Status:** Not started

**Acceptance:**
- [ ] Public site loads and renders
- [ ] Admin login works
- [ ] Admin CRUD operations work
- [ ] Publishing triggers rebuild
- [ ] Contact form submits and saves
- [ ] Rate limiting works
- [ ] Dark mode persists
- [ ] All pages responsive
- [ ] WCAG 2.1 AA accessible
- [ ] Performance: FCP < 1.5s, LCP < 2.5s

**Steps:**
1. Manual test all pages
2. Test admin CRUD
3. Test publishing rebuild
4. Test contact form
5. Test accessibility
6. Test performance

**Notes:** Do not skip accessibility testing.

---

### Task 27: Launch & Monitor

**Depends on:** Task 26

**Status:** Not started

**Acceptance:**
- [ ] Site deployed to custom domain (DNS configured)
- [ ] SSL certificate active
- [ ] Monitoring set up
- [ ] Admin documented
- [ ] No critical bugs
- [ ] Launch announced

**Steps:**
1. Configure custom domain DNS
2. Verify SSL
3. Enable monitoring
4. Document admin usage
5. Monitor first 24h

**Notes:** Keep admin credentials secure.

---

### Task 9: Create Type Definitions & Validation Schemas

**Depends on:** Task 8

**Status:** Not started

**Acceptance:**
- [ ] TypeScript types defined for all Supabase tables (Project, Testimonial, ContactSubmission, etc.)
- [ ] Zod schemas created for all forms (ProjectForm, ContactForm, TestimonialForm)
- [ ] Schemas exported and imported by components that need them

**Steps:**
1. Create types/index.ts with interfaces for Project, Testimonial, ContactSubmission, Skill, Service, AboutContent, ContactInfo
2. Create utils/validation.ts with Zod schemas
3. Create utils/constants.ts for routes, API endpoints, etc.
4. Verify schemas match Supabase table columns

**Notes:** Refer to frontend-spec.md §3

---

### Task 10: Create Supabase Client & Core Composables

**Depends on:** Task 9

**Status:** Not started

**Acceptance:**
- [ ] useSupabase() singleton initialized
- [ ] useAuth() handles login/logout/refresh
- [ ] useProjects() has CRUD operations
- [ ] useImageUpload() handles file uploads with validation
- [ ] useDarkMode() manages cookie-based theme
- [ ] All composables work with TypeScript

**Steps:**
1. Create utils/supabase.ts (client singleton)
2. Create composables/useSupabase.ts
3. Create composables/useAuth.ts (login, logout, refresh token)
4. Create composables/useProjects.ts (fetch published, fetch all, create, update, delete)
5. Create composables/useImageUpload.ts (with 10 MB limit, JPEG/PNG/WebP validation)
6. Create composables/useDarkMode.ts (cookie-based, prefers-color-scheme)
7. Test each composable in isolation

**Notes:** Refer to frontend-spec.md §2. All API calls should use Supabase client.

---

### Task 11: Create Pinia Stores (Auth & UI)

**Depends on:** Task 10

**Status:** Not started

**Acceptance:**
- [ ] useAuthStore() manages session, user, isAuthenticated, isLoading
- [ ] useUIStore() manages sidebarOpen, activeModal, notifications
- [ ] Stores persist to localStorage (auth token via Supabase client)
- [ ] Dark mode state synced to cookie

**Steps:**
1. Create stores/auth.ts with session management
2. Create stores/ui.ts with modal, sidebar, notifications
3. Integrate useAuth() composable to sync with Supabase
4. Verify stores persist correctly across page reloads

**Notes:** Refer to frontend-spec.md §5

---

### Task 12: Create Core Layout Components

**Depends on:** Task 11

**Status:** Not started

**Acceptance:**
- [ ] Header.vue displays logo, nav links, dark mode toggle
- [ ] Footer.vue displays social links, contact info, copyright
- [ ] Light/dark mode toggle works and persists via cookie
- [ ] Navigation is responsive (hamburger on mobile)
- [ ] Components are fully styled with Tailwind

**Steps:**
1. Create components/public/Header.vue with dark mode toggle
2. Create components/public/Footer.vue with social links
3. Create AdminLayout.vue for admin pages (sidebar + main area)
4. Style with Tailwind CSS (responsive design)
5. Test on mobile, tablet, desktop

**Notes:** Refer to frontend-spec.md §11 (component library)

---

### Task 13: Create Public Pages (Home, About, Services)

**Depends on:** Task 12

**Status:** Not started

**Acceptance:**
- [ ] Home page renders hero, featured projects, testimonials, CTA
- [ ] About page displays owner bio, avatar, skills
- [ ] Services page lists services with descriptions
- [ ] All pages have proper meta tags via @unhead/vue
- [ ] Responsive on all breakpoints
- [ ] WCAG 2.1 AA accessible (color contrast, keyboard nav, alt text)

**Steps:**
1. Create pages/public/index.vue (home with Hero, ProjectSlider, TestimonialSlider, CTA)
2. Create pages/public/about.vue (fetch about_content, display bio and avatar)
3. Create pages/public/services.vue (fetch services, display grid)
4. Add @unhead/vue useHead() for meta tags in each page
5. Test accessibility with axe DevTools

**Notes:** Refer to frontend-spec.md §9

---

### Task 14: Create Projects Pages (Listing & Detail)

**Depends on:** Task 13

**Status:** Not started

**Acceptance:**
- [ ] Projects listing page fetches and displays published projects
- [ ] Search by title works
- [ ] Filter by category, technology, status works
- [ ] Project cards are clickable and link to detail page
- [ ] Project detail page fetches by slug (dynamic route)
- [ ] Detail page displays full description, gallery, tech stack, links
- [ ] Detail page has correct OG tags for social sharing
- [ ] Gallery has lightbox or slider UI
- [ ] "Not found" state for invalid slugs (404)
- [ ] Empty state when no projects exist

**Steps:**
1. Create pages/public/projects.vue (listing with search/filter)
2. Create components/public/ProjectCard.vue
3. Create components/public/ProjectGrid.vue
4. Create pages/public/projects/[slug].vue (dynamic detail page)
5. Create components for gallery lightbox
6. Integrate @unhead/vue for dynamic meta tags on detail page
7. Test with multiple projects and edge cases

**Notes:** Refer to frontend-spec.md §9.2, §9.3. Use vite-ssg to pre-render all project routes.

---

### Task 15: Create Contact Page & Form

**Depends on:** Task 14

**Status:** Not started

**Acceptance:**
- [ ] Contact form renders with name, email, message, honeypot, Turnstile
- [ ] Client-side validation with Zod schemas
- [ ] Honeypot field is hidden from users
- [ ] Cloudflare Turnstile challenge appears
- [ ] Form submission calls rate-limit-contact Edge Function
- [ ] If rate-limited, show "too many submissions" error
- [ ] On success, save to contact_submissions table
- [ ] Show success message
- [ ] Social media links displayed on page
- [ ] Contact info (phone, email) from contact_info table

**Steps:**
1. Create pages/public/contact.vue
2. Create components/public/ContactForm.vue
3. Add honeypot field (hidden with CSS)
4. Integrate Cloudflare Turnstile (register for site key)
5. Call rate-limit-contact Edge Function before submit
6. Submit to contact_submissions via Supabase
7. Fetch contact_info table for display
8. Handle success/error/rate-limit responses

**Notes:** Refer to frontend-spec.md §9.4. Honeypot field should have `display: none` or be outside viewport.

---

### Task 16: Create Admin Login Page

**Depends on:** Task 12

**Status:** Not started

**Acceptance:**
- [ ] Admin login page at /admin/login
- [ ] Email and password fields with validation
- [ ] Submit button calls useAuth().login()
- [ ] Error messages display on failed login
- [ ] On success, redirect to /admin dashboard
- [ ] Session persists across page reloads (Supabase client handles token refresh)
- [ ] Non-admin users see "unauthorized" error

**Steps:**
1. Create pages/admin/login.vue
2. Add email, password input fields
3. Call useAuth().login() on submit
4. Redirect to /admin on success
5. Store JWT in Supabase client (auto-handled)
6. Test with correct and incorrect credentials

**Notes:** Refer to frontend-spec.md §10.1

---

### Task 17: Create Admin Dashboard

**Depends on:** Task 16

**Status:** Not started

**Acceptance:**
- [ ] Admin dashboard at /admin (requires auth)
- [ ] Quick links to projects, testimonials, submissions pages
- [ ] Widget showing recent projects
- [ ] Widget showing unread submissions count
- [ ] Rebuild status (last deploy time)
- [ ] Rebuild trigger button (calls github-rebuild-trigger Edge Function)
- [ ] Logout button

**Steps:**
1. Create pages/admin/dashboard.vue
2. Add route guard to require auth
3. Fetch recent projects and submission stats
4. Add rebuild button with GitHub Actions webhook
5. Display rebuild status and last deploy time
6. Add logout link

**Notes:** Refer to frontend-spec.md §10.2

---

### Task 18: Create Admin Projects CRUD

**Depends on:** Task 17

**Status:** Not started

**Acceptance:**
- [ ] Projects list page at /admin/projects (table with title, status, featured, published, created_at)
- [ ] Create button links to /admin/projects/create
- [ ] Edit button links to /admin/projects/:id/edit
- [ ] Delete button removes project (with confirm dialog)
- [ ] Create/Edit forms with all fields (title, slug, descriptions, category, tech, tags, images, etc.)
- [ ] Image upload for thumbnail (preview before save)
- [ ] Gallery image upload with drag-to-reorder
- [ ] Category/tags selection
- [ ] Featured toggle and sort_order field
- [ ] Publish/draft toggle
- [ ] Save button triggers rebuild if publish status changed
- [ ] Success/error messages

**Steps:**
1. Create pages/admin/projects/index.vue (list)
2. Create pages/admin/projects/create.vue (form)
3. Create pages/admin/projects/[id]/edit.vue (form)
4. Create components/admin/ProjectForm.vue (reusable form)
5. Create components/admin/ImageUpload.vue (with preview)
6. Implement useProjects().create(), update(), delete()
7. Add form validation with Zod schema
8. Test CRUD operations

**Notes:** Refer to frontend-spec.md §10.3. Image uploads should use useImageUpload() composable.

---

### Task 19: Create Admin Testimonials CRUD

**Depends on:** Task 18

**Status:** Not started

**Acceptance:**
- [ ] Testimonials list page at /admin/testimonials (table with author, quote, published, created_at)
- [ ] Create button links to create form
- [ ] Edit button links to edit form
- [ ] Delete button removes testimonial
- [ ] Create/Edit forms with all fields (author name, role, avatar, quote, rating, published)
- [ ] Avatar image upload with preview
- [ ] Published toggle (approval gate)
- [ ] Save button
- [ ] Success/error messages

**Steps:**
1. Create pages/admin/testimonials/index.vue (list)
2. Create pages/admin/testimonials/create.vue (form)
3. Create pages/admin/testimonials/[id]/edit.vue (form)
4. Create components/admin/TestimonialForm.vue
5. Implement useTestimonials() composable
6. Test CRUD operations

**Notes:** Refer to frontend-spec.md §10.3

---

### Task 20: Create Admin Contact Submissions View

**Depends on:** Task 19

**Status:** Not started

**Acceptance:**
- [ ] Submissions list page at /admin/submissions (table with name, email, message, status, submitted_at)
- [ ] Filter by status (unread, read, spam)
- [ ] Mark as read button
- [ ] Mark as spam button
- [ ] Delete button
- [ ] Export as JSON button (download all submissions)
- [ ] Auto-flagged spam highlighted with warning icon
- [ ] Success/error messages

**Steps:**
1. Create pages/admin/submissions/index.vue
2. Create useContactSubmissions() composable
3. Implement filter by status
4. Implement mark read/spam/delete actions
5. Implement export to JSON
6. Test all operations

**Notes:** Refer to frontend-spec.md §10.4

---

### Task 21: Create Admin Content Editors (About, Skills, Services, Contact Info)

**Depends on:** Task 20

**Status:** Not started

**Acceptance:**
- [ ] About page editor at /admin/content/about (edit title, bio, avatar)
- [ ] Skills page editor at /admin/content/skills (add/edit/delete skills with category, proficiency)
- [ ] Services page editor at /admin/content/services (add/edit/delete services with icon)
- [ ] Contact info editor at /admin/settings (edit email, phone, social links)
- [ ] All editors save changes to Supabase
- [ ] Success/error messages
- [ ] Changes appear on public site immediately (no rebuild needed for content, only for projects)

**Steps:**
1. Create pages/admin/content/about.vue
2. Create pages/admin/content/skills.vue
3. Create pages/admin/content/services.vue
4. Create pages/admin/settings.vue (contact info)
5. Create composables for each (useAbout, useSkills, useServices, useContactInfo)
6. Implement form validation and save
7. Test updates on public pages

**Notes:** These are database CRUD operations, not file-based content.

---

### Task 22: Create 404 & Error Pages

**Depends on:** Task 21

**Status:** Not started

**Acceptance:**
- [ ] 404 page at /404 (custom error page, not default Vite)
- [ ] 404 shown when accessing invalid project slug
- [ ] Error boundary or error page for Supabase failures
- [ ] Error messages are user-friendly

**Steps:**
1. Create pages/public/404.vue
2. Create pages/public/error.vue (optional error boundary)
3. Test with invalid project slug
4. Test with Supabase connection error

**Notes:** Refer to frontend-spec.md §9

---

### Task 23: Set Up vite-ssg & Routes.ts

**Depends on:** Task 22

**Status:** Not started

**Acceptance:**
- [ ] routes.ts fetches published projects from Supabase
- [ ] routes.ts generates /projects/:slug routes for each project
- [ ] npm run build generates static HTML in dist/
- [ ] Each HTML file has correct <title>, description, OG tags
- [ ] vite-ssg preserves client-side routing for admin pages (not pre-rendered)

**Steps:**
1. Create routes.ts in project root
2. Implement getRoutes() function to fetch projects and generate routes
3. Update vite.config.ts with vite-ssg config
4. Run npm run build and inspect dist/
5. Verify HTML files contain meta tags
6. Test that client-side hydration works

**Notes:** Refer to frontend-spec.md §6. Admin routes should NOT be in vite-ssg output.

---

### Task 24: Configure Deployment to Vercel

**Depends on:** Task 23

**Status:** Not started

**Acceptance:**
- [ ] vercel.json configured with build command and output directory
- [ ] Environment variables set in Vercel project (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, etc.)
- [ ] GitHub Actions workflow configured to trigger on push and admin webhook
- [ ] Build and deploy to Vercel completes successfully
- [ ] Site serves traffic on Vercel domain

**Steps:**
1. Create vercel.json (from frontend-spec.md §12)
2. Connect GitHub repo to Vercel
3. Set environment variables in Vercel project settings
4. Create .github/workflows/rebuild-and-deploy.yml (from backend-spec.md §6.1)
5. Test: push to main → build → deploy
6. Test: admin publish project → webhook → rebuild → deploy

**Notes:** Refer to frontend-spec.md §12 and backend-spec.md §6.1

---

### Task 25: Integration Testing & QA

**Depends on:** Task 24

**Status:** Not started

**Acceptance:**
- [ ] Public site loads and renders correctly
- [ ] Projects display with correct thumbnails and descriptions
- [ ] Project detail pages have correct meta tags (test with Open Graph Debugger)
- [ ] Admin login works
- [ ] Admin can create/edit/delete projects
- [ ] Publishing a project triggers rebuild (< 5 min)
- [ ] Contact form submits and saves to database
- [ ] Rate limiting blocks excess submissions
- [ ] Dark mode toggle works and persists
- [ ] All pages responsive on mobile/tablet/desktop
- [ ] All pages WCAG 2.1 AA accessible (axe, screen reader test)
- [ ] Performance: First Contentful Paint < 1.5s, Largest Contentful Paint < 2.5s

**Steps:**
1. Manual testing: navigate all public pages
2. Manual testing: admin CRUD operations
3. Test meta tags with og-debugger.com
4. Test accessibility with axe DevTools and screen reader
5. Test responsive design on multiple devices
6. Test performance with Lighthouse
7. Test rate limiting with multiple submissions
8. Document any issues and fix

**Notes:** Do NOT skip accessibility testing. WCAG 2.1 AA is a requirement.

---

### Task 26: Launch & Monitor

**Depends on:** Task 25

**Status:** Not started

**Acceptance:**
- [ ] Site deployed to custom domain (DNS configured)
- [ ] SSL certificate active (Vercel auto-provisions)
- [ ] Monitoring set up (Vercel analytics, Supabase logs)
- [ ] Backup strategy documented
- [ ] Admin has access and can manage content
- [ ] No critical bugs in production
- [ ] Launch announced

**Steps:**
1. Configure custom domain DNS (point to Vercel)
2. Verify SSL certificate
3. Enable Vercel analytics
4. Review Supabase logs for errors
5. Create admin documentation (how to manage projects, etc.)
6. Monitor first 24h for issues
7. Announce launch

**Notes:** Keep admin credentials secure and documented separately.

---

---

## Summary

**Total Tasks:** 27

**Architecture:**
- **Frontend:** Vue.js 3 + Vite + vite-ssg (static pre-rendering for SEO)
- **Backend:** Node.js + Express (Vercel serverless functions)
- **Database:** MongoDB Atlas
- **Authentication:** Firebase Auth
- **File Storage:** Cloudinary
- **Deployment:** Vercel (both frontend and backend)

**Phases:**
- **Phase 0 (Setup):** Tasks 0a-0c — Infrastructure setup (MongoDB, Firebase, Cloudinary)
- **Phase 1 (Backend):** Tasks 1-10 — Node.js + Express API development and deployment
- **Phase 2 (Frontend):** Tasks 11-27 — Vue.js build, integration, testing, and launch

**Critical Path:** Backend setup → Backend API development → Backend deployment → Frontend integration → Frontend deployment → Testing → Launch

**Estimated Duration:** 4-6 weeks depending on team size and complexity
