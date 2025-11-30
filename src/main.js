import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LocationSearchView from './views/LocationSearchView.vue'
import HourlyView from './views/HourlyView.vue'
import ForecastView from './views/ForecastView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', component: LocationSearchView },
      { path: '/hourly', component: HourlyView },
      { path: '/forecast', component: ForecastView }
  ]
});

createApp(App).use(router).mount('#app')