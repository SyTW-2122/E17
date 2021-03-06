import { createStore } from 'vuex';

import bodyRandomProducts from './bodyRandomProducts.js'
import bodyAllCategories from './bodyAllCategories.js'
import productDetails from './productDetails.js';
import bodyPromoProducts from './bodyPromoProducts.js';
import bodyCategoryProducts from './bodyCategoryProducts.js';
import headerInfoUser from './headerInfoUser';
import authLogin from './authLogin';
import authRegister from './authRegister';
import Cart from './Cart'

export default createStore({
  modules: {
    bodyRandomProducts,
    bodyAllCategories,
    productDetails,
    bodyPromoProducts,
    bodyCategoryProducts,
    headerInfoUser,
    authLogin,
    authRegister,
    Cart
  }
});