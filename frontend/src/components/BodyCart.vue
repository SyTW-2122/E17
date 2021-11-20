<template>
  <div class="container">
    <div v-if="AllPriceInCart != 0" class="leftPart">
      <div class="headerCart">
        <div class="textHeaderCart">
          <span>Precio</span>
          <span>Unidad</span>
          <span>Total</span>
        </div>
        <div class="ProductInCart">
          <div :key="product" v-for="product in ProductsInCart">
            <CProductInCart :arg="product"/>
          </div>
        </div>
      </div>
      <div class="leftDown">
        <input class="gradient-a" type="button" value="Vaciar Carrito" v-on:click="VaciarCarrito"/>
        <input class="gradient-b" type="button" value="Seguir Comprando" onclick='window.location.href="/categories"'/>
      </div>
    </div>
    <div v-else class="cartEmpty">
      Carrito Vacio
    </div>
    <div class="rightPart">
      <div class="rightUp">
        <span>Total</span>
        <div class="totalP">{{AllPriceInCart}} €</div>
      </div>
      <input v-if="AllPriceInCart != 0" class="checkBuy" type="button" value="Realizar Compra" v-on:click="RealizarCompra"/>
    </div>
  </div>
</template>

<script>
  import { mapGetters,mapActions } from 'vuex'
  import CProductInCart from './ProductInCart.vue'

  export default {
    name: "BodyCart",
    components: {
      CProductInCart
    },
    methods:{
      ...mapActions(["RealizarCompra","VaciarCarrito"]);
    },
    computed: {
      ...mapGetters(["ProductsInCart","AllPriceInCart"]);
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 50px !important;
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .textHeaderCart {
    width: 300px;
    margin-left: auto;
    margin-bottom: 20px;
  }

  .textHeaderCart span{
    margin: auto 20px;
  }

  .cartEmpty{
    font-size: 50px;
    margin-top: 35px;
    margin-left: 400px
  }

  .leftPart {
    padding: 30px 30px 30px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
  }

  .leftDown {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }

  .leftDown input {
    color: white;
    border-radius: 5px;
    font-size: 20px;
    border: solid 1px black;
    padding: 5px;
    width: 250px;
  }

  .gradient-a {
    background: linear-gradient(90deg,#30D0FF, #573CFD);
  }

  .gradient-b {
    background: linear-gradient(90deg,#573CFD, #b63ecbbb);
  }

  .rightPart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: solid 1px black;
    padding: 30px 0px 30px 30px;
  }

  .totalP {
    box-shadow:0 5px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    border-radius: 5px;
    width: 100px;
    margin: 20px auto;
    font-size: 20px;
  }

  .checkBuy {
    color: white;
    background: linear-gradient(90deg, #3CD1FD, #2C2EFA, #E92EFB);
    border-radius: 5px;
    font-size: 20px;
    border: solid 1px black;
    padding: 5px;
    width: 250px;
  }
</style>