import { RouteRecordRaw } from 'vue-router'

const routerMap: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: '首页',
    meta: {
      icon: 'icon-home',
      permission: []
    },
    component: () => import('@/views/home/home.vue')
  }
]
export default routerMap
