import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/layout/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    meta: {
      title: '首页',
    },
    children: [
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
export default router
