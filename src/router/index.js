import { createRouter, createWebHistory } from 'vue-router'
import LocationSearchView from '../views/LocationSearchView.vue'
import HourlyView from '../views/HourlyView.vue'
import ForecastView from '../views/ForecastView.vue'

const routes = [
  { path: '/', component: LocationSearchView },
  { path: '/hourly', component: HourlyView },
  { path: '/forecast', component: ForecastView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router