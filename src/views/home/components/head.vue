<script lang="ts" setup>
import Card from '@/components/card/card.vue'
</script>
<template>
  <Card :title="null" class="abstract">
    <template v-slot:body>
      <div class="txt-c">
        <img class="head-portraits" src="@/assets/head-portraits.jpg" />
      </div>
      <div class="txt-c">
        <strong>feitianpang</strong>
      </div>
      <div class="mar-12 next-color font-12">这个人比较懒，什么也没有留下~~</div>
      <div class="link-box">
        <a href="https://github.com/Anwzp" target="_blank">
          <i class="iconfont icon-github-fill"></i>
        </a>
        <!-- <a>
              <i class="iconfont icon-youxiang"></i>
        </a>-->
      </div>
    </template>
  </Card>
</template>
<style lang="scss" scoped>
.abstract {
  margin-bottom: 20px;
  .head-portraits {
    margin: 12px 0;
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  .link-box {
    text-align: center;
    a {
      margin: 0 6px;
      &:hover {
        cursor: pointer;
        color: #000;
      }
      i {
        display: inline-block;
        transition: all 1s ease;
        &:hover {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>
