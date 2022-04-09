import Vue from 'vue'
import VueRouter from 'vue-router'
import Preview from '../views/Preview.vue'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Demo from '../views/Demo.vue'

import Vertical from "@/views/Vertical";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/Preview',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/Vertical',
    name:'Vertical',
    component: Vertical
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
