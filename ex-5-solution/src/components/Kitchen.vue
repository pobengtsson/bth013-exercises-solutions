<template>
  <div class="room kitchen">
    <h1>Kitchen</h1>
    <button @click="goToLivingRoom" class="btn">Go to Living Room</button>
    <button @click="goBack" class="btn">Go Back</button>
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

<style>
.kitchen {
  background-color: #fff3cd;
  padding: 20px;
  border-radius: 10px;
  margin: 20px auto;
  max-width: 600px;
}

.btn {
  margin: 10px;
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #368b75;
}
</style>
