<template>
  <div class="product">
    <div class="nameproduct">
      Nvidia GeForce GTX 1660
    </div>
    <div class="imgproduct">
      <img src='https://i.redd.it/yoh6g0svph171.png'>
    </div>
    <div class="priceproduct">
      <div class="price">
        1145.12€
      </div>
      <div class="discount">
        <i class="fas fa-bullhorn"></i>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: 'Product'
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

    color: white;
    
    /* border: solid 2px yellow; */
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
    width: 58%;
    margin-left: 38%;
    margin-bottom: 5px;
    display: flex;
    height: 10%;
    justify-content: space-between;
  }

  .price {
    font-size: 30px;
  }

  .discount {
    transform: rotate(335deg);
    font-size: 30px;
    background: linear-gradient(200deg, rgba(29,57,251,1) 30%, rgba(52,222,252,1) 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
</style>