<template>
  <div class="navBar">
    <div class="logo">
      <img src="@/assets/sibera_logo_text.svg" alt="Sibera">
    </div>
    <div class="menu">
      <a href="#link-service" id="service">Услуги</a>
      <a href="#link-contacts" id="contacts">Контакты</a>
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

.menu {
  position: relative;
  z-index: 2;
}

a {
  z-index: 3;
  text-decoration: none;
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

#service {
  margin-right: 50px;
}

</style>