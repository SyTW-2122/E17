<template>
  <CHeaderComplex />
  <CBodyHome />
</template>

<script>
  import CHeaderComplex from '../components/HeaderComplex.vue'
  import CBodyHome from '../components/BodyHome.vue'

  export default {
    name: "Home",
    components: {
      CBodyHome,
      CHeaderComplex
    }
  }
</script>