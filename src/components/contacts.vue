<template>
  <div class="container">
    <div class="h1" id="contacts">Контакты <img class="arrow" src="../assets/arrowGreen.svg">
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
        <div class="info">инфо@сибера.рус</div>
      </div>
    </div>
    <div class="contact">
      <img src="../../src/assets/location.svg">
      <div class="wrapper">
        <div class="description">Адрес:</div>
        <div class="info">г. Томск, Некрасова 45</div>
      </div>
    </div>
    <img class="background" src="../../src/assets/contact_map.webp">
    <div class="footer">
      <div class="content">СИБЕРА 2023 © Все права защищены</div>

    </div>
  </div>
</template>

<script>
export default {
  name: "contacts"
}
</script>

<style scoped>
.h1 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 150%;
  text-transform: uppercase;
  color: #D5D9E1;
  margin-top: 114px;
  margin-bottom: 92px;
}

.contact{
  display: flex;
  justify-content: space-between;
  width: 650px;
  margin-bottom: 60px;

}

.wrapper{
  width: 420px;
  height: 80px;
}

.description {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #646A75;
}

.info {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 150%;
  color: #D5D9E1;
}

.background{
  position: absolute;
  width: 1920px;
  height: 1008px;
  left: -100px;
  top: 4400px;
  opacity: 0.7;
  z-index: -1;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 73px;
  margin-top: 203px;
  border-top: 1px solid #2E373B;
}

.content{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #646A75
}

</style>