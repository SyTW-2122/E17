import axios from "axios";

const urlBackend = process.env.VUE_APP_APIURL || "http://localhost:4000"
const url = urlBackend + "/category";

const state = {
  allCategories: []
}

const getters = {
  allCategories: (state) => state.allCategories
}

const actions = {
  async getAllCategories({commit}){
    const response = await axios.get(url);
    commit("setAllCategories", response.data)
  }
}

const mutations = {
  setAllCategories: (state, allCategories) => (state.allCategories = allCategories),
}

export default { state, getters, actions, mutations };