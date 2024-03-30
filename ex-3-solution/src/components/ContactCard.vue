<template>
  <div>
    <div>
      <div>
        <p data-cy="contact-name">{{ name }}</p>
        <p data-cy="contact-email">{{ email }}</p>
        <p data-cy="contact-phone">{{ phone }}</p>
        <div v-if="detailsVisible"  data-cy="contact-details">
          <slot name="additional-info" data-cy="slot-custom"></slot>
        </div>
      </div>
    </div>
    <button @click="toggleDetails" data-cy="toggle-details">Toggle Details</button>
    <button @click="$emit('delete-contact', email)" data-cy="delete-contact">Delete</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  email: {
    type: String,
    required: true,
    validator: (value) => value.includes('@'),
  },
  phone: {
    type: String,
    default: 'N/A',
  },
})

const detailsVisible = ref(false)

const toggleDetails = () => {
  detailsVisible.value = !detailsVisible.value
}
</script>
