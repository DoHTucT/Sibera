<template>
  <div class="logo-frame">
    <img src="../../src/assets/sibera_logo_big_text.svg" alt="Sibera">
    <div class="logo-text">Вовлечённость и результат</div>
    <img class="arrow" src="../../src/assets/arrow_down.svg">
  </div>
</template>

<script>
export default {
  name: "logoScreen"
}
</script>

<style scoped>
.logo-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 114px;
}

.logo-text {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 10.5px;
  text-transform: uppercase;
  color: #9FA7B4;
  margin-top: 37px;
}

.arrow {
  margin-top: 152px;
}
</style>