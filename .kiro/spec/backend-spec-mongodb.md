# Backend Specification: Portfolio Site (MongoDB + Express)

## Overview

Complete backend architecture for the portfolio site using Node.js + Express (serverless on Vercel), MongoDB Atlas for database, Firebase Auth for authentication, and Cloudinary for image storage.

**Tech Stack:**
- Runtime: Node.js + Express
- Deployment: Vercel (serverless functions)
- Database: MongoDB Atlas
- Authentication: Firebase Auth
- File Storage: Cloudinary
- Frontend: Vue.js 3 + Vite (separate repo)

---

## 1. Project Setup

### Prerequisites
- Node.js 18+ installed locally
- MongoDB Atlas account (free tier sufficient)
- Firebase project for Auth
- Cloudinary account for image storage
- Vercel account for deployment

### Environment Variables

**`.env.local` (development):**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio-dev
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_PRIVATE_KEY=your-firebase-private-key
FIREBASE_CLIENT_EMAIL=your-firebase-client-email
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
ADMIN_EMAIL=admin@example.com
GITHUB_REBUILD_WEBHOOK_SECRET=your-github-webhook-secret
PORT=3001
NODE_ENV=development
```

---

## 2. MongoDB Database Schema

All collections use `snake_case` for field names. Timestamps are ISO 8601 strings.

### 2.1 Projects Collection

```javascript
{
  _id: ObjectId,
  title: String,
  slug: String (unique),
  short_description: String,
  full_description: String,
  category: String,
  thumbnail_image: String (Cloudinary URL),
  gallery_images: [{
    url: String,
    order: Number
  }],
  technologies: [String],
  tags: [String],
  github_url: String || null,
  demo_url: String || null,
  completed_at: Date || null,
  status: String (enum: 'completed', 'in_progress', 'archived'),
  featured: Boolean (default: false),
  sort_order: Number (default: 0),
  published: Boolean (default: false),
  view_count: Number (default: 0),
  created_at: ISODate,
  updated_at: ISODate
}
```

**Indexes:**
- `slug` (unique)
- `published` (ascending)
- `category` (ascending)
- `featured` (ascending)
- `created_at` (descending)

### 2.2 Categories Collection

```javascript
{
  _id: ObjectId,
  name: String (unique),
  slug: String (unique),
  description: String || null,
  created_at: ISODate
}
```

### 2.3 Testimonials Collection

```javascript
{
  _id: ObjectId,
  author_name: String,
  author_role: String || null,
  avatar_url: String || null (Cloudinary URL),
  quote: String,
  rating: Number || null (1-5),
  published: Boolean (default: false),
  created_at: ISODate
}
```

**Indexes:**
- `published` (ascending)

### 2.4 Contact Submissions Collection

```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  message: String,
  status: String (enum: 'unread', 'read', 'spam', default: 'unread'),
  ip_hash: String (SHA-256 hash of visitor IP),
  submitted_at: ISODate
}
```

**Indexes:**
- `status` (ascending)
- `ip_hash` (ascending)
- `submitted_at` (descending)

### 2.5 Skills Collection

```javascript
{
  _id: ObjectId,
  name: String,
  category: String || null,
  proficiency: String (enum: 'beginner', 'intermediate', 'advanced', 'expert'),
  sort_order: Number (default: 0),
  created_at: ISODate,
  updated_at: ISODate
}
```

### 2.6 Services Collection

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  icon_name: String || null,
  sort_order: Number (default: 0),
  created_at: ISODate,
  updated_at: ISODate
}
```

### 2.7 About Content Collection

```javascript
{
  _id: ObjectId,
  title: String,
  bio: String,
  avatar_url: String || null (Cloudinary URL),
  updated_at: ISODate
}
```

### 2.8 Contact Info Collection

```javascript
{
  _id: ObjectId,
  email: String,
  phone: String || null,
  github_url: String || null,
  linkedin_url: String || null,
  twitter_url: String || null,
  updated_at: ISODate
}
```

---

## 3. Express Server Architecture

### 3.1 Project Structure

