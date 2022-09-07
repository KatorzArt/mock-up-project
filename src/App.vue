<script setup lang="ts">
import MuSettings from './components/MuSettings.vue';
import MuViewer from './components/MuViewer.vue';
</script>

<template>
  <MuSettings />
  <MuViewer />
</template>


<style>
body {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>