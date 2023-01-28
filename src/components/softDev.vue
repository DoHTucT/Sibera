<template>
  <div class="container">
    <div class="h1" id="service">Разработка программного обеспечения
      <img class="arrow" src="../../src/assets/↙orange.svg">
    </div>
    <!--    <card>-->
    <!--      <template v-slot:icon><img class="pic" src="../../src/assets/gaming.svg"></template>-->
    <!--      <template v-slot:service>3D веб-гейминг,<br/>GameDev</template>-->
    <!--      <template v-slot:number>01</template>-->
    <!--    </card>-->
    <!--    <card/>-->
    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/gaming.svg">
      </div>
      <div class="service">
        <div class="service-content">3D веб-гейминг,<br/>GameDev</div>
      </div>
      <div class="number">01</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/NFT.svg">
      </div>
      <div class="service">
        <div class="service-content">Криптовалютные и<br/>NFT сервисы</div>
      </div>
      <div class="number">02</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/map.svg">
      </div>
      <div class="service">
        <div class="service-content">Картографические<br/>сервисы</div>
      </div>
      <div class="number">03</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/chat.svg">
      </div>
      <div class="service">
        <div class="service-content">Коммуникационные<br/>сервисы</div>
      </div>
      <div class="number">04</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/portals.svg">
      </div>
      <div class="service">
        <div class="service-content">Корпоративные<br/>порталы</div>
      </div>
      <div class="number">05</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/web_representation.svg">
      </div>
      <div class="service">
        <div class="service-content">Веб-представительства</div>
      </div>
      <div class="number">06</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/garden.svg">
      </div>
      <div class="service">
        <div class="service-content">Системы учета <br/>для садовых товариществ</div>
      </div>
      <div class="number">07</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/stock.svg">
      </div>
      <div class="service">
        <div class="service-content">Торговые и <br/>складские системы</div>
      </div>
      <div class="number">08</div>
    </div>

    <div class="ellipse"></div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  name: "softDev",

  components: {
    card
  }
}
</script>

<style scoped>
.h1 {
  ont-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 110%;
  text-transform: uppercase;
  color: #D5D9E1;
  width: 640px;
  height: 237px;
  margin-top: 136px;
  margin-bottom: 100px;
}

.card {
  display: flex;
  justify-content: space-between;
  align-items: top;
  width: 1216px;
  height: 192px;
  border-top: 1px solid #2E373B;
  padding-top: 20px;
}

.pic {
  height: 72px;
  width: 72px;
}

.service {
  ont-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 150%;
  color: #D5D9E1;
  width: 592px;
  margin-left: 300px;
}

.service-content {
  justify-content: flex-start;
}

.number {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-size: 36px;
  line-height: 150%;
  text-align: right;
  color: #646A75;
  align-items: bottom;
  margin-top: 130px;
}

.ellipse {
  position: absolute;
  width: 972px;
  height: 972px;
  left: 794px;
  top: 2799px;
  background: #1F51FF;
  opacity: 0.08;
  filter: blur(150px);
  z-index: -1;
}
</style>