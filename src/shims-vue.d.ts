import { UnwrapRef, VNode } from 'vue'
import {
  RouteLocationNormalized,
  RouterLink,
  RouterView,
  useLink,
} from 'vue-router'

declare global {
  interface Window {
    toast(content: string, duration?: number): Promise<undefined>
  }

  interface __VLS_GlobalComponents {
    RouterLink: typeof RouterLink & {
      __VLS_slots: {
        default: UnwrapRef<ReturnType<typeof useLink>>
      }
    }
    RouterView: typeof RouterView & {
      __VLS_slots: {
        default: {
          Component: VNode
          route: RouteLocationNormalized & { href: string }
        }
      }
    }
  }
}
declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
