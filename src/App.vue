<script setup lang="ts">
import { Ref, ref } from 'vue';
import MuSettings from './components/MuSettings.vue';
import MuViewer from './components/MuViewer.vue';

const modelFile: Ref<File | null> = ref(null);
const textureFile: Ref<File | null> = ref(null);
</script>

<template>
  <MuSettings @update:model="modelFile = $event" @update:texture="textureFile = $event" />
  <MuViewer :texture-file="textureFile" />
</template>


<style>
body {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>