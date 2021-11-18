import axios from "axios";

const state = {
  details: {}
}

const getters = {
  details: (state) => state.details
}

const actions = {
  async getDetails({commit}, id){
    const url = `http://tecnored.xyz:4000/product/${id}`;
    const response = await axios.get(url);
    commit("setDetails", response.data)
  }
}

const mutations = {
  setDetails: (state, details) => (state.details = details),
}

export default { state, getters, actions, mutations };