<script setup>
defineProps({ place: Object, view: String })
const emit = defineEmits(['delete-place', 'set-detail-view'])

const setViewLocation = (newView, place) => {
  emit('set-detail-view', newView, place)
}
</script>
<!-- Saved Locations List -->
<template>
<Transition name="fade">
  <div class="p-10 rounded-lg shadow-lg gap-6 mb-6 relative overflow-hidden">
    <div class="mb-2 flex justify-between items-center">
      <div class="flex items-center justify-center gap-2">
        <i class="fa-solid fa-location-dot"></i>
        <h1 class="text-3xl">{{ place.location.name }}</h1>
        <button @click="setViewLocation('hourly', place)">Hourly</button> | 
        <button @click="setViewLocation('forecast', place)">5 Day Forecast</button> |
        <button @click="emit('delete-place', place.location.name)">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</Transition>
</template>