<template>
  <CHeaderComplex />
  <CProductDetails />
</template>

<script>
import CHeaderComplex from '../components/HeaderComplex.vue'
import CProductDetails from '../components/ProductDetails.vue'

export default {
  name: "Details",
  components: {
    CHeaderComplex,
    CProductDetails
  }
}
</script>

<style scoped>

</style>