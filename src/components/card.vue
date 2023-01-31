<template>
  <div>
    <slot name="icon" class="pic"/>
    <slot name="service" class="service"/>
    <slot name="number" class="number"/>
  </div>
</template>

<script>
export default {
  name: "card"
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 1216px;
  height: 192px;
  border-top: 1px solid #2E373B;
}

.pic{
  height: 72px;
  width: 72px;
  margin-top: 20px;
}
.service{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 150%;
  color: #D5D9E1;
  margin-top: 20px;

}

.number{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-size: 36px;
  line-height: 150%;
  text-align: right;
  color: #646A75;
  margin-top: 130px;
}
</style>