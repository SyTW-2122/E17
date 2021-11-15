<template>
  <CHeaderComplex />
  <CBodyHome />
</template>

<script>
import CHeaderComplex from './components/HeaderComplex.vue'
import CBodyHome from './components/BodyHome.vue'

export default {
  name: 'App',
  components: {
    CHeaderComplex,
    CBodyHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
