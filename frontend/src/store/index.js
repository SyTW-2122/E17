import { createStore } from 'vuex';

import bodyRandomProducts from './bodyRandomProducts.js'
import bodyAllCategories from './bodyAllCategories.js'

export default createStore({
  modules: {
    bodyRandomProducts,
    bodyAllCategories
  }
});