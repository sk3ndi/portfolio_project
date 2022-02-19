import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]


const router = createRouter({
  history: createWebHistory('/porfolio_project/'),
  routes
})

export default router
