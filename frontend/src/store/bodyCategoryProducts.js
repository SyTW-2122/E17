import axios from "axios";

const url = "http://tecnored.xyz:4000/product/category";

const state = {
  categoryProducts: []
}

const getters = {
  categoryProducts: (state) => state.categoryProducts
}

const actions = {
  async getCategoryProducts({commit}, name){
    name = name.replace(/ /g, "")
    const response = await axios.get(`${url}/${name}`);
    commit("setCategoryProducts",response.data)
  }
}

const mutations = {
  setCategoryProducts: (state, categoryProducts) => (state.categoryProducts = categoryProducts),
}

export default { state, getters, actions, mutations };