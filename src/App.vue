<script setup>
import { ref } from 'vue'
import SearchInput from './components/SearchInput.vue'
import LocationsList from './components/LocationsList.vue'
import ForecastView from './components/ForecastView.vue'
import HourlyView from './components/HourlyView.vue'

const places = ref([])
const view = ref('main')
const detailLocation = ref(null)

const addPlace = (data) => {
  places.value.push(data)
}

const deletePlace = (name) => {
  places.value = places.value.filter((p) => p.location.name !== name)
}

const setDetailView = (newView, place) => {
  view.value = newView
  detailLocation.value = place
}
</script>
<template>
  <main>
    <!-- Date -->
    <div class="text-center mb-6">
      {{
        new Date().toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }}
    </div>
    <div v-show="view === 'main'">
      <!-- Search -->
      <div>
        <!-- when place-data is received, addPlace() to push to saved locations array -->
        <SearchInput @place-data="addPlace" />
      </div>

      <!-- Saved Locations List -->
      <div>
        <div v-for="(place, idx) in places" :key="idx">
          <LocationsList
            :place="place"
            :view="view"
            @delete-place="deletePlace"
            @set-detail-view="setDetailView"
          />
        </div>
      </div>
    </div>

    <!-- Hourly View -->
    <div v-if="view === 'hourly' && detailLocation !== null">
      <HourlyView :place="detailLocation" :view="view" @back-to-search="view = 'main'" />
    </div>

    <!-- Forecast View -->
    <div v-if="view === 'forecast' && detailLocation !== null">
      <ForecastView :place="detailLocation" :view="view" @back-to-search="view = 'main'" />
    </div>
  </main>
</template>
