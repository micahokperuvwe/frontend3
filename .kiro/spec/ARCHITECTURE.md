# Portfolio Site Architecture

## Technology Stack Summary

### Frontend
- **Framework:** Vue.js 3 (Composition API)
- **Language:** TypeScript
- **Build Tool:** Vite
- **Static Generation:** vite-ssg (for SEO)
- **Styling:** Tailwind CSS
- **Routing:** Vue Router 4
- **State Management:** Pinia (admin UI state only)
- **Authentication:** Firebase Auth (SDK)
- **API Calls:** Axios
- **Meta Tags:** @unhead/vue
- **Validation:** Zod
- **Deployment:** Vercel

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB Atlas
- **Authentication:** Firebase Admin SDK (token verification)
- **File Storage:** Cloudinary (image transformations)
- **Deployment:** Vercel (serverless functions)
- **Rate Limiting:** IP-based (middleware)

### Infrastructure
- **Databases:** MongoDB Atlas (staging + production)
- **Authentication:** Firebase (Email/Password, admin account only)
- **File Storage:** Cloudinary (image uploads + transformations)
- **Deployment:** Vercel (frontend + backend API)
- **CI/CD:** GitHub Actions (rebuild on project publish)
- **Version Control:** GitHub

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         VISITORS (Public)                        │
└─────────────────────────────────────────────────────────────────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
            ┌───────▼────────┐    ┌──────▼──────────┐
            │  Vue.js 3      │    │ Static HTML     │
            │  Frontend      │    │ (vite-ssg)      │
            │ (vercel.app)   │    │ (pre-rendered)  │
            └───────┬────────┘    └──────┬──────────┘
                    │                     │
                    │ API Requests        │
                    │ (axios)             │
                    └─────────┬───────────┘
                              │
                              ▼
                    ┌──────────────────────┐
                    │  Vercel Functions    │
                    │  (Express.js API)    │
                    └────────┬─────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
  ┌─────────────┐   ┌──────────────┐   ┌───────────────┐
  │  MongoDB    │   │  Firebase    │   │  Cloudinary   │
  │   Atlas     │   │    Auth      │   │   (Images)    │
  │             │   │              │   │               │
  │ - Projects  │   │ - Admin User │   │ - Upload      │
  │ - Content   │   │ - JWT Token  │   │ - Transform   │
  │ - Contact   │   │ - Verify ID  │   │ - Serve URLs  │
  │   Forms     │   │   Token      │   │               │
  └─────────────┘   └──────────────┘   └───────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      ADMIN DASHBOARD                             │
├─────────────────────────────────────────────────────────────────┤
│ • Login with Firebase Email/Password                             │
│ • Manage Projects (CRUD + publish/unpublish)                     │
│ • Manage Testimonials & Content                                  │
│ • View Contact Submissions                                       │
│ • Upload Images (automatic Cloudinary transformation)            │
│ • Trigger Rebuild (GitHub Actions webhook)                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ on publish
                              ▼
                    ┌──────────────────────┐
                    │  GitHub Actions      │
                    │  CI/CD Workflow      │
                    └────────┬─────────────┘
                             │
                             ▼
                    ┌──────────────────────┐
                    │  Vercel Frontend     │
                    │  Build & Deploy      │
                    │ (vite-ssg rebuild)   │
                    └──────────────────────┘
