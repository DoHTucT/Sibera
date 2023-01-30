<template>
  <div class="logo-frame">
    <img src="../../src/assets/sibera_logo_big_text.svg" alt="Sibera">
    <div class="logo-text">Вовлечённость и результат</div>
    <img class="arrow" src="../../src/assets/arrow_down.svg">
<!--    <img class="background" src="../../src/assets/hexBack.svg">-->
    <hexBackground class="background"/>
  </div>
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

.background {
  position: absolute;
  top: 0;
  /*z-index: -1;*/
}

/*hexBackground {*/
/*  position: absolute;*/
/*  top: 0;*/
/*  z-index: -3;*/
/*}*/
</style>