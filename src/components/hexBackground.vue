<template>
  <div class="main">
    <div class="container">
      <div
          v-for="(hex, index) in hexes"
          :key="index"
          class="hex"
          :style="{ opacity: hexOpacity[index], background: hexColor[index] }"
          @mouseover="randomColorHover(hex)"
      ></div>
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
      hexColor: Array(120).fill('#FF5F1F'),
      hexOpacity: Array(120).fill('0.03')
    }
  },

  methods: {
    randomColor(index) {
      this.hexColor.splice(index, 1, this.hexColors[Math.floor(Math.random() * this.hexColors.length)]);
    },

    randomColorHover(hex) {
      this.hexColor = this.hexColors[Math.floor(Math.random() * this.hexColors.length)];
    }
  },

  mounted() {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const indices = []
        while (indices.length < 20) {
          const index = Math.floor(Math.random() * this.hexes.length)
          if (!indices.includes(index)) {
            indices.push(index)
          }
        }
        indices.forEach(index => {
          this.hexOpacity.splice(index, 1, '0.5')
          this.randomColor(index);
        })
        setTimeout(() => {
          indices.forEach(index => {
            this.hexOpacity.splice(index, 1, '0.03')
            this.hexColor.splice(index, 1, '#FF5F1F');
          })
        }, (i + 1) * 500) // add delay here
      }, i * 300)
    }
  }
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
  transition: 2s;
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
  animation-duration: 1s;
  animation-iteration-count: 1;
}

@keyframes hex-hover {
  to {
    background: v-bind(hexColor);
    opacity: 0.3;
    transition: 2s;
  }
}
</style>

