<template>
  <div class="main">
    <div class="container">
      <navBar/>
      <logoScreen/>
      <softDev/>
      <logistic/>
      <contacts/>
      <foo_ter/>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
import logoScreen from "@/components/logoScreen";
import softDev from "@/components/softDev";
import logistic from "@/components/logistic";
import contacts from "@/components/contacts";
import foo_ter from "@/components/foo_ter";


export default {
  name: "main",
  components: {
    navBar,
    logoScreen,
    softDev,
    logistic,
    contacts,
    foo_ter,
  },

}
</script>

<style scoped>

.container {
  max-width: 1216px;
  width: calc(608px + (1216 - 608) * ((100vw - 500px) / (1920 - 500)));
  margin-right: auto;
  margin-left: auto;
}
</style>