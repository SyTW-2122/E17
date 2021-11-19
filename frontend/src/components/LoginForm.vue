<template>
  <div class="container">
    <form 
      @submit.prevent="login(usuario)"
      method="POST">
      <div class="campo gradient">
        <div class="text_form">
          Correo:
        </div>
        <div class="input_form">
          <input type="email" name="email" autocomplete="on" required placeholder="__________________  " v-model="usuario.email">
        </div>
      </div>
      <div class="campo gradient">
        <div class="text_form">
          Contraseña:
        </div>
        <div class="input_form">
          <input type="password" name="password" autocomplete="current-password" required placeholder="__________________  " v-model="usuario.password">
        </div>
      </div>
      <div>
        <button class="signin gradient" type="submit"> Iniciar Sesion </button>
      </div>
    </form>

    <!-- Manejo de errores -->
    <div id="errores" class="erroes">
    </div>
    <!-- Manejo de errores -->

    <div class="separator">
      <div class="line">
        ________________________
      </div>
      <div class="newClient">
        ¿Eres un cliente nuevo?
      </div>
      <div class="line">
        ________________________
      </div>
    </div>
    <router-link to="/register" class="no_link"> 
      <div class="button gradient">Registrarse</div>
    </router-link>
    
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "LoginForm",
    data() {
      return {
        usuario: {
          email: "",
          password: "",
        },
      };
    },
    methods: {
      ...mapActions(["login"]),
    }
  }
</script>

<style scoped>
  .container {
    width: 50%;
    margin: auto;
    margin-top: 50px !important;
    
  }

  .gradient {
    background: linear-gradient(90deg, #39D5FD, #2E62FB, #DC36FC);
  }

  /* Form */
  .campo {
    display: flex;
    justify-content: space-between;
    margin: 20px auto;
    height: 60px;
    width: 370px;
    border-radius: 20px;
    color: white;
  }

  .text_form {
    margin-top: 18px;
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px !important;
  }

  .input_form {
    margin-top: 7px;
    margin-right: 10px !important;
  }
  
  .input_form input {
    height: 40px;
    width: 200px;
    border-radius: 10px;
    border-color: black;
    font-size: 19px;
    padding-left: 14px;
  }

  /* Spearator */
    .separator {
      display: flex;
      margin: auto;
      justify-content: center;
      color: gray;
      margin: 50px auto;
    }
    .newClient {
      margin: 5px 20px 0px 20px;
    }


  /* SignIn */
    .signin {
      width: 180px;
      color: white;
      font-size: 25px;
      margin: auto 5px;
      padding: 5px;
      border-radius: 10px;
      border: solid 0px black;
    }

  /* Register */
    .no_link {
      text-decoration: none;
      color: white;
      display: flex;
      width: auto;
      justify-content: center;
    }


    .button {
      height: 29px;
      width: 170px;
      color: white;
      font-size: 25px;
      margin: auto 5px;
      padding: 5px;
      border-radius: 10px;
      border: solid 0px black;
    }

  .erroes {
    display: none;
    margin-top: 30px;
    color:red;
  }    
</style>