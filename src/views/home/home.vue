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
import { ref, $Common } from 'vue'
import Card from '@/components/card/card.vue'
import Head from './components/head.vue'
import Watch from './components/watch.vue'

class record {
  id: string

  constructor(id) {
    this.id = id
  }
}
console.log($Common)
const dataSouce: Array<record> = ref([])
const hours: Array<number> = [...new Array(12).keys()]
const now: Date = ref(new Date())
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
