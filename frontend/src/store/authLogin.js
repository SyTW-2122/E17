import axios from "axios";

const url = "http://tecnored.xyz:4000/auth/signin"

const actions = {
  async login({ commit }, usuario) {
    try {
      const response = await axios.post(url, usuario);
      commit("setToken", response.data.token);
      localStorage.setItem("token", response.data.token);
      window.location.href="/"
    } catch {
      commit("setToken", null);
      alert("Usuario y/o Contraseña Incorrecta")
    }
  },
}


export default { actions };