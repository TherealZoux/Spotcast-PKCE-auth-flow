import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import('@/views/LoginView.vue'),
      meta: { transition: 'slide-right' },
    },
    {
      path: "/",
      name: "home",
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: "/redirect",
      name: "redirect",
      component: ()=>import('@/views/RedirectView.vue'),

    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import('@/views/DashboardView.vue'),
      meta: { transition: 'slide-left' },
    },
    {
      path: "/show/:id",
      component: () => import("@/views/showView.vue"),
    },
  ],
  linkActiveClass: 'active-link',
});

export default router;
