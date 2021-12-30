<script lang="ts" setup>
import Headers from './Headers.vue'
import Footer from './Footer.vue'
</script>
<template>
  <Headers></Headers>
  <div class="page">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>
<style lang="scss" scoped>
.page {
  position: relative;
  padding: 60px 0;
  background-image: url('../assets/home.jpg');
  background-size: cover;
  min-height: calc(100vh - 120px);
}
</style>
