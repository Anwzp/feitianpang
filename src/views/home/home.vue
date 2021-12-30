<template>
  <div class="body">
    <section class="scroll-box">
      <Card></Card>
    </section>
    <section class="right-box">
      <Head></Head>
      <Card v-slot:body class="newest">
        <div class="watch">
          <span
            v-for="item of hours"
            :key="item"
            :class="{ big: item % 4 === 0, small: item % 4 !== 0 }"
            :style="{ left: `${50 + (item % 4) * 5}%` }"
          ></span>
        </div>
      </Card>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/card/card.vue'
import Head from './components/head.vue'

class record {
  id: string

  constructor(id) {
    this.id = id
  }
}
const dataSouce: Array<record> = ref([])
const hours: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
</script>
<style lang="scss" scoped>
.body {
  min-width: 800px;
  max-width: 1440px;
  margin: 20px auto;
  display: flex;
  .scroll-box {
    flex: 1;
    padding-right: 20px;
    height: 100%;
  }
  .right-box {
    width: 300px;
    .newest {
      border: none;
      // background-color: rgba($color: #eee, $alpha: 0.5);
    }
    .watch {
      height: 150px;
      width: 150px;
      border: 2px solid #eee;
      border-radius: 100%;
      margin: 0 auto;
      background-color: #eee;
      background-image: url('@/assets/home.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      overflow: hidden;
      span {
        display: inline-block;
        position: absolute;
        width: 2px;
        border-radius: 0 0 1px 1px;
        background-color: #eee;
      }
      .hour {
        height: 10px;
        left: 50%;
      }
      .minute {
        height: 5px;
        left: 55%;
        transform: rotate(6deg);
      }
    }
  }
}
</style>
