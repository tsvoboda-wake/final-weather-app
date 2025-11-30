<script setup>
import { ref } from 'vue'
import SearchInput from '../components/SearchInput.vue'
import WeatherCard from '../components/WeatherCard.vue'
import LocationList from '../components/LocationList.vue'

// TODO: need to be able to save list of locations even after navigating away from page
const places = ref([])
const addPlace = (data) => {
  places.value.push(data)
}

const deletePlace = (name) => {
  places.value = places.value.filter((p) => p.location.name !== name)
}
</script>

<template>
  <div>
    <!-- Date -->
    <div class="mb-6">
      {{
        new Date().toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }}
    </div>

    <!-- Search -->
    <div>
      <SearchInput @place-data="addPlace" />
    </div>

    <!-- Locations List -->
    <div v-for="(place, idx) in places" :key="idx">
      <LocationList :place="place" @delete-place="deletePlace" />
    </div>

    <!-- Weather cards -->
    <!-- <div class="grid grid-cols-2 gap-4">
      <div v-for="(place, idx) in places" :key="idx">
        <WeatherCard :place="place" @delete-place="deletePlace" />
      </div>
    </div> -->

  </div>
</template>
