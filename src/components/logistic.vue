<template>
  <div class="container">
    <div class="h1">Логистические услуги
      <img class="arrow" src="../../src/assets/↙blue.svg">
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/logistic.svg">
      </div>
      <div class="service">
        <div class="service-content">Доставка всеми <br/>видами транспорта</div>
      </div>
      <div class="number">01</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../assets/route.svg">
      </div>
      <div class="service">
        <div class="service-content">Рассчет оптимального маршрута <br/>для товарной группы</div>
      </div>
      <div class="number">02</div>
    </div>

    <div class="card">
      <div class="pic">
        <img class="pic" src="../../src/assets/parachute.svg">
      </div>
      <div class="service">
        <div class="service-content">Дроп-шиппинг</div>
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

    <div class="ellipse"></div>
  </div>
</template>

<script>
export default {
  name: "logistic"
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
  box-sizing: border-box;
  width: 1216px;
  height: 192px;
  border-top: 1px solid #2E373B;
  padding-top: 20px;
}

.card:hover {
  border-bottom: 1px solid #646A75;
}

.pic {
  height: 72px;
  width: 72px;
}

.card:hover .pic{
  opacity: 0.6;
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

.card:hover .service {
  color: #1F51FF;
  transform: translateX(-300px);
  transition-duration: 0.5s;
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
  margin-top: 110px;
}

.card:hover .number{
  color: #1F51FF;
}

.ellipse {
  position: absolute;
  width: 963px;
  height: 963px;
  left: 794px;
  top: 2799px;
  background: #1F51FF;
  opacity: 0.12;
  filter: blur(150px);
  z-index: -1;
}
</style>