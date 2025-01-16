import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from './landingpage/Landing.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
];

const router = createRouter({
  history: createWebHistory("/GuzzlerCraft-1/guzzlercraft/"),
  routes,
});

export default router;
