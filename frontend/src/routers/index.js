import { createWebHistory, createRouter } from "vue-router";

import PHome from '../pages/Home.vue';
import PCategories from '../pages/Categories.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: PHome
  },
  {
    path: "/categories",
    name: "Categories",
    component: PCategories
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;