<template>
  <CHeaderComplex />
  <CBodyCategory />
</template>

<script>
import CHeaderComplex from '../components/HeaderComplex.vue'
import CBodyCategory from '../components/BodyCategory.vue'

  export default {
    name: "Cateogries",
    components: {
      CHeaderComplex,
      CBodyCategory
    }
  }
</script>
