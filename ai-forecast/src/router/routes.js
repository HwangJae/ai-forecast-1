
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
    {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'store', component: () => import('pages/store.vue') }
    ]
  },
    {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/login.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'predict_variables', component: () => import('pages/predict_variables.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'main_test', component: () => import('pages/main_test.vue') }
    ]
  },

  
]

export default routes
