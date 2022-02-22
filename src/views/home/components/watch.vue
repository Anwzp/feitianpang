<script lang="ts" setup>
import Card from '@/components/card/card.vue'
</script>
<template>
  <Card v-slot:body class="newest" :title="null" :bordered="false">
    <!-- <div class="watch">
      <span class="hour" style="left: 75px"></span>
      <span class="hour" style="right: 10px; transform: rotate(90deg); top: 70px"></span>
      <span class="hour" style="bottom: 0px; left: 75px"></span>
      <span class="hour" style="left: 5px; transform: rotate(90deg); top: 70px"></span>

      <span class="hour-s" style="left: 110px; transform: rotate(30deg); top: 10px"></span>
      <span class="hour-s" style="left: 135px; transform: rotate(60deg); top: 35px"></span>
      <span class="hour-s" style="left: 135px; transform: rotate(120deg); top: 105px"></span>
      <span class="hour-s" style="left: 110px; transform: rotate(150deg); top: 130px"></span>
      <span class="hour-s" style="left: 40px; transform: rotate(210deg); top: 130px"></span>
      <span class="hour-s" style="left: 15px; transform: rotate(240deg); top: 105px"></span>
      <span class="hour-s" style="left: 15px; transform: rotate(300deg); top: 35px"></span>
      <span class="hour-s" style="left: 40px; transform: rotate(330deg); top: 10px"></span>
      <i class="dot"></i>
    </div> -->
    <div class="card-background">
      <div></div>
    </div>
  </Card>
</template>
<style lang="scss" scoped>
$color: #666;
.newest {
  border: none;

  // background-color: #f0f0f0;
}
.card-background {
  border-radius: 4px;
  background: #ececec;
}
.watch {
  height: 150px;
  width: 150px;
  border: 2px solid $color;
  border-radius: 100%;
  margin: 0 auto;
  background-color: #fff;
  // background-image: url('@/assets/home.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  box-shadow: -1px -1px 3px $color;
  span {
    display: inline-block;
    position: absolute;
    width: 2px;
    border-radius: 0 0 1px 1px;
    background-color: $color;
    transform-origin: 0 100%;
  }
  .dot {
    display: inline-block;
    height: 5px;
    width: 5px;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -2.5px;
    margin-left: -2.5px;
  }
  .dot:before {
    content: ' ';
    position: absolute;
    height: 45px;
    width: 3px;
    bottom: 0;
    left: 0;
    transform: rotate(30deg);
    transform-origin: 0 100%;
    border-radius: 5px;
    background-color: $color;
  }
  .dot:after {
    content: ' ';
    position: absolute;
    height: 30px;
    width: 3px;
    bottom: 0;
    left: 0;
    transform: rotate(10deg);
    transform-origin: 0 100%;
    border-radius: 5px;
    background-color: $color;
  }
  .hour {
    height: 10px;
  }
  .hour-s {
    height: 5px;
  }
}
</style>
