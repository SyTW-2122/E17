<template>
  <div class="container">     <!--  Contiene Todo -->
    <div class="buttons">     <!--  Contiene Todo -->
      <div class="button gradiant-a">
        Todas las Categorias
      </div>
      <div class="button gradiant-b">
        Ofertas del Dia
      </div>
    </div>
    <hr>
    <div class="products">
      <!-- Poner el For para meter cada producto -->
      <div :key="i" v-for="i in 5">
        <CProduct :arg="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import CProduct from './Product.vue'

export default {
  name: 'BodyHome',
  components: {
    CProduct
  },
  data() {
    return {
      product: {
        category: "ARROZ",
        name: "HOLA Nombre",
        price: 2351,
        imgURL: "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a7825b45cafe8a3027ea9d7/gas-radon_0.jpg",
        discount: true,
        espec: ["hola", "que", "tal", "Xd"],
        id: "7y8q72340q7h827"
      }
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  .container {
    margin-top: 100px !important;
    font-family: 'Montserrat', sans-serif;
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

  /* border: solid 2px wheat; */
  }
</style>