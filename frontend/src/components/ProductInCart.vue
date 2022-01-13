<template>
  <div v-if="arg" class="container2">
    <img class="productImg" :src='`${arg.imgURL}`'>
    <div class="productName">
      {{arg.name}}
    </div>
    <div class="productPrice">
      {{arg.price}} €
    </div>
    <div class="unidades">
      <input type="button" style="cursor: pointer;" value="-" v-on:click="removeProductInCart(arg)"/>
      {{arg.amount}}
      <input type="button" style="cursor: pointer;" value="+" v-on:click="addProductInCart(arg)"/>
    </div>
    <div class="productTotalPrice">
      {{arg.totalPrice}} €
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: "ProductInCart",
    props: {
      arg: {
        id: String,
        imgURL: String,
        name: String,
        price: Number,
        amount: Number,
        totalPrice: Number
      }
    },
    methods: {
      ...mapMutations(["addProductInCart","removeProductInCart"])
    }
  }
</script>

<style scoped>
  .container2 {
    display: flex;
    background: linear-gradient(90deg, #3CD1FD, #2C2EFA, #9a41e3 90%);
    border-radius: 10px;
    margin-bottom: 20px;
    margin-top: 0px !important;
    height: 100px;
    color: white;
  }

  .productImg {
    margin-top: 1px;
    margin-left: 1px;
    width: 100px;
    height: 94%;
    border: solid 2px black;
    border-radius: 10px;
  }

  .productName {
    width: 300px;
    margin-top: 40px;
  }

  .productPrice {
    width: 100px;
    margin-top: 40px;
  }

  .unidades {
    display: flex;
    justify-content: center;
    height: 20px;
    margin-top: 40px;
    font-size: 18px;
  }
  .unidades input{
    border-radius: 5px;
    border: solid 1px black;
    margin: 0px 10px;
  }

  .productTotalPrice {
    width: 100px;
    margin-top: 40px;
  }
</style>