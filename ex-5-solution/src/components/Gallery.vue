<template>
  <div>
    <h1>Gallery</h1>
    <p>Showing picture with ID: {{ pictureId }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const pictureId = route.params.pictureId;
</script>
