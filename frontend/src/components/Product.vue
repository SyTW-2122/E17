<template>
  <div class="product">
    <router-link :to="`/details/${arg.id}`" class="no_link">
      <div class="nameproduct">
        {{arg.name}}
      </div>
      <div class="imgproduct">
        <img :src="arg.imgURL">
      </div>
      <div class="priceproduct">
        <div class="price">
          {{arg.price}}€
        </div>
        <div v-if="arg.discount" class="discount">
          <i class="fas fa-bullhorn"></i>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script >
export default {
  name: 'Product',
  props: {
    arg: {
      category: String,
      name: String,
      price: Number,
      imgURL: String,
      discount: Boolean,
      espec: [String],
      id: String
    }
  }
}
</script>

<style scoped>
  .product {
    text-align: center;
    margin: 10px;
    width: 530px;
    height: 300px;
    background: linear-gradient(90deg, #3CD1FD, #2C2EFA, #E92EFB);
    border-radius: 20px;
    box-shadow:0 5px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)
  }

  .no_link {
    text-decoration: none;
    color: white;
  }

  .nameproduct {
    font-size: 30px;
    height: 10%;
    margin-top: 5px;
    display: block;
  }

  .imgproduct {
    height: 68%;
    margin: 10px auto;
  }

  .imgproduct img {
    border-radius: 20px;
    border: solid 2px black;
    height: 98%;
    width: 60%;
  }

  .priceproduct {
    width: 55%;
    margin-left: 41%;
    margin-bottom: 5px;
    display: flex;
    height: 10%;
    justify-content: space-between;
  }

  .price {
    font-size: 30px;
    font-weight: bold;
  }

  .discount {
    transform: rotate(335deg);
    font-size: 30px;
    background: linear-gradient(200deg, rgba(29,57,251,1) 30%, rgba(52,222,252,1) 100%);
    /* background: linear-gradient(200deg, red,rgb(253, 195, 4), rgb(251, 244, 145)); */
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
</style>