```
portfolio-backend/
├── api/
│   └── index.ts (Vercel serverless entry point)
├── src/
│   ├── middleware/
│   │   ├── auth.ts (Firebase JWT verification)
│   │   ├── errorHandler.ts
│   │   └── rateLimiter.ts
│   ├── routes/
│   │   ├── projects.ts
│   │   ├── testimonials.ts
│   │   ├── contact.ts
│   │   ├── skills.ts
│   │   ├── services.ts
│   │   ├── about.ts
│   │   └── contactInfo.ts
│   ├── controllers/
│   │   ├── projectsController.ts
│   │   ├── testimonialsController.ts
│   │   ├── contactController.ts
│   │   ├── skillsController.ts
│   │   ├── servicesController.ts
│   │   ├── aboutController.ts
│   │   └── contactInfoController.ts
│   ├── models/
│   │   ├── Project.ts
│   │   ├── Testimonial.ts
│   │   ├── ContactSubmission.ts
│   │   ├── Skill.ts
│   │   ├── Service.ts
│   │   ├── AboutContent.ts
│   │   └── ContactInfo.ts
│   ├── services/
│   │   ├── mongoService.ts (MongoDB client)
│   │   ├── cloudinaryService.ts (image uploads)
│   │   ├── firebaseService.ts (Firebase Auth verification)
│   │   └── emailService.ts (optional: send admin notifications)
│   ├── utils/
│   │   ├── validation.ts
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── types/
│   │   └── index.ts
│   └── app.ts (Express app setup)
├── .env.local
├── .env.production
├── vercel.json
├── package.json
├── tsconfig.json
└── README.md
```

### 3.2 Main Entry Point (Vercel Serverless)

**`api/index.ts`:**
```typescript
import app from '../src/app';

export default app;
```

### 3.3 Express App Setup

**`src/app.ts`:**
- Initialize Express
- Connect to MongoDB
- Set up middleware (CORS, JSON parser, rate limiter, auth)
- Register routes
- Error handling

### 3.4 API Routes

**Public Routes (no auth required):**
- `GET /api/projects` — list published projects (with filters)
- `GET /api/projects/:slug` — get project by slug
- `GET /api/testimonials` — list published testimonials
- `GET /api/skills` — list all skills
- `GET /api/services` — list all services
- `GET /api/about` — get about content
- `GET /api/contact-info` — get contact info
- `POST /api/contact` — submit contact form (rate-limited, spam-checked)

**Admin Routes (Firebase Auth required):**
- `POST /api/admin/projects` — create project
- `PUT /api/admin/projects/:id` — update project
- `DELETE /api/admin/projects/:id` — delete project
- `GET /api/admin/projects` — list all projects (incl. unpublished)
- `POST /api/admin/testimonials` — create testimonial
- `PUT /api/admin/testimonials/:id` — update testimonial
- `DELETE /api/admin/testimonials/:id` — delete testimonial
- `GET /api/admin/testimonials` — list all testimonials
- `GET /api/admin/submissions` — list contact submissions
- `PUT /api/admin/submissions/:id` — mark as read/spam
- `DELETE /api/admin/submissions/:id` — delete submission
- `PUT /api/admin/about` — update about content
- `POST /api/admin/skills` — create skill
- `PUT /api/admin/skills/:id` — update skill
- `DELETE /api/admin/skills/:id` — delete skill
- `POST /api/admin/services` — create service
- `PUT /api/admin/services/:id` — update service
- `DELETE /api/admin/services/:id` — delete service
- `PUT /api/admin/contact-info` — update contact info
- `POST /api/admin/rebuild` — trigger GitHub Actions rebuild

---

## 4. Authentication & Authorization

### 4.1 Firebase Auth Setup

- **Auth method:** Email + Password
- **Single admin account:** Pre-provisioned in Firebase
- **No public sign-up:** Disabled in Firebase project
- **JWT verification:** Backend verifies Firebase ID tokens

### 4.2 Admin Authorization

Middleware checks:
1. Firebase ID token is valid
2. User email matches `ADMIN_EMAIL` environment variable
3. Token is not expired

---

