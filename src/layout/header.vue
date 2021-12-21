<template>
  <header class="header">
    <ul>
      <li v-for="item of menu" :key="item.path">{{ item.name }}</li>
    </ul>
  </header>
</template>
<script setup lang="ts">
import { Ref, ref } from "vue";
class router {
  path: string;
  name: string;
  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }
}
let menu: Ref<Array<router>> = ref([{ path: '/', name: '首页' }]);

</script>
<style lang="scss" scoped></style>
