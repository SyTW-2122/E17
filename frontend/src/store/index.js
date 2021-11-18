import { createStore } from 'vuex';

import bodyRandomProducts from './bodyRandomProducts.js'
import bodyAllCategories from './bodyAllCategories.js'
import productDetails from './productDetails.js';
import bodyPromoProducts from './bodyPromoProducts.js';
import bodyCategoryProducts from './bodyCategoryProducts.js';

export default createStore({
  modules: {
    bodyRandomProducts,
    bodyAllCategories,
    productDetails,
    bodyPromoProducts,
    bodyCategoryProducts
  }
});