import { createRouter, createWebHashHistory } from 'vue-router'
import LocationSearchView from '../views/LocationSearchView.vue'

// TODO: use router or just hide Views on single page?
// see https://medium.com/@n01597125/web-app-https-weatherly-andrealarsen-dev-a06caa36fc3b
const routes = [
  { path: '/', component: LocationSearchView },
  {
    path: '/hourly/',
    component: () => import(/* webpackChunkName: "hourly" */ '../views/HourlyView.vue'),
  },
  {
    path: '/forecast',
    component: () => import(/* webpackChunkName: "forecast" */ '../views/ForecastView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
