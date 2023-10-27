import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: () => import('./layout/default.vue'),
    children: [
      {
        path: '/:id',
        component: () => import('./pages/path.vue'),
      },
    ],
  },
];
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});
createApp(App).use(router).mount('#app');
