import { createWebHistory, createRouter } from "vue-router";

import PHome from '../pages/Home.vue';
import PLogin from '../pages/Login.vue'
import PRegister from '../pages/Register.vue'
import PCategories from '../pages/Categories.vue';
import PPromociones from '../pages/Promo.vue';
import PDetails from '../pages/Details.vue';
import PCategory from '../pages/Category.vue';


const routes = [
  {
    path: "/",
    name: "Home",
    component: PHome
  },
  {
    path: "/login",
    name: "Login",
    component: PLogin
  },
  {
    path: "/register",
    name: "Register",
    component: PRegister
  },
  {
    path: "/categories",
    name: "Categories",
    component: PCategories
  },
  {
    path: "/category/:name",
    name: "Category",
    component: PCategory
  },
  {
    path: "/promociones",
    name: "Promociones",
    component: PPromociones
  },
  {
    path: "/details/:id",
    name: "Details",
    component: PDetails
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;