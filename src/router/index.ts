import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routerMap from './router.config'

const routes: Array<RouteRecordRaw> = [...routerMap]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
