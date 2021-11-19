import axios from "axios";

const url = "http://tecnored.xyz:4000/auth/profile";

const state = {
  token: String,
  dataUser: {}
}

const getters = {
  checkToken: (state) => state.token,
  dataUser: (state) => state.dataUser
}

const actions = {
  Logout({ commit }) {
    localStorage.removeItem("token");
    commit("setToken", null);
  },
  async readToken({ commit }) {
    if (localStorage.getItem("token")) {
      const data = {
        token: localStorage.getItem("token")
      }
      const response = await axios.post(url,data)
      if(response.status === 200){
        commit("setToken", localStorage.getItem("token"));
        commit("setDataUser", response.data);
      }
      else
      commit("setToken", null);
    } 
    else {
      commit("setToken", null);
    }
  },
}

const mutations = {
  setToken: (state, statusToken) => (state.token = statusToken),
  setDataUser: (state, dataUser) => {
    state.dataUser = dataUser
    let inicial = dataUser.name.substring(0,1)
    state.dataUser = { ...state.dataUser, inicial}
  }
}


export default { state, getters, actions, mutations };