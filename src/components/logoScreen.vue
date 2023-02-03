<template>
  <div class="container">
    <div class="logo-frame">
      <img class="logo" src="../../src/assets/sibera_logo_big_text.svg" alt="Sibera">
      <div class="logo-text">Вовлечённость и результат</div>
    </div>
  </div>
  <img class="arrow" src="../../src/assets/arrow_down.svg">
  <hexBackground class="background"/>
</template>

<script>
import hexBackground from "@/components/hexBackground";

export default {
  name: "logoScreen",

  components: {
    hexBackground
  }
}
</script>

<style scoped>
.container {
  height: calc(444px + (888 - 444) * ((100vw - 500px) / (1920 - 500)));
}

.logo-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(70px + (100 - 70) * ((100vw - 500px) / (1920 - 500)));
  /*margin-bottom: calc(70px + (100 - 70) * ((100vw - 500px) / (1920 - 500)));*/
}

.logo {
  width: calc(430px + (860 - 430) * ((100vw - 500px) / (1920 - 500)));
  height: calc(270px + (534 - 270) * ((100vw - 500px) / (1920 - 500)));
}

.logo-text {
  margin: calc(3px + (30 - 3) * ((100vw - 500px) / (1920 - 500)));
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: calc(12px + (24 - 12) * ((100vw - 500px) / (1920 - 500)));
  line-height: 150%;
  letter-spacing: calc(5px + (10.5 - 1) * ((100vw - 500px) / (1920 - 500)));
  text-transform: uppercase;
  color: #9FA7B4;
}

.arrow {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
}

.background {
  position: absolute;
  top: -30px;
  left: 0;
  height: calc(550px + (1100 - 550) * ((100vw - 500px) / (1920 - 500)));
  overflow: hidden;
}

</style>