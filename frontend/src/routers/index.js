import { createWebHistory, createRouter } from "vue-router";

import PHome from '../pages/Home.vue';
import PLogin from '../pages/Login.vue'
import PRegister from '../pages/Register.vue'
import PCategories from '../pages/Categories.vue';
import PPromociones from '../pages/Promo.vue';
import PDetails from '../pages/Details.vue';
import PCategory from '../pages/Category.vue';
import PCart from '../pages/Cart';

import store from "../store/index.js";


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
  },
  {
    path: "/cart",
    name: "Cart",
    meta: {
      requiresAuth: true
    },
    component: PCart
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    
    if (store.state.headerInfoUser.token) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;