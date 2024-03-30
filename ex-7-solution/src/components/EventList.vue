<template>
  <v-list dense>
    <v-list-item v-for="event in eventList" :key="event.id" class="d-flex justify-space-between align-center">
      <div class="d-flex align-center">
        <v-icon>mdi-calendar</v-icon>
        <div>
          <v-list-item-title>{{ event.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ event.start }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ event.description }}</v-list-item-subtitle>
        </div>
        <v-icon @click="deleteEvent(event.id)" color="red">mdi-trash-can</v-icon>
      </div>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { computed } from 'vue'
import { useEventStore } from '../stores/eventStore.js'

const eventStore = useEventStore()
const eventList = computed(() => eventStore.eventList)

function deleteEvent(eventId) {
  eventStore.deleteEvent(eventId)
}
</script>
