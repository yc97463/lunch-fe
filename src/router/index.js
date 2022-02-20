import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    // portal router
  {
    path: '/portal',
    name: 'Portal',
    component: () => import('../views/portal/index')
  },
    // account router
  {
    path: '/account/login',
    name: 'Login',
    component:  () => import('../views/account/login')
  },
    // order lunch
  {
    path: '/order',
    component: () => import('../views/order/productList')
  },
    // pickup order
  {
    path: '/pick',
    component: () => import('../views/pick/availableList')
  },
  {
    path: '/pick/:orderId',
    component: () => import('../views/pick/pickOrder')
  },
    // 404
  {
    path: '*',
    component: () => import('../views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
