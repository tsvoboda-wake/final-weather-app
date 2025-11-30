<script setup>
defineProps({ place: Object })

const emit = defineEmits(['delete-place'])
</script>

<template>
  <Transition name="fade">
    <div class="p-10 rounded-lg shadow-lg gap-6 mb-6 relative overflow-hidden">
      <!-- Location & time -->
      <div class="mb-2 flex justify-between items-center">
        <div class="flex items-center justify-center gap-2">
          <i class="fa-solid fa-location-dot"></i>
          <h1 class="text-3xl">{{ place.location.name }}</h1>
          <!-- TODO: pass location to other pages -->
          <router-link to="/hourly">Hourly</router-link> | 
          <router-link to="/forecast">5 Day Forecast</router-link> |
          <button @click="emit('delete-place', place.location.name)">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
