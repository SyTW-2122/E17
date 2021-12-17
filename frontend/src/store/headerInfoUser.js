import axios from "axios";

const url = "http://localhost:4000/auth/profile";

const state = {
  token: null,
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
    window.location.href="/"
  },
  async readToken({ commit }) {
    if (localStorage.getItem("token")) {
      const data = {
        token: localStorage.getItem("token")
      }
      try {
        const response = await axios.post(url,data)
        commit("setToken", localStorage.getItem("token"));
        commit("setDataUser", response.data);
      } catch {
        localStorage.removeItem("token");
        commit("setToken", null);
      }      
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