<template>
  <div class="container">
    <div class="buttons">
      <router-link to="/categories" class="button gradiant-a">
        Todas las Categorias
      </router-link>
      <router-link to="/promociones" class="button gradiant-b">
        Ofertas del Dia
      </router-link>
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
  import CProduct from './Product.vue'

  import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'BodyHome',
    components: {
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
    text-decoration: none;
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