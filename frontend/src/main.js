import { createApp } from 'vue'
import axios from "axios";
import VueAxios from "vue-axios";

import routers from "./routers";
import App from './App.vue';
import store from './store';

createApp(App)
  .use(routers)
  .use(store)
  .use(VueAxios, axios)
  .mount("#app");