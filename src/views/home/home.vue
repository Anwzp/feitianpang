<template>
  <div class="body">
    <section class="scroll-box">
      <Card></Card>
    </section>
    <section class="right-box">
      <Head></Head>
      <Watch></Watch>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import Card from '@/components/card/card.vue'
import Head from './components/head.vue'
import Watch from './components/watch.vue'

const { proxy } = getCurrentInstance()
// proxy.$Common.Time.formatDate()
// console.log(proxy.$Common.Time)
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
  }
}
</style>
