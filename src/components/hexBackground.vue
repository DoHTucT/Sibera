<template>
  <div class="main">
    <div class="container">
      <div v-for="(hex, index) in hexes" :key="index" class="hex" @mouseover="randomColor(hex)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hexBackground",

  data() {
    return {
      hexes: Array(120).fill(null),
      hexColors: ['#1F51FF', '#0FFF50', '#FF5F1F'],
      hexColor: ''
    }
  },

  methods: {
    randomColor() {
      this.hexColor = this.hexColors[Math.floor(Math.random() * this.hexColors.length)];
    }
  },

}


</script>

<style scoped>
.main {
  display: grid;
  --s: calc(64px + (128 - 64) * ((100vw - 500px) / (1920 - 500))); /* size  */
  --m: 1px; /* margin */
  --f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);
}

.container {
  font-size: 0; /*disable white space between inline block element */
}

.hex {
  width: var(--s);
  margin: var(--m);
  height: calc(var(--s) * 1.1547);
  display: inline-block;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  background: rgba(255, 95, 31);
  opacity: 0.03;
  margin-bottom: calc(var(--m) - var(--s) * 0.2885);
  transition: 3.2s;
}


.container::before {
  content: "";
  width: calc(var(--s) / 2 + var(--m));
  float: left;
  height: 120%;
  shape-outside: repeating-linear-gradient(
      #0000 0 calc(var(--f) - 3px),
      #000 0 var(--f));
}

.hex:hover {
  animation-name: hex-hover;
  transition: 0.05s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

@keyframes hex-hover {
  to {
    background: v-bind(hexColor);
    opacity: 0.3;
    transition: 1s;
  }
}

</style>