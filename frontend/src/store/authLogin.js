import axios from "axios";

const urlBackend = process.env.VUE_APP_APIURL || "http://localhost:4000"
const url = urlBackend + "/auth/signin"

const actions = {
  async login({ commit }, usuario) {
    let errorId = document.getElementById("errores")

    try {
      const response = await axios.post(url, usuario);
      commit("setToken", response.data.token);
      localStorage.setItem("token", response.data.token);
      window.location.href="/"
    } catch {
      commit("setToken", null);
      errorId.style.display = "block";
      errorId.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Usuario y/o Contraseña Incorrecta';
    }
  },
}


export default { actions };