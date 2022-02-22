<template>
  <header class="header">
    <span class="title">feitianpang</span>
    <ul class="menu">
      <li
        v-for="item of menu"
        :key="item.path"
        @click="openPage(item.path)"
        :class="['menu-item', currentRoute === item.path ? 'menu-item-active' : '']"
      >
        {{ item.name }}
      </li>
    </ul>
  </header>
</template>
<script setup lang="ts">
import { ref, nextTick } from 'vue'
// RouteRecordRaw
import { useRouter } from 'vue-router'

class router {
  path: string

  name: string

  constructor(name: string, path: string) {
    this.name = name
    this.path = path
  }
}
const route = useRouter()
const currentRoute = ref<string>(route.currentRoute.value.path)
const menu: Array<router> = ref<Array<object>>([
  { path: '/home', name: '首页' },
  { path: '/mine', name: '关于' }
])
// 跳转菜单
const openPage = (path: string): void => {
  route.push(path)
  currentRoute.value = path
}
</script>
<style lang="scss" scoped>
.header {
  position: absolute;
  display: flex;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 30px;
  padding: 15px 0;
  justify-content: space-between;
  box-shadow: 0 1px 1px #eee;
  background: #fff;
  transition: all 0.2s ease;
  .title {
    font-weight: 600;
    color: #333;
    font-size: 20px;
    padding-left: 20px;
  }
  .menu {
    display: flex;
    justify-content: flex-end;
    line-height: 30px;
    padding: 0 20px;
    .menu-item {
      padding: 0 12px;
      color: $font-color;
      position: relative;
      z-index: 9;
    }
    .menu-item::before,
    .menu-item-active::before {
      content: ' ';
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      width: 0;
      border-bottom: 2px solid $base-color;
      transition: all 0.2s ease;
    }
    .menu-item:hover::before {
      width: 100%;
    }
  }
}
</style>
