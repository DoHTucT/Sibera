<template>
  <div class="main">
  <div class="container">
    <navBar/>
    <logoScreen/>
    <softDev/>
    <logistic/>
    <contacts/>
  </div>
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
/*.main{*/
/*  display:grid;*/
/*  grid-template-columns: 1fr 5fr 1fr;*/
/*}*/
.container {
  width: 1216px;
  margin-left: auto;
  margin-right: auto;
}

</style>