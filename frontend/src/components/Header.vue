<template>
  <div class="container">
    <div class="bigLogo">
      <img alt="Logo" src="../assets/Logo.png"> 
      <div class="textLogo"> 
        <span class="bold">StackParts</span>
        <br>
        <span class="rainbow">Make it Real</span>
      </div>
    </div>
    <div class="buttons"> 
      <div class="login"></div>
      <div class="register"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.container {
  width: 95%;
  margin: auto;
}

.bigLogo {
  border: 3px solid purple;
  height: 80px;
}

.bigLogo img{
  float: left;
  text-align: left;
  width: 100px;
  height: 100%;
}

.textLogo {
  text-align: left;
}

.bold {
  font-weight: bold;
  font-size: 35px;
}

.rainbow {
  font-size: 20px;
}
</style>