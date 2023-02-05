<template>
  <div class="main">
    <div class="container">
      <navBar/>
      <logoScreen/>
      <softDev/>
      <logistic/>
      <contacts/>
    </div>
    <img class="arrow" ref="arrow" src="../../src/assets/arrow_down.svg">
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
  },



  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },

  methods: {
    onScroll() {
      if (window.scrollY > 3285) {
      // this.$refs.arrow.style.visibility = 'hidden/visible'
        this.$refs.arrow.classList.add('isHidden');
      } else {
        this.$refs.arrow.classList.remove('isHidden');
      }
    },
  },

  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  }


}
</script>

<style scoped>

.container {
  max-width: 1216px;
  width: calc(608px + (1216 - 608) * ((100vw - 500px) / (1920 - 500)));
  margin-right: auto;
  margin-left: auto;
}

.arrow {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  transition: 1s;
}

.isHidden {
  opacity: 0;
  transform: translateY(50px);
  transition: 1s;
}

</style>