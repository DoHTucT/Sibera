<template>
  <div class="navBar">
    <div class="logo">
      <img src="../../src/assets/sibera_logo_text.svg" alt="Sibera">
    </div>
    <div class="menu">
      <a href="#service" id="service">Услуги</a>
      <a href="#contacts" id="contacts">Контакты</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar"
}
</script>

<style scoped>
.navBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  border-bottom: 1px solid #2E373B;
  padding: 0;
  z-index: 3;
}

.logo {
}

a {
  position: absolute;
  z-index: 2;
}

a:link, a:visited {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #646A75;
}

a:hover {
  color: #FF5F1F;
}

a {
  text-decoration: none;
}

#contacts {
  right: 230px;
  top: 24px;
}

#service {
  right: 350px;
  top: 24px;
}

</style>