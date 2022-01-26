import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/start.vue'
import Basic from '../views/basic.vue'
import TableSelect from '../views/table-select.vue'
import DishSelect from '../views/dish-select.vue'
import Summary from '../views/summary.vue' 
import Success from '../views/success.vue'
import login from '../views/login.vue'
import showReservations from '../views/showReservations.vue'
import showReservation from '../views/showReservation.vue'

const routes = [
  {
     path: '/',
     name: 'Start',
     component: Start
   },
  {
    path: '/basic',
    name: 'basic',
    component: Basic
  }, 
  {
    path: '/table-select',
    name: 'table-select',
    component: TableSelect,
  },
  {
    path: '/dish-select',
    name: 'dish-select',
    component: DishSelect,
  },
  {
    path: '/summary',
    name: 'summary',
    component: Summary,
  },
  {
    path: '/success',
    name: 'success',
    component: Success,
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/showReservations',
    name: 'showReservations',
    component: showReservations
  },
  {
    path:'/showReservation',
    name: 'showReservation',
    component: showReservation
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
