import axios from "axios";

const url = "http://tecnored.xyz:4000/auth/signup"

const actions = {
  async register({ commit }, usuario) {
    try {
      const response = await axios.post(url, usuario);
      if(response.status === 201){
        commit("setToken", response.data.token);
        localStorage.setItem("token", response.data.token);
        window.location.href="/"
      }
    } catch {
      commit("setToken", null);
      alert("Algo salio MUYYY mal")
    }
  },
}


export default { actions };