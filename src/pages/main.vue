<template>
  <div class="main">
    <div class="margin-left"></div>
  <div class="container">
    <navBar/>
    <logoScreen/>
    <softDev/>
    <logistic/>
    <contacts/>
  </div>
    <div class="margin-right"></div>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
import logoScreen from "@/components/logoScreen";
import softDev from "@/components/softDev";
import logistic from "@/components/logistic";
import contacts from "@/components/contacts";

export default {
  name: "main",
  components: {
    navBar,
    logoScreen,
    softDev,
    logistic,
    contacts,
  }

}
</script>

<style scoped>
.main{
  display:grid;
  grid-template-columns: 1fr 5fr 1fr;

}
/*.container {*/
/*  width: calc(400px + (100% - 400) * ((100vw - 500px) / (1920 - 500)));*/
/*}*/

</style>