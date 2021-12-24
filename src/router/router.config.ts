import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
// cosnt importModel = () => {

// }
const routerMap: Array<T> = [
  {
    path: '/',
    component: Layout,
    meta: {
      permission: []
    },
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          permission: []
        },
        components: () => require('@/views/home/home.vue')
      }
    ]
  }
]
export default routerMap
