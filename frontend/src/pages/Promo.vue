<template>
  <CHeaderComplex />
  <CBodyPromo />
</template>

<script>
  import CHeaderComplex from '../components/HeaderComplex.vue'
  import CBodyPromo from '../components/BodyPromo.vue'

  export default {
    name: "Details",
    components: {
      CHeaderComplex,
      CBodyPromo
    }
  }
</script>