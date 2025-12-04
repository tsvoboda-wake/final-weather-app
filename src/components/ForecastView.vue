<script setup>
defineProps({place: Object})
const emit = defineEmits(['back-to-search'])
</script>

<template>
  <div>
    <!-- include a table that shows the following for the current day and the next 4 days:
    The weather conditions 
    High and low temperature -->
    THIS IS FORECAST VIEW for {{ place.location.name }}
    <button @click="$emit('back-to-search')">Back to Search</button>
  </div>
</template>