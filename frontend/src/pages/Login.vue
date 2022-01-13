<template>
  <CHeaderSimplex />
  <CLoginForm />
</template>

<script>
import CHeaderSimplex from '../components/HeaderSimplex.vue'
import CLoginForm from '../components/LoginForm.vue'

export default {
  name: "Login",
  components: {
    CHeaderSimplex,
    CLoginForm
  }
}
</script>

<style scoped>

</style>