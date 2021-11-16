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
      <CProduct />
      <CProduct />
      <CProduct />
      <CProduct />
      <CProduct />
      <CProduct />
      <CProduct />
      <CProduct />
    </div>
  </div>
</template>

<script>
import CProduct from './Product.vue'

export default {
  name: 'BodyHome',
  components: {
    CProduct
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