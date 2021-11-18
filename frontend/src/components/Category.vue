<template>
  <div class="category">
    <router-link :to="`/category/${arg.name}`" class="no_link">
      <div class="namecategory">
        {{arg.name}}
      </div>
      <div class="imgcategory">
        <img :src="arg.imgURL">
      </div>
    </router-link>
  </div>
</template>

<script >
export default {
  name: 'Category',
  props: {
    arg: {
      name: String,
      imgURL: String,
      id: String
    }
  }
}
</script>

<style scoped>
  .category {
    text-align: center;
    margin: 10px;
    width: 530px;
    height: 300px;
    background: linear-gradient(90deg, #3CD1FD, #2C2EFA, #E92EFB);
    border-radius: 20px;
  }

  .no_link {
    text-decoration: none;
    color: white;
  }

  .namecategory {
    font-size: 30px;
    height: 10%;
    margin-top: 5px;
    display: block;
  }

  .imgcategory {
    height: 80%;
    margin: 10px auto;
  }

  .imgcategory img {
    border-radius: 20px;
    border: solid 2px black;
    height: 98%;
    width: 65%;
  }
</style>