# Frontend Setup Guide

The frontend Vue.js + Vite project is partially scaffolded. Here's what's been created and what needs to be added.

## What's Been Created ✅

- ✅ `src/types/index.ts` — TypeScript interfaces for all data models
- ✅ `src/utils/api.ts` — Axios instance with Firebase token injection
- ✅ `src/composables/useProjects.ts` — Projects API composable
- ✅ `src/composables/useAuth.ts` — Firebase authentication composable
- ✅ `package.json` — Updated with all required dependencies

## What You Need to Create

### 1. Environment Variables

Create `.env.local` in frontend folder:

```env
VITE_API_BASE_URL=http://localhost:3001
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your-project.firebaseio.com
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Get these values from Firebase Console → Project Settings

### 2. Install Dependencies

```bash
cd frontend
npm install
```

### 3. Create Router

Create `src/router/index.ts`:

```typescript
import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '../composables/useAuth';

const routes = [
  // Public routes
  { path: '/', component: () => import('../pages/Home.vue') },
  { path: '/about', component: () => import('../pages/About.vue') },
  { path: '/projects', component: () => import('../pages/Projects.vue') },
  { path: '/projects/:slug', component: () => import('../pages/ProjectDetail.vue') },
  { path: '/services', component: () => import('../pages/Services.vue') },
  { path: '/contact', component: () => import('../pages/Contact.vue') },

  // Admin routes
  { path: '/admin/login', component: () => import('../pages/admin/Login.vue') },
  { path: '/admin', component: () => import('../pages/admin/Dashboard.vue'), meta: { requiresAuth: true } },
  { path: '/admin/projects', component: () => import('../pages/admin/Projects.vue'), meta: { requiresAuth: true } },
  { path: '/admin/projects/create', component: () => import('../pages/admin/ProjectForm.vue'), meta: { requiresAuth: true } },
  { path: '/admin/projects/:id/edit', component: () => import('../pages/admin/ProjectForm.vue'), meta: { requiresAuth: true } },

  // 404
  { path: '/:pathMatch(.*)*', component: () => import('../pages/NotFound.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const { user, initAuthListener } = useAuth();
    initAuthListener();
    
    if (!user.value) {
      next('/admin/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
```

### 4. Create Pinia Stores

Create `src/stores/auth.ts`:

```typescript
import { defineStore } from 'pinia';
import { useAuth } from '../composables/useAuth';

export const useAuthStore = defineStore('auth', () => {
  const { user, loading, error, login, logout, initAuthListener } = useAuth();

  return {
    user,
    loading,
    error,
    login,
    logout,
    initAuthListener,
    isAuthenticated: () => !!user.value,
  };
});
```

### 5. Create Layout Components

Create `src/components/Layout/Header.vue`:

```vue
<template>
  <header class="bg-white dark:bg-gray-900 shadow">
    <nav class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="font-bold text-xl">Portfolio</router-link>
      <ul class="flex gap-6">
        <li><router-link to="/projects" class="hover:text-blue-500">Projects</router-link></li>
        <li><router-link to="/about" class="hover:text-blue-500">About</router-link></li>
        <li><router-link to="/contact" class="hover:text-blue-500">Contact</router-link></li>
        <li><router-link to="/admin" class="hover:text-blue-500">Admin</router-link></li>
      </ul>
    </nav>
  </header>
</template>
```

### 6. Create Pages

Minimal pages to get started:

`src/pages/Home.vue`:
```vue
<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
    <p class="text-lg text-gray-600 mb-8">Showcasing my best work</p>
    <router-link to="/projects" class="bg-blue-500 text-white px-6 py-2 rounded">View Projects</router-link>
  </div>
</template>
```

`src/pages/Projects.vue`:
```vue
<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">Projects</h1>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link
        v-for="project in projects"
        :key="project._id"
        :to="`/projects/${project.slug}`"
        class="border rounded-lg overflow-hidden hover:shadow-lg transition"
      >
        <img v-if="project.thumbnail_image" :src="project.thumbnail_image" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="font-bold text-lg">{{ project.title }}</h3>
          <p class="text-gray-600">{{ project.short_description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProjects } from '../composables/useProjects';

const { projects, loading, error, fetchPublished } = useProjects();

onMounted(() => {
  fetchPublished();
});
</script>
```

### 7. Update `src/App.vue`

```vue
<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from './stores/auth';
import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';

const authStore = useAuthStore();

onMounted(() => {
  authStore.initAuthListener();
});
</script>
```

### 8. Update `src/main.ts`

```typescript
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
```

## Next Steps

1. Create `.env.local` with Firebase credentials
2. Run `npm install`
3. Create the missing files above
4. Run `npm run dev`
5. Test at `http://localhost:5173`

## Project Structure After Setup

```
frontend/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.vue
│   │   │   └── Footer.vue
│   │   └── ...
│   ├── composables/
│   │   ├── useProjects.ts ✅
│   │   ├── useAuth.ts ✅
│   │   └── ...
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── Projects.vue
│   │   ├── ProjectDetail.vue
│   │   ├── About.vue
│   │   ├── Services.vue
│   │   ├── Contact.vue
│   │   ├── NotFound.vue
│   │   └── admin/
│   │       ├── Login.vue
│   │       ├── Dashboard.vue
│   │       └── ...
│   ├── router/
│   │   └── index.ts
│   ├── stores/
│   │   ├── auth.ts
│   │   └── ui.ts
│   ├── types/
│   │   └── index.ts ✅
│   ├── utils/
│   │   └── api.ts ✅
│   ├── App.vue
│   └── main.ts
├── .env.local (create this)
├── package.json ✅ (updated)
└── ...
```

## Status

- ✅ Backend: Complete and ready for external setup
- 🔄 Frontend: Partially scaffolded, needs pages and components
- ⏳ Next: Build pages and test integration

---

Once you complete the steps above, the full stack will be ready for testing and deployment!
