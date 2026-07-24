<template>
  <div class="admin-login">
    <section class="admin-login__card" aria-labelledby="admin-login-title">
      <p class="admin-login__eyebrow">MICAH-WEB / ADMIN</p>
      <h1 id="admin-login-title">Welcome back.</h1>
      <p class="admin-login__intro">Sign in to manage projects, messages, and the content shown on your portfolio.</p>

      <form @submit.prevent="handleLogin" class="admin-login__form">
        <div>
          <label for="apiKey">Admin password</label>
          <input id="apiKey" v-model="apiKey" type="password" required autocomplete="current-password" placeholder="Enter your password" />
        </div>
        <p v-if="error" class="admin-login__error" role="alert">{{ error }}</p>
        <button type="submit" :disabled="loading">{{ loading ? 'Signing in...' : 'Sign in to dashboard' }}</button>
      </form>

      <p class="admin-login__help">Need access? Contact the site owner.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';

const router = useRouter();
const authStore = useAuthStore();
const apiKey = ref('');
const loading = ref(false);
const error = ref<string | null>(null);

const handleLogin = async () => {
  loading.value = true;
  error.value = null;
  try {
    const success = await authStore.doLogin(apiKey.value);
    if (success) router.push('/admin');
    else error.value = authStore.error || 'Sign in failed. Check your password and try again.';
  } catch (err: any) {
    error.value = err.message || 'Something went wrong. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<style>
.admin-login { --login-blue:#0759d6; --login-blue-dark:#0345ad; --login-blue-pale:#e8f0ff; min-height:100vh; display:grid; place-items:center; padding:1.5rem; background:var(--login-blue-pale); color:#111; }.admin-login__card { width:min(100%,29rem); padding:2.5rem; background:#fff; border:2px solid #111; box-shadow:8px 8px 0 #111; }.admin-login__eyebrow { display:inline-block; padding:.3rem .5rem; border:1px solid #111; background:var(--login-blue); color:#fff; font:700 .65rem/1 'JetBrains Mono',monospace; letter-spacing:.08em; }.admin-login h1 { margin:1.5rem 0 .5rem; font:800 2.3rem/1 'Plus Jakarta Sans',sans-serif; letter-spacing:-.05em; }.admin-login__intro,.admin-login__help { color:#111; font-size:.92rem; line-height:1.6; }.admin-login__form { display:grid; gap:1.25rem; margin-top:2rem; }.admin-login label { display:block; margin-bottom:.5rem; font:700 .78rem/1 'JetBrains Mono',monospace; text-transform:uppercase; letter-spacing:.04em; }.admin-login input { width:100%; padding:.8rem .9rem; border:2px solid #111; border-radius:0; color:#111; background:#fff; }.admin-login input:focus { outline:3px solid var(--login-blue-pale); border-color:var(--login-blue); }.admin-login button { width:100%; padding:.8rem 1rem; background:var(--login-blue); color:#fff; border:2px solid #111; box-shadow:3px 3px 0 #111; font-weight:800; cursor:pointer; }.admin-login button:hover { background:var(--login-blue-dark); transform:translate(-1px,-1px); box-shadow:4px 4px 0 #111; }.admin-login button:disabled { opacity:.65; cursor:wait; }.admin-login__error { margin:0; padding:.75rem; border:2px solid #111; background:#fff; color:#111; font-weight:700; }.admin-login__help { margin:1.5rem 0 0; font-size:.8rem; } @media (max-width:520px) { .admin-login__card { padding:1.75rem; } }
</style>