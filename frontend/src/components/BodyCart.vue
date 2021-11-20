<template>
  <div class="container">
    BodyCart
    <br>
    <div :key="product.id" v-for="product in ProductsInCart">
      <CProductInCart :arg="product"/>
    </div>
    Total price: {{AllPriceInCart}}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CProductInCart from './ProductInCart.vue'

  export default {
    name: "BodyCart",
    components: {
      CProductInCart
    },
    computed: {
      ...mapGetters(["ProductsInCart","AllPriceInCart"])
    }
  }
</script>

<style scoped>

</style>