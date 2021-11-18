<template>
  <div class="container">
    <hr style="margin-botton: 0px">
    <div class="content">
      <span>&copy; StackParts {{ new Date().getFullYear() }}</span>
      <div class="redessociales">
        <a href="https://github.com/SyTW-2122/E17">
          <i class="far fa-folder"></i>
        </a>
        <a href="https://github.com/SyTW-2122/E17">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
  .container {
    margin-top: 30px !important;
    width: 90%;
    margin: auto;
  }

  .content {
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
    font-size: 25px;
  }

  .redessociales a {
    margin: auto 3px;
    color: black;
  }
</style>