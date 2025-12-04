<script setup>
import BorderLine from './BorderLine.vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({place: Object})
const emit = defineEmits(['back-to-search'])


const getTodayWeather = () => {
  const hours = props.place.forecast.forecastday[0].hour

  const labels = hours.map(h => h.time.split(" ")[1])
  const temps = hours.map(h => h.temp_f)
  const precip = hours.map(h => h.precip_in)

  const weatherData = {
    labels,
    datasets: [
      {
        label: "Temperature (°F)",
        data: temps,
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        label: "Precipitation (in)",
        data: precip,
        backgroundColor: "rgba(54, 162, 235, 0.5)"
      }
    ]
  }
  return weatherData
}

</script>

<template>
  <div class="grid">
    <!-- Close button -->
    <div class="flex justify-end mb-10">
      <button @click="$emit('back-to-search')" class="p-1">Back to Search</button>
    </div>
    <div
      :class="props.place.current.is_day === 1 ? 'bg-day' : 'bg-night'"
      class="text-white p-10 rounded-lg shadow-lg gap-6 mb-6 relative overflow-hidden"
    >
      <!-- Location & time -->
      <div class="mb-2 flex justify-between items-center">
        <div class="flex items-center justify-center gap-2">
          <i class="fa-solid fa-location-dot"></i>
          <h1 class="text-3xl">{{ place.location.name }}</h1>
        </div>
        <div class="flex items-center justify-center gap-2">
          <i class="fa-solid fa-clock"></i>
          <h1 class="text-3xl">
            {{ new Date(place.location.localtime).getHours() }}:{{
              // TODO: fix. currently 2:03am shows as 2:3
              new Date(place.location.localtime).getMinutes()
            }}
          </h1>
        </div>
      </div>
      <div class="text-center flex-1">
        <!-- TODO: dynamic image based on conditions -->
        <img :src="props.place.current.condition.icon" alt="icon" width="200" class="mx-auto -mb-10" />
        <p class="text-2xl">{{ props.place.current.condition.text }}</p>
        <BorderLine />

        <!-- Chart -->
        <h1 class="text-2xl">
          Current tempurature: {{ Math.round(props.place.current.temp_f) }}&deg;F
        </h1>
        <br/>
        <!-- TODO: read docs, add a11y; make size responsive -->
        <div >
          <Bar :data="getTodayWeather()" :options="{ responsive: true }"/>
        </div>
    </div>

    </div>
  </div>
</template>


<style scoped>
.bg-day {
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}
.bg-night {
  background-color: #07223d;
  background-image: linear-gradient(62deg, #0a2a4a 0%, #270845 100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.text-3x1 {
  color: black;
}
</style>
