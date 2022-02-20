import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import broadcastView from '../views/broadcast/view.vue'
import checkin from "@/views/self-study/checkin/checkin.vue";

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
    // broadcast router
  {
    path: '/broadcast',
    name: 'Broadcast',
    component: () => import('../views/broadcast/index')
  },
  {
    path: '/broadcast/:broadcastId',
    component: broadcastView
  },
    // self-study router
  {
    path: '/self-study',
    name: 'Self-Study',
    component: () => import('../views/self-study/index')
  },
  {
    path: '/self-study/apply',
    component: () => import('../views/self-study/apply')
  },
  {
    path: '/self-study/checkin',
    component: () => import('../views/self-study/checkin/index')
  },
  {
    path: '/self-study/checkin/:roomId',
    component: checkin
  },
    // order router
  {
    path:'/order/:orderId',
    component: () => import('../views/order/view')
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
