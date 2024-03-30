<template>
  <div>
    <h1>Kitchen</h1>
    <button @click="goToLivingRoom">Go to Living Room</button>
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToLivingRoom() {
  router.push('/room/living-room');
}

function goBack() {
  router.go(-1);
}
</script>
