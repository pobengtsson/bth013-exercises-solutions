<template>
  <div>
    <router-view></router-view>
    <nav>
      <router-link to="/room/living-room">Living Room</router-link>
      <router-link to="/room/kitchen">Kitchen</router-link>
      <router-link :to="{ name: 'bedroom' }">Bedroom</router-link>
      <router-link :to="{ name: 'bathroom' }">Bathroom</router-link>
    </nav>
  </div>
</template>
