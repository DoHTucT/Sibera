<template>
  <div class="container">
    <div class="logo-frame">
      <img class="logo" src="../../src/assets/sibera_logo_big_text.svg" alt="Sibera">
      <div class="logo-text">Вовлечённость и результат</div>
    </div>
  </div>
  <hexBackground class="background"/>
</template>

<script>
import hexBackground from "@/components/hexBackground";
import hexRandom from "@/components/hexRandom";

export default {
  name: "logoScreen",

  components: {
    hexBackground,
    hexRandom
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
  animation-name: hide-logo;
  animation-duration: 2s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes hide-logo {
  from { opacity: 0; }
  to { opacity: 1; }
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

.background {
  position: absolute;
  top: -30px;
  left: 0;
  height: calc(550px + (1100 - 550) * ((100vw - 500px) / (1920 - 500)));
  overflow: hidden;
}

</style>