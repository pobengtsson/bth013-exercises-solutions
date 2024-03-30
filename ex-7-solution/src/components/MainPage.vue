
<template>
  <div>
    <h1>Events</h1>
    <ul>
      <li v-for="event in events" :key="event.id">
        {{ event.title }} - {{ event.description }} - {{ event.date }}
        <span v-if="event.canceled">(Cancelled)</span>
        <button @click="deleteEvent(event.id)">Delete</button>
        <button @click="cancelEvent(event.id)">Cancel</button>
        <button @click="startEditing(event)">Edit</button>
      </li>
    </ul>
    <div>
      <input v-model="newEvent.title" placeholder="Title">
      <input v-model="newEvent.description" placeholder="Description">
      <input v-model="newEvent.date" type="date">
      <button @click="addEvent">Add Event</button>
    </div>
    <div v-if="editingEvent">
      <input v-model="editingEvent.title" placeholder="Title">
      <input v-model="editingEvent.description" placeholder="Description">
      <input v-model="editingEvent.date" type="date">
      <button @click="editEvent">Save Changes</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useEventsStore } from '../stores/eventsStore'

const eventsStore = useEventsStore()

const editingEvent = ref(null)
const newEvent = ref({
  id: Date.now(),
  title: '',
  description: '',
  date: '',
  tags: [],
  translations: {}
})

const events = computed(() => eventsStore.events)

function addEvent() {
  eventsStore.addEvent({ ...newEvent.value, id: Date.now() })
  resetNewEvent()
}

function deleteEvent(id) {
  eventsStore.deleteEvent(id)
}

function cancelEvent(id) {
  eventsStore.cancelEvent(id)
}

function resetNewEvent() {
  newEvent.value = { id: Date.now(), title: '', description: '', date: '', tags: [], translations: {} }
}

function startEditing(event) {
  editingEvent.value = { ...event }
}

function editEvent() {
  eventsStore.editEvent(editingEvent.value.id, editingEvent.value)
  editingEvent.value = null
}

function addTranslation() {
  eventsStore.addTranslation(editingEvent.value.id, 'chinese', {
    title: editingEvent.value.title + ' (Chinese Translation)',
    description: editingEvent.value.description + ' (Chinese Translation)',
  })
}
</script>
