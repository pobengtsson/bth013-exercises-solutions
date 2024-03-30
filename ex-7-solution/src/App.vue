
<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item @click="goto('event-list')">
            <v-icon>mdi-view-list</v-icon>
            <v-list-item-title>Event List</v-list-item-title>
        </v-list-item>
        <v-list-item @click="goto('event-calendar')">
            <v-icon>mdi-calendar</v-icon>
            <v-list-item-title>Calendar View</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" dark>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Event Manager</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app>
      <span>&copy; 2024 Event Manager</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    goto(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>
