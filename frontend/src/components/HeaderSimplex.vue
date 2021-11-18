<template>
  <div class="container">
    <router-link to="/" class="bigLogo">
      <img class="imgLogo" src="../assets/Logo.png" alt="Logo StackParts">
      <div class="textLogo">
        <span class="bold">StackParts</span>
        <br>
        <span class="rainbow">Make it Real</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'HeaderSimplex',
  }
</script>

<style scoped>
  .container {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: center;

    /* border: 3px solid wheat; */
  }

  .bigLogo{
    height: 85px;
    display: flex;
    margin-top: 6px;

    text-decoration: none;

    /* border: 2px solid aqua; */
  }

  .imgLogo {
    width: 105px;
    height: 100%;
  }

  .textLogo {
    text-align: center;
  }

  .bold {
    font-weight: bold;
    font-size: 40px;
  }

  .rainbow {
    background: linear-gradient(45deg, #3CD1FD, #2C2EFA, #E92EFB);
    font-size: 25px;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
</style>