```

---

## Data Flow

### Public Site Visit
1. User visits `example.com`
2. Vercel serves pre-rendered static HTML (vite-ssg)
3. HTML contains correct meta tags, description, OG tags
4. Vue.js hydrates client-side (CSR takes over)
5. User can navigate, search, filter projects
6. All data fetched from Express API endpoints

### Admin Publishing a Project
1. Admin logs in with Firebase email/password
2. Admin fills project form and publishes
3. Frontend calls `POST /api/admin/projects`
4. Backend verifies Firebase ID token + admin email
5. Backend saves project to MongoDB
6. Backend calls GitHub API to dispatch workflow
7. GitHub Actions rebuilds frontend (vite-ssg fetches new projects)
8. New static HTML generated with correct meta tags
9. Frontend redeployed to Vercel
10. New project accessible on site within 2-5 minutes

### Contact Form Submission
1. Visitor fills contact form (honeypot field hidden)
2. Cloudflare Turnstile challenge
3. Frontend validates with Zod schema
4. Frontend calls rate-limit check via Edge Function (or backend endpoint)
5. If rate-limited (>3 per IP per hour), show error
6. Otherwise, submit to `POST /api/contact`
7. Backend verifies honeypot field
8. Backend detects spam with heuristics
9. Submission saved to MongoDB with spam status
10. Admin views in dashboard and marks as read

---

## Security Model

### Authentication
- **Public Routes:** No auth required
  - Read published projects, testimonials, skills, services, contact info
  - Submit contact form

- **Admin Routes:** Firebase ID token required + admin email verification
  - Create/update/delete projects, testimonials, content
  - Upload images
  - Manage contact submissions
  - Trigger rebuild

### Authorization
- **Backend:** Firebase Admin SDK verifies token signature
- **Email Check:** All admin routes check that user email matches `ADMIN_EMAIL` env var
- **Database:** MongoDB document-level access via backend (no direct client access)

### Data Protection
- **MongoDB URI:** Secure connection string in `.env` (not in code)
- **Firebase Keys:** Service account key in `.env` (not in code)
- **Cloudinary API Secret:** In `.env` (never exposed to frontend)
- **IP Hashing:** Contact submission IP hashed as SHA-256 before storage
- **No Raw IPs Stored:** Only hash stored for rate limiting
- **CORS:** Backend API only allows requests from frontend domain

### Attack Prevention
- **Rate Limiting:** Max 3 contact submissions per IP per hour
- **Spam Detection:** Heuristics auto-flag suspicious submissions
- **Honeypot Field:** Catches basic bot submissions
- **Cloudflare Turnstile:** CAPTCHA on contact form
- **Firebase Auth:** Handles brute-force protection automatically
- **Webhook Verification:** GitHub rebuild webhook verifies HMAC-SHA256 secret

---

## Deployment Flow

### Frontend Deployment
1. Push code to GitHub `main` branch
2. Vercel triggers build (uses `npm run build` → vite-ssg)
3. vite-ssg fetches published projects from backend API
4. Static HTML generated for each project slug
5. Artifacts deployed to Vercel CDN (edge nodes worldwide)
6. Site live within 2-3 minutes

### Backend Deployment
1. Backend code pushed to GitHub
2. Vercel detects changes (if same repo)
3. Builds Express app (`npm run build`)
4. Deploys as serverless functions to Vercel Functions
5. API endpoints live within 1-2 minutes

### Rebuild on Project Publish
1. Admin publishes project in dashboard
2. Frontend calls `POST /api/admin/rebuild`
3. Backend verifies webhook secret
4. Backend calls GitHub API to dispatch workflow
5. GitHub Actions workflow runs (rebuilds frontend)
6. Vercel frontend redeploys
7. New project now static + crawlable on site

---

## Database Collections

- **projects:** All portfolios projects (published/draft, featured, sorted)
- **categories:** Project categories (e.g. "Web", "Mobile", "Design")
- **testimonials:** Client/colleague testimonials (published gate)
- **contact_submissions:** Form submissions (rate-limited, spam-checked)
- **skills:** Owner skills/technologies (with proficiency level)
- **services:** Services offered (with descriptions)
- **about_content:** About page content (single document)
- **contact_info:** Contact details (phone, email, social links)

---

## Environment Variables

### Frontend (.env.local, .env.production)
```
VITE_API_BASE_URL=https://your-backend.vercel.app
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_DATABASE_URL=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

### Backend (.env.local, .env.production)
```
MONGODB_URI=mongodb+srv://...
FIREBASE_PROJECT_ID=...
FIREBASE_PRIVATE_KEY=...
FIREBASE_CLIENT_EMAIL=...
CLOUDINARY_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
ADMIN_EMAIL=admin@example.com
GITHUB_REBUILD_WEBHOOK_SECRET=...
PORT=3001
NODE_ENV=development|production
```

---

## Monitoring & Maintenance

### Performance Monitoring
- **Frontend:** Vercel Analytics (Core Web Vitals)
- **Backend:** Vercel Function Logs (response time, errors)
- **Database:** MongoDB Atlas (connection pooling, disk usage)

### Error Tracking
- Monitor Vercel function errors
- Review MongoDB logs for slow queries
- Check Firebase Auth for failed login attempts

### Backups
- MongoDB Atlas automatic backups (daily)
- GitHub repository backup (push to origin)
- Cloudinary CDN backup (always accessible)

---

## Scaling Considerations

### Current Bottlenecks
- MongoDB free tier: 512 MB storage (sufficient for 10k+ projects)
- Cloudinary free tier: 25 GB storage (sufficient for 1k+ images)
- Vercel serverless: 10s timeout (sufficient for most queries)

### Scaling Path
1. **MongoDB:** Upgrade to paid tier (auto-scaling)
2. **Cloudinary:** Upgrade storage, enable caching
3. **Backend:** Add caching layer (Redis) for frequently accessed data
4. **Frontend:** Add service worker for offline support
5. **CDN:** Vercel CDN already scales globally

---

## Next Steps

1. **Immediate:** Start with backend setup (Tasks 0a-0c)
2. **Development:** Build backend API (Tasks 1-10)
3. **Integration:** Build frontend and integrate with backend (Tasks 11-22)
4. **Testing:** QA and performance testing (Task 26)
5. **Launch:** Deploy to production (Task 27)

**Expected timeline:** 4-6 weeks for experienced developer, 8-12 weeks for learning
