<template>
  <div>
    <router-view></router-view>
    <nav>
      <router-link class="nav-link" to="/room/living-room">Living Room</router-link>
      <router-link class="nav-link" to="/room/kitchen">Kitchen</router-link>
      <router-link class="nav-link" :to="{ name: 'bedroom' }">Bedroom</router-link>
      <router-link class="nav-link" :to="{ name: 'bathroom' }">Bathroom</router-link>
    </nav>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}

.navbar {
  margin-bottom: 20px;
  background-color: #f0f0f0;
  padding: 10px 0;
}

.nav-link {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

.nav-link:hover {
  color: #42b983;
}
</style>