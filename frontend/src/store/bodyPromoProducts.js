import axios from "axios";

const url = "http://localhost:4000/product/discount/true";

const state = {
  promoProducts: []
}

const getters = {
  promoProducts: (state) => state.promoProducts
}

const actions = {
  async getPromoProducts({commit}){
    const response = await axios.get(url);
    commit("setPromoProducts",response.data)
  }
}

const mutations = {
  setPromoProducts: (state, promoProducts) => (state.promoProducts = promoProducts),
}

export default { state, getters, actions, mutations };