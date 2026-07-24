# Backend Specification: Portfolio Site

## Overview

Complete backend architecture for the portfolio site using Node.js + Express (serverless on Vercel), MongoDB Atlas (database), Firebase Auth (authentication), and Cloudinary (image storage).

**Stack:**
- Backend: Node.js + Express (Vercel serverless functions)
- Database: MongoDB Atlas
- Auth: Firebase Auth
- Storage: Cloudinary
- Deployment: Vercel (both frontend and backend)

---

## 1. Project Structure & Setup

### Backend Directory Structure

```
backend/
├── api/
│   ├── projects.ts          (GET /api/projects, POST/PUT/DELETE)
│   ├── testimonials.ts      (GET /api/testimonials, POST/PUT/DELETE)
│   ├── contact.ts           (POST /api/contact, GET /api/contact/:id)
│   ├── skills.ts            (GET /api/skills, POST/PUT/DELETE)
│   ├── services.ts          (GET /api/services, POST/PUT/DELETE)
│   ├── about.ts             (GET /api/about, PUT /api/about)
│   └── auth.ts              (GET /api/auth/verify - verify Firebase token)
├── middleware/
│   ├── auth.ts              (Firebase token verification)
│   ├── errorHandler.ts      (Global error handling)
│   └── cors.ts              (CORS configuration)
├── models/
│   ├── Project.ts           (MongoDB schema/validation)
│   ├── Testimonial.ts
│   ├── ContactSubmission.ts
│   ├── Skill.ts
│   ├── Service.ts
│   ├── AboutContent.ts
│   └── ContactInfo.ts
├── utils/
│   ├── cloudinary.ts        (Image upload utilities)
│   ├── firebase.ts          (Firebase Admin SDK)
│   ├── mongodb.ts           (MongoDB connection)
│   ├── validation.ts        (Zod schemas)
│   └── rateLimiter.ts       (Rate limiting)
├── index.ts                 (Express app setup)
├── vercel.json              (Vercel serverless config)
├── package.json
├── tsconfig.json
└── .env.example
```

### Environment Variables

**`.env.local` (development):**
```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/portfolio
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-service-account@...iam.gserviceaccount.com
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
VITE_FIREBASE_CONFIG={"apiKey":"...","projectId":"..."}
```

---

## 2. MongoDB Schema & Collections

All tables use `snake_case`. Timestamps use `timestamp with time zone (UTC)`.

### 2.1 Projects Table

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  category UUID NOT NULL REFERENCES categories(id) ON DELETE SET NULL,
  thumbnail_image TEXT,
  gallery_images JSONB DEFAULT '[]',
  technologies TEXT[] DEFAULT ARRAY[]::TEXT[],
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  github_url TEXT,
  demo_url TEXT,
  completed_at DATE,
  status TEXT DEFAULT 'in_progress' CHECK (status IN ('completed', 'in_progress', 'archived')),
  featured BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT FALSE,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_projects_slug ON projects(slug);
CREATE INDEX idx_projects_published ON projects(published);
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_featured ON projects(featured);
```

### 2.2 Categories Table

```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2.3 Testimonials Table

```sql
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name TEXT NOT NULL,
  author_role TEXT,
  avatar_url TEXT,
  quote TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_testimonials_published ON testimonials(published);
```

### 2.4 Contact Submissions Table

```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'spam')),
  ip_hash TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_ip_hash ON contact_submissions(ip_hash);
```

### 2.5 Skills Table

```sql
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT,
  proficiency TEXT CHECK (proficiency IN ('beginner', 'intermediate', 'advanced', 'expert')),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2.6 Services Table

```sql
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2.7 About Content Table

```sql
CREATE TABLE about_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  bio TEXT NOT NULL,
  avatar_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2.8 Contact Info Table

```sql
CREATE TABLE contact_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  phone TEXT,
  github_url TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 3. Authentication & Authorization

### 3.1 Supabase Auth Setup

- **Auth provider:** Email + Password
- **Single admin account:** Pre-provisioned manually
- **No public sign-up:** Disabled
- **Session config:**
  - JWT expiry: 1 hour
  - Refresh token expiry: 7 days

### 3.2 Row-Level Security (RLS) Policies

All tables require RLS enabled. Public read for published content, admin write only.

---

## 4. Storage & Image Uploads

### 4.1 Buckets

Create three public buckets:
1. `project-images` — thumbnails and gallery
2. `testimonial-avatars` — testimonial avatars
3. `about-avatar` — About page avatar

### 4.2 Image Constraints

- Max file size: 10 MB
- Allowed formats: JPEG, PNG, WebP

---

## 5. Edge Functions

### 5.1 rate-limit-contact

Prevents spam: max 3 submissions per IP per hour.

### 5.2 github-rebuild-trigger

Fires GitHub Actions workflow on project publish.

### 5.3 check-spam-submission

Auto-flags spam based on heuristics.

---

## 6. GitHub Actions Workflow

**File:** `.github/workflows/rebuild-and-deploy.yml`

Triggers on push to main and manual dispatch from admin dashboard.

---

## 7. Security Checklist

- [ ] RLS policies on all tables
- [ ] Storage buckets public read, admin write
- [ ] Edge Function secrets in environment
- [ ] Rate limiting on contact/login
- [ ] Image upload validation (client + server)
- [ ] Separate staging and production configs

---

## 8. Acceptance Criteria

- [ ] All tables created with RLS policies
- [ ] Admin can log in
- [ ] Published projects visible; unpublished hidden
- [ ] Contact form rate-limited
- [ ] Publishing triggers rebuild
- [ ] Rebuild completes in < 5 minutes
