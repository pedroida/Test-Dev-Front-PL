<template>
  <div class="loader-container">
    <img src="@/assets/images/loader.svg" alt="system loader">
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped lang="scss">
.loader-container {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #8080804d;
  display: flex;

  img {
    margin: auto;
    max-width: 10em;
  }
}
</style>
