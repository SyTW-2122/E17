<template>
  {{arg}}
</template>

<script>
export default {
  name: "ProductInCart",
  props: {
    arg: {
      id: String,
      imgURL: String,
      name: String,
      price: Number,
      amount: Number
    }
  }
}
</script>

<style scoped>

</style>