# Exercise 3 - Create a vue application

This exercise is designed to guide you through the various facets of creating and utilizing Vue.js 3 components in a hands-on manner. You will build a simple application that shows and manages a contact list, exploring different Vue.js features and concepts step by step.

Focus on understanding each part of the Vue.js component system rather than creating a feature-complete contact list.

### Step 1: Initialize Your Vue.js Project
- Create a new Vue.js project using Vue CLI or Vite.
- Create a `ContactList` component and a `ContactCard` component. The `ContactList` will render multiple `ContactCard` components.

### Step 2: Display Static Contacts
- In your `ContactList` component, define an array of contacts, each with `name`, `email`, and `phone` properties.
- Pass each contact's information to `ContactCard` components using props. Display the name, email, and phone in the `ContactCard`.

### Step 3: Prop Validation and Default Values
- In `ContactCard`, define props for `name`, `email`, and `phone`. Specify the types of the props.
- Implement custom validation for the `email` prop to check if it includes an "@" symbol.
- Set a default value for the `phone` prop, as not all contacts might have a phone number listed.

### Step 4: Reactive Properties and the Composition API
- Convert the `ContactCard` component to use the `<script setup>` syntax and Composition API.
- Within `ContactCard`, define a `reactive` property that tracks whether the contact's details are visible or hidden.
- Add a button in `ContactCard` that toggles the visibility of the contact's details using the reactive property.

### Step 5: Slots for Customization
- Add a slot in `ContactCard` for additional details like a contact's address or birthday.
- In `ContactList`, use this slot for at least one `ContactCard` to add custom information not covered by props.

### Step 6: Emitting Events
- Add a "Delete" button to `ContactCard` that emits a custom event when clicked, signaling the parent component to remove the contact.
- In `ContactList`, listen for this event and remove the corresponding contact from the list.

### Step 7: Managing Contacts with Reactive State
- Implement a form in `ContactList` to add new contacts. Use `ref()` for form inputs.
- Manage the contacts list as a `reactive` object.
- Ensure that adding a new contact updates the list displayed.

### Step 8: Composition API Lifecycle Hooks
- In `ContactList`, use the `onMounted` lifecycle hook to simulate fetching contact data from an API by loading the contacts array after a delay.
- Use `watch()` to log a message to the console every time the list of contacts changes, simulating a scenario where changes might need to be saved or further processed.

### Step 9: Explore Advanced Reactivity
- Create a computed property in `ContactList` that returns the count of contacts.
- Display this count in the `ContactList` component, ensuring it updates reactively as contacts are added or removed.

### Objective:
By completing these steps, you will practice creating and managing Vue.js components, utilizing props for parent-child communication, implementing reactive data patterns with the Composition API, handling events for dynamic interactivity, and employing slots for flexible component composition.

This hands-on exercise aims to solidify understanding and proficiency in managing state, reactivity, and component lifecycle within Vue.js applications, without the need for a formal report or submission process.

Have Fun!
