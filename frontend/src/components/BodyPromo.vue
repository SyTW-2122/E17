<template>
  <div class="container">
    <div class="products">
      <div :key="product.id" v-for="product in promoProducts">
        <CProduct :arg="product"/>
      </div>
    </div>
  </div>
</template>

<script>
  import CProduct from './Product.vue'

  import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'BodyPromo',
    components: {
      CProduct
    },
    methods: {
      ...mapActions(["getPromoProducts"])
    },
    computed: {
      ...mapGetters(["promoProducts"])
    },
    created() {
      this.getPromoProducts();
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 100px !important;
    width: 90%;
    margin: auto;
  }

  .products {
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>