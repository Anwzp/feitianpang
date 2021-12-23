<template>
  <div class="header">
    <ul class="menu">
      <li v-for="item of menu" :key="item.path">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
class router {
  path: string;
  name: string;
  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }
}
let menu: Array<router> = [{ path: '/', name: '首页' }]
ref(menu)
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  line-height: 60px;
  box-shadow: 0 1px 1px #eee;
  .menu {
    display: flex;
    justify-content: flex-end;
    padding: 0 20px;
    .menu-item {
      padding: 0 12px;
      color: $font-color;
    }
  }
}
</style>
