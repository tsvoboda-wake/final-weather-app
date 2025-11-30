<script setup>
import { ref } from 'vue'
import Navigation from './components/Navigation.vue'
import LocationSearchView from './views/LocationSearchView.vue'

</script>
<template>
  <main>
    <Navigation />
    <router-view/>
  </main>
</template>