## 5. Image Upload & Storage (Cloudinary)

### 5.1 Upload Flow

1. Frontend: Select image file, validate (client-side)
2. Frontend: Upload to Cloudinary (via signed upload or backend proxy)
3. Cloudinary: Transform image (resize, compress, format)
4. Backend: Save Cloudinary URL to MongoDB
5. Frontend: Display transformed image

### 5.2 Cloudinary Transformations

- **Thumbnails:** `w_400,h_300,c_fill,q_80,f_auto`
- **Gallery:** `w_1200,h_800,c_fill,q_85,f_auto`
- **Avatars:** `w_150,h_150,c_fill,r_max,q_80,f_auto`

### 5.3 Upload Constraints

- Max file size: 10 MB (client-side) + 20 MB (Cloudinary limit)
- Allowed formats: JPEG, PNG, WebP
- Cloudinary handles compression automatically

---

## 6. Rate Limiting & Spam Protection

### 6.1 Contact Form Rate Limiting

- Max 3 submissions per IP per hour
- Check IP hash in `contact_submissions` collection
- Return 429 (Too Many Requests) if exceeded

### 6.2 Spam Detection

Heuristics (on submit):
- Link count > 2 → flag as spam
- Message < 10 characters → flag as spam
- All caps (> 70%) → flag as spam
- Blacklisted keywords → flag as spam

### 6.3 Login Rate Limiting

- Firebase Auth handles this (5 failed attempts → lockout)

---

## 7. GitHub Actions Webhook

### 7.1 Rebuild Trigger

When admin publishes a project:
1. Frontend calls `POST /api/admin/rebuild`
2. Backend verifies webhook secret
3. Backend calls GitHub API: `POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`
4. GitHub Actions rebuilds and redeploys frontend to Vercel

### 7.2 GitHub Actions Workflow

**File:** `.github/workflows/rebuild-and-deploy.yml`

Triggers on:
- Push to main
- Manual dispatch from backend webhook

---

## 8. Deployment (Vercel)

### 8.1 Vercel Serverless Functions

- Backend routes run as serverless functions
- Cold start time: < 2s (Node.js runtime is fast)
- No persistent server to manage

### 8.2 vercel.json Configuration

```json
{
  "functions": {
    "api/index.ts": {
      "runtime": "nodejs18.x"
    }
  },
  "env": {
    "MONGODB_URI": "@mongodb_uri",
    "FIREBASE_PROJECT_ID": "@firebase_project_id",
    "FIREBASE_PRIVATE_KEY": "@firebase_private_key",
    "FIREBASE_CLIENT_EMAIL": "@firebase_client_email",
    "CLOUDINARY_NAME": "@cloudinary_name",
    "CLOUDINARY_API_KEY": "@cloudinary_api_key",
    "CLOUDINARY_API_SECRET": "@cloudinary_api_secret",
    "ADMIN_EMAIL": "@admin_email",
    "GITHUB_REBUILD_WEBHOOK_SECRET": "@github_webhook_secret"
  }
}
```

---

## 9. Security Checklist

- [ ] MongoDB connection string uses IP whitelist (Atlas)
- [ ] Firebase private key stored in Vercel env (not in code)
- [ ] Cloudinary API secret stored in Vercel env (not in code)
- [ ] Admin routes require Firebase ID token + email verification
- [ ] Contact form rate-limited by IP hash
- [ ] CORS configured to allow only frontend domain
- [ ] All environment variables are secrets in Vercel
- [ ] No sensitive data logged
- [ ] HTTPS enforced on all routes

---

## 10. Acceptance Criteria

- [ ] MongoDB collections created with indexes
- [ ] Firebase Auth set up with admin account
- [ ] Cloudinary account configured
- [ ] Express server runs locally on port 3001
- [ ] All API endpoints respond with correct data structure
- [ ] Admin auth required for write endpoints
- [ ] Public endpoints return published content only
- [ ] Contact form rate-limiting works
- [ ] Image uploads work and transform correctly
- [ ] Server deploys to Vercel as serverless functions
- [ ] GitHub Actions rebuild webhook works
