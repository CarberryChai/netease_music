import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('./pages/*.vue')

const routes = Object.keys(modules).reduce((t, c) => {
  const matched = c.match(/^\.\/pages\/(.*)\.vue$/)
  const name = matched ? matched[1] : ''
  const path = name.toLowerCase() === 'index' ? '/' : `/${name.toLowerCase()}`
  const record: RouteRecordRaw = {
    name,
    path,
    component: modules[c],
  }
  t.push(record)
  return t
}, [] as RouteRecordRaw[])

const router = createRouter({ history: createWebHistory(), routes })

export default router
