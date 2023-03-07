<template>
  <div class="background">
    <div class="h1" id="link-contacts" ref="target">Контакты <img class="contact-arrow" src="../assets/arrowGreen.svg">
    </div>
    <div class="contact">
      <img src="../../src/assets/tel.svg">
      <div class="wrapper">
        <div class="description">Телефон:</div>
        <div class="info">+7 905 705 21 78</div>
      </div>
    </div>
    <div class="contact">
      <img src="../../src/assets/mail.svg">
      <div class="wrapper">
        <div class="description">Email</div>
        <a class="info" href="mailto:xn--h1akdx@xn--80abmk6bc.xn--p1acf">инфо@сибера.рус</a>
      </div>
    </div>
    <div class="contact">
      <img src="../../src/assets/location.svg">
      <div class="wrapper">
        <div class="description">Адрес:</div>
        <div class="info">г. Томск, Некрасова 45</div>
      </div>
    </div>

    <img class="arrow"  :class="{observer: targetIsVisible, scrollHidden: scrolling}" ref="arrow" src="@/assets/arrow_down.svg">

  </div>
</template>

<script>
import {ref} from "vue";
import {useIntersectionObserver} from "@vueuse/core";

export default {
  name: "contacts",

  data(){
    return{
      scrolling: false
    }
  },

  created: function() {
    let isScrolling;
    window.addEventListener('scroll', () => {
      this.scrolling = true
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        this.scrolling = false
      }, 200);
    }, false);
  },


  setup() {
    const target = ref(null)
    const targetIsVisible = ref(false)

    const {stop} = useIntersectionObserver(
        target,
        ([{isIntersecting}], observerElement) => {
          targetIsVisible.value = isIntersecting
        },
    )

    return {
      target,
      targetIsVisible,
    }
  }
}
</script>

<style scoped>
.h1 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: calc(24px + (48 - 24) * ((100vw - 500px) / (1920 - 500)));
  line-height: 150%;
  text-transform: uppercase;
  color: #D5D9E1;
  margin-top: 114px;
  margin-bottom: 92px;
}

.contact-arrow {
  width: calc(24px + (48 - 24) * ((100vw - 500px) / (1920 - 500)));
  height: calc(24px + (48 - 24) * ((100vw - 500px) / (1920 - 500)));
}

.contact {
  display: flex;
  justify-content: space-between;
  width: calc(325px + (650 - 325) * ((100vw - 500px) / (1920 - 500)));
  margin-bottom: 60px;
}

.wrapper {
  width: calc(210px + (420 - 210) * ((100vw - 500px) / (1920 - 500)));
  height: 80px;
}

.description {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: calc(8px + (16 - 8) * ((100vw - 500px) / (1920 - 500)));
  line-height: 150%;
  color: #646A75;
}

.info {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: calc(18px + (36 - 18) * ((100vw - 500px) / (1920 - 500)));
  line-height: 150%;
  color: #D5D9E1;
}

a{
  text-decoration: none;
}

.background {
  background-image: url(@/assets/contact_map.webp)
}

.arrow {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  transition: 0.3s;
}

.observer {
  opacity: 0;
  transform: translateY(50px);
  transition: 0.3s;
}

.scrollHidden {
  opacity: 0;
  transform: translateY(50px);
  transition: 0.3s;
}
</style>