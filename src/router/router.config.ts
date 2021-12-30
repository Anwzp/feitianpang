import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routerMap: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    meta: {
      permission: []
    },
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
          permission: []
        },
        component: () => import('@/views/home/home.vue')
      }
    ]
  }
]
export default routerMap
