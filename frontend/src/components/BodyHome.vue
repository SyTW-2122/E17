<template>
  <CHeaderComplex />
  <div class="container">
    <div class="buttons">
      <div class="button gradiant-a">
        Todas las Categorias
      </div>
      <div class="button gradiant-b">
        Ofertas del Dia
      </div>
    </div>
    <hr>
    <div class="products">
      <div :key="product.id" v-for="product in randomProducts">
        <CProduct :arg="product"/>
      </div>
    </div>
  </div>
</template>

<script>
  import CHeaderComplex from './HeaderComplex.vue'
  import CProduct from './Product.vue'

  import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'BodyHome',
    components: {
      CHeaderComplex,
      CProduct
    },
    methods: {
      ...mapActions(["getRandomProducts"])
    },
    computed: {
      ...mapGetters(["randomProducts"])
    },
    created() {
      this.getRandomProducts();
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 100px !important;
    width: 90%;
    margin: auto;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  .button {
    text-align: center;
    width: 500px;
    font-size: 40px;
    margin: auto 60px;
    padding: 10px;
    border-radius: 30px;
    border: 2px solid black;
    color: white;
  }

  .gradiant-a {
    background: radial-gradient(#38BFEA 15%, #604ECA);
  }

  .gradiant-b {
    background: radial-gradient(#C373D7 15%, #8721ED);
  }

  .products {
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>