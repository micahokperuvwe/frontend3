import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('../pages/Home.vue'), meta: { title: 'Micah Okperuvwe — Digital Portfolio' } },
  { path: '/about', component: () => import('../pages/About.vue'), meta: { title: 'About | Micah Okperuvwe' } },
  { path: '/projects', component: () => import('../pages/Projects.vue'), meta: { title: 'Projects | Micah Okperuvwe' } },
  { path: '/case-studies', component: () => import('../pages/Projects.vue'), meta: { title: 'Case Studies | Micah Okperuvwe' } },
  { path: '/projects/:slug', component: () => import('../pages/ProjectDetail.vue'), meta: { title: 'Project Detail | Micah Okperuvwe' } },
  { path: '/case-studies/:slug', component: () => import('../pages/ProjectDetail.vue'), meta: { title: 'Case Study Detail | Micah Okperuvwe' } },
  { path: '/services', component: () => import('../pages/Services.vue'), meta: { title: 'Services | Micah Okperuvwe' } },
  { path: '/contact', component: () => import('../pages/Contact.vue'), meta: { title: 'Contact Micah | Micah Okperuvwe' } },
  { path: '/terms', component: () => import('../pages/Terms.vue'), meta: { title: 'Terms of Service | Micah Okperuvwe' } },
  { path: '/privacy', component: () => import('../pages/Privacy.vue'), meta: { title: 'Privacy Policy | Micah Okperuvwe' } },
  { path: '/admin/login', component: () => import('../pages/admin/Login.vue'), meta: { title: 'Admin Login | Micah Okperuvwe' } },
  {
    path: '/admin', component: () => import('../components/AdminShell.vue'), meta: { requiresAuth: true }, children: [
      { path: '', component: () => import('../pages/admin/Dashboard.vue'), meta: { title: 'Dashboard | Admin' } },
      { path: 'projects', component: () => import('../pages/admin/Projects.vue'), meta: { title: 'Projects | Admin' } },
      { path: 'projects/create', component: () => import('../pages/admin/ProjectForm.vue'), meta: { title: 'Create Project | Admin' } },
      { path: 'projects/:id/edit', component: () => import('../pages/admin/ProjectForm.vue'), meta: { title: 'Edit Project | Admin' } },
      { path: 'testimonials', component: () => import('../pages/admin/Testimonials.vue'), meta: { title: 'Testimonials | Admin' } },
      { path: 'submissions', component: () => import('../pages/admin/Submissions.vue'), meta: { title: 'Submissions | Admin' } },
      { path: 'content', component: () => import('../pages/admin/Content.vue'), meta: { title: 'Content | Admin' } },
    ],
  },
  { path: '/:pathMatch(.*)*', component: () => import('../pages/NotFound.vue'), meta: { title: '404 | Micah Okperuvwe' } },
];

const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes });
router.beforeEach(async (to, _from, next) => {
  document.title = (to.meta.title as string) || 'Portfolio';
  if (to.meta.requiresAuth) {
    const authStore = useAuthStore();
    if (!authStore.initialized) {
      authStore.initAuthListener();
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    if (!authStore.isAuthenticated) next('/admin/login');
    else next();
    return;
  }
  next();
});
export default router;
