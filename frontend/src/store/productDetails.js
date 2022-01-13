import axios from "axios";

const state = {
  details: {}
}

const getters = {
  details: (state) => state.details
}

const actions = {
  async getDetails({commit}, id){
    
    const urlBackend = process.env.VUE_APP_APIURL || "http://localhost:4000"

    const url = urlBackend + `/product/${id}`;
    const response = await axios.get(url);
    commit("setDetails", response.data)
  }
}

const mutations = {
  setDetails: (state, details) => (state.details = details),
}

export default { state, getters, actions, mutations };