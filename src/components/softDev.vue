<template>
  <div>
    <div class="h1" id="link-service">Разработка программного обеспечения
      <img class="arrow" src="../assets/arrowOrange.svg">
    </div>
    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/gaming.svg">
      </div>
      <div class="service">
        <div class="service-content">3D web-игры <br/>и приложения</div>
      </div>
      <div class="service-info">Разработка онлайн игр (online multiplayer), блокчейн NFT игры (blockchain), браузерные
        игры (WebGL, HTML5). Гейм-дизайн, сценарии и реквизит квест-комнат, разработка маркетинговых игр.
      </div>
      <div class="order">Заказать</div>
      <div class="number">01</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/NFT.svg">
      </div>
      <div class="service">
        <div class="service-content">Криптовалютные и<br/>NFT сервисы</div>
      </div>
      <div class="service-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolor enim
        eveniet, facere minima molestiae molestias nisi nulla, pariatur quam quo recusandae repellendus rerum sint
        tenetur totam voluptate voluptatem.
      </div>
      <div class="order">Заказать</div>
      <div class="number">02</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/map.svg">
      </div>
      <div class="service">
        <div class="service-content">Картографические<br/>сервисы</div>
      </div>
      <div class="service-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolor enim
        eveniet, facere minima molestiae molestias nisi nulla, pariatur quam quo recusandae repellendus rerum sint
        tenetur totam voluptate voluptatem.
      </div>
      <div class="order">Заказать</div>
      <div class="number">03</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/chat.svg">
      </div>
      <div class="service">
        <div class="service-content">Коммуникационные<br/>сервисы</div>
      </div>
      <div class="service-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolor enim
        eveniet, facere minima molestiae molestias nisi nulla, pariatur quam quo recusandae repellendus rerum sint
        tenetur totam voluptate voluptatem.
      </div>
      <div class="order">Заказать</div>
      <div class="number">04</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/portals.svg">
      </div>
      <div class="service">
        <div class="service-content">Корпоративные<br/>порталы</div>
      </div>
      <div class="service-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolor enim
        eveniet, facere minima molestiae molestias nisi nulla, pariatur quam quo recusandae repellendus rerum sint
        tenetur totam voluptate voluptatem.
      </div>
      <div class="order">Заказать</div>
      <div class="number">05</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/web_representation.svg">
      </div>
      <div class="service">
        <div class="service-content">Веб-представительства</div>
      </div>
      <div class="service-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolor enim
        eveniet, facere minima molestiae molestias nisi nulla, pariatur quam quo recusandae repellendus rerum sint
        tenetur totam voluptate voluptatem.
      </div>
      <div class="order">Заказать</div>
      <div class="number">06</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/garden.svg">
      </div>
      <div class="service">
        <div class="service-content">Системы учета <br/>для садовых <br/>товариществ</div>
      </div>
      <div class="service-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolor enim
        eveniet, facere minima molestiae molestias nisi nulla, pariatur quam quo recusandae repellendus rerum sint
        tenetur totam voluptate voluptatem.
      </div>
      <div class="order">Заказать</div>
      <div class="number">07</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/stock.svg">
      </div>
      <div class="service">
        <div class="service-content">Торговые и <br/>складские системы</div>
      </div>
      <div class="service-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolor enim
        eveniet, facere minima molestiae molestias nisi nulla, pariatur quam quo recusandae repellendus rerum sint
        tenetur totam voluptate voluptatem.
      </div>
      <div class="order">Заказать</div>
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
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: calc(24px + (48 - 24) * ((100vw - 500px) / (1920 - 500)));
  line-height: 110%;
  text-transform: uppercase;
  color: #D5D9E1;
  width: calc(350px + (700 - 350) * ((100vw - 500px) / (1920 - 500)));
  height: calc(120px + (240 - 120) * ((100vw - 500px) / (1920 - 500)));
  margin-bottom: calc(50px + (100 - 50) * ((100vw - 500px) / (1920 - 500)));;
}

.arrow {
  width: calc(24px + (48 - 24) * ((100vw - 500px) / (1920 - 500)));
  height: calc(24px + (48 - 24) * ((100vw - 500px) / (1920 - 500)));
}

.card {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  align-items: top;
  width: 100%;
  height: calc(141px + (192 - 141) * ((100vw - 500px) / (1920 - 500)));;
  border-top: 1px solid #2E373B;
  padding-top: calc(10px + (20 - 10) * ((100vw - 500px) / (1920 - 500)));;
}

.card:hover {
  border-bottom: 1px solid #646A75;
}

.pic {
  height: calc(36px + (72 - 36) * ((100vw - 500px) / (1920 - 500)));
  width: calc(36px + (72 - 36) * ((100vw - 500px) / (1920 - 500)));
}

.card:hover .pic {
  opacity: 0.6;
  transition: 0.5s;
}

.service {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: calc(18px + (36 - 18) * ((100vw - 500px) / (1920 - 500)));
  line-height: 150%;
  color: #D5D9E1;
  width: calc(250px + (500 - 250) * ((100vw - 500px) / (1920 - 500)));
  /*margin-left: calc(150px + (300 - 150) * ((100vw - 500px) / (1920 - 500)));*/
  transition: 1s;
}


.card:hover .service {
  color: #FF5F1F;
  transform: translateX(-50%);
  transition-duration: 1s;
}

.service-content {
  justify-content: flex-start;
}

.service-info {
  position: absolute;
  width: calc(230px + (592 - 230) * ((100vw - 500px) / (1920 - 500)));
  height: calc(36px + (72 - 36) * ((100vw - 500px) / (1920 - 500)));
  left: calc(312px + (624 - 312) * ((100vw - 500px) / (1920 - 500)));
  top: 130px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: calc(8px + (16 - 8) * ((100vw - 500px) / (1920 - 500)));
  line-height: 150%;
  color: #D5D9E1;
  opacity: 0;
  transition: all 0.7s;


}

.card:hover .service-info {
  opacity: 1;
  transition: all 0.7s;
  transition-delay: 0.2s;
  transform: translateY(-86px);

}

.order {
  position: absolute;
  width: 78px;
  height: 24px;
  left: 623px;
  top: 150px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.03em;
  color: #FF5F1F;
  opacity: 0;
  display: none;
}

.card:hover .order {
  opacity: 1;
  transition: 1s;
}

.number {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-size: calc(18px + (36 - 18) * ((100vw - 500px) / (1920 - 500)));
  line-height: 150%;
  text-align: right;
  color: #646A75;
  align-items: bottom;
  margin-top: calc(90px + (110 - 90) * ((100vw - 500px) / (1920 - 500)));;
  transition: 0.7s;

}

.card:hover .number {
  color: #FF5F1F;
  transition: 0.7s;


}

.ellipse {
  position: absolute;
  width: 972px;
  height: 972px;
  left: 44px;
  top: 1273px;
  background: #FF5F1F;
  opacity: 0.08;
  filter: blur(150px);
  z-index: -1;
}
</style>