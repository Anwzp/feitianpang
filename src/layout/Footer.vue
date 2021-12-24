<template>
  <footer class="footer">
    <a href="https://beian.miit.gov.cn/" target="_blank" class="white">{{ ICP }}</a>
  </footer>
</template>
<script setup lang="ts">
const ICP = '豫ICP备2021036452号'
</script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  height: 60px;
  line-height: 60px;
  width: 100%;
  text-align: center;
  color: #fff;
  // filter: blur(5px);
  backdrop-filter: blur(5px);
}
.white {
  color: #fff;
}
</style>
