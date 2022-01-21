<template>
  <CHeaderSimplex />
  <CRegisterForm />
</template>

<script>
import CHeaderSimplex from '../components/HeaderSimplex.vue'
import CRegisterForm from '../components/RegisterForm.vue'

export default {
  name: "Register",
  components: {
    CHeaderSimplex,
    CRegisterForm
  }
}
</script>