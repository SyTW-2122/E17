<template>
  <div class="container">
    <div class="cateogries">
      <div :key="category.id" v-for="category in allCategories">
        <CCategory :arg="category"/>
      </div>
    </div>
  </div>
</template>

<script>
  import CCategory from './Category.vue'

  import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'BodyCategories',
    components: {
      CCategory
    },
    methods: {
      ...mapActions(["getAllCategories"])
    },
    computed: {
      ...mapGetters(["allCategories"])
    },
    created() {
      this.getAllCategories();
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 100px !important;
    width: 90%;
    margin: auto;
  }

  .cateogries {
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>