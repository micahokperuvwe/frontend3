import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('../pages/Home.vue'), meta: { title: 'MICAH-WEB — Digital Portfolio by Micah Okperuvwe' } },
  { path: '/about', component: () => import('../pages/About.vue'), meta: { title: 'About | MICAH-WEB' } },
  { path: '/projects', component: () => import('../pages/Projects.vue'), meta: { title: 'Projects | MICAH-WEB' } },
  { path: '/case-studies', component: () => import('../pages/Projects.vue'), meta: { title: 'Case Studies | MICAH-WEB' } },
  { path: '/projects/:slug', component: () => import('../pages/ProjectDetail.vue'), meta: { title: 'Project Detail | MICAH-WEB' } },
  { path: '/case-studies/:slug', component: () => import('../pages/ProjectDetail.vue'), meta: { title: 'Case Study Detail | MICAH-WEB' } },
  { path: '/services', component: () => import('../pages/Services.vue'), meta: { title: 'Services | MICAH-WEB' } },
  { path: '/contact', component: () => import('../pages/Contact.vue'), meta: { title: 'Contact Micah | MICAH-WEB' } },
  { path: '/terms', component: () => import('../pages/Terms.vue'), meta: { title: 'Terms of Service | MICAH-WEB' } },
  { path: '/privacy', component: () => import('../pages/Privacy.vue'), meta: { title: 'Privacy Policy | MICAH-WEB' } },
  { path: '/admin/login', component: () => import('../pages/admin/Login.vue'), meta: { title: 'Admin Login | MICAH-WEB' } },
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
  { path: '/:pathMatch(.*)*', component: () => import('../pages/NotFound.vue'), meta: { title: '404 | MICAH-WEB' } },
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