import axios from "axios";

const url = "http://tecnored.xyz:4000/auth/signup"

const actions = {
  async register({ commit }, usuario) {
    try {
      let fecha_user = usuario.date.split("-");
      let date_actual = new Date();
      let date_user = new Date(parseInt(fecha_user[0]),parseInt(fecha_user[1])-1,parseInt(fecha_user[2]));

      if(date_user > date_actual){
        alert("Fecha no valida")
        return
      }

      if(usuario.name.length < 3){
        alert("Nombre muy corto")
        return
      }

      if(usuario.surname.length < 3){
        alert("Apellido muy corto")
        return
      }
      if (usuario.password != usuario.re_password) {
        alert("Las contraseñas deben ser iguales")
        return
      }
      if (usuario.password.length < 8) {
        alert("La contraseña debe superar los 7 caracteres")
        return
      }
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!regex.test(String(usuario.email).toLowerCase())){
        alert("Correo no valido")
        return
      }

      console.log("Todos los datos OK");

      try {
        const response = await axios.post(url, usuario);
        commit("setToken", response.data.token);
        localStorage.setItem("token", response.data.token);
        window.location.href="/"
      } catch {
        commit("setToken", null);
        alert("Algo salio muy mal");
      }
      
    } catch {
      commit("setToken", null);
      alert("Algo salio MUYYY mal")
    }
  },
}


export default { actions };