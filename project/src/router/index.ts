import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from 'vue-router'
import authenticated from '@/router/authenticated';
import unauthenticated from '@/router/unauthenticated'
import Index from '@/views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    component: Index,
    children: [
      ...authenticated,
      ...unauthenticated
    ]
  } as RouteRecordRaw,

];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL || 'https://localhost:8080'),
} as RouterOptions);

export default router;
