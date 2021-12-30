<script lang="ts" setup>
import { ref, defineProps, withDefaults, useSlots } from 'vue'

/**
 * @param {stirng 展示的标题} title
 * @param {boolean 是否展示边框}bordered
 * @param {Object 自定义头部样式}headerStyle
 * @param {Object 自定义卡片内容样式} bodyStyle
 * @param {extra 定义右上角操作部分} extra
 */
interface Props {
  title?: string | null
  bordered: boolean
  bodyStyle?: object
  headerStyle?: object
  extra?: string | Function
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  bordered: true,
  extra: '',
  bodyStyle: () => {
    return {}
  },
  headerStyle: () => {
    return {}
  }
})
// 获取是否传递头部solt
const headerSlot: boolean = !useSlots().header
</script>
<template>
  <section class="card" :class="{ border: bordered }">
    <header class="header" :style="headerStyle" v-if="headerSlot && title">
      {{ props.title }}
      <a class="link">{{ props.extra }}</a>
    </header>
    <slot name="header" class="header"></slot>
    <section class="body" :bodyStyle="{ ...bodyStyle }">
      <slot name="body"></slot>
    </section>
  </section>
</template>
<style lang="scss" scoped>
.card {
  min-width: 100px;
  min-height: 100px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  .header {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
  .body {
    // border-top: 1px solid #ccc;
    // border-bottom: 1px solid #ccc;
    padding: 12px;
  }
  .link {
    color: #1890ff;
  }
}
.border {
  border: 1px solid #ccc;
}
</style>
