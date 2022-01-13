<template>
  <CHeaderComplex />
  <CBodyCategories />
</template>

<script>
import CHeaderComplex from '../components/HeaderComplex.vue'
import CBodyCategories from '../components/BodyCategories.vue'

  export default {
    name: "Cateogries",
    components: {
      CHeaderComplex,
      CBodyCategories
    }
  }
</script>
