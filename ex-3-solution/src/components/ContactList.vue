<template>
  <form @submit.prevent="addContact" data-cy="contact-form">
    <input v-model="newContact.name" name="name" placeholder="Name" />
    <input v-model="newContact.email" name="email" placeholder="Email" />
    <input v-model="newContact.phone" name="phone" placeholder="Phone" />
    <input v-model="newContact.address" placeholder="Address" />
    <button type="submit">Add Contact</button>
  </form>
  <div data-cy="contact-list">
    <ContactCard
      v-for="contact in contacts"
      :key="contact.email"
      :name="contact.name"
      :email="contact.email"
      :phone="contact.phone"
      @delete-contact="deleteContact"
      data-cy="contact-card"
      >
      <template v-if="contact.address" #additional-info>
          <p data-cy="slot-custom">{{ contact.address }}</p>
        </template>
    </ContactCard>
  </div>
  <p>Contacts Count: <span data-cy="contacts-count">{{ contactsCount }}</span></p>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { onMounted, watch } from 'vue'
import ContactCard from './ContactCard.vue'

const contacts = reactive([])
const newContact = ref({ name: '', email: '', phone: '', address: '' })

const addContact = () => {
  contacts.push({...newContact.value})
  newContact.value = { name: '', email: '', phone: '', address: '' }
}

const deleteContact = (email) => {
  const index = contacts.findIndex(contact => contact.email === email)
  if (index !== -1) {
    contacts.splice(index, 1)
  }
}

onMounted(() => {
  setTimeout(() => {
    contacts.push(
      { name: 'Sven Svensson', email: 'initial@example.com', address: 'Unknown' },
      { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: "Bakerstreet 11, London" },
      { name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321', address: "Broadway, NY" },
    )
  }, 1000)
})

watch(contacts, () => {
  console.log('Contacts list updated')
})

const contactsCount = computed(() => contacts.length)

</script>
