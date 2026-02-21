import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/inclusao',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Itens/InclusaoItem.vue') }],
  },
  {
    path: '/rascunho',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Itens/RascunhoItem.vue') }],
  },
  {
    path: '/relatorios',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Itens/RelatorioItem.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorRoute/ErrorNotFound.vue'),
  },
];

export default routes;
