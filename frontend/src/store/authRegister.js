import axios from "axios";

const url = "http://localhost:4000/auth/signup"

const actions = {
  async register({ commit }, usuario) {
    let errorId = document.getElementById("errores")
    
    let fecha_user = usuario.date.split("-");
    let date_actual = new Date();
    let date_user = new Date(parseInt(fecha_user[0]),parseInt(fecha_user[1])-1,parseInt(fecha_user[2]));

    if(usuario.name.length < 3){
      errorId.style.display = "block";
      errorId.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Nombre muy Corto';
      return
    }

    if(usuario.surname.length < 3){
      errorId.style.display = "block";
      errorId.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Apellido muy corto';
      return
    }

    if(date_user > date_actual){
      errorId.style.display = "block";
      errorId.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Fecha no valida';
      return
    }

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regex.test(String(usuario.email).toLowerCase())){
      errorId.style.display = "block";
      errorId.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Correo no valido';
      return
    }

    if (usuario.password != usuario.re_password) {
      errorId.style.display = "block";
      errorId.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Las contraseñas deben ser iguales';
      return
    }

    if (usuario.password.length < 8) {
      errorId.style.display = "block";
      errorId.innerHTML = '<i class="fas fa-exclamation-triangle"></i> La contraseña debe superar los 7 caracteres';
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
      errorId.style.display = "block";
      errorId.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Correo ya en uso';
    }
  },
}


export default { actions };