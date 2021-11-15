<template>
  <div class="container">
    <div class="bigLogo">
      <img class="imgLogo" src="../assets/Logo.png" alt="Logo StackParts">
      <div class="textLogo">
        <span class="bold">StackParts</span>
        <br>
        <span class="rainbow">Make it Real</span>
      </div>
    </div>
    <div>
      <div v-if="true" class="buttons">
        <div class="button gradient-a">Iniciar Sesion</div>
        <div class="button gradient-b">Registrarse</div>
      </div>
      <div v-else class="buttons">
        <div class="button gradient-a"> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Mi Carrito</div>
        <div class="button gradient-b"> <i class="fa fa-user" aria-hidden="true"></i> Mi Perfil</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComplex',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.container {
  font-family: 'Montserrat', sans-serif;
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  /* border: 3px solid wheat; */
}

.bigLogo{
  height: 85px;
  display: flex;
  margin-top: 6px;

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

.buttons {
  height: 85px;
  display: flex;
  width: auto;
}

.button {
  width: 180px;
  color: white;
  font-size: 25px;
  margin: auto 5px;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid black;
}

.fa {
  font-size: 20px;
}

.gradient-a {
  background: linear-gradient(90deg,#30D0FF, #573CFD);
}

.gradient-b {
  background: linear-gradient(90deg,#573CFD, #b63ecbbb);
}
</style>