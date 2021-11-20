<template>
  <div class="container">
    <div class="group">
      <div class="gradient-border">
        <img class="productImg" :src="`${details.imgURL}`">
      </div>
      <div class="productPrice">
        {{details.price}} €
      </div>
    </div>
    <div class="group">
      <h1>{{details.name}}</h1>
      <div class="especs">
        <h2 style="margin: 40px auto">Especificaciones</h2>
        <ul class="listEspecs" :key="espec" v-for="espec in details.espec">
          <li>{{espec}}</li>
        </ul>
      </div>
      <div class="ajustarCarrito">
        <!-- Añadir al carrito -->
        <button v-if="checkToken" v-on:click="addProductInCart(details)" class="addCart">
          Añadir al Carrito
        </button>
        <!-- Sin Iniciar Sesion -->
        <div v-else style="color: red">
          <i class="fas fa-exclamation-triangle"></i>
          Debes iniciar sesion para comprar
        </div>
      </div>
    </div>
  </div>
</template>

<script >
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: 'ProductDetails',
    computed: {
      ...mapGetters(["details","checkToken"]),
    },
    methods: {
      ...mapActions(["getDetails","addProductInCart"]),
    },
    mounted() {
      this.getDetails(this.$route.params.id);
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 50px !important;
    width: 80%;
    margin: auto;
    background: linear-gradient(180deg, #c6d2f3, white);
    border-radius: 28px;
    display: flex;
    justify-content: space-around;
  }
  .group {
    margin-top: 50px;
    font-size: 25px;
  }

  .productImg {
    border-radius: 18px;
    width: 460px;
    height: 400px;
    z-index: 1;
  }

  .productPrice {
    border: solid 5px black;
    border-radius: 35px;
    font-weight: bolder;
    font-size: 50px !important;
    color: #772ffb;
    width: 52%;
    margin: 100px auto 20px;
    padding: 10px;
  }

  .especs {
    width: 650px;
    margin: auto;
  }

  .listEspecs {
    text-align: left;
  }

  .ajustarCarrito {
    margin-top: 85px;
  }

  .addCart {
    border: solid 5px black;
    border-radius: 35px;
    font-weight: bolder;
    font-size: 50px !important;
    color: #772ffb;
    width: 500px;
    margin: auto;
    padding: 11px;
  }

  .addCart:hover {
    background-color: rgb(226, 226, 226);
    color: #762ffbb7;
  }

  .gradient-border {
    --border-width: 3px;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 462px;
    height: 402px;
    text-transform: uppercase;
    border-radius: 20px;
  }
  .gradient-border::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: 0;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      hsl(314, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(179, 85%, 66%),
      hsl(224, 90%, 31%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 20px;
    animation: moveGradient 4s alternate infinite;
  }
  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }

</style>