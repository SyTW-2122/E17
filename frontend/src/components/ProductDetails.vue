<template>
  Cateogria: {{details.category}}
  <hr>
  Nombre: {{details.name}}
  <hr>
  Precio: {{details.price}}
  <hr>
  Imagen: {{details.imgURL}}
  <hr>
  Promocion: {{details.discount}}
  <hr>
  Especificaciones: {{details.espec}}
  <hr>
  ID: {{details.id}}
</template>

<script >
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: 'ProductDetails',
    computed: {
      ...mapGetters(["details"]),
    },
    methods: {
      ...mapActions(["getDetails"]),
    },
    mounted() {
      this.getDetails(this.$route.params.id);
    }
  }
</script>