<template>
  <div class="admin-page min-h-screen">
    <header class="admin-header">
      <div class="admin-header__inner">
        <RouterLink to="/admin" class="admin-brand" aria-label="MICAH-WEB admin dashboard">
          <span class="admin-brand__mark">M</span>
          <span><strong>MICAH-WEB</strong><small>ADMIN CONTROL</small></span>
        </RouterLink>
        <nav class="admin-nav" aria-label="Admin navigation">
          <RouterLink v-for="item in navigation" :key="item.to" :to="item.to" active-class="admin-nav__link--active" class="admin-nav__link">{{ item.label }}</RouterLink>
        </nav>
        <div class="admin-header__actions">
          <RouterLink to="/" class="admin-site-link">View site</RouterLink>
          <button type="button" class="admin-logout" @click="handleLogout">Log out</button>
        </div>
      </div>
    </header>
    <main class="admin-content"><RouterView /></main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();
const navigation = [
  { label: 'Overview', to: '/admin' },
  { label: 'Projects', to: '/admin/projects' },
  { label: 'Testimonials', to: '/admin/testimonials' },
  { label: 'Messages', to: '/admin/submissions' },
  { label: 'Content', to: '/admin/content' },
];
const handleLogout = () => {
  authStore.doLogout();
  router.push('/admin/login');
};
</script>

<style>
.admin-page { --admin-blue: #0759d6; --admin-blue-dark: #0345ad; --admin-blue-pale: #e8f0ff; --admin-black: #111; min-height: 100vh; background: #fff; color: var(--admin-black); }
.admin-header { background: #fff; border-bottom: 2px solid var(--admin-black); }.admin-header__inner { max-width: 80rem; min-height: 5rem; margin: 0 auto; padding: .75rem 1rem; display: flex; align-items: center; gap: 1.5rem; }.admin-brand { display: flex; align-items: center; gap: .65rem; min-width: max-content; }.admin-brand__mark { width: 2.35rem; height: 2.35rem; display: grid; place-items: center; background: var(--admin-blue); color: #fff; border: 2px solid var(--admin-black); box-shadow: 3px 3px 0 var(--admin-black); font: 800 1rem/1 'Plus Jakarta Sans', sans-serif; }.admin-brand strong,.admin-brand small { display:block; }.admin-brand strong { font:800 .95rem/1 'Plus Jakarta Sans',sans-serif; letter-spacing:-.03em; }.admin-brand small { margin-top:.18rem; font:700 .56rem/1 'JetBrains Mono',monospace; letter-spacing:.12em; }
.admin-nav { display:flex; gap:.25rem; margin-left:auto; }.admin-nav__link,.admin-site-link,.admin-logout { border:1px solid transparent; padding:.45rem .65rem; font:700 .7rem/1 'JetBrains Mono',monospace; text-transform:uppercase; letter-spacing:.03em; }.admin-nav__link:hover,.admin-nav__link--active { background:var(--admin-blue-pale); border-color:var(--admin-black); }.admin-header__actions { display:flex; align-items:center; gap:.25rem; }.admin-site-link,.admin-page [class*='text-blue'] { color:var(--admin-blue-dark)!important; }.admin-logout { color:var(--admin-black); background:#fff; cursor:pointer; }.admin-logout:hover { background:var(--admin-black); color:#fff; }.admin-content { max-width:80rem; margin:0 auto; padding:3rem 1rem 5rem; }
.admin-page h1,.admin-page h2,.admin-page h3 { color:var(--admin-black)!important; }.admin-page input,.admin-page textarea,.admin-page select { border:2px solid var(--admin-black)!important; border-radius:0!important; background:#fff!important; color:var(--admin-black)!important; box-shadow:none!important; }.admin-page input:focus,.admin-page textarea:focus,.admin-page select:focus { outline:3px solid var(--admin-blue-pale)!important; border-color:var(--admin-blue)!important; }.admin-page button { border-radius:0!important; }.admin-page button[class*='bg-blue'],.admin-page a[class*='bg-blue'] { background:var(--admin-blue)!important; border:2px solid var(--admin-black)!important; box-shadow:3px 3px 0 var(--admin-black); }.admin-page button[class*='bg-blue']:hover,.admin-page a[class*='bg-blue']:hover { background:var(--admin-blue-dark)!important; transform:translate(-1px,-1px); box-shadow:4px 4px 0 var(--admin-black); }.admin-page button[class*='bg-red'],.admin-page button[class*='bg-gray'] { background:#fff!important; color:var(--admin-black)!important; border:2px solid var(--admin-black)!important; }.admin-page [class*='bg-white'],.admin-page [class*='bg-gray'] { background-color:#fff!important; }.admin-page [class*='text-gray'],.admin-page [class*='text-red'],.admin-page [class*='text-green'],.admin-page [class*='text-yellow'] { color:var(--admin-black)!important; }.admin-page [class*='bg-red'],.admin-page [class*='bg-green'],.admin-page [class*='bg-yellow'] { background-color:var(--admin-blue-pale)!important; }.admin-page [class*='border-gray'],.admin-page [class*='divide-gray'] { border-color:var(--admin-black)!important; }.admin-page .shadow,.admin-page .shadow-md,.admin-page .shadow-lg { border:2px solid var(--admin-black)!important; box-shadow:4px 4px 0 var(--admin-black)!important; }
@media (max-width:900px) { .admin-header__inner { flex-wrap:wrap; gap:.75rem; }.admin-nav { order:3; width:100%; overflow-x:auto; margin-left:0; }.admin-header__actions { margin-left:auto; } } @media (max-width:520px) { .admin-content { padding-top:2rem; }.admin-site-link { display:none; } }
</style>