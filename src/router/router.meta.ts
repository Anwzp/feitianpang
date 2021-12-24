import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    isMenu?: boolean
    icon?: string
    permission: Array<string>
  }
}
