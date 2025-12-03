<script setup>
defineProps({place: Object})
const emit = defineEmits(['back-to-search'])
</script>

<template>
  <div>
    THIS IS FORECAST VIEW for {{ place.location.name }}
    <button @click="$emit('back-to-search')">Back to Search</button>
  </div>
</template>