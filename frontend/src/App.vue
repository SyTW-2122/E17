<template>
  <router-view />
  <CFooter />
</template>

<script>
  import CFooter from './components/Footer.vue'

  export default {
    name: "App",
    components: {
      CFooter
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
