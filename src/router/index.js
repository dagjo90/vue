import Vue from 'vue'
import VueRouter from 'vue-router'
import GridPage from '../views/GridPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'GridPage',
    component: GridPage
  },
  {
    path: '/spreadsheet',
    name: 'SpreadsheetPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SpreadsheetPage.vue')
  },
  {
    path: '/graph',
    name: 'GraphPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GraphPage.vue')
  },
  {
    path: '/schedule',
    name: 'SchedulePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SchedulePage.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
