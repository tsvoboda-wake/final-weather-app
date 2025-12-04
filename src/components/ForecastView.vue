<script setup>
defineProps({ place: Object })
const emit = defineEmits(['back-to-search'])
</script>

<template>
  <div>
    <!-- include a table that shows the following for the current day and the next 4 days:
    The weather conditions 
    High and low temperature -->

    <!-- Close button -->
    <div class="flex justify-end mb-10">
      <button @click="$emit('back-to-search')" class="p-1">Back to Search</button>
    </div>

    <div class="@container bg-day text-white p-10 rounded-lg shadow-lg gap-6 mb-6 relative overflow-hidden">
      <!-- location -->
      <div class="flex items-center justify-center gap-2">
        <i class="fa-solid fa-location-dot"></i>
        <h1 class="text-3xl">{{ place.location.name }}</h1>
      </div>

      <div v-for="(day, idx) in place.forecast.forecastday" :key="idx">
        <div class="@contanier mb-2 flex items-center justify-between">
          <table class="w-full">
            <tr>
              <!-- day of the week -->
              <td class="w-1/3">
                {{ new Date(day.date).toLocaleDateString('en-us', { weekday: 'long' }) }}
              </td>

              <!-- weather condition -->
              <td>
                <div class="flex items-center max-sm:justify-end">
                  <img :src="day.day.condition.icon" aria-hidden="true" width="30" class=/>
                  <p class="max-sm:hidden">{{ day.day.condition.text }}</p>
                </div>
              </td>

              <!-- high/low temp -->
              <td class="w-1/3 text-right">
                {{ Math.round(day.day.maxtemp_f) }} / {{ Math.round(day.day.mintemp_f) }}
              </td>
            </tr>
          </table>
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
