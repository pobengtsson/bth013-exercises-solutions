<template>
  <div class="room gallery">
    <h1>Gallery</h1>
    <p>Showing picture with ID: {{ pictureId }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const pictureId = route.params.pictureId;
</script>

<style>
.gallery {
  background-color: #ffe0b2; /* Light orange */
  padding: 20px;
  border-radius: 10px;
}
</style>
