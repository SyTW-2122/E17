<template>
  <div class="shadow animation sidebar" id="rightMenu">
    <div class="sidemenu">
      <div v-on:click="toggleRightMenu()" class="closeMenu">
        <i class="fas fa-window-close"></i>
      </div>
      <div class="imgUser">
        <div class="inicial" :style="{backgroundColor: randomColor()}"> 
          <span>
            {{ dataUser.inicial }}
          </span>
        </div>
      </div>
      <div class="nameUser profileUser">
        {{ dataUser.name }}
      </div>
      <div class="surnameUser profileUser">
        {{ dataUser.surname }}
      </div>
      <div class="emailUser profileUser">
        {{dataUser.email}}
      </div>
      <button v-on:click="Logout(),toggleRightMenu()" class="cerrarSesion">
        <span>Cerrar Sesion</span>
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </div>
  </div>
  <div class="container">
    <router-link to="/" class="bigLogo">
      <img class="imgLogo" src="../assets/Logo.png" alt="Logo StackParts">
      <div class="textLogo">
        <span class="bold">StackParts</span>
        <br>
        <span class="rainbow">Make it Real</span>
      </div>
    </router-link>
    <div>
      <div v-if="checkToken" class="buttons">
        <router-link to="/cart" class="button gradient-a"> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Mi Carrito</router-link>
        <button v-on:click="toggleRightMenu()" class="button gradient-b"> <i class="fa fa-user" aria-hidden="true"></i> Mi Perfil</button>
      </div>
      <div v-else class="buttons">
        <router-link to="/login" class="button gradient-a">Iniciar Sesion</router-link>
        <router-link to="/register" class="button gradient-b">Registrarse</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters,mapActions } from "vuex";
  export default {
    name: 'HeaderComplex',
    data() {
      return {
        sidebar: false
      }
    },
    methods: {
      toggleRightMenu: function() {
        if(!this.sidebar) {
          console.log("Abrir")
          document.getElementById("rightMenu").style.display = "flex";
          this.sidebar = true
        }
        else {
          console.log("Cerrar")
          document.getElementById("rightMenu").style.display = "none";
          this.sidebar = false
        }
      },
      randomColor() {
        var h = Math.floor(Math.random() * 360);
        var s = Math.floor(Math.random() * 100);
        var l = Math.floor(Math.random() * 100);
        if (l <= 50) l = 60;
        var mycolor = `hsl(${h}deg, ${s}%, ${l}%)`;
        console.log(mycolor);
        return mycolor;
      },
      ...mapActions(["Logout","readToken"])
    },
    computed: {
      ...mapGetters(["checkToken","dataUser"])
    },
    created() {
      this.readToken();
    }
  }
 
</script>

<style scoped>
/* SideBar */
  .animation {
    position:relative;
    animation:animateright 0.4s
  }
  @keyframes animateright {
    from {
      right:-300px;
      opacity:0
    } 
    to {
      right:0;
      opacity:1
    }
  }

  .shadow {
    box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)
  }

  .sidebar {
    height:100%;
    width:550px;
    background-color:#fff;
    position:fixed !important;
    z-index:1;
    overflow:auto;

    display: none;
    right: 0;
    margin-top: -60px !important;
  }

  .sidemenu {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 10px;
    width: 550px;
  }

    .closeMenu {
      display: flex;
      color: red;
      font-size: 30px;
      justify-content: flex-start;
    }

    .imgUser {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      margin-bottom: 20px;
    }
      .inicial {
        display: flex;
        justify-content: center;
        border-radius: 60%;
        border: solid 3px black;
        width: 100px;
        height: 100px;
      }
      .inicial span {
        -webkit-text-stroke-width: 0.01px;
        -webkit-text-stroke-color: #000000;
        font-size: 70px;
        color: white;
        font-weight: bold;
        margin-top: 5px;
      }
    
    .profileUser {
      width: 90%;
      margin: 0px auto;
      background-color: #d0c2d3;
      border-radius: 8px;
      height: ;
      font-size: 35px;
      margin: 10px auto;
    }

    .cerrarSesion {
      font-size: 25px;
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 10px auto;
      background-color: pink;
      border-radius: 8px;
      border: solid 0px black;
      height: 40px;
    } 
      .cerrarSesion i {
        margin-top: 8px;
        margin-right: 10px;
      }
      .cerrarSesion span {
        margin-top: 5px;
        margin-left: 10px;
      }

/* ----- */

  .container {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;

    /* border: 3px solid wheat; */
  }

  .bigLogo{
    height: 85px;
    display: flex;
    margin-top: 6px;

    text-decoration: none;

    /* border: 2px solid aqua; */
  }

  .imgLogo {
    width: 105px;
    height: 100%;
  }

  .textLogo {
    text-align: center;
  }

  .bold {
    font-weight: bold;
    font-size: 40px;
  }

  .rainbow {
    background: linear-gradient(45deg, #3CD1FD, #2C2EFA, #E92EFB);
    font-size: 25px;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  .buttons {
    height: 85px;
    display: flex;
    width: auto;
  }

  .button {
    width: 180px;
    color: white;
    font-size: 25px;
    margin: auto 5px;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid black;

    text-decoration: none;
  }

  .fa {
    font-size: 20px;
  }

  .gradient-a {
    background: linear-gradient(90deg,#30D0FF, #573CFD);
  }

  .gradient-b {
    background: linear-gradient(90deg,#573CFD, #b63ecbbb);
  }
</style>