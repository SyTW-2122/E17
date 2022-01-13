<template>
  <CHeaderComplex />
  <CBodyCart />
</template>

<script>
import CHeaderComplex from '../components/HeaderComplex.vue'
import CBodyCart from '../components/BodyCart.vue'

export default {
  name: "Details",
  components: {
    CHeaderComplex,
    CBodyCart
  }
}
</script>

<style scoped>
</style>