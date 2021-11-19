<template>
  <div class="container">
    Formulario de Registro.
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "RegisterForm",
    data() {
      return {
        usuario: {
          email: "",
          password: "",
          name: "",
          surname: ""
        },
      };
    },
    methods: {
      ...mapActions(["register"]),
    }
  }
</script>

<style scoped>
  .container {
    width: 50%;
    margin: auto;
    margin-top: 50px !important;
  }
</style>