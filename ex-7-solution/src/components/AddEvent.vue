<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="event.title" :rules="titleRules" label="Event Title" required></v-text-field>
      <v-textarea v-model="event.description" label="Event Description"></v-textarea>
      <v-text-field v-model="event.start" label="Event Date" prepend-icon="mdi-calendar" readonly @focus="activateDatePicker"></v-text-field>
      <v-date-picker v-if="showDatePicker" v-model="event.start" @update:modelValue="inactivateDatePicker" no-title></v-date-picker>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="saveEvent">Save</v-btn>
      <v-btn color="error" @click="cancel">Cancel</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useEventStore } from '../stores/eventStore.js';

const valid = ref(false)
const showDatePicker = ref(false)
const event = ref({
  title: '',
  description: '',
  start: null,
})
const titleRules = [
  v => !!v || 'Title is required',
  v => (v && v.length <= 20) || 'Title must be less than 20 characters',
];
const menu = ref(false);

const eventStore = useEventStore();

const activateDatePicker = () => { showDatePicker.value = true }
const inactivateDatePicker = () => { showDatePicker.value = false }
// const watchDate = watch(event, (newVal, oldVal) => showDateP icker.value = false )

const saveEvent = () => {
  eventStore.addEvent(event.value)
  resetForm()
}

const cancel = () => {
  resetForm()
}

const resetForm = () => {
  event.value = { title: '', description: '', start: null }
  valid.value = false
  menu.value = false
}
</script>
